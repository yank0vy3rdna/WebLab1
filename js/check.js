function validateX(inp) {
    let val = parseInt(inp.value)
    if (isNaN(val)){
        return false
    }
    return val <= 5 && val >= -5
}

function validateY(inp) {
    let val = parseInt(inp.value)
    if (isNaN(val)){
        return false
    }
    return val <= 5 && val >= -3
}

function validate() {
    $("#btn")[0].disabled = !(validateX($('#x')[0]) && validateY($('#y')[0]));
}
