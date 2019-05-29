function hitung_kekurangan1(){
    var dahbayar1 = $("#dahbayar1").val();
    var kekurangan1 = 200000 - parseInt(dahbayar1);
    $("#kekurangan1").val(kekurangan1);
}
function hitung_kekurangan2(){
    var dahbayar2 = $("#dahbayar2").val();
    var kekurangan2 = 125000 - parseInt(dahbayar2);
    $("#kekurangan2").val(kekurangan2);
}
function hitung_kekurangan3(){
    var dahbayar3 = $("#dahbayar3").val();
    var kekurangan3 = 125000 - parseInt(dahbayar3);
    $("#kekurangan3").val(kekurangan3);
}
$(document).ready(function(){
   
    $("#dahbayar1").keyup(function(){
        hitung_kekurangan1();
    });
    $("#dahbayar2").keyup(function(){
        hitung_kekurangan2();
    });
    $("#dahbayar3").keyup(function(){
        hitung_kekurangan3();
    });
    $("#dibayarkan1").keyup(function(){
        var dibayarkan1 = $("#dibayarkan1").val();
        var dibayarkan2 = $("#dibayarkan2").val();
        var dibayarkan3 = $("#dibayarkan3").val();
        var jumlah = parseInt(dibayarkan1)+parseInt(dibayarkan2)+parseInt(dibayarkan3) ;
    $("#total").val(jumlah);
    });
    $("#dibayarkan2").keyup(function(){
        var dibayarkan1 = $("#dibayarkan1").val();
        var dibayarkan2 = $("#dibayarkan2").val();
        var dibayarkan3 = $("#dibayarkan3").val();
        var jumlah = parseInt(dibayarkan1)+parseInt(dibayarkan2)+parseInt(dibayarkan3) ;
        $("#total").val(jumlah);
    });
    $("#dibayarkan3").keyup(function(){
        var dibayarkan1 = $("#dibayarkan1").val();
        var dibayarkan2 = $("#dibayarkan2").val();
        var dibayarkan3 = $("#dibayarkan3").val();
        var jumlah = parseInt(dibayarkan1)+parseInt(dibayarkan2)+parseInt(dibayarkan3) ;
        $("#total").val(jumlah);
    });

    $("#kembalian").keyup(function(){
        var total = $("#total").val();
        var jumlahbayar = $("#jml_bayar").val();
        var kembali = parseInt(jumlahbayar)-parseInt(total);
        $("#kembalian").val(kembali);
    });


});