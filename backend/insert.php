<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ERROR);
$inp = json_decode(file_get_contents('php://input'));
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$un = $inp->un;
session_id($un);
session_start();
$name = $inp->name;
$msg = $inp->text;
$key = $inp->key;
if ($_SESSION['name'] == $name and $_SESSION['un'] == $un and $name and $msg) {
    $mysqli = new mysqli("localhost", "root", "", "test");
    $mysqli->set_charset("utf8");
    if ($key) {
        $query = "UPDATE strdata SET id = current_timestamp(), msg = '" . $msg . "' WHERE `key` = " . $key;
    } else {
        $query = "INSERT INTO strdata (id, user, msg) VALUES(current_timestamp(),'" . $name . "','" . $msg . "')";
    }
    $result = $mysqli->query($query);
    $answ = $result;
} else
    $answ = false;
echo json_encode($answ);
?>