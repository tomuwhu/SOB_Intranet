<?php
ini_set("proxy_buffering", "off");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$mysqli = new mysqli("localhost", "root", "", "test");
$mysqli->set_charset("utf8");
$sql = "SELECT `un`, `name`, `id`, `user`, `msg`, `key` 
        FROM sob_users, strdata 
        WHERE sob_users.name = strdata.user ORDER BY id DESC";
while (true) {
    $fr = false;
    $line = [];
    if ($result = $mysqli->query($sql)) {
        while ($row = $result->fetch_assoc()) {
            $line[] = $row;
            if (!$fr) {
                $fr = $row;
                $lastdt = $fr['id'];
            }
        }
    }
    $result->close();
    session_start();
    if ($lastdt != $_SESSION['lastdt']) {
        echo "data: " . json_encode($line) . "\n\n";
        $_SESSION['lastdt'] = $lastdt;
        ob_flush();
        flush();
    }
    sleep(5);
}
?>