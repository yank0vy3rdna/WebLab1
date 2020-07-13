<?php
$r = $_POST['r'];
$x = $_POST['x'];
$y = $_POST['y'];
header('Content-type: application/json');
$array = array("RESULT_CODE" => 1);
$answer = "{\"RESULT_CODE\": 1}";
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
if (is_numeric(filter_var($x, FILTER_VALIDATE_FLOAT, $optionsX)) and is_numeric(filter_var($y, FILTER_VALIDATE_FLOAT, $optionsY))  and is_numeric(filter_var($r, FILTER_VALIDATE_FLOAT, $optionsR))) {
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
    }elseif ($x>0 and $y>0 and ($x*$x+$y*$y)<=$r*$r){
        $array["RESULT"] = true;
    }elseif ($x<0 and $y<0 and $y>=-$x/2-$r/2){
        $array["RESULT"] = true;
    }else{
        $array["RESULT"] = false;
    }
    $answer = "{\"X\":";
    $answer .= $array["X"];
    $answer .= ",\"Y\":";
    $answer .= $array["Y"];
    $answer .= ",\"R\":";
    $answer .= $array["R"];
    $answer .= ",\"RESULT\":";
    $answer .= $array["RESULT"] ? 'true' : 'false';
    $answer .= ",\"RESULT_CODE\":";
    $answer .= $array["RESULT_CODE"];
    $answer .= "}";
}

echo $answer;
