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
    $.get("https://60a139a3d2855b00173b1d00.mockapi.io/thietbi",function(data_HD,status){
        console.log(data_HD)    
        for(var i = 0;i < data_HD.length;i++){          
             var hd= "<tr>"+
            "<td>" + data_HD[i].trangthaimc + "</td>" +
         
            +"</tr>"
             $("#hoadon tbody").append(hd);
        }            
    })
}


function edit_hd(id){
    $.get("https://60a139a3d2855b00173b1d00.mockapi.io/thietbi/"+id,function(data_HD,status){
      
        loadDatact(id);
        $("#editId").val(data_HD.id);
        $("#trangthaimc").val(data_HD.trangthaimc);
       $("#addHD").css("display","block");      
    }
    )
}
function closeModal(){
    $("#addHD").css("display","none");
    $("#trangthaimc").val("");
    location.href="thietbi.html";
    
    
};
$("#HD_submit").click(function(){
    var dulieu={
        "trangthaimc":$("#trangthaimc").val()
    };
    if(addHD){
        $.ajax(
            {
                url : "https://60a139a3d2855b00173b1d00.mockapi.io/thietbi/"+$("#editId").val(),
                method: "PUT",  
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
}) 

function delete_hd(id){
    $.ajax({
        url: "https://60a139a3d2855b00173b1d00.mockapi.io/thietbi/" + id,
        method: "DELETE"
    }).done(function(){
        loadDatahd();
        closeModal();
    })
}
/*----------CHI TIET O DAY NHO----------------*/  
function loadDatact(check){
    $.get("https://60a139a3d2855b00173b1d00.mockapi.io/thietbi/"+check,function(data_ct,status){
       
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
$(document).ready(function(){
    $("#de1").click(function(){
        $("#dele1").css("display","none");
    });
});
$(document).ready(function(){
    $("#de2").click(function(){
        $("#dele2").css("display","none");
    });
});
$(document).ready(function(){
    $("#de3").click(function(){
        $("#dele3").css("display","none");
    });
});


