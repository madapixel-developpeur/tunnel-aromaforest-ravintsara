<?php
namespace App\Service;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ProductService{
    private $parameterBag;
    private $client;
    
    public function __construct(ParameterBagInterface $parameterBag, HttpClientInterface $client)
    {
        $this->parameterBag = $parameterBag;
        $this->client = $client;
    }

    public function getProduct(){
        $server_url = $this->parameterBag->get('server_url');
        $product_id = $this->parameterBag->get('product_id');
        $response = $this->client->request(
            'GET',
            $server_url.'/api/products/'.$product_id
        );
        $res = json_decode($response->getContent(), true);
        if($res['META']['status']==200){
            $product = $res['DATA'];
            if($product == null)  throw new \Exception("Le produit n°".$product_id." n'a pas été trouvé.");
            return $product;
        }
        else{
            throw new \Exception($res['META']['message']);
        }

    }

    public function getUtils(){
        $server_url = $this->parameterBag->get('server_url');
        $response = $this->client->request(
            'GET',
            $server_url.'/api/utils/'
        );
        $res = json_decode($response->getContent(), true);
        if($res['META']['status']==200){
            return $res['DATA'];
        } else {
            throw new \Exception($res['META']['message']);
        }
    }



}