<?php
namespace App\Model;

class Contact{
    private $lastname;
    private $firstname;
    private $company;
    private $fonction;
    private $phone;

    private $email;
    private $subject;
    private $message;

    public function __construct()
    {
        
    }

    /**
     * Get the value of lastname
     */ 
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * Set the value of lastname
     *
     * @return  self
     */ 
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;

        return $this;
    }
 
    public function getFirstname()
    {
        return $this->firstname;
    }
    /**
     * @return  self
     */ 
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;

        return $this;
    }
    public function getCompany()
    {
        return $this->company;
    }
    /**
     * @return  self
     */ 
    public function setCompany($company)
    {
        $this->company = $company;

        return $this;
    }
    public function getFonction()
    {
        return $this->fonction;
    }
    /**
     * @return  self
     */ 
    public function setFonction($fonction)
    {
        $this->fonction = $fonction;

        return $this;
    }
    public function getPhone()
    {
        return $this->phone;
    }
    /**
     * @return  self
     */ 
    public function setPhone($phone)
    {
        $this->phone = $phone;

        return $this;
    }
    /**
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of subject
     */ 
    public function getSubject()
    {
        return $this->subject;
    }

    /**
     * Set the value of subject
     *
     * @return  self
     */ 
    public function setSubject($subject)
    {
        $this->subject = $subject;

        return $this;
    }

    /**
     * Get the value of message
     */ 
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * Set the value of message
     *
     * @return  self
     */ 
    public function setMessage($message)
    {
        $this->message = $message;

        return $this;
    }

}