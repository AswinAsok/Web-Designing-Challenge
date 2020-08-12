$(document).ready(function(){
    $("#sign-up").validate({
        rules:{
            uname: {
                required:true,
                minlength:4
            },
            emailadd: {
                required:true,
            },
            dobi:{
                required:true,
            
            },
            Gen:{
                required:true,
            }

        
        }
    })
})