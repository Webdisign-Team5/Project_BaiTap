$(document).ready(function(){
    $("#sidebarCollapse").click(function(){
        $("#sidebar").toggleClass('active');
    });
     //chuyen trang cua user
     $(".nguoidunguser").click(function(){
        location.href="../giaodienuser/nguoidunguser.html";
    });
    $(".muavuuser").click(function(){
        location.href="../giaodienuser/muavu.html";
    });
    $(".congviecuser").click(function(){
        location.href="../giaodienuser/congviec.html";
    });
    $(".thietbiuser").click(function(){
        location.href="../giaodienuser/thietbi.html";
    });
    //chuyển trang login user
    $("#trangDNU").click(function(){
    location.href = "../login/index_dang_nhap.html";
    });
    $("#logoutU").click(function(){
    location.href = "../../nguoidungfree.html";
    });
});



var addHD=true;
$(document).ready(function () {
    $("#button-HD").click(function (){
        $("#addHD").css("display","block");
        $("#hoadon").css("display","none");
    })
    addHD=true;
    loadDatahd();
    
})


    function loadDatahd(){
    $.get("https://60a139a3d2855b00173b1d00.mockapi.io/nguoidung",function(data_HD,status){
        console.log(data_HD)
      
        for(var i = 0;i < data_HD.length;i++){
            
             var hd= "<tr>"+
            "<td>"+data_HD[i].id+"</td>"+
            "<td>" + data_HD[i].ten + "</td>" +
            "<td>" + data_HD[i].username + "</td>" +
            "<td>" + data_HD[i].pass + "</td>" +
            "<td>" + data_HD[i].quyen + "</td>" +
            "<td>" + data_HD[i].gioitinh + "</td>" +
            "<td>" + data_HD[i].email + "</td>" +
            "<td>"+"<a onclick='edit_hd("+data_HD[i].id+")'><i data='"+ data_HD[i].id +"' class='fa fa-edit'></i></a>"
            +"</tr>"
             $("#hoadon tbody").append(hd);
        }       
    })
}


function edit_hd(id){
    $.get("https://60a139a3d2855b00173b1d00.mockapi.io/nguoidung/"+id,function(data_HD,status){
      
        loadDatact(id);
        $("#editId").val(data_HD.id);
        $("#ten").val(data_HD.ten);
        $("#username").val(data_HD.username);
        $("#pass").val(data_HD.pass);
        $("#quyen").val(data_HD.quyen);
        $("#gioitinh").val(data_HD.gioitinh);
        $("#email").val(data_HD.email);
       $("#addHD").css("display","block");
       addHD=false;
    }
    )
   

}
function closeModal(){
    $("#addHD").css("display","none");
    $("#ten").val("");
    $("username").val("");
    $("#pass").val("");
    $("#quyen").val("");
    $("#gioitinh").val("");
    $("#email").val("");
    location.href="nguoidunguser.html";
    
    
};
$("#HD_submit").click(function(){
    var dulieu={
        "ten":$("#ten").val(),
        "username":$("#username").val(),
        "pass":$("#pass").val(),
        "quyen":$("#quyen").val(),
        "gioitinh":$("#gioitinh").val(),
        "email":$("#email").val(),
    };
    if(addHD){
        $.ajax(
            {
                url : "https://60a139a3d2855b00173b1d00.mockapi.io/nguoidung/"+$("#editId").val(),
                method: "POST",  
                data: dulieu
            }
        ).done(function(msg){
            console.log(msg);
            // alert("Sua crush thanh cong!")
            closeModal();
            loadDatahd();
            // $("#hoadon").css("display"," block");
            ////Thong bao nguoi dung
        });
    }
    else{
        $.ajax(
        {
            url : "https://60a139a3d2855b00173b1d00.mockapi.io/nguoidung/"+$("#editId").val(),

            method: "PUT",  
            data: dulieu
        }
    ).done(function(msg){
        console.log(msg);
        // alert("Sua crush thanh cong!")
        closeModal();
        loadDatahd();
        $("#hoadon").css("display"," block");
        ////Thong bao nguoi dung
    });
}
   
}) 

function delete_hd(id){
    $.ajax({
        url: "https://60a139a3d2855b00173b1d00.mockapi.io/nguoidung/" + id,
        method: "DELETE"
    }).done(function(){
        loadDatahd();
        closeModal();
    })
}
/*----------CHI TIET O DAY NHO----------------*/  
function loadDatact(check){
    $.get("https://60a139a3d2855b00173b1d00.mockapi.io/nguoidung/"+check,function(data_ct,status){
       
    })
} 
/***
 * 
 * close modal
 */
$(".close").click( function(){
    closeModal();
    $("#hoadon").css("display"," block");
    
});

