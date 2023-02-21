<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

use Symfony\Component\Routing\Annotation\Route;
use App\Form\ContactUsType;
use App\Model\Contact;
class HomeController extends AbstractController
{   
    #[Route('/', name: 'app_home')]
    public function index(Request $request): Response
    {
        return $this->render('home/home.html.twig', ['flacon_price' => $_ENV['FLACON_PRICE']]);
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


