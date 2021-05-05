<?php
// Чтобы на php коде получить Json данные и с ними поработать
$_POST = json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST);