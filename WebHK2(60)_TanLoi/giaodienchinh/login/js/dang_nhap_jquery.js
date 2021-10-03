$(document).ready(function () {
    $("#dangky").click(function(){
        location.href="index_dang_ky.html";
    });
    $("#forgot").click(function(){
        alert("Bạn sẽ được chuyển về trang người dùng. Hãy lấy Username & Mật khẩu ở đó để đăng nhập")
        location.href="../../nguoidungfree.html";
    });
    $("#submit").click(function () {
        var hasError = false;
        var iserror = false;
        var name = $("#name").val();
        var pass = $("#pass").val();
        if (name === "") {
            $("#name").css("border-bottom", "1px solid red");
            hasError = true;
        } else {
            $("#name").css("border-bottom", "1px white solid");
        }
        if (pass === "") {
            $("#pass").css("border-bottom", "1px red solid");
            hasError = true;
        } else {
            $("#pass").css("border-bottom", "1px white solid");

        }
        if (hasError) {
            $("#error1").css("display", "block");

        } else {
            $("#error1").css("display", "none");
            // so sánh
            var addHD = true;
            var dem = true;
            $(document).ready(function () {
                loadDatahd();
            })
            function loadDatahd() {
                $.get("https://60a139a3d2855b00173b1d00.mockapi.io/nguoidung", function (data_HD, status) {
                    console.log(data_HD)
                    for (var i = 0; i < data_HD.length; i++) {
                        if (name === data_HD[i].username) {
                            if (pass === data_HD[i].pass) {
                                if (data_HD[i].quyen === "Admin") {
                                    location.href = "../nguoidung.html";
                                    dem = false;
                                } else {
                                    location.href = "../giaodienuser/nguoidunguser.html";
                                    dem = false;
                                };
                            };
                        };


                    } if(dem===true) {alert("Không có tài khoản nào được tìm thấy ^^");}
                })
                }
            }
    });
});