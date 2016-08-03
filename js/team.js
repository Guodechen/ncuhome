	var ifcanvasClose = true
function TeamBtn() {
	var span = document.getElementsByClassName('changeBtnBox')[0].getElementsByTagName('span')
	var team = document.getElementsByClassName('team')[0]
	var div = team.getElementsByTagName('div')
	var introduce = document.getElementsByClassName('teamBox')
	var line = team.getElementsByTagName('span')
	var teamContain = document.getElementsByClassName('teamContain')[0]
	var xImg = document.getElementsByClassName('xImg')[0]
	var emptyBox = document.getElementsByClassName('teamEmptyBox')
	var teamName = document.getElementsByClassName('teamName')
	var canvasClass = document.getElementById('teamCanvas')


	if (opts.load == 3) {
		prev()
	}
	if (opts.load == 4) {
		next()
	}


	span[0].onclick = prev
	function prev() {
		if (span[0].classList.length) {
			return
		}else {
			span[0].classList.add('clickAfter')
			span[1].classList.remove('clickAfter')
			team.classList.remove('slide')
		}
	}
	span[1].onclick = next
	function next() {
		if (span[1].classList.length) {
			return
		}
		span[0].classList.remove('clickAfter')
		span[1].classList.add('clickAfter')
		addClassName(team, 'slide')
	}

	for (var i = 0; i < introduce.length; i++) {
		introduce[i].onclick = function () {
			onclickWlite()
			var index = this.getAttribute('index')
			addClassName(emptyBox[index],'teamIntroduceNone', true, 1000)
			addClassName(teamName[index], 'teamNameNone', true, 1000)
			setTimeout(function () {
				// console.log(span[index].classList)
				if (span[1].classList.length) {
					var translate = 'tabToMove' + (index - 2)
					line[index].style.display = 'none'
					addClassName(introduce[index], translate, true, 600)	
				}else {
					var translate = 'tabToMove' + index
					line[index].style.display = 'none'
					addClassName(introduce[index], translate, true, 600)
				}
			}, 500)
			setTimeout(function () {
				addClassName(teamContain, 'teamContainChange')
				teamClasses = "teamClass" + index
				canvasClass.classList.add(teamClasses)
				team.style.display = 'none'
				xImg.style.display = 'block'
				span[0].style.display = 'none'
				span[1].style.display = 'none'

				canvasApp05()
			},620)
			
		}
	}
	
	xImg.onclick = function () {
		
		if (ifcanvasClose) {
		for (var i = 0; i < line.length; i++) {
			
			line[i].style.display = "block"
		}
		teamContain.classList.remove('teamContainChange')
		canvasClass.classList.remove(teamClasses)
		team.style.display = 'block'
		xImg.style.display = 'none'
		span[0].style.display = 'block'
		span[1].style.display = 'block'
		canvasClear()
	}
	}
	function $(id){  
        return (document.getElementById(id));  
    }  
    function hide_div() {  
        if (ifcanvasClose) {
		for (var i = 0; i < line.length; i++) {
			
			line[i].style.display = "block"
		}
		teamContain.classList.remove('teamContainChange')
		canvasClass.classList.remove(teamClasses)
		team.style.display = 'block'
		xImg.style.display = 'none'
		span[0].style.display = 'block'
		span[1].style.display = 'block'

		canvasClear() 
    } 
    } 
    function control_bubble(oEvent) {  
        //取消冒泡  
        oEvent = oEvent || window.event;  
        if (document.all) {  
            oEvent.cancelBubble = true;  
        } else {  
            oEvent.stopPropagation();  
        }
    };  
    
	function onclickWlite() {  
        document.onclick = function() {  
            hide_div();  
        };  
        $("teamContain").onclick = control_bubble;  
    } 
	
}
