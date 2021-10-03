$(document).ready(function(){
    $("#sidebarCollapse").click(function(){
        $("#sidebar").toggleClass('active');
    });  
    //chuyentrang cua admin
    $(".nguoidung").click(function(){
        location.href="nguoidung.html";
    });
    $(".muavu").click(function(){
        location.href="muavu.html";
    });
    $(".congviec").click(function(){
        location.href="congviec.html";
    });
    $(".thietbi").click(function(){
        location.href="thietbi.html";
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
    //chuyển trang login admin
    $("#trangDN").click(function(){
    location.href = "login/index_dang_nhap.html";
    });
    $("#logout").click(function(){
    location.href = "../nguoidungfree.html";
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
       
    })
    addHD=true;
    loadDatahd();
    
})


    function loadDatahd(){
    $.get("https://60a139a3d2855b00173b1d00.mockapi.io/muavu",function(data_HD,status){
        console.log(data_HD)    
        for(var i = 0;i < data_HD.length;i++){          
             var hd= "<tr>"+
            "<td>"+data_HD[i].id+"</td>"+
            "<td>" + data_HD[i].tenmv + "</td>" +
            "<td>" + data_HD[i].sanluong + "</td>" +
            "<td>" + data_HD[i].donvitinh + "</td>" +
            "<td>" + data_HD[i].ngaybatdau + "</td>" +
            "<td>" + data_HD[i].ngaydukien + "</td>" +
            "<td>" + data_HD[i].trangthai + "</td>" +
            "<td>" + data_HD[i].sanluongdat + "</td>" +
            "<td>"+"<a onclick='edit_hd("+data_HD[i].id+")'><i data='"+ data_HD[i].id +"' class='fa fa-edit'></i></a>"
            +"<a onclick='delete_hd("+data_HD[i].id+")'><i class='fa fa-trash'></i></a>"
            +"</tr>"
             $("#hoadon tbody").append(hd);
        }            
    })
}


function edit_hd(id){
    $.get("https://60a139a3d2855b00173b1d00.mockapi.io/muavu/"+id,function(data_HD,status){
      
        loadDatact(id);
        $("#editId").val(data_HD.id);
        $("#tenmv").val(data_HD.tenmv);
        $("#sanluong").val(data_HD.sanluong);
        $("#donvitinh").val(data_HD.donvitinh);
        $("#ngaybatdau").val(data_HD.ngaybatdau);
        $("#ngaydukien").val(data_HD.ngaydukien);
        $("#trangthai").val(data_HD.trangthai);
        // $("#sanluongdat").val(data_HD.sanluongdat);
       $("#addHD").css("display","block");
       addHD=false;
       $("#sanluong").css("border","1px solid red"); 
       $(".lock").css("display","block");    
       $("#donvitinh").css("border","1px solid red");
       $("#sanluongdat").css("border","1px solid #cac725d3");
        
    }
    )
}
function closeModal(){
    $("#addHD").css("display","none");
    $("#tenmv").val("");
    $("sanluong").val("");
    $("#donvitinh").val("");
    $("#ngaybatdau").val("");
    $("#ngaydukien").val("");
    $("#trangthai").val("");
    $("#sanluongdat").val("");
    location.href="muavu.html";
    
    
};
$("#HD_submit").click(function(){
    var dulieupost={
        "tenmv":$("#tenmv").val(),
        "sanluong":$("#sanluong").val(),
        "donvitinh":$("#donvitinh").val(),
        "ngaybatdau":$("#ngaybatdau").val(),
        "ngaydukien":$("#ngaydukien").val(),
        "trangthai":$("#trangthai").val(),
        "sanluongdat":$("#sanluongdat").val(),
    };
    var dulieuput={
        "tenmv":$("#tenmv").val(),
        "ngaybatdau":$("#ngaybatdau").val(),
        "ngaydukien":$("#ngaydukien").val(),
        "trangthai":$("#trangthai").val(),
        // "sanluongdat":$("#sanluongdat").val(),
    };
    if(addHD){
        $.ajax(
            {
                url : "https://60a139a3d2855b00173b1d00.mockapi.io/muavu/"+$("#editId").val(),
                method: "POST",  
                data: dulieupost
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
            url : "https://60a139a3d2855b00173b1d00.mockapi.io/muavu/"+$("#editId").val(),

            method: "PUT",  
            data: dulieuput
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
        url: "https://60a139a3d2855b00173b1d00.mockapi.io/muavu/" + id,
        method: "DELETE"
    }).done(function(){
        loadDatahd();
        closeModal();
    })
}
/*----------CHI TIET O DAY NHO----------------*/  
function loadDatact(check){
    $.get("https://60a139a3d2855b00173b1d00.mockapi.io/muavu/"+check,function(data_ct,status){
       
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

