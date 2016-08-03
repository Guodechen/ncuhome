function loadImages(sources){ 
    var smokeCanvas = document.getElementById('smokeCanvas'),
    ctx = smokeCanvas.getContext('2d'),
    cw = smokeCanvas.width = 1000,
    ch = smokeCanvas.height = 400,
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
    ctx.font='normal bold 14px 微软雅黑';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.lineWidth=5;
    ctx.lineCap = 'round';
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
            
            ctx.beginPath()
            ctx.fillStyle='#95a7f6';
            ctx.fillText(Math.round(loadedImages / (numImages-1) * 10000) / 100.00 + "%",740,200);
            ctx.closePath()
            ctx.save();
            ctx.strokeStyle='#dadada';
            ctx.beginPath();
            ctx.moveTo(220,200);
            ctx.lineTo(700,200);
            ctx.stroke();
            ctx.closePath();

            ctx.lineWidth=3;
            ctx.beginPath();
            ctx.restore();
            ctx.lineCap = 'round';
            ctx.strokeStyle='#95a7f6';
            ctx.moveTo(220,200);
            ctx.lineTo(loadedImages/(numImages-1)*480 + 220,200);  
            ctx.stroke();
            ctx.closePath();
            //当所有图片加载完成时，执行回调函数callback   
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

        };  
        //把sources中的图片信息导入images数组  
            
    }    
}    
// console.log("a")
//定义预加载图片数组对象，执行loading模块
// window.onload = function(){    
    
    var sources =    {
        PaperBoy1: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_4.png",    
        PaperBoy2: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_arrow.png", 
        PaperBoy3: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_hover.png",    
        PaperBoy4: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_round.png",  
        PaperBoy5: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_01.png",    
        PaperBoy6: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_home.png",  
        PaperBoy7: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_logo.png",    
        PaperBoy8: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_ncuhome.png",  
        PaperBoy9: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_people.png",    
        PaperBoy10: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_plant.png",  
        PaperBoy11: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_together.png",    
        PaperBoy12: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_5.png",   
        PaperBoy13: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_icon.png",    
        PaperBoy14: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_QRcodes.png", 
        PaperBoy15: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_aftericon.png" ,    
        PaperBoy16: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_background.png" ,  
        PaperBoy17: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_beforeicon.png" ,    
        PaperBoy18: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_bgcimg.png" ,  
        PaperBoy19: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_logo.png" ,    
        PaperBoy20: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_mouse.png" ,  
        PaperBoy21: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_start.png" , 
        PaperBoy22: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_03.png" ,
        PaperBoy23: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_buttom.png" ,
        PaperBoy24: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_cashResldue.png" ,
        PaperBoy25: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_computerBroke.png" ,
        PaperBoy26: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_computerReparer.png" ,
        PaperBoy27: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_debris.png" ,
        PaperBoy28: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_electorBackground.png" ,
        PaperBoy29: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_electorResldue.png" ,
        PaperBoy30: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_EnglishShow.png" ,
        PaperBoy31: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_IdCoard.png" ,
        PaperBoy32: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_issueReport.png" ,
        PaperBoy33: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_lostThingShow.png" ,
        PaperBoy34: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_monthElector.png" ,
        PaperBoy35: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_record.png" ,
        PaperBoy36: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_recordRequest.png" ,
        PaperBoy37: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_resldueDays.png" ,
        PaperBoy38: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_xiangzhang.png" ,
        PaperBoy39: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_yunhome.png" ,
        PaperBoy40: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_0.png" ,
        PaperBoy41: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_2.png" ,
        PaperBoy42: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_bgs+mb.png" ,
        PaperBoy43: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_bgs.png" ,
        PaperBoy44: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_kf+mb.png" ,
        PaperBoy45: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_kf.png" ,
        PaperBoy46: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_sj+mb.png" ,
        PaperBoy47: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_sj.png" ,
        PaperBoy48: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_x.png" ,
        PaperBoy49: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_yw+mb.png" ,
        PaperBoy50: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_yy+mb.png" ,
        PaperBoy51: "http://7xu5y0.com1.z0.glb.clouddn.com/2016ncuhome_yy.png" ,

          }  
    //执行图片预加载，加载完成后执行main
    // console.log(sources[src])
    loadImages(sources);  
     