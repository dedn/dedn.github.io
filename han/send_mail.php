<?php

session_start();

if (isset($_REQUEST['name'])) {
    $name = htmlspecialchars(stripslashes($_REQUEST['name']));
}
if (isset($_REQUEST['number'])) {
    $number = htmlspecialchars(stripslashes($_REQUEST['number']));
}
$email = "to_where@gmail.com";
$subj = "Запрос на обратный звонок";
$text = "Меня зовут " . $name . ". Позвоните мне по телефону: " . $number;
$headers = "From: empty@gmail.com\nContent-type: text/plain; charset=utf-8 \n";
$headers.="Date: " . date('j.m.Y H:m:s') . "\n";
$sent = mail($email, $subj, $text, $headers);

?>
