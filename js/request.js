

let form = $('#form')
function form_submit() {

    if (!(validateX($('#x')[0]) && validateY($('#y')[0]))){
        return false
    }
    $('#x')[0].value =$('#x')[0].value.replace(',','.')
    $('#y')[0].value =$('#y')[0].value.replace(',','.')
    $.post(form[0].action, form.serialize(), function (answer) {
        if(answer['RESULT_CODE']===0) {
            let data;
            if (typeof Cookies.get("data") !== 'string') {
                data = [answer]
            } else{
                data = JSON.parse(Cookies.get('data'))
                data.push(answer)
            }
            Cookies.set("data", JSON.stringify(data));
            drawPoint(data[data.length-1]['X'],data[data.length-1]['Y'])
            drawTable()
        }else {
            console.log("Bad response")
        }
    });
    return true
}

$('#btn').on('click', form_submit)
