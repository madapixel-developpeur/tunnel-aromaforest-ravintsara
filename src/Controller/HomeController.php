<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

use Symfony\Component\Routing\Annotation\Route;
use App\Service\MailService;
use App\Form\ContactUsType;
use App\Model\Contact;
class HomeController extends AbstractController
{
    private $mailService;
    public function __construct(MailService $mailService){
        $this->mailService = $mailService;
    }
    #[Route('/', name: 'app_home')]
    public function index(Request $request): Response
    {
        $contact = new Contact();
        $contactUsForm = $this->createForm(ContactUsType::class, $contact);
        
        $contactUsForm->handleRequest($request);
        if ($contactUsForm->isSubmitted() && $contactUsForm->isValid()) {
            $contact = $contactUsForm->getData();
            $mail = [
                'to' => $this->getParameter('contact_recipient_mail'),
                'from' => $contact->getEmail(),
                'subject' => "Message de ".$contact->getLastname(),
                'body' => $this->mailService->renderTwig('emails/contact.html.twig', ['contact' => $contact])
            ];
            $this->mailService->sendMail($mail);
            unset($contact);
            unset($contactUsForm);
            $contact = new Contact();
            $contactUsForm = $this->createForm(ContactUsType::class, $contact);
        }
        return $this->render('home/home.html.twig', [
            'controller_name' => 'HomeController',
            'contactUsForm' => $contactUsForm->createView()
        ]);
    }

    #[Route('/legal_notice', name: 'app_legal_notice')]
    public function legalNotice(Request $request): Response
    {
        
        return $this->render('legal-notice/legal-notice.html.twig', [
            'controller_name' => 'HomeController'
        ]);
    }

    #[Route('/condition_generale_vente', name: 'app_condition_generale_vente')]
    public function mentionLegale()
    {
        return $this->render('condition_generale_vente/condition_general_vente.html.twig');
    }
}


