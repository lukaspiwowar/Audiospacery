<?php
$katalog = "music/";
$plik = $_GET['src'];
$lokalizacja = $katalog.$plik;
$rozmiar = filesize($lokalizacja);
 


header('Content-Type: application/octet-stream');
header("Accept-Ranges: none");
header("Content-Length: $rozmiar");
header("Content-Disposition: attachment; filename=$plik");
header("Content-Description: $plik");
readfile($lokalizacja);
?>