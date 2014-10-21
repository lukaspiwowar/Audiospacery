    <?php
     
    $plik= 'music/'.$_GET['file'].''; //sounds to folder w którym s¹ tylko pliki dŸwiêkowe
    //sprawdzamy czy plik istnieje
    if (file_exists($plik)) {
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename='.basename($plik));
    header('Content-Transfer-Encoding: binary');
    header('Content-Length: ' . filesize($plik));
    //tutaj mo¿esz zwiêkszyæ liczbê pobrañ danego pliku poprzez zapytanie do bazy
    readfile($plik);
    }
     
    ?>