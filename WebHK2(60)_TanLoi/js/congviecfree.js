$(document).ready(function(){
    $("#sidebarCollapse").click(function(){
        $("#sidebar").toggleClass('active');
    });
        //chuyen trang cua miễn phí
        $("#nguoidungfree").click(function(){
            location.href="nguoidungfree.html";
        });
        $("#muavufree").click(function(){
            location.href="muavufree.html";
        });
        $("#congviecfree").click(function(){
            location.href="congviecfree.html";
        });
        $("#thietbifree").click(function(){
            location.href="thietbifree.html";
        });
        //chuyển trang login 
         $("#trangDNF").click(function(){
        location.href = "giaodienchinh/login/index_dang_nhap.html";
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
    $.get("https://60a139a3d2855b00173b1d00.mockapi.io/congviec",function(data_HD,status){
        console.log(data_HD)    
        for(var i = 0;i < data_HD.length;i++){          
             var hd= "<tr>"+
            "<td>"+data_HD[i].id+"</td>"+
            "<td>" + data_HD[i].tencv + "</td>" +
            "<td>" + data_HD[i].thuocmuavu + "</td>" +
            "<td>" + data_HD[i].batdau + "</td>" +
            "<td>" + data_HD[i].ketthuc + "</td>" +
            "<td>" + data_HD[i].tgdukien + "</td>" +
            "<td>" + data_HD[i].trangthai + "</td>" +
            "<td>" + data_HD[i].mota + "</td>" +
            "<td>" + data_HD[i].nguoithuchien + "</td>"
            +"</tr>"
             $("#hoadon tbody").append(hd);
        }            
    })
}


function edit_hd(id){
    $.get("https://60a139a3d2855b00173b1d00.mockapi.io/congviec/"+id,function(data_HD,status){
      
        loadDatact(id);
        $("#editId").val(data_HD.id);
        $("#tencv").val(data_HD.tencv);
        $("#thuocmuavu").val(data_HD.thuocmuavu);
        $("#batdau").val(data_HD.batdau);
        $("#ketthuc").val(data_HD.ketthuc);
        $("#tgdukien").val(data_HD.tgdukien);
        $("#trangthai").val(data_HD.trangthai);
        $("#mota").val(data_HD.mota);
        $("#nguoithuchien").val(data_HD.nguoithuchien);
       $("#addHD").css("display","block");
       addHD=false;
    }
    )
   

}
function closeModal(){
    $("#addHD").css("display","none");
    $("#tencv").val("");
    $("thuocmuavu").val("");
    $("#batdau").val("");
    $("#ketthuc").val("");
    $("#tgdukien").val("");
    $("#trangthai").val("");
    $("#mota").val("");
    $("#nguoithuchien").val("");
    location.href="congviec.html";
    
    
};
$("#HD_submit").click(function(){
    var dulieu={
        "tencv":$("#tencv").val(),
        "thuocmuavu":$("#thuocmuavu").val(),
        "batdau":$("#batdau").val(),
        "ketthuc":$("#ketthuc").val(),
        "tgdukien":$("#tgdukien").val(),
        "trangthai":$("#trangthai").val(),
        "mota":$("#mota").val(),
        "nguoithuchien":$("#nguoithuchien").val(),
    };
    if(addHD){
        $.ajax(
            {
                url : "https://60a139a3d2855b00173b1d00.mockapi.io/congviec/"+$("#editId").val(),
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
            url : "https://60a139a3d2855b00173b1d00.mockapi.io/congviec/"+$("#editId").val(),

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
        url: "https://60a139a3d2855b00173b1d00.mockapi.io/congviec/" + id,
        method: "DELETE"
    }).done(function(){
        loadDatahd();
        closeModal();
    })
}
/*----------CHI TIET O DAY NHO----------------*/  
function loadDatact(check){
    $.get("https://60a139a3d2855b00173b1d00.mockapi.io/congviec/"+check,function(data_ct,status){
       
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

