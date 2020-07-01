function drawTable() {
    let table = $("#table_body")[0];
    let data = JSON.parse(Cookies.get("data"));
    let inner = "";
    for (let i = data.length-1; i >= 0; i--){
        inner += "<tr>"
        inner += "<td>"
        inner += data[i]['X']
        inner += "</td>"
        inner += "<td>"
        inner += data[i]['Y']
        inner += "</td>"
        inner += "<td>"
        inner += data[i]['R']
        inner += "</td>"

        inner += "<td>"
        inner += data[i]['RESULT']
        inner += "</td>"
        inner += "</tr>"
    }
    table.innerHTML = inner
}
drawTable()