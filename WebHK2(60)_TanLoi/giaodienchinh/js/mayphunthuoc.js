
/**
 * 
 * Máy phun thuốc
 * 
 */
 
 var addHD2=true;
 $(document).ready(function () {
     $("#button-HD2").click(function (){
         $("#addHD2").css("display","block");
        
     })
     addHD2=true;
     loadDatahd2();
     
 })
     function loadDatahd2(){
     $.get("https://60ea72a05dd7ff0017b3976f.mockapi.io/phunthuoc",function(data_HD2,status){
         console.log(data_HD2)    
         for(var i = 0;i < data_HD2.length;i++){          
              var hd= "<tr>"+
             "<td>" + data_HD2[i].trangthai + "</td>" +
             "<td>"+"<a onclick='edit_hd2("+data_HD2[i].id+")'><i data='"+ data_HD2[i].id +"' class='fa fa-edit'></i></a>" 
             +"</tr>"
              $("#hoadon2 tbody").append(hd);
         }            
     })
 }
 
 function edit_hd2(id){
     $.get("https://60ea72a05dd7ff0017b3976f.mockapi.io/phunthuoc/"+id,function(data_HD2,status){
       
         loadDatact2(id);
         $("#editId2").val(data_HD2.id);
         $("#trangthai").val(data_HD2.trangthai);
        $("#addHD2").css("display","block");      
     }
     )
 }
 function closeModal2(){
     $("#addHD2").css("display","none");
     $("#trangthai").val("");
     location.href="thietbi.html";   
     
 };
 $("#HD_submit2").click(function(){
     var dulieu={"trangthai":$("#trangthai").val()};
     if(addHD2){
        $.ajax(
            {
                url : "https://60ea72a05dd7ff0017b3976f.mockapi.io/phunthuoc/"+$("#editId2").val(),
                method: "PUT",  
                data: dulieu
            }
        ).done(function(msg){
            console.log(msg);
            closeModal2();
            loadDatahd2();        
        });
    }  
})
function delete_hd(id){
    $.ajax({
        url: "https://60ea72a05dd7ff0017b3976f.mockapi.io/phunthuoc/" + id,
        method: "DELETE"
    }).done(function(){
        loadDatahd2();
        closeModal2();
    })
}
function loadDatact2(check){
    $.get("https://60ea72a05dd7ff0017b3976f.mockapi.io/phunthuoc/"+check,function(data_ct,status){
       
    })
} 
$("#close2").click( function(){
    closeModal2();
    $("#hoadon2").css("display"," block");
    
});
