$("#formValidation").validate({
     rules:{
        name:{
            minlength: 2 ,
            
        },
        email:{
            email:true
        },
        old:{
            number:true,
            maxlength:2
        },

        // year:{

        // }
        // phone:{
        //     number:true,
        //     minlength:10,
        //     maxlength:10
        // }
    },
    
    messages: {
        name:{
            required: "The Filed",
            minlength:"minim a 2 charcter",
        },
        email:{
            required:""
        },
        old:{
            required:"The Filed requier",
        },
        year:{
            required:""
        },
        status:{
            required:""
        },
        country:{
            required:""
        },
        address:{
            required:"",
        },
        massege:{
            required:""
        }
        
            // minlength: ""
        
        // email:"Please enter your email",
        // old:"Please Enter your old",
        // phone:"Please enter your birth",
        // subject:"Please enter your subject",
        // formMessage:"Please enter your Message",
    },
    
    submitHandler: function (form) {
        
        form.submit();
    }
})
