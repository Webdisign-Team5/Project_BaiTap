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
    $(".thietbi").click(function(){
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
    $.get("https://60a139a3d2855b00173b1d00.mockapi.io/thietbi",function(data_HD,status){
        console.log(data_HD)    
        for(var i = 0;i < data_HD.length;i++){          
             var hd= "<tr>"+
            "<td>" + data_HD[i].trangthaimc + "</td>" +
            "<td>"+"<a onclick='edit_hd("+data_HD[i].id+")'><i data='"+ data_HD[i].id +"' class='fa fa-edit'></i></a>" 
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
$("#close").click( function(){
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
