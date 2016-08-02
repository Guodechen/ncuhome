var rotate = function() {
    var hover = document.getElementsByClassName('icon')
    var list = document.getElementsByTagName('ul')
    for (var i = 0; i < hover.length; i++) {
        list[i].onmouseover = function() {
            var index = this.getAttribute('index')
            hover[index].classList.add('icon1');
            this.onmouseout = function() {
                hover[index].classList.remove('icon1')
            }
        }
    }
}
rotate()

var opts = {
    load: 0,
    timer: 600,
    through: true,
    maxPictures: 5
}
var head = document.getElementById('head')
if (head.getAttribute('class') === "container transition translate1") {
    canvasApp03();
}
var scrollFun = function(e) {
    e = e || window.event
    if (opts.through && e.wheelDelta || e.detail) {
        if (e.wheelDelta < 0 || e.detail > 0) {
            scrollWheel("down")
            setTimeout(waiting, opts.timer)
        }
        if (e.wheelDelta > 0 || e.detail < 0) {
            scrollWheel("up")
            setTimeout(waiting, opts.timer)
        }
        if (opts.load == 4) {
            gather()
        } else if (opts.load !== 4) {
            clearGather()
        }
        if (opts.load == 1) {
            setTimeout(clickChange, 1000)
        } else if (opts.load != 1) {
            stop()
        }
    }
    var head = document.getElementById('head')
    if (head.getAttribute('class') === "container transition translate0") {
        canvasApp02('首页', 'li1', 'licanvas01', 'container transition translate0');
        canvasApp02Clear('li2', 'licanvas02')
        canvasApp01('简介', 'li2', 'licanvas02');
    }
    if (head.getAttribute('class') === "container transition translate1") {
        canvasApp03();
        canvasApp02('简介', 'li2', 'licanvas02', 'container transition translate1');
        canvasApp01('首页', 'li1', 'licanvas01');
        canvasApp01('部门风采', 'li3', 'licanvas03');
        canvasApp02Clear('li1', 'licanvas01')
        canvasApp02Clear('li3', 'licanvas03')
    }
    if (head.getAttribute('class') === "container transition translate2") {
        canvasApp04();
        canvasApp02('部门风采', 'li3', 'licanvas03', 'container transition translate2');
        canvasApp01('简介', 'li2', 'licanvas02');
        canvasApp01('产品介绍', 'li4', 'licanvas04');
        canvasApp02Clear('li2', 'licanvas02')
        canvasApp02Clear('li4', 'licanvas04')
    }
    if (head.getAttribute('class') === "container transition translate3") {
        canvasApp06();
        canvasApp07('productsCanvas05','bottomNavLine3')
        canvasApp02('产品介绍', 'li4', 'licanvas04', 'container transition translate3');
        // console.log(head.getAttribute('class'))
        canvasApp01('部门风采', 'li3', 'licanvas03');
        canvasApp01('15周年庆', 'li5', 'licanvas05');
        canvasApp02Clear('li3', 'licanvas03')
        canvasApp02Clear('li5', 'licanvas05')
    }
    if (head.getAttribute('class') === "container transition translate4") {
        // setTimeout('canvasApp10()', 1200 )
        canvasApp10()
        canvasApp10Clear();
        canvasApp11()
            // setTimeout('canvasApp11()', 1200 )
        canvasApp02('15周年庆', 'li5', 'licanvas05', 'container transition translate4');
        canvasApp01('产品介绍', 'li4', 'licanvas04');
        canvasApp01('联系/加入', 'li6', 'licanvas06');
        canvasApp02Clear('li4', 'licanvas04')
        canvasApp02Clear('li6', 'licanvas06')
    }
    if (head.getAttribute('class') === "container transition translate5") {
        canvasApp02('联系/加入', 'li6', 'licanvas06', 'container transition translate5');
        canvasApp01('15周年庆', 'li5', 'licanvas05');
        // console.log("a")
        canvasApp02Clear('li5', 'licanvas05')
        canvasApp12();
    }
}

function waiting() {
    opts.through = true
}

function scrollWheel(method) {
    if (opts.through) {
        opts.through = false
        if (method == "up") {
            loadOperation("up")
        } else {
            loadOperation("down")
        }
    } else {
        return
    }
}

function loadOperation(opt) {
    if (opt == "down") {
        if (opts.load == opts.maxPictures) {
            opts.load = opts.maxPictures
        } else {
            opts.load++
        }
    } else {
        if (opts.load == 0) {
            opts.load = 0
        } else {
            opts.load--
        }
    }
    Location(opt)
}

function Location(opt) {
    var container = document.getElementsByClassName('container')[0];
    var imagebox = document.getElementById('arroundImg')
    var newClass = 'translate' + opts.load;
    container.classList.remove(container.classList[2]);
    container.classList.add(newClass)
    if (opts.load == 1 && opt == "down") {
        addClassName(imagebox, 'flutter', true, 500)
    }
}

function addClassName(selfName, addName, clear, time) {
    selfName.classList.add(addName)
    if (clear) {
        setTimeout(function() {
            selfName.classList.remove(addName)
        }, time)
    }
}

//导航栏点击
function navClick() {
    // var li = document.getElementsByClassName('navgation')[0].getElementsByTagName('li')
    var li0 = document.getElementById('li1')
    var li1 = document.getElementById('li2')
    var li2 = document.getElementById('li3')
    var li3 = document.getElementById('li4')
    var li4 = document.getElementById('li5')
    var li5 = document.getElementById('li6')

    li0.onclick = function() {
        if (opts.load == 0) {
            return
        } else {
            opts.load = 0
            Location('up')
        }
        canvasApp02('首页', 'li1', 'licanvas01', 'container transition translate0');
        canvasApp01('首页', 'li1', 'licanvas01');
        canvasApp01('简介', 'li2', 'licanvas02');
        canvasApp01('部门风采', 'li3', 'licanvas03');
        canvasApp01('产品介绍', 'li4', 'licanvas04');
        canvasApp01('15周年庆', 'li5', 'licanvas05');
        canvasApp01('联系/加入', 'li6', 'licanvas06');
        canvasApp02Clear('li2', 'licanvas02')
        canvasApp02Clear('li3', 'licanvas03')
        canvasApp02Clear('li4', 'licanvas04')
        canvasApp02Clear('li5', 'licanvas05')
        canvasApp02Clear('li6', 'licanvas06')
    }
    li1.onclick = function() {
        if (opts.load == 1) {
            return
        } else {
            if (opts > 1) {
                opts.load = 1
                Location('up')
            } else {
                opts.load = 1
                Location('down')
            }
        }
        setTimeout(clickChange, 1000)
        canvasApp03();
        canvasApp02('简介', 'li2', 'licanvas02', 'container transition translate1');
        canvasApp01('首页', 'li1', 'licanvas01');
        canvasApp01('简介', 'li2', 'licanvas02');
        canvasApp01('部门风采', 'li3', 'licanvas03');
        canvasApp01('产品介绍', 'li4', 'licanvas04');
        canvasApp01('15周年庆', 'li5', 'licanvas05');
        canvasApp01('联系/加入', 'li6', 'licanvas06');
        canvasApp02Clear('li1', 'licanvas01')
        canvasApp02Clear('li3', 'licanvas03')
        canvasApp02Clear('li4', 'licanvas04')
        canvasApp02Clear('li5', 'licanvas05')
        canvasApp02Clear('li6', 'licanvas06')
    }
    li2.onclick = function() {
        if (opts.load == 2) {
            return
        } else {
            if (opts > 2) {
                opts.load = 2
                Location('up')
            } else {
                opts.load = 2
                Location('down')
            }
        }
        canvasApp04();
        canvasApp02('部门风采', 'li3', 'licanvas03', 'container transition translate2');
        canvasApp01('首页', 'li1', 'licanvas01');
        canvasApp01('简介', 'li2', 'licanvas02');
        canvasApp01('部门风采', 'li3', 'licanvas03');
        canvasApp01('产品介绍', 'li4', 'licanvas04');
        canvasApp01('15周年庆', 'li5', 'licanvas05');
        canvasApp01('联系/加入', 'li6', 'licanvas06');
        canvasApp02Clear('li1', 'licanvas01')
        canvasApp02Clear('li2', 'licanvas02')
        canvasApp02Clear('li4', 'licanvas04')
        canvasApp02Clear('li5', 'licanvas05')
        canvasApp02Clear('li6', 'licanvas06')
    }
    li3.onclick = function() {
        if (opts.load == 3) {
            return
        } else {
            if (opts > 3) {
                opts.load = 3
                Location('up')
            } else {
                opts.load = 3
                Location('down')
            }
        }
        canvasApp06();
        canvasApp07('productsCanvas04','bottomNavLine2')
        canvasApp02('产品介绍', 'li4', 'licanvas04', 'container transition translate3');
        canvasApp01('首页', 'li1', 'licanvas01');
        canvasApp01('简介', 'li2', 'licanvas02');
        canvasApp01('部门风采', 'li3', 'licanvas03');
        canvasApp01('产品介绍', 'li4', 'licanvas04');
        canvasApp01('15周年庆', 'li5', 'licanvas05');
        canvasApp01('联系/加入', 'li6', 'licanvas06');
        canvasApp02Clear('li1', 'licanvas01')
        canvasApp02Clear('li2', 'licanvas02')
        canvasApp02Clear('li3', 'licanvas03')
        canvasApp02Clear('li5', 'licanvas05')
        canvasApp02Clear('li6', 'licanvas06')
    }
    li4.onclick = function() {
        if (opts.load == 4) {
            return
        } else {
            if (opts > 4) {
                opts.load = 4
                Location('up')
            } else {
                opts.load = 4
                Location('down')
            }
        }
        gather()
        canvasApp10()
        canvasApp10Clear();
        canvasApp11()
        canvasApp02('15周年庆', 'li5', 'licanvas05', 'container transition translate4');
        canvasApp01('首页', 'li1', 'licanvas01');
        canvasApp01('简介', 'li2', 'licanvas02');
        canvasApp01('部门风采', 'li3', 'licanvas03');
        canvasApp01('产品介绍', 'li4', 'licanvas04');
        canvasApp01('15周年庆', 'li5', 'licanvas05');
        canvasApp01('联系/加入', 'li6', 'licanvas06');
        canvasApp02Clear('li1', 'licanvas01')
        canvasApp02Clear('li2', 'licanvas02')
        canvasApp02Clear('li3', 'licanvas03')
        canvasApp02Clear('li4', 'licanvas04')
        canvasApp02Clear('li6', 'licanvas06')
    }
    li5.onclick = function() {
        if (opts.load == 5) {
            return
        } else {
            opts.load = 5
            Location('up')
        }
        canvasApp12();
        canvasApp02('联系/加入', 'li6', 'licanvas06', 'container transition translate5');
        canvasApp01('首页', 'li1', 'licanvas01');
        canvasApp01('简介', 'li2', 'licanvas02');
        canvasApp01('部门风采', 'li3', 'licanvas03');
        canvasApp01('产品介绍', 'li4', 'licanvas04');
        canvasApp01('15周年庆', 'li5', 'licanvas05');
        canvasApp01('联系/加入', 'li6', 'licanvas06');
        canvasApp02Clear('li1', 'licanvas01')
        canvasApp02Clear('li2', 'licanvas02')
        canvasApp02Clear('li3', 'licanvas03')
        canvasApp02Clear('li4', 'licanvas04')
        canvasApp02Clear('li5', 'licanvas05')
    }
}
navClick()

var mouseClick = document.getElementById('clickMouse')
mouseClick.onclick = function() {
    scrollWheel("down")
    setTimeout(waiting, opts.timer)
    if (opts.load == 1) {
        setTimeout(clickChange, 1000)
    } else if (opts.load != 1) {
        stop()
    }
}
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFun, false)
}

function upper() {
    var upper = document.getElementsByClassName('images')[0].getElementsByClassName('upper')[0]
    var upper1 = document.getElementsByClassName('images')[0].getElementsByTagName('h3')[0]
    var upper2 = document.getElementsByClassName('images')[0].getElementsByClassName('start')[0]

    setTimeout(function() {
        upper.classList.remove('upper')
    }, 1000)
    setTimeout(function() {
        upper1.classList.add('upper1')
    }, 1200)
    setTimeout(function() {
        upper2.classList.remove('upper2')
    }, 1400)
}


var mouseClick = document.getElementById('clickMouse')
mouseClick.onclick = function() {
    scrollWheel("down")
    setTimeout(waiting, opts.timer)
}
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFun, false)
}


window.onmousewheel = scrollFun

document.onkeydown = function(e) {
    if (e.keyCode == 38 && opts.through) {
        scrollWheel("up")
        setTimeout(waiting, opts.timer)
    }
    if (opts.through && e.keyCode == 40) {
        scrollWheel("down")
        setTimeout(waiting, opts.timer)
    }
    if (opts.load == 4) {
        gather()
    } else if (opts.load !== 4) {
        clearGather()
    }
    if (opts.load == 1) {
        setTimeout(clickChange, 1000)
    } else if (opts.load != 1) {
        stop()
    }
    var head = document.getElementById('head')
    if (head.getAttribute('class') === "container transition translate0"&&(e.keyCode == 38 && opts.through||opts.through && e.keyCode == 40)) {
        canvasApp02('首页', 'li1', 'licanvas01', 'container transition translate0');
        canvasApp02Clear('li2', 'licanvas02')
        canvasApp01('简介', 'li2', 'licanvas02');
    }
    if (head.getAttribute('class') === "container transition translate1"&&(e.keyCode == 38 && opts.through||opts.through && e.keyCode == 40)) {
        canvasApp03();
        canvasApp02('简介', 'li2', 'licanvas02', 'container transition translate1');
        canvasApp01('首页', 'li1', 'licanvas01');
        canvasApp01('部门风采', 'li3', 'licanvas03');
        canvasApp02Clear('li1', 'licanvas01')
        canvasApp02Clear('li3', 'licanvas03')
    }
    if (head.getAttribute('class') === "container transition translate2"&&(e.keyCode == 38 && opts.through||opts.through && e.keyCode == 40)) {
        canvasApp04();
        canvasApp02('部门风采', 'li3', 'licanvas03', 'container transition translate2');
        canvasApp01('简介', 'li2', 'licanvas02');
        canvasApp01('产品介绍', 'li4', 'licanvas04');
        canvasApp02Clear('li2', 'licanvas02')
        canvasApp02Clear('li4', 'licanvas04')
    }
    if (head.getAttribute('class') === "container transition translate3"&&(e.keyCode == 38 && opts.through||opts.through && e.keyCode == 40)) {
        canvasApp06();
        canvasApp07('productsCanvas05','bottomNavLine3')
        canvasApp02('产品介绍', 'li4', 'licanvas04', 'container transition translate3');
        // console.log(head.getAttribute('class'))
        canvasApp01('部门风采', 'li3', 'licanvas03');
        canvasApp01('15周年庆', 'li5', 'licanvas05');
        canvasApp02Clear('li3', 'licanvas03')
        canvasApp02Clear('li5', 'licanvas05')
    }
    if (head.getAttribute('class') === "container transition translate4"&&(e.keyCode == 38 && opts.through||opts.through && e.keyCode == 40)) {
        // setTimeout('canvasApp10()', 1200 )
        canvasApp10()
        canvasApp10Clear();
        canvasApp11()
            // setTimeout('canvasApp11()', 1200 )
        canvasApp02('15周年庆', 'li5', 'licanvas05', 'container transition translate4');
        canvasApp01('产品介绍', 'li4', 'licanvas04');
        canvasApp01('联系/加入', 'li6', 'licanvas06');
        canvasApp02Clear('li4', 'licanvas04')
        canvasApp02Clear('li6', 'licanvas06')
    }
    if (head.getAttribute('class') === "container transition translate5"&&(e.keyCode == 38 && opts.through||opts.through && e.keyCode == 40)) {
        canvasApp02('联系/加入', 'li6', 'licanvas06', 'container transition translate5');
        canvasApp01('产品介绍', 'li5', 'licanvas05');
        // console.log("a")
        canvasApp02Clear('li5', 'licanvas05')
        canvasApp12();
    }
}
