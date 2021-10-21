<?php
$_POST=json_decode(file_get_contents('php://input'),true);
$_POST=json_encode($_POST);
echo $_POST;