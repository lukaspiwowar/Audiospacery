    <?php
     
    $plik= 'music/'.$_GET['file'].''; //sounds to folder w kt�rym s� tylko pliki d�wi�kowe
    //sprawdzamy czy plik istnieje
    if (file_exists($plik)) {
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename='.basename($plik));
    header('Content-Transfer-Encoding: binary');
    header('Content-Length: ' . filesize($plik));
    //tutaj mo�esz zwi�kszy� liczb� pobra� danego pliku poprzez zapytanie do bazy
    readfile($plik);
    }
     
    ?>