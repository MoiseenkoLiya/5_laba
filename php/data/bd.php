<?php
include ("php/bd/bd.php");
try {
    $query = "SELECT * FROM info WHERE id=3";
    $result = $db->query($query);
    $myrow = $result->fetch();
}
catch (Throwable $e)
{
    echo "Captured Throwable: " . $e->getMessage() . PHP_EOL;
}
?>