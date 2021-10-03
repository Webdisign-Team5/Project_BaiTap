$(document).ready(function(){
    $("#dangnhap0").click(function(){
        location.href="index_dang_nhap.html";
    });
    $("#submit").click(function(){
        var haveError=false;

        var Username = $("#name").val();
        var Password = $("#pass").val();
        var Repass = $("#pass2").val();
        if(Username===""){
            $("#name").css("border-bottom","1px solid red");
            haveError =true;
        }else {
            $("#name").css("border-bottom","1px white solid");
        }

        if(Password === ""){
            $("#pass").css("border-bottom","1px solid red");
            haveError = true;
        }else{
            $("#pass").css("border-bottom","1px solid white");  
        }
        if(Repass === ""){
            $("#pass2").css("border-bottom","1px solid red");
            haveError = true;
        }else{
            $("#pass2").css("border-bottom","1px solid white");  
        }
        if(haveError){
            $("#error").css("display","block");
            $("#error3").css("display","none");
        }else{
            $("#error").css("display","none");
         
        if(Repass!==Password){
           
            $("#error3").css("display","block");
        }else{
            $("#error3").css("display","none");
            alert("HAHAHA cho nhập chơi vậy thôi chứ chưa tạo được đâu ^^ bạn hãy sử dụng username và mật khẩu có sẵn bên danh sách người dùng ahihi ^^ ");
            location.href = "../../nguoidungfree.html";
            
        }  }
        
    });
});
$(document).ready(function(){
    $("#help").click(function(){
        alert("U là tr ai biết gì đâu mà giúp, lên google mà hỏi đi ^^")
    });
});