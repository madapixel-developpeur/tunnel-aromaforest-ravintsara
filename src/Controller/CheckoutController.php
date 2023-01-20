<?php

namespace App\Controller;

use App\Service\MailService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\Routing\Annotation\Route;
#[Route('/checkout')]
class CheckoutController extends AbstractController
{

    private $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    #[Route('/', name: 'app_checkout_index')]
    public function index(): Response
    {
        $error = null;
        $server_url = $this->getParameter('server_url');
        $product_id = $this->getParameter('product_id');
        $order_type_id = $this->getParameter('order_type_id');
        $payment_type_id = $this->getParameter('payment_type_id');


        $product = null;
        $product_image = null;
        try{
            if($product_id == null) throw new \Exception("Le numéro du produit pour ce tunnel n'a pas encore été défini. Dans le fichier .env, ajouter PRODUCT_ID=XXX");
            if($order_type_id == null) throw new \Exception("Le type de commande pour ce tunnel n'a pas encore été défini. Dans le fichier .env, ajouter ORDER_TYPE_ID=XXX");

            $response = $this->client->request(
                'GET',
                $server_url.'/api/products/'.$product_id
            );
            $res = json_decode($response->getContent(), true);

            if($res['META']['status']==200){
                $product = $res['DATA'];
                if($product == null)  throw new \Exception("Le produit n°".$product_id." n'a pas été trouvé.");
            }
            else{
                throw new \Exception($res['META']['message']);
            }

        }
        catch(\Exception $err){
            $error = $err->getMessage();
        }
        if($product) {
            $product_image = $server_url.'/files/'.$product['image'];
        }

        return $this->render('checkout/checkout_index.html.twig', [
            'stripe_public_key' => $this->getParameter('stripe_public_key'),
            'error' => $error,
            'product' => $product,
            'product_image' => $product_image,
            'server_url' => $server_url,
            'order_type_id' => $order_type_id,
            'payment_type_id' => $payment_type_id,
        ]);

    }

    #[Route('/sending_mail', name: 'app_checkout_sendMail')]
    public function checkout_sendMail(MailService $mailService, Request  $request): Response
    {

        $mailClient = $request->request->get('mailClient');
        $nomClient = $request->request->get('nomClient');
        $prenomClient = $request->request->get('prenomClient');
        $nomProduit = $request->request->get('nomProduit');

        $body = $mailService->renderTwig('emails/commande.html.twig', [
            'nomClient' => $nomClient,
            'prenomClient' => $prenomClient,
            'nomProduit' => $nomProduit,
            'url_inscription' => $this->getParameter('server_url').'/auth/signup'
        ]);

        $mailService->sendMail([
            'subject' => 'Commande '.$nomProduit,
            'to' => $mailClient,
            'body' => $body
        ]);

//        dump($body);
//        dd([$mailClient, $nomClient, $prenomClient, $nomProduit]);

        return $this->json([
            'error' => false,
            'message' => 'mail envoyé avec succès'
        ]);

    }

}
