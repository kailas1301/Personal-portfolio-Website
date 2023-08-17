function validateName()
{
   var Name = document.getElementById("name").value;
   var error= document.getElementById("error-name");
   var namestatus = /^[a-zA-Z]+$/;
   if(Name.length==0)
   {
    error.innerHTML="Please Enter the Full Name";
    error.style.color="red";
    return false;
   }else if(Name.length<3)
   {
    error.innerHTML="Invalid Name";
    error.style.color="red";
    return false;
   }else if(!Name.match(namestatus))
   {
    error.innerHTML="Please Enter the valid name";
    error.style.color="red";
    return false;
   }
   else
   {
    error.innerHTML="Valid";
    error.style.color="green";
    return true;

   }
}
  function validateEmail(){
    var Email=document.getElementById("email").value
    var error=document.getElementById("error-email")
    var emailstaus=/^[a-z0-9]+[@]+[gmail]+[.]+[com]+$/
    if(Email.length<12)
   {
    error.innerHTML="Invalid Email";
    error.style.color="red";
    return false;
   }else if(Email.match(emailstaus))
   {
    error.innerHTML="Valid Email";
    error.style.color="green";
    return true;
   }
   else{
    error.innerHTML="Invalid Email";
    error.style.color="red";
    return false;

   }
  }
  function validateNumber()
  {
    var number=document.getElementById("number").value
    var error=document.getElementById("error-num")
    var numberstatus=/^[0-9]+$/

    if(number.match(numberstatus) && number.length==10)
    {
      error.innerHTML=""
      return true
    }
    else
    {
      error.innerHTML="invalid number"
      error.style.color="red";
      return false;


    }
  }

  function validateMessage()
  {
     var message=document.getElementById("message").value
     var error=document.getElementById("error-msg")

     if(message=="")
     {
      error.innerHTML="Enter a message"
      error.style.color="red"
      return false
     }
     else
     {
      error.innerHTML=""
      return true;
     }
  }
  function validateForm()
  {
    if(!validateName()||!validateEmail()||!validateMessage()||!validateNumber())
    {
      var error=document.getElementById('form-error-msg');
      error.innerHTML="Please Enter the Form properly.."
      error.style.color="red";
    }else{
      var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
      };
      const serviceID ="service_3tkmunl";
      const templateID ="template_5lfm62p";
      emailjs.send(serviceID,templateID,params).then(res=>
        {
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message sent successfully");
      }).catch((err)=>console.log(err));
    }
  }