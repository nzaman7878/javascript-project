var nameError = document.getElementById('name-error');
        var phoneError = document.getElementById('phone-error');
        var emailError = document.getElementById('email-error');
        var messageError = document.getElementById('message-error');
        var submitError = document.getElementById('submit-error');

        function validateName() {
            var name = document.getElementById('contact-name').value;
            if (name.trim() === '') {
                nameError.innerHTML = "Name is required";
                return false;
            }
            if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(name)) {
                nameError.innerHTML = "Please enter your full name";
                return false;
            }
            nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            return true;
        }

        function validatePhone() {
            var phone = document.getElementById('contact-phone').value;

            if (phone.trim() === '') {
                phoneError.innerHTML = "Phone is required";
                return false;
            }
            if (phone.trim().length !== 10) {  
                phoneError.innerHTML = "Phone number should be 10 digits";
                return false;
            }
            if (!/^[0-9]{10}$/.test(phone)) {
                phoneError.innerHTML = "Only digits are allowed";
                return false;
            }
            phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            return true;
        }

        function validateEmail() {
            var email = document.getElementById('contact-email').value;

            if (email.trim() === '') {
                emailError.innerHTML = "Email is required";
                return false;
            }
            if (!/^\S+@\S+\.\S+$/.test(email)) {
                emailError.innerHTML = "Please enter a valid email address";
                return false;
            }
            emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            return true;
        }

        function validateMessage() {
            var message = document.getElementById('message').value;

            if (message.trim() === '') {
                messageError.innerHTML = "Message is required";
                return false;
            }
            messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            return true;
        }

        function validateForm() {
            return validateName() && validatePhone() && validateEmail() && validateMessage();
        }