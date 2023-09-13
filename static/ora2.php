<form action="./dbx.php" method="post">
<input name="nev" placeholder="Macska neve" /><br>
<input name="szin" placeholder="Macska szine" /><br>
<button type="submit">Beküldi az új cicát</button>
</form>
<table>
<?php
    $mysqli = new mysqli("localhost", "root", "", "test");
    $mysqli->set_charset("utf8");
    if (array_key_exists('nev', $_POST)) {
        $sql = "INSERT INTO cica (nev, szin) VALUES ('{$_POST['nev']}', '{$_POST['szin']}')";
        $mysqli->query($sql);
    } 
    $sql = "SELECT * FROM cica ORDER BY nev";
    $line = [];
    if ($result = $mysqli->query($sql)) {
        while ($row = $result->fetch_assoc()) {
            echo "<tr><td>".$row['nev']."</td><td>". $row['szin'] ."</td></tr>";
        }
    }
    $result->close();
    unset($obj);
    unset($sql);
?>
</table>
<style>
    td {width: 200px; background-color: yellow;}
</style>
