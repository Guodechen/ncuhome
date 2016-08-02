
var timeRotate;		
function stop() {
	clearInterval(timeRotate)
}
var clickChange = function () {
	var leftBoxChild = document.getElementById("leftBox").getElementsByTagName("div")
	var boxChild = document.getElementById("leftBox").getElementsByClassName('Zindex')
	var img = document.getElementById('leftBox').getElementsByTagName('img')
	var introduceBox = document.getElementsByClassName('introduceBox')[0]
	var afterIntroduce = introduceBox.getElementsByClassName('afterIntroduce')[0]
	var span = document.getElementsByTagName('span')
	var spanImg1 = span[0].getElementsByTagName('img')[0]
	var spanImg2 = span[1].getElementsByTagName('img')[0]
	var spanImg3 = span[2].getElementsByTagName('img')[0]
	var disprese0 = document.getElementById('leftBox').getElementsByClassName('fisrt')[0]
	var img1 = disprese0.getElementsByTagName('img')[0]
	var disprese1 = document.getElementById('leftBox').getElementsByClassName('second')[0]
	var img2 = disprese1.getElementsByTagName('img')[0]
	var disprese2 = document.getElementById('leftBox').getElementsByClassName('thead')[0]
	var img3 = disprese2.getElementsByTagName('img')[0]

	function prev() {

		if (span[3].classList.length) {
			return
		} else {
			span[4].classList.remove("afterClick")
			addClassName(span[3],'afterClick')
			for (var i = 0; i < leftBoxChild.length; i++) {
				if (i%2 == 0) {
					leftBoxChild[i].classList.remove('rotate180')
					addClassName(leftBoxChild[i], 'rotate360')	
				}
			}
			introduceBox.classList.remove('rotate180')
			addClassName(introduceBox, 'rotate360')
		}
		setTimeout(function () {
			img1.style.opacity = 1
			spanImg1.style.opacity = 0
			afterIntroduce.style.opacity = 0
		},200)
		setTimeout(function () {
			img2.style.opacity = 1	
			spanImg2.style.opacity = 0
		},500)
		setTimeout(function () {
			img3.style.opacity = 1
			spanImg3.style.opacity = 0
		},800)
	}

	function next() {
		span[3].classList.remove('afterClick')
		addClassName(span[4], 'afterClick')
		for (var i = 0; i < leftBoxChild.length; i++) {
			if (i%2 == 0) {
				leftBoxChild[i].classList.remove('rotate360')
				addClassName(leftBoxChild[i], 'rotate180')
			}
		}
		introduceBox.classList.remove('rotate360')
		addClassName(introduceBox, 'rotate180')
		setTimeout(function () {
			img1.style.opacity = 0
			spanImg1.style.opacity = 1
			afterIntroduce.style.opacity = 1
		},200)
		setTimeout(function () {
			img2.style.opacity = 0
			spanImg2.style.opacity = 1
		},500)
		setTimeout(function () {
			img3.style.opacity = 0
			spanImg3.style.opacity = 1
		},800)
	}


	function pictureHover() {
		for (var i = img.length - 1; i >= 0; i--) {

			img[i].onmouseover = function () {
				var order = parseInt(this.getAttribute('order'))
				stop()
				switch (order)
				{
					case 0: 
					img[0].classList.add('largen')
					case 1:
					boxChild[0].style.zIndex = 5
					img[1].classList.add('largen')
					break
					case 2:
					img[2].classList.add('largen')
					case 3:
					img[3].classList.add('largen')
					boxChild[1].style.zIndex = 5
					break
					case 4:
					img[4].classList.add('largen')
					case 5:
					boxChild[2].style.zIndex = 5
					img[5].classList.add('largen')
					break;
				}
				this.onmouseout = function () {
					img[order].classList.remove('largen')
					play()
					switch(order){
						case 0: 
						img[0].classList.remove('largen')
						case 1:
						boxChild[0].style.zIndex = 1
						img[1].classList.remove('largen')
						break
						case 2:
						img[2].classList.remove('largen')
						case 3:
						img[3].classList.remove('largen')
						boxChild[1].style.zIndex = 2
						break
						case 4:
						img[4].classList.remove('largen')
						case 5:
						img[5].classList.remove('largen')
						boxChild[2].style.zIndex = 1
						break;
					}
				}
			}
		}
	}
	pictureHover()
	function play() {
		var span = document.getElementsByTagName('span')
		timeRotate = setInterval(function () {
			if (span[3].classList.length) {
				next()
			} else{
				prev()
			}
		},5000)
	}
	span[3].onclick = prev
	span[4].onclick = next
	span[3].onmouseover = stop
	span[4].onmouseover = stop
	span[3].onmouseout = play
	span[4].onmouseout = play

	function clearDisprese() {
		if (disprese0.classList.length == 2) {
			disprese0.classList.remove("disperse0")
			disprese1.classList.remove("disperse1")
			disprese2.classList.remove("disperse2")
		}else{
			return
		}
	}
	clearDisprese()
	play()
}