<?php
$x = !empty($_POST['x']) ? $_POST['x'] : '';
$y = !empty($_POST['y']) ? $_POST['y'] : '';
$r = $_POST['r'];
header('Content-type: application/json');
$array = array("RESULT_CODE" => 1);
$optionsX = array(
    'options' => array(
        'min_range' => -5,
        'max_range' => 5,
    )
);
$optionsY = array(
    'options' => array(
        'min_range' => -3,
        'max_range' => 5,
    )
);
$optionsR = array(
    'options' => array(
        'min_range' => 1,
        'max_range' => 5,
    )
);
if (filter_var($x, FILTER_VALIDATE_INT, $optionsX) and filter_var($y, FILTER_VALIDATE_INT, $optionsY) and filter_var($r, FILTER_VALIDATE_INT, $optionsR)) {
    $array = array(
        "X" => $x,
        "Y" => $y,
        "R" => $r,
        "RESULT" => true,
        "RESULT_CODE" => 0
    );
    if ($x > 0 and $y < 0) {
        $array["RESULT"] = false;
    } elseif ($x < 0 and $x > -$r and $y > 0 and $y < $r) {
        $array["RESULT"] = true;
    } elseif ($x == 0 and $y > -$r / 2 and $y <= $r) {
        $array["RESULT"] = true;
    } elseif ($y == 0 and $x >= -$r and $x <= $r) {
        $array["RESULT"] = true;
    }elseif ($x>0 and $y>0 and ($x*$x+$y*$y)<=$r*$r){
        $array["RESULT"] = true;
    }elseif ($x<0 and $y<0 and $y>=-$x/2-$r/2){
        $array["RESULT"] = true;
    }else{
        $array["RESULT"] = false;
    }
}

echo json_encode($array);
