function gather() {
	var begin = document.getElementsByClassName('begin')[0]
	var now = document.getElementsByClassName('now')[0]
	var center = document.getElementsByClassName('anniversaryCenter')[0]

	setTimeout(function () {
		addClassName(begin, 'beginGather')
		addClassName(now, 'nowGather')
		addClassName(center, "centerGather")
	},1000)
}

function clearGather() {
	var begin = document.getElementsByClassName('begin')[0]
	var now = document.getElementsByClassName('now')[0]
	var center = document.getElementsByClassName('anniversaryCenter')[0]

	setTimeout(function () {
		begin.classList.remove('beginGather')
		now.classList.remove('nowGather')
		center.classList.remove('centerGather')	
	},600)
}
function controlGather() {
	var center = document.getElementsByClassName('anniversaryCenter')[0]
	var road = center.getElementsByTagName('img')[0]
	var link = center.getElementsByTagName('a')[0]
	var hoverNone = center.getElementsByTagName('img')[1]

	var Height = parseInt(road.clientHeight) *0.94
	link.style.height = Height + 'px'
	link.onmouseover = function () {
		addClassName(hoverNone, 'none')
		canvas = document.getElementById('anniversaryCanvas01');
		
		canvas.style.display = 'none';
		this.onmouseout = function () {
			hoverNone.classList.remove('none')
			canvas.style.display = 'block';
			canvasApp11()
		}
	}
}
controlGather()