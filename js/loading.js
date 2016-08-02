function loadImages(sources){ 
    var smokeCanvas = document.getElementById('smokeCanvas'),
    ctx = smokeCanvas.getContext('2d'),
    cw = smokeCanvas.width = 1000,
    ch = smokeCanvas.height = 300,
    smoke = document.getElementById('smokeDiv');
    var sw,st,marginLeft,marginTop,images,opa;
    sw = smoke.offsetWidth;
    sh = smoke.offsetHeight;
    marginLeft = (sw - cw) / 2
    marginTop = (sh - ch) / 2
    smokeCanvas.style.marginTop = marginTop + "px"
    smokeCanvas.style.marginLeft = marginLeft + "px"
    ctx = smokeCanvas.getContext('2d');
    ctx.globalAlpha = 1;   
    var loadedImages = 0;    
    var numImages = 0;  
    ctx.font='14px bold';
    ctx.lineWidth=5;
    opa = 1
    var clearWidth=smokeCanvas.width;
    var clearHeight=smokeCanvas.height;
    var images
    // get num of sources    
    for (var src in sources) {    
        numImages++;    
    }    
    for (var src in sources) {  
    // console.log(sources[src]) 
    
        images = new Image();
        //当一张图片加载完成时执行 
        images.src = sources[src];   
        images.onload = function(){ 
            //重绘一个进度条
            ctx.clearRect(0,0,clearWidth,clearHeight);
            ctx.fillText('Loading:'+Math.round(loadedImages / (numImages-1) * 10000) / 100.00 + "%",200,280);
            Math.round(loadedImages / (numImages-1) * 10000) / 100.00 + "%"
            // ctx.fillText('Loading:'+loadedImages/(numImages-1),200,280);
            ctx.save();
            ctx.strokeStyle='#555';
            ctx.beginPath();
            ctx.moveTo(200,300);
            ctx.lineTo(600,300);
            ctx.stroke();
            ctx.beginPath();
            ctx.restore();
            ctx.moveTo(200,300);
            ctx.lineTo(loadedImages/numImages*400+200,300);  
            ctx.stroke();
            //当所有图片加载完成时，执行回调函数callback
            if (++loadedImages >= numImages) {    
                if (++loadedImages >= numImages) {    
                // smoke.style.opacity = opa; 
                downLoda()
                function downLoda() {
                    if (opa>0){
                        opa = opa-0.1
                       smoke.style.opacity = opa;
                       setTimeout(downLoda,100)
                        }
                    if (opa<=0) {
                        smoke.style.display = "none";
                    }
                    }   
            }    
            }    
        };  
            
    }    
}     
    
    var sources =    {
        PaperBoy1: "./img/anniversary/4.png",    
        PaperBoy2: "./img/anniversary/arrow.png", 
        PaperBoy3: "./img/anniversary/hover.png",    
        PaperBoy4: "./img/anniversary/round.png",  
        PaperBoy5: "./img/brief/01.png",    
        PaperBoy6: "./img/brief/home.png",  
        PaperBoy7: "./img/brief/logo.png",    
        PaperBoy8: "./img/brief/ncuhome.png",  
        PaperBoy9: "./img/brief/people.png",    
        PaperBoy10: "./img/brief/plant.png",  
        PaperBoy11: "./img/brief/together.png",    
        PaperBoy12: "./img/contact/5.png",   
        PaperBoy13: "../img/icon.png",    
        PaperBoy14: "../img/QRcodes.png", 
        PaperBoy15: "../img/index/aftericon.png" ,    
        PaperBoy16: "../img/index/background.png" ,  
        PaperBoy17: "../img/index/beforeicon.png" ,    
        PaperBoy18: "../img/index/bgcimg.png" ,  
        PaperBoy19: "../img/index/logo.png" ,    
        PaperBoy20: "../img/index/mouse.png" ,  
        PaperBoy21: "../img/index/start.png" , 
        PaperBoy22: "../img/products/03.png" ,
        PaperBoy23: "../img/products/buttom.png" ,
        PaperBoy24: "../img/products/cashResldue.png" ,
        PaperBoy25: "../img/products/computerBroke.png" ,
        PaperBoy26: "../img/products/computerReparer.png" ,
        PaperBoy27: "../img/products/debris.png" ,
        PaperBoy28: "../img/products/electorBackground.png" ,
        PaperBoy29: "../img/products/electorResldue.png" ,
        PaperBoy30: "../img/products/EnglishShow.png" ,
        PaperBoy31: "../img/products/IdCoard.png" ,
        PaperBoy32: "../img/products/issueReport.png" ,
        PaperBoy33: "../img/products/lostThingShow.png" ,
        PaperBoy34: "../img/products/monthElector.png" ,
        PaperBoy35: "../img/products/ncuhome.gif" ,
        PaperBoy36: "../img/products/record.png" ,
        PaperBoy37: "../img/products/recordRequest.png" ,
        PaperBoy38: "../img/products/resldueDays.png" ,
        PaperBoy39: "../img/products/xiangzhang.png" ,
        PaperBoy40: "../img/products/yunhome.png" ,
        PaperBoy41: "../img/team/0.png" ,
        PaperBoy42: "../img/team/2.png" ,
        PaperBoy43: "../img/team/bgs+mb.png" ,
        PaperBoy44: "../img/team/bgs.png" ,
        PaperBoy45: "../img/team/kf+mb.png" ,
        PaperBoy46: "../img/team/kf.png" ,
        PaperBoy47: "../img/team/sj+mb.png" ,
        PaperBoy48: "../img/team/sj.png" ,
        PaperBoy49: "../img/team/x.png" ,
        PaperBoy50: "../img/team/yw+mb.png" ,
        PaperBoy51: "../img/team/yy+mb.png" ,
        PaperBoy52: "../img/team/yy.png" ,

          }  
    //执行图片预加载，加载完成后执行main
    // console.log(sources[src])
    loadImages(sources);  