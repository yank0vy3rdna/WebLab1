function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    context.stroke();
}

function draw_coordinates(ctx) {
    let R = ctx.canvas.height / 4
    let R_text = $("select")[0].value
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    //Вертикальные черты
    ctx.fillText(-R_text/2, ctx.canvas.width / 2.05+8, ctx.canvas.height / 2 + R / 2+2)
    ctx.fillText(-R_text, ctx.canvas.width / 2.05+8, ctx.canvas.height / 2 + R+2)
    ctx.fillText(R_text/2, ctx.canvas.width / 2.05+8, ctx.canvas.height / 2 - R / 2+2)
    ctx.fillText(R_text, ctx.canvas.width / 2.05+8, ctx.canvas.height / 2 - R+2)
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2.05, ctx.canvas.height / 2 + R / 2)
    ctx.lineTo(ctx.canvas.width / 1.95, ctx.canvas.height / 2 + R / 2)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2.05, ctx.canvas.height / 2 + R)
    ctx.lineTo(ctx.canvas.width / 1.95, ctx.canvas.height / 2 + R)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2.05, ctx.canvas.height / 2 - R / 2)
    ctx.lineTo(ctx.canvas.width / 1.95, ctx.canvas.height / 2 - R / 2)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2.05, ctx.canvas.height / 2 - R)
    ctx.lineTo(ctx.canvas.width / 1.95, ctx.canvas.height / 2 - R)
    ctx.stroke()
    // Горизонтальные черты
    ctx.fillText(-R_text/2, ctx.canvas.width / 2 - R / 2-6, ctx.canvas.height / 2.2)
    ctx.fillText(-R_text, ctx.canvas.width / 2 - R-3, ctx.canvas.height / 2.2)
    ctx.fillText(R_text/2, ctx.canvas.width / 2 + R / 2-6, ctx.canvas.height / 2.2)
    ctx.fillText(R_text, ctx.canvas.width / 2 + R-3, ctx.canvas.height / 2.2)
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2 - R / 2, ctx.canvas.height / 2.1)
    ctx.lineTo(ctx.canvas.width / 2 - R / 2, ctx.canvas.height / 1.9)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2 - R, ctx.canvas.height / 2.1)
    ctx.lineTo(ctx.canvas.width / 2 - R, ctx.canvas.height / 1.9)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2 + R / 2, ctx.canvas.height / 2.1)
    ctx.lineTo(ctx.canvas.width / 2 + R / 2, ctx.canvas.height / 1.9)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2 + R, ctx.canvas.height / 2.1)
    ctx.lineTo(ctx.canvas.width / 2 + R, ctx.canvas.height / 1.9)
    ctx.stroke()
    // Стрелки

    canvas_arrow(ctx, ctx.canvas.width * 0.1, ctx.canvas.height / 2, ctx.canvas.width * 0.9, ctx.canvas.height / 2)
    ctx.fillText('X', ctx.canvas.width * 0.9, ctx.canvas.height / 2.1)
    canvas_arrow(ctx, ctx.canvas.width / 2, ctx.canvas.height * 0.9, ctx.canvas.width / 2, ctx.canvas.height * 0.1)
    ctx.fillText('Y', ctx.canvas.width / 2.2, ctx.canvas.height * 0.1)
}


function draw() {
    let ctx = $('#canvas')[0].getContext('2d')

    if (ctx) {
        let R = ctx.canvas.height / 4
        ctx.font='8px verdana';
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)


        // Сектор

        ctx.beginPath();
        ctx.moveTo( ctx.canvas.width / 2, ctx.canvas.height / 2);
        ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, R, 0, -Math.PI / 2, true);
        ctx.closePath();
        ctx.strokeStyle = "rgba(91,95,201,0.58)";
        ctx.fillStyle = "rgba(91,95,201,0.58)";
        ctx.fill();
        ctx.stroke();

        // Прямоугольник

        ctx.fillRect(ctx.canvas.width/2-R, ctx.canvas.height/2-R,R,R)

        // Треугольник

        ctx.beginPath()
        ctx.moveTo(ctx.canvas.width/2-R,ctx.canvas.height/2)
        ctx.lineTo(ctx.canvas.width/2,ctx.canvas.height/2+R/2)
        ctx.lineTo(ctx.canvas.width/2,ctx.canvas.height/2)
        ctx.lineTo(ctx.canvas.width/2-R,ctx.canvas.height/2)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()

        // Рисуем координатные оси

        draw_coordinates(ctx)

    } else {
        alert("You're using too old browser")
    }
}
function drawPoint(x,y){
    draw()
    let ctx = $('#canvas')[0].getContext('2d')
    let R = ctx.canvas.height / 4 / $("select")[0].value

    ctx.beginPath();
    ctx.moveTo( ctx.canvas.width / 2+R*x, ctx.canvas.height / 2-R*y);
    ctx.arc( ctx.canvas.width / 2+R*x, ctx.canvas.height / 2-R*y, ctx.canvas.width/300,0,2*Math.PI);
    ctx.closePath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
}

$(window).resize(draw)
$(window).on("load", draw)
$("select").on("change", draw)
