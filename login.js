function aksi_login1(){
    var email = $("#email").val();
    var password = $("#password").val();

    if(email==""){
        alert("Email Belum Diisi");
    }else if (password==""){
        alert("Password Belum Diisi");
    }else if(email=="001@gmail.com" && password=="aaa"){
        alert("Anda Berhasil Login");
        window.location = "index.php";
    }else{
        alert("Email dan Password yang anda masukkan salah");
    }
}
function aksi_login2(){
    var email = $("#email").val();
    var password = $("#password").val();

    if(email==""){
        $(".register-link").show();
        $('#validasi').html('Email Belum Diisi').show();
    }else if (password==""){
        $(".register-link").show();
        $('#validasi').html('Password Belum Diisi').show();
    }else if(email=="001@gmail.com" && password=="aaa"){
        window.location = "index.php";
    }else{
        $(".register-link").show();
        $('#validasi').html('Email dan Password yang anda masukkan salah').show();
    }
}

$(document).ready(function(){
    
    $(".register-link").hide();

    $("#btnlogin").click(function(){
        aksi_login2();
    });

});