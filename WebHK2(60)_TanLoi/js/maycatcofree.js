
/**
 * 
 * Máy cắt cỏ
 * 
 */
 
 var addHD3=true;
 $(document).ready(function () {
     $("#button-HD3").click(function (){
         $("#addHD3").css("display","block");
        
     })
     addHD3=true;
     loadDatahd3();
     
 })
     function loadDatahd3(){
     $.get("https://60ea72a05dd7ff0017b3976f.mockapi.io/catco",function(data_HD3,status){
         console.log(data_HD3)    
         for(var i = 0;i < data_HD3.length;i++){          
              var hd= "<tr>"+
             "<td>" + data_HD3[i].trangthaicc + "</td>" +
             "<td>"
             +"</tr>"
              $("#hoadon3 tbody").append(hd);
         }            
     })
 }
 
 function edit_hd3(id){
     $.get("https://60ea72a05dd7ff0017b3976f.mockapi.io/catco/"+id,function(data_HD3,status){
       
         loadDatact3(id);
         $("#editId3").val(data_HD3.id);
         $("#trangthaicc").val(data_HD3.trangthaicc);
        $("#addHD3").css("display","block");      
     }
     )
 }
 function closeModal3(){
     $("#addHD3").css("display","none");
     $("#trangthai").val("");
     location.href="thietbi.html";   
     
 };
 $("#HD_submit3").click(function(){
     var dulieu={"trangthaicc":$("#trangthaicc").val()};
     if(addHD3){
        $.ajax(
            {
                url : "https://60ea72a05dd7ff0017b3976f.mockapi.io/catco/"+$("#editId3").val(),
                method: "PUT",  
                data: dulieu
            }
        ).done(function(msg){
            console.log(msg);
            closeModal3();
            loadDatahd3();        
        });
    }  
})
function delete_hd(id){
    $.ajax({
        url: "https://60ea72a05dd7ff0017b3976f.mockapi.io/catco/" + id,
        method: "DELETE"
    }).done(function(){
        loadDatahd3();
        closeModal3();
    })
}
function loadDatact3(check){
    $.get("https://60ea72a05dd7ff0017b3976f.mockapi.io/catco/"+check,function(data_ct,status){
       
    })
} 
$("#close3").click( function(){
    closeModal3();
    $("#hoadon3").css("display"," block");
    
});
