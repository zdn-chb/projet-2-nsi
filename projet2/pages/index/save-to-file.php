<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Format log : [Date] Nom | Email | Message
    $log = "[" . date("Y-m-d H:i:s") . "] $nom | $email | $message\n";

    // Sauvegarde dans logs.txt
    file_put_contents("logs.txt", $log, FILE_APPEND | LOCK_EX);

    echo "Données enregistrées avec succès !";
}
?>
