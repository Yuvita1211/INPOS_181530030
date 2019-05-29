<?php
    //  sintak untuk membuat koneksi database
    //  dbname=db_inpos : untuk mendifinisikan nama databasenya
    //  root = nama user
    //  '' = password    (secara dafault kosong)
    $koneksi = new PDO('mysql:host=localhost;dbname=db_inpos', 'root', '');
?>