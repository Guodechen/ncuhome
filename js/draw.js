window.onload = function () {
    upper()
    eventWindowLoaded()
}
var Debugger = function(){};
Debugger.log = function(message)  {
    try {
      console.log(message);
    } catch(exception){
       return;
    }
}

function eventWindowLoaded(){
    canvasApp01('首页', 'li1', 'licanvas01');
    canvasApp01('简介', 'li2', 'licanvas02');
    canvasApp01('部门风采', 'li3', 'licanvas03');
    canvasApp01('产品介绍', 'li4', 'licanvas04');
    canvasApp01('15周年庆', 'li5', 'licanvas05');
    canvasApp01('联系/加入', 'li6', 'licanvas06');
    canvasApp02('首页', 'li1', 'licanvas01','container transition translate0');   
}
function canvasSupport(){
     return true;
 }
function canvasApp01(font, id, id2){
    if (!canvasSupport()){
        return;
    }
    var width, height, largeHeader, canvas, ctx, draw, x1,
         y1, x2, y2, v,  x3, y3, x4, y4,falseOrTrue;
    width = document.getElementById(id).offsetWidth;
    height = 44;  
    falseOrTrue = true;
    begin = false;
    var requestId = 0;
    initHeader()
    addListeners();
    function addListeners() {
        window.addEventListener('resize', resize);
        document.getElementById(id).addEventListener('mouseover', canvasTrue);
        document.getElementById(id).addEventListener('mouseout', canvasFalse);
    }
    function canvasFalse() {
        falseOrTrue = false;
        begin = true;
        initHeader();
    }
    function canvasTrue() {
        falseOrTrue = true;
        begin = true;
        initHeader();
    }
    function initHeader() {
        x1 = 0;
        y1 = 0;
        v = 4;
        x2 = 112;
        y2 = 44;
        x3 = 112;
        x4 = 0;
        y3 = 44;
        y4 = 0;
        requestId = window.requestAnimationFrame(drawbackGround);
    }
    function drawbackGround() {
        canvas = document.getElementById(id2);
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath()
        ctx.fillStyle = "#000"
        ctx.font = "normal normal 22px 微软雅黑"
        ctx.textBaseline = "middle"
        ctx.textAlign = "center"
        ctx.globalAlpha = 1
        ctx.fillText(font, width/2, height/2)
        ctx.closePath()
        if (begin) {draw();}
    }
    function resize() {
        width = document.getElementById(id).offsetWidth;
        height = document.getElementById(id).offsetHeight;
        canvas.width = width;
        canvas.height = height;
        addListeners();
    }
    function draw() {
        if ((x4 === width && x3 === 0)) {
            ctx.globalAlpha = 0;
        } else {
            ctx.globalAlpha = 1;
        }
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;
        ctx.lineJoin = 'bevel';
        ctx.lineCap = 'square';
        if (begin) {
            if (falseOrTrue) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(x1, 0);
            ctx.stroke();
            ctx.closePath();

            if (x1 < 112) {
                x1 = x1 + v;
            }
            if (x1 === 112) {
                ctx.beginPath();
                ctx.moveTo(110, 0);
                ctx.lineTo(110, y1);
                ctx.stroke();
                ctx.closePath();
                if (y1 < 44) {
                    y1 = y1 + v;
                }

            } 
            ctx.beginPath();
            ctx.moveTo(112, 44);
            ctx.lineTo(x2, 44);
            ctx.stroke();
            ctx.closePath();
            
            if (x2 > 0) {
                x2 = x2 - v;
            }
            if (x2 === 0) {
                ctx.beginPath();
                ctx.moveTo(0, 44);
                ctx.lineTo(0, y2);
                ctx.stroke();
                ctx.closePath();
                if (y2 > 0) {
                    y2 = y2 - v;
                }
            } 
            } else {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(x3, 0);
            ctx.moveTo(110, 0);
            ctx.lineTo(110, y3);
            ctx.stroke();
            ctx.closePath();
            
            if (y3 > 0) {
                y3 = y3 - v;
            }
            if (y3 === 0) {
                x3 = x3 - v;
                if (x3 === 0) {
                    x3 === 0;
               }
            }
             
           ctx.beginPath();
           ctx.moveTo(0, height);
           ctx.lineTo(0, y4);
           ctx.moveTo(width, height);
           ctx.lineTo(x4, height);
           ctx.stroke();
           ctx.closePath();
           
           if (y4 < 44) {
               y4 = y4 + v;
           }
           if (y4 === 44 && x4 < width) {
               x4 = x4 + v;
               }
        }
        }
        if (x3>0) {
            window.requestAnimationFrame(drawbackGround);
        }
    } 
}
function canvasApp02(font, id, id2, id3){
    if (!canvasSupport()){
        return;
    }
    var width, height, largeHeader, canvas, ctx, draw;
    width = document.getElementById(id).offsetWidth;
    var head = document.getElementById('head')
    height = 42;  
    window.requestAnimationFrame(draw);
    draw()
    function draw() {

        canvas = document.getElementById(id2);
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, width, height);
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "red";
        ctx.lineWidth = 4;
        ctx.lineJoin = 'bevel';
        ctx.lineCap = 'square';
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(40, 40);
        ctx.closePath()
        ctx.beginPath()
        ctx.fillStyle = "#000"
        ctx.font = "normal normal 22px 微软雅黑"
        ctx.textBaseline = "middle"
        ctx.textAlign = "center"
        ctx.globalAlpha = 1
        ctx.fillText(font, width/2, height/2)
        ctx.closePath()
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 2;
        ctx.lineJoin = 'bevel';
        ctx.lineCap = 'square';

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(width, 0);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(width, 0);
        ctx.lineTo(width, height);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(width, height);
        ctx.lineTo(0, height);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.closePath();

        if (head.getAttribute('class') === id3) {
            window.requestAnimationFrame(draw);
        }
        
    }
}
function canvasApp02Clear(id, id2){
    if (!canvasSupport()){
        return;
    }
    var width, height, largeHeader, canvas, ctx, draw;
    width = document.getElementById(id).offsetWidth;
    var head = document.getElementById('head')
    height = 42;  
    canvas = document.getElementById(id2);
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);
}
function canvasApp03() {
    if (!canvasSupport()){
        return;
    }
    var width, height, canvas, ctx, draw, alpha, x1, x2;
    var textX = 0;
    var textX1 = 0;
    var textX2 = 0;
    var a = 0; 
    width = 600;
    height = 300;
    alpha = 0
    x1 = 150
    x2 = 500
    drawWord()
    function drawWord() {
        canvas = document.getElementById('canvas01');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        ctx.lineJoin = 'bevel';
        ctx.lineCap = 'square';
        ctx.clearRect(0, 0, 600, 300);
        message01 = "简介"
        message02 = "About Us"
        alpha += 0.009
        if (alpha >= 1) {
            alpha = 1
        }
        ctx.beginPath()
        ctx.fillStyle = "#333333"
        ctx.font = "normal normal 30px 微软雅黑"
        ctx.textBaseline = "middle"
        ctx.textAlign = "left"
        ctx.globalAlpha = alpha 
        if (textX < 350) {
            a = 8- ( textX /45)　
            textX = textX + a
        }
        if (textX1 < 250 && textX > 200) {
            a = 8- ( textX1 /32)　
            textX1 = textX1 + a 
        }
        if (textX2 < 230 && textX > 200) {
            a = 8- ( textX2 /30)　
            textX2 = textX2 + a 
            // a = textX2 / 40
        }
        var  image01 = new Image();
        image01.src = "./img/brief/01.png";
        
        ctx.fillText(message01, -70 + textX, 110)
        ctx.font = "normal normal 28px 微软雅黑"
        ctx.fillText(message02, 600 - textX1, 170)
        ctx.drawImage(image01, -140 + textX2, 100, 138.06, 92.43)
        ctx.closePath()
        
        if (alpha > 0.9) {
            ctx.globalAlpha = 1;
            ctx.strokeStyle = "#333333";
            ctx.lineWidth = 1;
            ctx.lineJoin = 'bevel';
            ctx.lineCap = 'square';
            ctx.beginPath();
            ctx.moveTo(150, 80);
            ctx.lineTo(x1, 80);
            ctx.stroke();
            if (x1 < 400) {
                x1 = x1 + 8;
            }
            ctx.closePath()

            ctx.beginPath();
            ctx.moveTo(520, 200);
            ctx.lineTo(x2, 200);
            ctx.stroke();
            if (x2 > 250) {
                x2 = x2 - 8;
            }
            ctx.closePath()
        }
        if (textX2 < 230 || x2 > 250) {
            window.requestAnimationFrame(drawWord);
        }
    }
}
function canvasApp04() {
    if (!canvasSupport()){
        return;
    }
    var width, height, canvas, ctx, draw, alpha, x1, x2, x3, x4,a;
    var vy1 = 0
    var vy2 = 0
    width = 130;
    height = 500;
    alpha = 0
    y1 = 100
    y2 = 390
    x1 = 0
    x2 = 0
    x3 = 0
    x4 = 0
    x5 = 0
    x6 = 0
    x7 = 0
    x8 = 0
    x9 = 0
    x10 = 0
    x11 = 0
    drawWord()
    function drawWord() {
        canvas = document.getElementById('teamCanvas01');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#3333";
        ctx.lineWidth = 1;
        ctx.lineJoin = 'bevel';
        ctx.lineCap = 'square';
        ctx.clearRect(0, 0, 600, 300);
        message01 = "部"
        message02 = "门"
        message03 = "风"
        message04 = "采"
        message05 = "O"
        message06 = "u"
        message07 = "r"
        message08 = "T"
        message09 = "e"
        message10 = "a"
        message11 = "m"
        alpha += 0.009
        if (alpha >= 1) {
            alpha = 1
        }
        ctx.fillStyle = "#333333"
        ctx.font = "normal normal 30px 微软雅黑"
        ctx.textBaseline = "middle"
        ctx.textAlign = "left"
        ctx.globalAlpha = alpha 
        if (vy1 < 120) {
            vy1 += 3
        }
        if (vy2 < 165) {
            vy2 += 3
        }
        ctx.beginPath()
        var  image01 = new Image();
        image01.src = "./img/team/0.png";
        ctx.drawImage(image01, 5, vy1 - 120 , 68, 79)
        var  image02 = new Image();
        image02.src = "./img/team/2.png";
        ctx.drawImage(image02, 85, vy2 - 120 , 45, 79)
        ctx.closePath()

        
        if (y1>200) {
            if (x1 < 52) {
                a = 2- ( x1 /26)　
                x1 = x1 + a
            }
            if (x2 < 52 && x1 > 15) {
                a = 2- ( x2 /26)　
                x2 = x2 + a
            }
            if (x3 < 52 && x2 > 15) {
                a = 2- ( x3 /26)　
                x3 = x3 + a
            }
            if (x4 < 52 && x3 > 15) {
                a = 2- ( x4 /26)　
                x4 = x4 + a
            }
        
        ctx.beginPath()
        ctx.globalAlpha = 1;
        ctx.fillText(message01, x1-30, 130)
        ctx.fillText(message02, x2-30, 160)
        ctx.fillText(message03, x3-30, 190)
        ctx.fillText(message04, x4-30, 220)
        ctx.closePath()


        }
        if (alpha > 0.5) {
            ctx.globalAlpha = 1;
            ctx.strokeStyle = "#333333";
            ctx.lineWidth = 2;
            ctx.lineJoin = 'bevel';
            ctx.lineCap = 'square';
            ctx.beginPath();
            ctx.moveTo(0, 95);
            ctx.lineTo(0, y1);
            ctx.stroke();
            if (y1 < 260) {
                y1 = y1 + 2;
            }
            ctx.moveTo(130, 390);
            ctx.lineTo(130, y2);
            ctx.stroke();
            if (y2 > 180) {
                y2 = y2 - 2;
            }
            ctx.closePath()
        }
        ctx.beginPath()
        ctx.globalAlpha = 1;
        ctx.font = "normal normal 28px 微软雅黑"
        ctx.rotate(90*Math.PI/180)
        ctx.fillText(message05, 200, -142 + x5)
        ctx.fillText(message06, 222, -142 + x6)
        ctx.fillText(message07, 242, -142 + x7)
        ctx.fillText(message08, 266, -142 + x8)
        ctx.fillText(message09, 286, -142 + x9)
        ctx.fillText(message10, 306, -142 + x10)
        ctx.fillText(message11, 326, -142 + x11)
        if (y1>200) {
            if (x5 < 42) {
                a = 2- ( x5 /36)　
                x5 = x5 + a
            }
            if (x6 < 42 && x5 > 15) {
                a = 2- ( x6 /36)　
                x6 = x6 + a
            }
            if (x7 < 42 && x6 > 15) {
                a = 2- ( x7 /36)　
                x7 = x7 + a
            }
            if (x8 < 42 && x7 > 15) {
                a = 2- ( x8 /36)　
                x8 = x8 + a
            }
            if (x9 < 42 && x8 > 15) {
                a = 2- ( x9 /36)　
                x9 = x9 + a
            }
            if (x10 < 42 && x9 > 15) {
                a = 2- ( x10 /36)　
                x10 = x10 + a
            }
            if (x11 < 42 && x10 > 15) {
                a = 2- ( x11 /36)　
                x11 = x11 + a
            }
        }
        
        ctx.closePath()
        if (Math.ceil(x4) < 52 ) {
            window.requestAnimationFrame(drawWord);
        }
    }
}
function canvasApp05() {
    if (!canvasSupport()){
        return;
    }
    ifcanvasClose = false
    var head = document.getElementById('teamCanvas')
    var teamCanvas = document.getElementById('teamCanvas')
    var teamCanvas02 = document.getElementById('teamCanvas02')
    teamCanvas.style.display = 'block';
    teamCanvas02.style.display = 'block';
    var width, height, canvas, ctx, alpha;
    
    width = 970;
    height = 400;
    var marginnum = 970;
    if (head.getAttribute('class') === "teamClass teamClass0") {
        draw();
    }
    if (head.getAttribute('class') === "teamClass teamClass1") {
        draw1();
        
    }
    if (head.getAttribute('class') === "teamClass teamClass2") {
        draw2();
        
    }
    if (head.getAttribute('class') === "teamClass teamClass3") {
        draw3();
        
    }
    if (head.getAttribute('class') === "teamClass teamClass4") {
        draw4();
        
    }
    
    function draw() {
        var canvas = document.getElementById("teamCanvas")
        var context = canvas.getContext("2d")

        var image = new Image()
        var image01 = new Image()
        var isMouseDown = false
        var scale
        canvas.width = 397
        canvas.height = 320
        canvas.style.marginLeft = 390 + "px"
        canvas.style.marginTop = 40 + "px" 
        context.clearRect(0, 0, canvas.width, canvas.height);

        var canvasTow = document.getElementById("teamCanvas02")
        var ctx = canvasTow.getContext("2d")
        canvasTow.width = width
        canvasTow.height = height
        ctx.clearRect(0, 0, canvasTow.width, canvasTow.height);

        drawImage()
        function drawImage(){
            alpha = 0
            canvas.width = 397
            canvas.height = 320
            canvas.style.marginLeft = 390 + "px"
            canvas.style.marginTop = 40 + "px" 
            
            image.src = "./img/team/bgs+mb.png"
            image01.src = "./img/team/bgs.png"
            image.onload = function(){
                context.globalAlpha = 1
                context.drawImage( image01 , 0, 0 , canvas.width , canvas.height)

                drawLine()
            }       
        }
        var xx = 1;
        var yy = canvas.height/2;
        var xx2 = canvas.width;
        var yy2 = yy - 1;
        var lineAlpha = 1;
        
        function drawLine() {
            context.globalAlpha = 1
            var image01Data = context.getImageData(0, 0 ,canvas.width , canvas.height)
            var pixelData = image01Data.data
            for( var i = 0 ; i < canvas.width * canvas.height ; i++){
                if (pixelData[i*4+0]>0 || pixelData[i*4+1]>0 || pixelData[i*4+2]>0) {
                pixelData[i*4+0] = 255;
                pixelData[i*4+1] = 255;
                pixelData[i*4+2] = 255;
                }
            }
            for( var i = 0 ; i < xx ; i++){
                for (var j = 0; j < yy; j++) {
                    if (pixelData[(j*canvas.width+i)*4+3]>0) {
                    pixelData[(j*canvas.width+i)*4+0] = 0;
                    pixelData[(j*canvas.width+i)*4+1] = 0;
                    pixelData[(j*canvas.width+i)*4+2] = 0;
                }
                }
            }

            for( var i = canvas.width ; i > xx2 ; i--){
                for (var j = canvas.height; j > yy2; j--) {
                    if (pixelData[(j*canvas.width+i)*4+3]>0) {
                        pixelData[(j*canvas.width+i)*4+0] = 0;
                        pixelData[(j*canvas.width+i)*4+1] = 0;
                        pixelData[(j*canvas.width+i)*4+2] = 0;
                    }
                }
            }
            context.putImageData( image01Data , 0 , 0 , 0 , 0 , canvas.width , canvas.height )
            if (xx < canvas.width ) {
                xx = xx + 15;
                xx2 = xx2 - 15;
                 window.requestAnimationFrame(drawLine);
            }
            if (xx2 <= 1 ) {
                context.clearRect(0, 0,canvas.width , canvas.height );
                drawPicture()

            }
        }
        function drawPicture() {

            context.globalAlpha = alpha
            context.drawImage( image , (canvas.width-image.width)/2 , canvas.height - image.height
                 , image.width , image.height )

            if (alpha <= 1) {
                alpha = alpha + 0.05
                 window.requestAnimationFrame(drawLine);
            }
            if (alpha >= 1) {
                drawWord()
            }
        }   
        function drawWord() {
            var canvasTow = document.getElementById("teamCanvas02")
            var ctx = canvasTow.getContext("2d")
            var canvasTow, ctx, draw, alpha, x1, x2, textX, textX1, textX2, textX3;
            textX = 0;
            textX1 = 0;
            textX2 = 0;
            textX3 = 0;
            var x1 = 423;
            var y1 = 130;
            var x2 = 442;
            var y2 = 350;
            drawWord1()
            
            function drawWord1() {
                canvasTow.width = width;
                canvasTow.height = height;
                ctx.globalAlpha = 1;
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                ctx.lineJoin = 'bevel';
                ctx.lineCap = 'square';
                ctx.clearRect(0, 0, canvasTow.width, canvasTow.height);
                message01 = "霸道总裁是我的代名词"
                message02 = "Microsoft office是我的武器"
                message03 = "每天机房总能见到我忙碌的身影"
                message04 = "不标红你是我对你最大的温柔"
                message05 = "办公室"
                ctx.beginPath()
                ctx.fillStyle = "#333333"
                ctx.font = "normal normal 18px 微软雅黑"
                ctx.textBaseline = "top"
                ctx.textAlign = "left"
                ctx.globalAlpha = 1 
                if (textX < 406) {
                    var a
                    a = 40- ( textX /10.6)　
                    textX = textX + a
                }
                if (textX1 < 408 && textX > 200) {
                    a = 40- ( textX1 /10.6)　
                    textX1 = textX1 + a
                }
                if (textX2 < 421 && textX1 > 200) {
                    a = 40- ( textX2 /10.8)　
                    textX2 = textX2 + a
                }
                if (textX3 < 414 && textX2 > 200) {
                    a = 40- ( textX3 /10.6)　
                    textX3 = textX3 + a
                }
                ctx.fillText(message01, -200 + textX, 182)
                ctx.font = "normal normal 30px 微软雅黑"
                ctx.fillText(message05, -120 + textX, 85)
                ctx.font = "normal normal 18px 微软雅黑"
                ctx.fillText(message02, -225 + textX1, 203)
                ctx.fillText(message03, -252 + textX2, 224)
                ctx.fillText(message04, -235 + textX3, 245)
                ctx.closePath()
                ctx.globalAlpha = 1;
                ctx.strokeStyle = "#08c7fe";
                ctx.lineWidth = 3;
                ctx.lineJoin = 'bevel';
                ctx.lineCap = 'square';
                ctx.beginPath();
                ctx.moveTo(423, 130);
                ctx.lineTo(x1, 130);
                ctx.stroke();
                ctx.moveTo(263, 130);
                ctx.lineTo(263, y1);
                ctx.stroke();
                if (x1 > 263) {
                    x1 = x1 - 8;
                }
                if (x1 <= 263 && y1 <172) {
                    y1 = y1+ 8
                }
                ctx.closePath()

                ctx.beginPath();
                ctx.moveTo(442, 350);
                ctx.lineTo(x2, 350);
                ctx.stroke();
                ctx.moveTo(266, 350);
                ctx.lineTo(266, y2);
                ctx.stroke();
                if (x2 > 266) {
                    x2 = x2 - 8; 
                }
                if (x2 <= 266 && y2 > 280) {
                    y2 = y2 - 8
                }
                ctx.closePath()
                if (textX3 < 413 || y1!=178) {
                window.requestAnimationFrame(drawWord1);
                }
                if (textX3 > 413) {
                ifcanvasClose = true
                }
            }
        }
    }
    function draw1() {
        var canvas = document.getElementById("teamCanvas")
        var context = canvas.getContext("2d")
        var image = new Image()
        var image01 = new Image()
        var isMouseDown = false
        var scale
        canvas.width = 657
        canvas.height = 285
        canvas.style.marginLeft = 60 + "px"
        canvas.style.marginTop = 50 + "px"
        context.clearRect(0, 0, canvas.width, canvas.height);

        var canvasTow = document.getElementById("teamCanvas02")
        var ctx = canvasTow.getContext("2d")
        canvasTow.width = width
        canvasTow.height = height
        ctx.clearRect(0, 0, canvasTow.width, canvasTow.height);

        drawImage()
        function drawImage(){
            alpha = 0
            canvas.width = 657
            canvas.height = 285
            canvas.style.marginLeft = 60 + "px"
            canvas.style.marginTop = 50 + "px" 
            
            image.src = "./img/team/yy+mb.png"
            image01.src = "./img/team/yy.png"
            image.onload = function(){
                context.globalAlpha = 1
                context.drawImage( image01 , 0, 0 , canvas.width , canvas.height)

                drawLine()
            }       
        }
        var xx = 1;
        var yy = canvas.height/2;
        var xx2 = canvas.width;
        var yy2 = yy - 1;
        var lineAlpha = 1;
        
        function drawLine() {
            context.globalAlpha = 1
            var image01Data = context.getImageData(0, 0 ,canvas.width , canvas.height)
            var pixelData = image01Data.data
            for( var i = 0 ; i < canvas.width * canvas.height ; i++){
                if (pixelData[i*4+0]>0 || pixelData[i*4+1]>0 || pixelData[i*4+2]>0) {
                pixelData[i*4+0] = 255;
                pixelData[i*4+1] = 255;
                pixelData[i*4+2] = 255;
                }
            }
            for( var i = 0 ; i < xx ; i++){
                for (var j = 0; j < yy; j++) {
                    if (pixelData[(j*canvas.width+i)*4+3]>0) {
                    pixelData[(j*canvas.width+i)*4+0] = 0;
                    pixelData[(j*canvas.width+i)*4+1] = 0;
                    pixelData[(j*canvas.width+i)*4+2] = 0;
                }
                }
            }

            for( var i = canvas.width ; i > xx2 ; i--){
                for (var j = canvas.height; j > yy2; j--) {
                    if (pixelData[(j*canvas.width+i)*4+3]>0) {
                        pixelData[(j*canvas.width+i)*4+0] = 0;
                        pixelData[(j*canvas.width+i)*4+1] = 0;
                        pixelData[(j*canvas.width+i)*4+2] = 0;
                    }
                }
            }
            context.putImageData( image01Data , 0 , 0 , 0 , 0 , canvas.width , canvas.height )
            if (xx < canvas.width ) {
                xx = xx + 20;
                xx2 = xx2 - 20;
                 window.requestAnimationFrame(drawLine);
            }
            if (xx2 <= 1 ) {
                context.clearRect(0, 0,canvas.width , canvas.height );
                drawPicture()

            }
        }
        function drawPicture() {

            context.globalAlpha = alpha
            context.drawImage( image , (canvas.width-image.width)/2 , canvas.height - image.height
                 , image.width , image.height )

            if (alpha <= 1) {
                alpha = alpha + 0.05
                 window.requestAnimationFrame(drawLine);
            }
            if (alpha >= 1) {
                drawWord()
            }
        }   
        function drawWord() {
            var canvasTow = document.getElementById("teamCanvas02")
            var ctx = canvasTow.getContext("2d")
            var canvasTow, ctx, draw, alpha, x1, x2, textX, textX1, textX2, textX3;
            textX = 0;
            textX1 = 0;
            textX2 = 0;
            textX3 = 0;
            var x1 = 674;
            var y1 = 110;
            var x2 = 706;
            var y2 = 260;
            drawWord1()
            
            function drawWord1() {
                canvasTow.width = width;
                canvasTow.height = height;
                ctx.globalAlpha = 1;
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                ctx.lineJoin = 'bevel';
                ctx.lineCap = 'square';
                ctx.clearRect(0, 0, canvasTow.width, canvasTow.height);
                message01 = "十项全能是为我量身打造"
                message02 = "做的了Axure产品原型"
                message03 = "推文运营更不在话下"
                message04 = "在忙碌中体会出新的人生意义"
                message05 = "运营部"
                ctx.beginPath()
                ctx.fillStyle = "#333333"
                ctx.font = "normal normal 18px 微软雅黑"
                ctx.textBaseline = "top"
                ctx.textAlign = "left"
                ctx.globalAlpha = 1 
                if (textX < 245) {
                    var a
                    a = 25- ( textX /10.6)　
                    textX = textX + a
                }
                if (textX1 < 232 && textX > 100) {
                    a = 25- ( textX1 /10.6)　
                    textX1 = textX1 + a
                }
                if (textX2 < 222 && textX1 > 100) {
                    a = 25- ( textX2 /10.8)　
                    textX2 = textX2 + a
                }
                if (textX3 < 258 && textX2 > 100) {
                    a = 25- ( textX3 /10.6)　
                    textX3 = textX3 + a
                }
                ctx.fillText(message01, 970 - textX, 138)
                ctx.font = "normal normal 30px 微软雅黑"
                ctx.fillText(message05, 980 - textX, 70)
                ctx.font = "normal normal 18px 微软雅黑"
                ctx.fillText(message02, 970 - textX1, 162)
                ctx.fillText(message03, 970 - textX2, 185)
                ctx.fillText(message04, 970 - textX3, 208)
                ctx.closePath()
                ctx.globalAlpha = 1;
                ctx.strokeStyle = "#08c7fe";
                ctx.lineWidth = 3;
                ctx.lineJoin = 'bevel';
                ctx.lineCap = 'square';
                ctx.beginPath();
                ctx.moveTo(673, 110);
                ctx.lineTo(x1, 110);
                ctx.stroke();
                ctx.moveTo(850, 110);
                ctx.lineTo(850, y1);
                ctx.stroke();
                
                if (x1 < 850) {
                    x1 = x1 + 8;
                }
                if (x1 >= 850 && y1 <130) {
                    y1 = y1+ 8
                }
                ctx.closePath()

                ctx.beginPath();
                ctx.moveTo(706, 260);
                ctx.lineTo(x2, 260);
                ctx.stroke();
                ctx.moveTo(850, 260);
                ctx.lineTo(850, y2);
                ctx.stroke();
                if (x2 < 850) {
                    x2 = x2 + 8; 
                }
                if (x2 >= 850 && y2 > 240) {
                    y2 = y2 - 8
                }
                ctx.closePath()
                if (textX3 < 258 || y1!=134) {
                window.requestAnimationFrame(drawWord1);
                }
                if (textX3 > 258) {
                ifcanvasClose = true
                }
            }
        }
    }
    function draw2() {
        var canvas = document.getElementById("teamCanvas")
        var context = canvas.getContext("2d")
        var image = new Image()
        var image01 = new Image()
        var isMouseDown = false
        var scale
        canvas.width = 322
        canvas.height = 359
        canvas.style.marginLeft = 240 + "px"
        canvas.style.marginTop = 20 + "px" 
        context.clearRect(0, 0, canvas.width, canvas.height);

        var canvasTow = document.getElementById("teamCanvas02")
        var ctx = canvasTow.getContext("2d")
        canvasTow.width = width
        canvasTow.height = height
        ctx.clearRect(0, 0, canvasTow.width, canvasTow.height);

        drawImage()
        function drawImage(){
            alpha = 0
            canvas.width = 322
            canvas.height = 359
            canvas.style.marginLeft = 240 + "px"
            canvas.style.marginTop = 20 + "px" 
            
            image.src = "./img/team/sj+mb.png"
            image01.src = "./img/team/sj.png"
            image.onload = function(){
                context.globalAlpha = 1
                context.drawImage( image01 , 0, 0 , canvas.width , canvas.height)

                drawLine()
            }       
        }
        var xx = 1;
        var yy = canvas.height/2;
        var xx2 = canvas.width;
        var yy2 = yy - 1;
        var lineAlpha = 1;
        
        function drawLine() {
            context.globalAlpha = 1
            var image01Data = context.getImageData(0, 0 ,canvas.width , canvas.height)
            var pixelData = image01Data.data
            for( var i = 0 ; i < canvas.width * canvas.height ; i++){
                if (pixelData[i*4+0]>0 || pixelData[i*4+1]>0 || pixelData[i*4+2]>0) {
                pixelData[i*4+0] = 255;
                pixelData[i*4+1] = 255;
                pixelData[i*4+2] = 255;
                }
            }
            for( var i = 0 ; i < xx ; i++){
                for (var j = 0; j < yy; j++) {
                    if (pixelData[(j*canvas.width+i)*4+3]>0) {
                    pixelData[(j*canvas.width+i)*4+0] = 0;
                    pixelData[(j*canvas.width+i)*4+1] = 0;
                    pixelData[(j*canvas.width+i)*4+2] = 0;
                }
                }
            }

            for( var i = canvas.width ; i > xx2 ; i--){
                for (var j = canvas.height; j > yy2; j--) {
                    if (pixelData[(j*canvas.width+i)*4+3]>0) {
                        pixelData[(j*canvas.width+i)*4+0] = 0;
                        pixelData[(j*canvas.width+i)*4+1] = 0;
                        pixelData[(j*canvas.width+i)*4+2] = 0;
                    }
                }
            }
            context.putImageData( image01Data , 0 , 0 , 0 , 0 , canvas.width , canvas.height )
            if (xx < canvas.width ) {
                xx = xx + 14;
                xx2 = xx2 - 14;
                 window.requestAnimationFrame(drawLine);
            }
            if (xx2 <= 1 ) {
                context.clearRect(0, 0,canvas.width , canvas.height );
                drawPicture()

            }
        }
        function drawPicture() {

            context.globalAlpha = alpha
            context.drawImage( image , (canvas.width-image.width)/2 , canvas.height - image.height
                 , image.width , image.height )

            if (alpha <= 1) {
                alpha = alpha + 0.05
                 window.requestAnimationFrame(drawLine);
            }
            if (alpha >= 1) {
                drawWord()
            }
        }   
        function drawWord() {
            var canvasTow = document.getElementById("teamCanvas02")
            var ctx = canvasTow.getContext("2d")
            var canvasTow, ctx, draw, alpha, x1, x2, textX, textX1, textX2, textX3;
            textX = 0;
            textX1 = 0;
            textX2 = 0;
            textX3 = 0;
            var x1 = 510;
            var y1 = 144;
            var x2 = 555;
            var y2 = 280;
            drawWord1()
            
            function drawWord1() {
                canvasTow.width = width;
                canvasTow.height = height;
                ctx.globalAlpha = 1;
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                ctx.lineJoin = 'bevel';
                ctx.lineCap = 'square';
                ctx.clearRect(0, 0, canvasTow.width, canvasTow.height);
                message01 = "用PS彩绘生活"
                message02 = "用AE、PR创意人生"
                message03 = "世界在我手里"
                message04 = "怎样都是最美的姿态"
                message05 = "设计部"
                ctx.beginPath()
                ctx.fillStyle = "#333333"
                ctx.font = "normal normal 18px 微软雅黑"
                ctx.textBaseline = "top"
                ctx.textAlign = "left"
                ctx.globalAlpha = 1 
                if (textX < 335) {
                    var a
                    a = 35- ( textX /10.6)　
                    textX = textX + a
                }
                if (textX1 < 360 && textX > 100) {
                    a = 35- ( textX1 /10.6)　
                    textX1 = textX1 + a
                }
                if (textX2 < 334 && textX1 > 100) {
                    a = 35- ( textX2 /10.8)　
                    textX2 = textX2 + a
                }
                if (textX3 < 364 && textX2 > 100) {
                    a = 35- ( textX3 /10.6)　
                    textX3 = textX3 + a
                }
                ctx.fillText(message01, 970 - textX, 108)
                ctx.font = "normal normal 30px 微软雅黑"
                ctx.fillText(message05, 970 - textX, 235)
                ctx.font = "normal normal 18px 微软雅黑"
                ctx.fillText(message02, 970 - textX1, 132)
                ctx.fillText(message03, 970 - textX2, 155)
                ctx.fillText(message04, 970 - textX3, 178)
                ctx.closePath()
                ctx.globalAlpha = 1;
                ctx.strokeStyle = "#08c7fe";
                ctx.lineWidth = 3;
                ctx.lineJoin = 'bevel';
                ctx.lineCap = 'square';
                ctx.beginPath();
                ctx.moveTo(510, 144);
                ctx.lineTo(510, y1);
                ctx.stroke();
                ctx.moveTo(510, 120);
                ctx.lineTo(x1, 120);
                ctx.stroke();
                
                if (y1 > 120) {
                    y1 = y1 - 8
                }
                if (x1 < 600 && y1 <=120) {
                    x1 = x1 + 8
                }
                ctx.closePath()

                ctx.beginPath();
                ctx.moveTo(555, 280);
                ctx.lineTo(x2, 280);
                ctx.stroke();
                ctx.moveTo(747, 280);
                ctx.lineTo(747, y2);
                ctx.stroke();
                if (x2 < 747) {
                    x2 = x2 + 8; 
                }
                if (x2 >= 747 && y2 > 220) {
                    y2 = y2 - 8
                }
                ctx.closePath()
                if (textX3 < 364 || y2 <= 215) {
                window.requestAnimationFrame(drawWord1);
                }
                if (textX3 > 364) {
                ifcanvasClose = true
                }
            }
        }
    }
    function draw3() {
        var canvas = document.getElementById("teamCanvas")
        var context = canvas.getContext("2d")
        // xImgOnclick()
        var image = new Image()
        var image01 = new Image()
        var isMouseDown = false
        var scale
        canvas.width = 373
        canvas.height = 350
        canvas.style.marginLeft = 200 + "px"
        canvas.style.marginTop = 35 + "px" 
        context.clearRect(0, 0, canvas.width, canvas.height);

        var canvasTow = document.getElementById("teamCanvas02")
        var ctx = canvasTow.getContext("2d")
        canvasTow.width = width
        canvasTow.height = height
        ctx.clearRect(0, 0, canvasTow.width, canvasTow.height);

        drawImage()
        function drawImage(){
            alpha = 0
            canvas.width = 373
            canvas.height = 350
            canvas.style.marginLeft = 200 + "px"
            canvas.style.marginTop = 35 + "px" 
            
            image.src = "./img/team/kf+mb.png"
            image01.src = "./img/team/kf.png"
            image.onload = function(){
                context.globalAlpha = 1
                context.drawImage( image01 , 0, 0 , canvas.width , canvas.height)

                drawLine()
            }       
        }
        var xx = 1;
        var yy = canvas.height/2;
        var xx2 = canvas.width;
        var yy2 = yy - 1;
        var lineAlpha = 1;
        
        function drawLine() {
            context.globalAlpha = 1
            var image01Data = context.getImageData(0, 0 ,canvas.width , canvas.height)
            var pixelData = image01Data.data
            for( var i = 0 ; i < canvas.width * canvas.height ; i++){
                if (pixelData[i*4+0]>0 || pixelData[i*4+1]>0 || pixelData[i*4+2]>0) {
                pixelData[i*4+0] = 255;
                pixelData[i*4+1] = 255;
                pixelData[i*4+2] = 255;
                }
            }
            for( var i = 0 ; i < xx ; i++){
                for (var j = 0; j < yy; j++) {
                    if (pixelData[(j*canvas.width+i)*4+3]>0) {
                    pixelData[(j*canvas.width+i)*4+0] = 0;
                    pixelData[(j*canvas.width+i)*4+1] = 0;
                    pixelData[(j*canvas.width+i)*4+2] = 0;
                }
                }
            }

            for( var i = canvas.width ; i > xx2 ; i--){
                for (var j = canvas.height; j > yy2; j--) {
                    if (pixelData[(j*canvas.width+i)*4+3]>0) {
                        pixelData[(j*canvas.width+i)*4+0] = 0;
                        pixelData[(j*canvas.width+i)*4+1] = 0;
                        pixelData[(j*canvas.width+i)*4+2] = 0;
                    }
                }
            }
            context.putImageData( image01Data , 0 , 0 , 0 , 0 , canvas.width , canvas.height )
            if (xx < canvas.width ) {
                xx = xx + 14;
                xx2 = xx2 - 14;
                 window.requestAnimationFrame(drawLine);
            }
            if (xx2 <= 1 ) {
                context.clearRect(0, 0,canvas.width , canvas.height );
                drawPicture()

            }
        }
        function drawPicture() {

            context.globalAlpha = alpha
            context.drawImage( image , (canvas.width-image.width)/2 , canvas.height - image.height
                 , image.width , image.height )

            if (alpha <= 1) {
                alpha = alpha + 0.05
                 window.requestAnimationFrame(drawLine);
            }
            if (alpha >= 1) {
                drawWord()
            }
        }   
        function drawWord() {
            var canvasTow = document.getElementById("teamCanvas02")
            var ctx = canvasTow.getContext("2d")
            var canvasTow, ctx, draw, alpha, x1, x2, textX, textX1, textX2, textX3;
            textX = 0;
            textX1 = 0;
            textX2 = 0;
            textX3 = 0;
            var x1 = 540;
            var y1 = 90;
            var x2 = 568;
            var y2 = 260;
            var y3 = 74;
            drawWord1()
            
            function drawWord1() {
                canvasTow.width = width;
                canvasTow.height = height;
                ctx.globalAlpha = 1;
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                ctx.lineJoin = 'bevel';
                ctx.lineCap = 'square';
                ctx.clearRect(0, 0, canvasTow.width, canvasTow.height);
                message01 = "简单的符号组成代码"
                message02 = "用键盘敲击出扣人心弦的响声"
                message03 = "以sublime为剑"
                message04 = "诉说我的青春态度"
                message05 = "开发部"
                ctx.beginPath()
                ctx.fillStyle = "#333333"
                ctx.font = "normal normal 18px 微软雅黑"
                ctx.textBaseline = "top"
                ctx.textAlign = "left"
                ctx.globalAlpha = 1 
                if (textX < 315) {
                    var a
                    a = 32- ( textX /10.6)　
                    textX = textX + a
                }
                if (textX1 < 350 && textX > 100) {
                    a = 35- ( textX1 /10.6)　
                    textX1 = textX1 + a
                }
                if (textX2 < 295 && textX1 > 100) {
                    a = 32- ( textX2 /10.8)　
                    textX2 = textX2 + a
                }
                if (textX3 < 305 && textX2 > 100) {
                    a = 32- ( textX3 /10.6)　
                    textX3 = textX3 + a
                }
                ctx.fillText(message01, 970 - textX, 138)
                ctx.font = "normal normal 30px 微软雅黑"
                ctx.fillText(message05, 1020 - textX, 263)
                ctx.font = "normal normal 18px 微软雅黑"
                ctx.fillText(message02, 970 - textX1, 162)
                ctx.fillText(message03, 970 - textX2, 185)
                ctx.fillText(message04, 970 - textX3, 208)
                ctx.globalAlpha = 1;
                ctx.strokeStyle = "#08c7fe";
                ctx.lineWidth = 3;
                ctx.lineJoin = 'bevel';
                ctx.lineCap = 'square';
                ctx.beginPath();
                ctx.moveTo(540, 90);
                ctx.lineTo(540, y1);
                ctx.stroke();
                ctx.moveTo(540, 74);
                ctx.lineTo(x1, 74);
                ctx.stroke();
                ctx.moveTo(750, 74);
                ctx.lineTo(750, y3);
                ctx.stroke();
                
                if (y1 > 74) {
                    y1 = y1 - 8
                }
                if (x1 < 750 && y1 <=74) {
                    x1 = x1 + 10
                }
                if (y3 < 130 && x1 >=750) {
                    y3 = y3 + 8
                }
                ctx.closePath()

                ctx.beginPath();
                ctx.moveTo(568, 260);
                ctx.lineTo(x2, 260);
                ctx.stroke();
                ctx.moveTo(752, 260);
                ctx.lineTo(752, y2);
                ctx.stroke();
                if (x2 < 752) {
                    x2 = x2 + 8; 
                }
                if (x2 >= 752 && y2 > 250) {
                    y2 = y2 - 8
                }
                ctx.closePath()
                if (textX3 < 307 || y2 <= 215) {
                window.requestAnimationFrame(drawWord1);
                }
                if (textX3 > 307) {
                ifcanvasClose = true
                }
            }
        }
    }
    function draw4() {
        var canvas = document.getElementById("teamCanvas")
        var context = canvas.getContext("2d")
        var image = new Image()
        var image01 = new Image()
        var isMouseDown = false
        var scale
        canvas.width = 337
        canvas.height = 338
        canvas.style.marginLeft = 410 + "px"
        canvas.style.marginTop = 40 + "px" 
        context.clearRect(0, 0, canvas.width, canvas.height);

        var canvasTow = document.getElementById("teamCanvas02")
        var ctx = canvasTow.getContext("2d")
        canvasTow.width = width
        canvasTow.height = height
        ctx.clearRect(0, 0, canvasTow.width, canvasTow.height);

        drawImage()
        function drawImage(){
            alpha = 0
            canvas.width = 337
            canvas.height = 338
            canvas.style.marginLeft = 410 + "px"
            canvas.style.marginTop = 40 + "px" 
            
            image.src = "./img/team/yw+mb.png"
            image01.src = "./img/team/yw.png"
            image.onload = function(){
                context.globalAlpha = 1
                context.drawImage( image01 , 0, 0 , canvas.width , canvas.height)

                drawLine()
            }       
        }
        var xx = 1;
        var yy = canvas.height/2;
        var xx2 = canvas.width;
        var yy2 = yy - 1;
        var lineAlpha = 1;
        
        function drawLine() {
            context.globalAlpha = 1
            var image01Data = context.getImageData(0, 0 ,canvas.width , canvas.height)
            var pixelData = image01Data.data
            for( var i = 0 ; i < canvas.width * canvas.height ; i++){
                if (pixelData[i*4+0]>0 || pixelData[i*4+1]>0 || pixelData[i*4+2]>0) {
                pixelData[i*4+0] = 255;
                pixelData[i*4+1] = 255;
                pixelData[i*4+2] = 255;
                }
            }
            for( var i = 0 ; i < xx ; i++){
                for (var j = 0; j < yy; j++) {
                    if (pixelData[(j*canvas.width+i)*4+3]>0) {
                    pixelData[(j*canvas.width+i)*4+0] = 0;
                    pixelData[(j*canvas.width+i)*4+1] = 0;
                    pixelData[(j*canvas.width+i)*4+2] = 0;
                }
                }
            }

            for( var i = canvas.width ; i > xx2 ; i--){
                for (var j = canvas.height; j > yy2; j--) {
                    if (pixelData[(j*canvas.width+i)*4+3]>0) {
                        pixelData[(j*canvas.width+i)*4+0] = 0;
                        pixelData[(j*canvas.width+i)*4+1] = 0;
                        pixelData[(j*canvas.width+i)*4+2] = 0;
                    }
                }
            }
            context.putImageData( image01Data , 0 , 0 , 0 , 0 , canvas.width , canvas.height )
            if (xx < canvas.width ) {
                xx = xx + 15;
                xx2 = xx2 - 15;
                 window.requestAnimationFrame(drawLine);
            }
            if (xx2 <= 1 ) {
                context.clearRect(0, 0,canvas.width , canvas.height );
                drawPicture()

            }
        }
        function drawPicture() {

            context.globalAlpha = alpha
            context.drawImage( image , (canvas.width-image.width)/2 , canvas.height - image.height
                 , image.width , image.height )

            if (alpha <= 1) {
                alpha = alpha + 0.05
                 window.requestAnimationFrame(drawLine);
            }
            if (alpha >= 1) {
                drawWord()
            }
        }   
        function drawWord() {
            var canvasTow = document.getElementById("teamCanvas02")
            var ctx = canvasTow.getContext("2d")
            var canvasTow, ctx, draw, alpha, x1, x2, textX, textX1, textX2, textX3;
            textX = 0;
            textX1 = 0;
            textX2 = 0;
            textX3 = 0;
            var x1 = 437;
            var y1 = 67;
            var x2 = 413;
            var y2 = 253;
            var x3 = 485;
            var y3 = 75;

            drawWord1()
            
            function drawWord1() {
                canvasTow.width = width;
                canvasTow.height = height;
                ctx.globalAlpha = 1;
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                ctx.lineJoin = 'bevel';
                ctx.lineCap = 'square';
                ctx.clearRect(0, 0, canvasTow.width, canvasTow.height);
                message01 = "拆机是我的日常"
                message02 = "不尽的崩溃系统伴我成长"
                message03 = "您满意的笑容"
                message04 = "是我奋斗的目标"
                message05 = "应维部"
                ctx.beginPath()
                ctx.fillStyle = "#333333"
                ctx.font = "normal normal 18px 微软雅黑"
                ctx.textBaseline = "top"
                ctx.textAlign = "left"
                ctx.globalAlpha = 1 
                if (textX < 406) {
                    var a
                    a = 40- ( textX /10.6)　
                    textX = textX + a
                }
                if (textX1 < 370 && textX > 200) {
                    a = 40- ( textX1 /10.6)　
                    textX1 = textX1 + a
                }
                if (textX2 < 415 && textX1 > 200) {
                    a = 40- ( textX2 /10.8)　
                    textX2 = textX2 + a
                }
                if (textX3 < 406 && textX2 > 200) {
                    a = 40- ( textX3 /10.6)　
                    textX3 = textX3 + a
                }
                ctx.fillText(message01, -200 + textX, 112)
                ctx.font = "normal normal 30px 微软雅黑"
                ctx.fillText(message05, -130 + textX, 255)
                ctx.font = "normal normal 18px 微软雅黑"
                ctx.fillText(message02, -200 + textX1, 133)
                ctx.fillText(message03, -200 + textX2, 154)
                ctx.fillText(message04, -200 + textX3, 175)
                ctx.closePath()
                ctx.globalAlpha = 1;
                ctx.strokeStyle = "#08c7fe";
                ctx.lineWidth = 3;
                ctx.lineJoin = 'bevel';
                ctx.lineCap = 'square';
                ctx.beginPath();
                ctx.moveTo(485, 75);
                ctx.lineTo(485, y3);
                ctx.stroke();
                ctx.moveTo(485, 67);
                ctx.lineTo(x3, 67);
                ctx.stroke();
                ctx.moveTo(437, 67);
                ctx.lineTo(x1, 67);
                ctx.stroke();
                ctx.moveTo(261, 67);
                ctx.lineTo(261, y1);
                ctx.stroke();
                if (y3 > 67) {
                    y3 = y3 - 8;
                }
                if (x3 > 473 && y3 <= 67) {
                    x3 = x3 - 2
                }
                if (x1 > 261 && x3 <= 473) {
                    x1 = x1 - 8
                }
                if (y1 < 95 && x1 <= 261) {
                    y1 = y1 + 8
                }
                ctx.closePath()

                ctx.beginPath();
                ctx.moveTo(413, 253);
                ctx.lineTo(x2, 253);
                ctx.stroke();
                ctx.moveTo(261, 253);
                ctx.lineTo(261, y2);
                ctx.stroke();
                if (x2 > 261) {
                    x2 = x2 - 8; 
                }
                if (x2 <= 261 && y2 > 215) {
                    y2 = y2 - 8
                }
                ctx.closePath()
                if (textX3 < 406 || y1!=99) {
                window.requestAnimationFrame(drawWord1);
                }
                if (textX3 > 406) {
                ifcanvasClose = true
                }
            }
        }
    }
}
function canvasApp06() {
    if (!canvasSupport()){
        return;
    }
    var width, height, canvas, ctx, draw, alpha, x1, x2;
    var textX = 0;
    var textX1 = 0;
    var textX2 = 0;
    var a = 0; 
    width = 600;
    height = 300;
    alpha = 0
    x1 = 170
    x2 = 500
    drawWord()
    function drawWord() {
        canvas = document.getElementById('productsCanvas01');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1;
        ctx.lineJoin = 'bevel';
        ctx.lineCap = 'square';
        ctx.clearRect(0, 0, 600, 300);
        message01 = "产品介绍"
        message02 = "Products"
        alpha += 0.009
        if (alpha >= 1) {
            alpha = 1
        }
        ctx.beginPath()
        ctx.fillStyle = "#333333"
        ctx.font = "normal normal 30px 微软雅黑"
        ctx.textBaseline = "middle"
        ctx.textAlign = "left"
        ctx.globalAlpha = alpha 
        if (textX < 300) {
            a = 8- ( textX /45)　
            textX = textX + a
        }
        if (textX1 < 250 && textX > 200) {
            a = 8- ( textX1 /32)　
            textX1 = textX1 + a 
        }
        if (textX2 < 200 && textX > 200) {
            a = 8- ( textX2 /30)　
            textX2 = textX2 + a 
        }
        var  image01 = new Image();
        image01.src = "./img/products/03.png";
        ctx.fillText(message01, -70 + textX, 70)
        ctx.font = "normal normal 28px 微软雅黑"
        ctx.fillText(message02, 600 - textX1, 120)
        ctx.drawImage(image01, -140 + textX2, 60, 138.06, 92.43)
        ctx.closePath()
        
        if (alpha > 0.9) {
            ctx.globalAlpha = 1;
            ctx.strokeStyle = "#333333";
            ctx.lineWidth = 1;
            ctx.lineJoin = 'bevel';
            ctx.lineCap = 'square';
            ctx.beginPath();
            ctx.moveTo(170, 40);
            ctx.lineTo(x1, 40);
            ctx.stroke();
            if (x1 < 450) {
                x1 = x1 + 8;
            }
            ctx.closePath()

            ctx.beginPath();
            ctx.moveTo(520, 150);
            ctx.lineTo(x2, 150);
            ctx.stroke();
            if (x2 > 250) {
                x2 = x2 - 8;
            }
            ctx.closePath()
        }
        if (textX2 < 200 || x1 < 450) {
            window.requestAnimationFrame(drawWord);
        }
    }
}
function canvasApp07(id,id2) {
    if (!canvasSupport()){
        return;
    }
    var width, height, canvas, ctx, draw, alpha, x1, x2;
    width = document.getElementById(id2).offsetWidth;
    height = 19;
    x1 = width/2 ;
    x2 = width/2;

    if (id === 'productsCanvas05') {drawLine1();}
    if (id === 'productsCanvas03') {drawLine2()} 
    if (id === 'productsCanvas02' || id === 'productsCanvas04' ){drawLine()}
    function drawLine1() {
        
        canvas = document.getElementById(id);
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#08c7fe";
        ctx.lineWidth = 1;
        ctx.lineJoin = 'bevel';
        ctx.lineCap = 'square';
        ctx.beginPath();
        ctx.moveTo(49, 10);
        ctx.lineTo(x1, 10);
        ctx.stroke();
        ctx.closePath()
        ctx.beginPath();
        ctx.moveTo(49, 10);
        ctx.lineTo(x2, 10);
        ctx.stroke();
        ctx.closePath()
        if (x1 <= 98) {
            x1 = x1 + 2;
            x2 = x2 - 2;
        }
        if (x1 <= 98) {
            window.requestAnimationFrame(drawLine1);
        }
    }
    function drawLine2() {
        // console.log(x1,x2)
        canvas = document.getElementById(id);
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#08c7fe";
        ctx.lineWidth = 1;
        ctx.lineJoin = 'bevel';
        ctx.lineCap = 'square';
        ctx.beginPath();
        ctx.moveTo(28, 10);
        ctx.lineTo(x1, 10);
        ctx.stroke();
        ctx.closePath()
        ctx.beginPath();
        ctx.moveTo(28, 10);
        ctx.lineTo(x2, 10);
        ctx.stroke();
        ctx.closePath()
        if (x1 <= 58) {
            x1 = x1 + 2;
            x2 = x2 - 2;
        }
        
        if (x1 <= 58) {
            window.requestAnimationFrame(drawLine2);
        }
    }
    function drawLine() {
        canvas = document.getElementById(id);
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#08c7fe";
        ctx.lineWidth = 1;
        ctx.lineJoin = 'bevel';
        ctx.lineCap = 'square';
        ctx.beginPath();
        ctx.moveTo(21, 10);
        ctx.lineTo(x1, 10);
        ctx.stroke();
        ctx.closePath()
        ctx.beginPath();
        ctx.moveTo(21, 10);
        ctx.lineTo(x2, 10);
        ctx.stroke();
        ctx.closePath()
        if (x1 <= 42) {
            x1 = x1 + 1;
            x2 = x2 - 1;
        }
        if (x1 <= 42) {
            window.requestAnimationFrame(drawLine);
        }
    }
}
function canvasApp07back(id,id2) {
    if (!canvasSupport()){
        return;
    }
    var width, height, canvas, ctx, draw, alpha, x1, x2;
    width = document.getElementById(id2).offsetWidth;
    height = 19;
    x1 = width ;
    x2 = 0;
    if (id === 'productsCanvas05') {drawLine1();ifcanvasApp07back = false}
    if (id === 'productsCanvas03') {drawLine2()} 
    if (id === 'productsCanvas02' || id === 'productsCanvas04' ) {drawLine()}
    function drawLine1() {
        console.log(ifcanvasApp07back)
        canvas = document.getElementById(id);
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        ctx.strokeStyle = "#08c7fe";
        if (x1 > 49) {
            x1 = x1 - 1;
            x2 = x2 + 1;
        }
        ctx.beginPath();
        ctx.moveTo(49, 10);
        ctx.lineTo(x1, 10);
        ctx.stroke();
        ctx.closePath()
        ctx.beginPath();
        ctx.moveTo(49, 10);
        ctx.lineTo(x2, 10);
        ctx.stroke();
        ctx.closePath()
        ifcanvasApp07back = false
        if (x1 > 49) {
            window.requestAnimationFrame(drawLine1);
        }

    }
    function drawLine2() {
        // console.log(x1,x2)
        canvas = document.getElementById(id);
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d')
        ctx.strokeStyle = "#08c7fe";
        ctx.beginPath();
        ctx.moveTo(28, 10);
        ctx.lineTo(x1, 10);
        ctx.stroke();
        ctx.closePath()
        ctx.beginPath();
        ctx.moveTo(28, 10);
        ctx.lineTo(x2, 10);
        ctx.stroke();
        ctx.closePath()
        if (x1 >= 28) {
            x1 = x1 - 1/2;
            x2 = x2 + 1/2;
        }
        if (x1 >= 28) {
            window.requestAnimationFrame(drawLine2);
        }
    }
    function drawLine() {
        canvas = document.getElementById(id);
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d')
        ctx.strokeStyle = "#08c7fe";
        ctx.beginPath();
        ctx.moveTo(21, 10);
        ctx.lineTo(x1, 10);
        ctx.stroke();
        ctx.closePath()
        ctx.beginPath();
        ctx.moveTo(21, 10);
        ctx.lineTo(x2, 10);
        ctx.stroke();
        ctx.closePath()
        if (x1 >= 21) {
            x1 = x1 - 1/2;
            x2 = x2 + 1/2;
        }
        if (x1 >= 21) {
            window.requestAnimationFrame(drawLine);
        }
    }
}
function canvasApp10() {
    if (!canvasSupport()){
        return;
    }
    var width, height, largeHeader, canvas, ctx, draw, x1,
         y1, x2, y2, v,  x3, y3, x4, y4,falseOrTrue;
    width = document.getElementById("anniversary01").offsetWidth;
    height = document.getElementById("anniversary01").offsetHeight; 
    canvas = document.getElementById("anniversaryCanvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    x1 = 0;
    y1 = height/2;
    x2 = width;
    y2 = height/2-180;
    draw()
    function draw() {
        ctx.clearRect(0, 0, width, height);
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#08c7fe";
        ctx.lineWidth = 1.5;
        ctx.lineJoin = 'bevel';
        ctx.lineCap = 'square';
        ctx.beginPath();
        ctx.moveTo(0, height/2);
        ctx.lineTo(x1, y1);
        ctx.stroke();
        ctx.closePath();
        if (y1>0) {
            y1 -= 10;
            x1 += 10; 
        }
        ctx.beginPath();
        ctx.moveTo(width, height/2-180);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        if (y2<height-180) {
            y2 += 10;
            x2 -= 10; 
        }
        if (y1 > 0) {
            window.requestAnimationFrame(draw);
        }
    }
}
function canvasApp10Clear() {  
    var width, height, canvas, ctx;
    width = document.getElementById("anniversary01").offsetWidth;
    height = document.getElementById("anniversary01").offsetHeight; 
    canvas = document.getElementById("anniversaryCanvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    canvas = document.getElementById("anniversaryCanvas01");
    canvas.width = 130;
    canvas.height = 500;
    ctxTow = canvas.getContext('2d');
    ctxTow.clearRect(0, 0, 130, 500);
}
function canvasApp11() {
    if (!canvasSupport()){
        return;
    }
    var width, height, canvas, ctx, draw, alpha, x1, x2, x3, x4,a;
    var vy1 = 0
    var vy2 = 0
    width = 130;
    height = 500;
    alpha = 0
    y1 = 100
    y2 = 390
    x1 = 0
    x2 = 0
    x3 = 0
    x4 = 0
    x5 = 0
    x6 = 0
    x7 = 0
    x8 = 0
    x9 = 0
    x10 = 0
    x11 = 0
    x12 = 0
    x13 = 0
    x14 = 0
    x15 = 0
    drawWord()
    function drawWord() {
        canvas = document.getElementById('anniversaryCanvas01');
        canvas.width = 130;
        canvas.height = height;
        canvas.style.marginLeft = "38%"
        canvas.style.marginTop = "31%"
        ctx = canvas.getContext('2d');
        ctx.globalAlpha = 1;
        document.getElementById("anniversaryCanvas01").addEventListener("onmouseover", myFunction);

        function myFunction() {
        canvas = document.getElementById('anniversaryCanvas01');
        canvas.width = 130;
        canvas.height = height;
        canvas.style.marginLeft = 230 + 'px';
        canvas.style.marginTop = 180 + 'px';
        canvas.style.display = 'none';
        console.log(canvas)
        }
        ctx.strokeStyle = "#3333";
        ctx.lineWidth = 1;
        ctx.lineJoin = 'bevel';
        ctx.lineCap = 'square';
        ctx.clearRect(0, 0, 600, 300);
        message01 = "15"
        message02 = "周"
        message03 = "年"
        message04 = "庆"
        message05 = "A"
        message06 = "n"
        message07 = "n"
        message08 = "i"
        message09 = "v"
        message10 = "e"
        message11 = "r"
        message12 = "s"
        message13 = "a"
        message14 = "r"
        message15 = "y"
        alpha += 0.009
        if (alpha >= 1) {
            alpha = 1
        }
        ctx.fillStyle = "#fff"
        ctx.font = "normal normal 30px 微软雅黑"
        ctx.textBaseline = "middle"
        ctx.textAlign = "left"
        ctx.globalAlpha = alpha 
        if (vy1 < 120) {
            vy1 += 3
        }
        if (vy2 < 165) {
            vy2 += 3
        }
        ctx.beginPath()
        var  image01 = new Image();
        image01.src = "./img/team/0.png";
        ctx.drawImage(image01, 5, vy1 - 120 , 68, 79)
        var  image02 = new Image();
        image02.src = "./img/anniversary/4.png";
        ctx.drawImage(image02, 85, vy2 - 120 , 45, 79)
        ctx.closePath()

        
        if (y1>200) {
            if (x1 < 49) {
                a = 2- ( x1 /26)　
                x1 = x1 + a
            }
            if (x2 < 52 && x1 > 15) {
                a = 2- ( x2 /26)　
                x2 = x2 + a
            }
            if (x3 < 52 && x2 > 15) {
                a = 2- ( x3 /26)　
                x3 = x3 + a
            }
            if (x4 < 52 && x3 > 15) {
                a = 2- ( x4 /26)　
                x4 = x4 + a
            }
        
        ctx.beginPath()
        ctx.globalAlpha = 1;
        ctx.rotate(90*Math.PI/180)
        // ctx.fillText(message01, 110, -37)
        ctx.fillText(message01, 110, 12 - x1)
        ctx.rotate(-90*Math.PI/180)
        ctx.fillText(message02, x2-30, 160)
        ctx.fillText(message03, x3-30, 190)
        ctx.fillText(message04, x4-30, 220)
        ctx.closePath()


        }
        // window.requestAnimationFrame(drawWord);
        if (alpha > 0.5) {
            ctx.globalAlpha = 1;
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = 2;
            ctx.lineJoin = 'bevel';
            ctx.lineCap = 'square';
            // console.log(x1)
            ctx.beginPath();
            ctx.moveTo(0, 95);
            ctx.lineTo(0, y1);
            ctx.stroke();
            if (y1 < 260) {
                y1 = y1 + 1.5;
            }
            ctx.moveTo(130, 390);
            ctx.lineTo(130, y2);
            ctx.stroke();
            if (y2 > 180) {
                y2 = y2 - 1.5;
            }
            ctx.closePath()
        }
        ctx.beginPath()
        ctx.globalAlpha = 1;
        ctx.font = "normal normal 28px 微软雅黑"
        // ctx.fillStyle = '#fff'
        ctx.rotate(90*Math.PI/180)
        ctx.fillText(message05, 200, -142 + x5)
        ctx.fillText(message06, 217, -142 + x6)
        ctx.fillText(message07, 232, -142 + x7)
        ctx.fillText(message08, 247, -142 + x8)
        ctx.fillText(message09, 255, -142 + x9)
        ctx.fillText(message10, 270, -142 + x10)
        ctx.fillText(message11, 285, -142 + x11)
        ctx.fillText(message12, 298, -142 + x12)
        ctx.fillText(message13, 313, -142 + x13)
        ctx.fillText(message14, 328, -142 + x14)
        ctx.fillText(message15, 343, -150 + x15)
        if (y1>200) {
            if (x5 < 42) {
                a = 2- ( x5 /26)　
                x5 = x5 + a
            }
            if (x6 < 42 && x5 > 15) {
                a = 2- ( x6 /26)　
                x6 = x6 + a
            }
            if (x7 < 42 && x6 > 15) {
                a = 2- ( x7 /26)　
                x7 = x7 + a
            }
            if (x8 < 42 && x7 > 15) {
                a = 2- ( x8 /26)　
                x8 = x8 + a
            }
            if (x9 < 42 && x8 > 15) {
                a = 2- ( x9 /26)　
                x9 = x9 + a
            }
            if (x10 < 42 && x9 > 15) {
                a = 2- ( x10 /26)　
                x10 = x10 + a
            }
            if (x11 < 42 && x10 > 15) {
                a = 2- ( x11 /26)　
                x11 = x11 + a
            }
            if (x12 < 42 && x11 > 15) {
                a = 2- ( x12 /26)　
                x12 = x12 + a
            }
            if (x13 < 42 && x12 > 15) {
                a = 2- ( x13 /26)　
                x13 = x13 + a
            }
            if (x14 < 42 && x13 > 15) {
                a = 2- ( x14 /26)　
                x14 = x14 + a
            }
            if (x15 < 50 && x14 > 15) {
                a = 2- ( x15 /26)　
                x15 = x15 + a
            }
        }
        
        ctx.closePath()
        // console.log(y1)
        if (x4 < 51 ) {
            window.requestAnimationFrame(drawWord);
        }
    }
}
function canvasApp12() {
    if (!canvasSupport()){
        return;
    }
    var width, height, canvas, ctx, draw, alpha, x1, x2, x3, x4,a,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17;
    var vy1 = 0
    var vy2 = 0
    width = 130;
    height = 500;
    alpha = 0
    y1 = 100
    y2 = 390
    x1 = 0
    x2 = 0
    x3 = 0
    x4 = 0
    x5 = 0
    x6 = 0
    x7 = 0
    x8 = 0
    x9 = 0
    x10 = 0
    x11 = 0
    x12 = 0
    x13 = 0
    x14 = 0
    x15 = 0
    x16 = 0
    x17 = 0
    drawWord()
    function drawWord() {
        canvas = document.getElementById('joinCanvas01');
        canvas.width = 130;
        canvas.height = height;
        canvas.style.marginLeft = 200 + 'px';
        canvas.style.marginTop = 50 + 'px';
        ctx = canvas.getContext('2d');
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#333333";
        ctx.lineWidth = 1;
        ctx.lineJoin = 'bevel';
        ctx.lineCap = 'square';
        ctx.clearRect(0, 0, 600, 300);
        message01 = "联"
        message02 = "系"
        message03 = "/"
        message04 = "加"
        message05 = "C"
        message06 = "o"
        message07 = "n"
        message08 = "t"
        message09 = "a"
        message10 = "c"
        message11 = "t"
        message12 = "&"
        message13 = "J"
        message14 = "o"
        message15 = "i"
        message16 = "n"
        message17 = "入"
        alpha += 0.009
        if (alpha >= 1) {
            alpha = 1
        }
        ctx.fillStyle = "#333333"
        ctx.font = "normal normal 30px 微软雅黑"
        ctx.textBaseline = "middle"
        ctx.textAlign = "left"
        ctx.globalAlpha = alpha 
        if (vy1 < 120) {
            vy1 += 3
        }
        if (vy2 < 165) {
            vy2 += 3
        }
        ctx.beginPath()
        var  image01 = new Image();
        image01.src = "./img/team/0.png";
        ctx.drawImage(image01, 5, vy1 - 120 , 68, 79)
        var  image02 = new Image();
        image02.src = "./img/contact/5.png";
        ctx.drawImage(image02, 85, vy2 - 120 , 45, 79)
        ctx.closePath()

        
        if (y1>200) {
            if (x1 < 52) {
                a = 2- ( x1 /26)　
                x1 = x1 + a
            }
            if (x2 < 52 && x1 > 15) {
                a = 2- ( x2 /26)　
                x2 = x2 + a
            }
            if (x3 < 52 && x2 > 15) {
                a = 2- ( x3 /26)　
                x3 = x3 + a
            }
            if (x4 < 52 && x3 > 15) {
                a = 2- ( x4 /26)　
                x4 = x4 + a
            }
            if (x17 < 52 && x3 > 15) {
                a = 2- ( x17 /26)　
                x17 = x17 + a
            }
        
        ctx.beginPath()
        ctx.globalAlpha = 1;
        
        ctx.fillText(message01, x1-30, 130)
        
        ctx.fillText(message02, x2-30, 160)
        ctx.rotate(90*Math.PI/180)
        ctx.fillText(message03, 190, 12 - x3)
        ctx.rotate(-90*Math.PI/180)
        ctx.fillText(message04, x4-30, 227)
        ctx.fillText(message17, x17-30, 257)
        ctx.closePath()
        }

        if (alpha > 0.5) {
            ctx.globalAlpha = 1;
            ctx.strokeStyle = "#333333";
            ctx.lineWidth = 2;
            ctx.lineJoin = 'bevel';
            ctx.lineCap = 'square';
            ctx.beginPath();
            ctx.moveTo(0, 95);
            ctx.lineTo(0, y1);
            ctx.stroke();
            if (y1 < 290) {
                y1 = y1 + 1.5;
            }
            ctx.moveTo(130, 420);
            ctx.lineTo(130, y2);
            ctx.stroke();
            if (y2 > 180) {
                y2 = y2 - 1.5;
            }
            ctx.closePath()
        }
        ctx.beginPath()
        ctx.globalAlpha = 1;
        ctx.font = "normal normal 28px 微软雅黑"
        ctx.rotate(90*Math.PI/180)
        ctx.fillText(message05, 200, -142 + x5)
        ctx.fillText(message06, 217, -142 + x6)
        ctx.fillText(message07, 232, -142 + x7)
        ctx.fillText(message08, 247, -142 + x8)
        ctx.fillText(message09, 262, -142 + x9)
        ctx.fillText(message10, 277, -142 + x10)
        ctx.fillText(message11, 292, -142 + x11)
        ctx.fillText(message12, 312, -142 + x12)
        ctx.fillText(message13, 345, -142 + x13)
        ctx.fillText(message14, 357, -142 + x14)
        ctx.fillText(message15, 375, -142 + x15)
        ctx.fillText(message16, 385, -142 + x16)
        if (y1>200) {
            if (x5 < 42) {
                a = 2- ( x5 /26)　
                x5 = x5 + a
            }
            if (x6 < 42 && x5 > 15) {
                a = 2- ( x6 /26)　
                x6 = x6 + a
            }
            if (x7 < 42 && x6 > 15) {
                a = 2- ( x7 /26)　
                x7 = x7 + a
            }
            if (x8 < 42 && x7 > 15) {
                a = 2- ( x8 /26)　
                x8 = x8 + a
            }
            if (x9 < 42 && x8 > 15) {
                a = 2- ( x9 /26)　
                x9 = x9 + a
            }
            if (x10 < 42 && x9 > 15) {
                a = 2- ( x10 /26)　
                x10 = x10 + a
            }
            if (x11 < 42 && x10 > 15) {
                a = 2- ( x11 /26)　
                x11 = x11 + a
            }
            if (x12 < 42 && x11 > 15) {
                a = 2- ( x12 /26)　
                x12 = x12 + a
            }
            if (x13 < 42 && x12 > 15) {
                a = 2- ( x13 /26)　
                x13 = x13 + a
            }
            if (x14 < 42 && x13 > 15) {
                a = 2- ( x14 /26)　
                x14 = x14 + a
            }
            if (x15 < 42 && x14 > 15) {
                a = 2- ( x15 /26)　
                x15 = x15 + a
            }
            if (x16 < 42 && x15 > 15) {
                a = 2- ( x16 /26)　
                x16 = x16 + a
            }
        }
        
        ctx.closePath()
        if (x16 < 42 ) {
            window.requestAnimationFrame(drawWord);
        }
    }
}
function canvasClear() {
    
    var canvas = document.getElementById("teamCanvas")
    var context = canvas.getContext("2d")
    canvas.width = 397
    canvas.height = 320
    canvas.style.marginLeft = 390 + "px"
    canvas.style.marginTop = 40 + "px" 
    context.clearRect(0, 0, canvas.width, canvas.height);
    var canvasTow = document.getElementById("teamCanvas02")
    var ctx = canvasTow.getContext("2d")
    canvasTow.width = 920
    canvasTow.height = 400
    ctx.clearRect(0, 0, canvasTow.width, canvasTow.height);

    var teamCanvas = document.getElementById('teamCanvas')
    var teamCanvas02 = document.getElementById('teamCanvas02')

    teamCanvas.style.display = 'none';
    teamCanvas02.style.display = 'none';
}