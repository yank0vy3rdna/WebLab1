<?php
$start_time = microtime();
$r = $_POST['r'];
$x = $_POST['x'];
$y = $_POST['y'];
header('Content-type: application/json');
$array = array("RESULT_CODE" => 1);
$answer = "{\"RESULT_CODE\": 1}";
$optionsR = array(
    'options' => array(
        'min_range' => 1,
        'max_range' => 5,
    )
);

if (filter_var($x, FILTER_VALIDATE_FLOAT) !== FALSE
    and filter_var($y, FILTER_VALIDATE_FLOAT) !== FALSE
    and filter_var($r, FILTER_VALIDATE_FLOAT, $optionsR) !== FALSE
    and ($x <= 5) && ($x >= -5)
    and($y >= -3) && ($y <= 5)) {
    $array = array(
        "X" => floatval($x),
        "Y" => floatval($y),
        "R" => floatval($r),
        "RESULT" => true,
        "RESULT_CODE" => 0
    );
    if ($x > 0 and $y < 0) {
        $array["RESULT"] = false;
    } elseif ($x < 0 and $x >= -$r and $y > 0 and $y <= $r) {
        $array["RESULT"] = true;
    } elseif ($x == 0 and $y > -$r / 2 and $y <= $r) {
        $array["RESULT"] = true;
    } elseif ($y == 0 and $x >= -$r and $x <= $r) {
        $array["RESULT"] = true;
    } elseif ($x > 0 and $y > 0 and ($x * $x + $y * $y) <= $r * $r) {
        $array["RESULT"] = true;
    } elseif ($x < 0 and $y < 0 and $y >= -$x / 2 - $r / 2) {
        $array["RESULT"] = true;
    } else {
        $array["RESULT"] = false;
    }
    $array["DATETIME"] = date("Y-m-d H:i:s");
    $array["COMPUTATION_TIME"] = microtime() - $start_time;
}

echo json_encode($array);
