
      // fitur form validation start
      function validateForm() {
        let name = document.forms["formCustomer"]["name"].value;
        let email = document.forms["formCustomer"]["email"].value;
  
        let option = document.forms["formCustomer"]["option"].value;
         if(name == "" || email == "" || option == ""){
          alert("Mohon maaf🙏 Input tidak boleh kosong!")
          return false;
         }
      }