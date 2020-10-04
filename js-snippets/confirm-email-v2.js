/*
* JS snippet to match two fields value as same
* Example: Email and Confirm Email need to be same
* Placement: Place the following code in your form -> Settings & Integrations -> Custom CSS/JS -> Custom Javascript BOX
* This version use the optional "help messages" to give a better feedback to the user.
* 
* Adapt the inputs names and the getElementById() by your own.
* You can also custom the CSS to the error message like so that :
* .ff-el-help-message.error {color: red;}
 */

var $email = $form.find('input[name=email]'); // Name of the first Email Address
var $infoMessageEmail = document.getElementById('ff_1_email').nextElementSibling; // The info text of the first Email Address
var $infoMessageEmailInitial = $infoMessageEmail.textContent; // the initial "help message" after loading

var $confirmEmail = $form.find('input[name=email_confirmation]'); // Name of the Confirm Email Address
var $infoMessageConfirmEmail = document.getElementById('ff_1_email_confirmation').nextElementSibling; // The info Text of the Confirm Email Address
var $infoMessageConfirmEmailInitial = $infoMessageConfirmEmail.textContent; // the initial "help message" after loading

$confirmEmail.on('blur', function() {
    if($(this).val() != $email.val()) {
        $infoMessageEmail.textContent = "Check your email address.";
        $infoMessageConfirmEmail.textContent = "Check your email address.";
        $infoMessageEmail.classList.add('error');
        $infoMessageConfirmEmail.classList.add('error');
    }else {
        $infoMessageConfirmEmail.textContent = $infoMessageConfirmEmailInitial;
        $infoMessageEmail.textContent = $infoMessageEmailInitial;
        $infoMessageEmail.classList.remove('error');
        $infoMessageConfirmEmail.classList.remove('error');
        
    }
});

// Additional code to check if user fixed the type in the primary email
$email.on('blur', function() {
    if($confirmEmail.val() && $(this).val() != $confirmEmail.val()) {
        $infoMessageEmail.textContent = "Check your email address.";
        $infoMessageConfirmEmail.textContent = "Check your email address.";
        $infoMessageEmail.classList.add('error');
        $infoMessageConfirmEmail.classList.add('error');
    }else {
        $infoMessageConfirmEmail.textContent = $infoMessageConfirmEmailInitial;
        $infoMessageEmail.textContent = $infoMessageEmailInitial;
        $infoMessageEmail.classList.remove('error');
        $infoMessageConfirmEmail.classList.remove('error');
        
    }
});
