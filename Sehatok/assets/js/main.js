// Document is ready
$(document).ready(function () {
    // Validate Username
    let usernameError = true;
    validateEmail();
    validateOld();
    validateUsername();
    $("#old").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)){
            return false;
        }
    });
    $("#usernames").keyup(function () {
        validateUsername();
       
        
    });
    
    function validateUsername() {
        let usernameValue = $("#usernames").val();
        if (usernameValue.length == "") {
            $("#usernames").addClass('border-danger');
        $("#usercheck").show();
        usernameError = false;
        return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 10) {
        
            $("#usercheck").show();
        
        $("#usernames").addClass('border-danger');
        usernameError = false;
        return false;
        } else {
            $("#usercheck").hide();
        $("#usernames").removeClass('border-danger');
        }
    }
    
    // Validate Email
    // const email = document.getElementById("email");
    //     if(email.length == "0"){
    //         console.log(ammar);
    //     }
    //     let regex = /^([_\-\.0-2a-zA-Z]+)@([_\-\.0-2a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    //     let s = email.value;
    //     if (regex.test(s) == false) {
    //     // email.classList.remove("is-invalid");
        
    //     $("#email").addClass('border-danger');
    //     // console.log('ammar');
    //     // emailError = true;
    //     } else if(regex.test(s) == true){
    //     // email.classList.add("is-invalid");
    //     $("#email").removeClass('border-danger');
    //     // emailError = false;
    //     console.log('yousef'+ regex.test(s))
    //     }

    
    // Validate Password
    // $("#passcheck").hide();
    // let oldError = true;
    $("#old").keyup(function () {
        validateOld();
    });
    function validateOld() {
    
        let OldValue = $("#old").val();
        if (OldValue.length == "") {
        $("#old").addClass('border-danger');
        $("#passcheck").show();
        oldError = false;
        return false;
        }
        
        if (OldValue.length < 2 || OldValue.length >3) {
        // $("#passcheck").show();
        // $("#passcheck").html(
        //     "**length of your password must be between 3 and 10"
        // );
        // $("#passcheck").css("color", "red");
        $("#old").addClass('border-danger');
        passwordError = false;
        return false;
        } else {
        $("#passcheck").hide();
        $("#old").removeClass('border-danger');
        }
    }
    

    // let emailError = true;
    $("#email").keyup(function () {
        validateEmail();
    });
    function validateEmail() {
        let regex = /^([_\-\.0-2a-zA-Z]+)@([_\-\.0-2a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        let emailValue = $("#email").val();
        if (emailValue.length == "") {
        $("#email").addClass('border-danger');
        // $("#passcheck").show();
        emailError = false;
        return false;
        }
        if (regex.test(s) == false) {
        // $("#passcheck").show();
        // $("#passcheck").html(
        //     "**length of your password must be between 3 and 10"
        // );
        // $("#passcheck").css("color", "red");
        $("#email").addClass('border-danger');
        emailError = false;
        return false;
        } else {
        $("#passcheck").hide();
        $("#email").removeClass('border-danger');
        }
    }

    // // Validate Confirm Password
    // $("#conpasscheck").hide();
    // let confirmPasswordError = true;
    // $("#conpassword").keyup(function () {
    //     validateConfirmPassword();
    // });
    // function validateConfirmPassword() {
    //     let confirmPasswordValue = $("#conpassword").val();
    //     let passwordValue = $("#password").val();
    //     if (passwordValue != confirmPasswordValue) {
    //     $("#conpasscheck").show();
    //     $("#conpasscheck").html("**Password didn't Match");
    //     $("#conpasscheck").css("color", "red");
    //     confirmPasswordError = false;
    //     return false;
    //     } else {
    //     $("#conpasscheck").hide();
    //     }
    // }
    
    // Submit button
    $("#formValidation").submit(function () {
        validateUsername();
        validateOld();
        validateEmail();
        if (
        usernameError == true &&
        // passwordError == true &&
        // confirmPasswordError == true &&
        emailError == true
        ) {
        return true;
        } else {
        return false;
        }
    });
    });


 
    