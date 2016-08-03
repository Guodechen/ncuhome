function clearClassName() {
	var productsLeft = document.getElementsByClassName('productLeft')
	var productsRight = document.getElementsByClassName('productRight')
	for (var i = productsLeft.length - 1; i >= 0; i--) {
		var classImg = productsLeft[i].getElementsByTagName('img')
		for (var j = classImg.length - 1; j >= 0; j--) {
			classImg[j].classList = ""
		}
	}
}
function productArrow(position) {
	var slideBox = document.getElementsByClassName('productsImageBox')[0]
	var through
	
	through = 'throught' + -position
	slideBox.classList.remove(slideBox.classList[1])
	addClassName(slideBox,through)
	setTimeout(function () {
		productsFlow(position)
	},500)
}
function productsFlow(position) {
	var flowLeft = document.getElementsByClassName('productRight')
	var lost = document.getElementsByClassName('lost')[0].getElementsByTagName('img')
	var grade = document.getElementsByClassName('grade')[0].getElementsByTagName('img')
	var elector = document.getElementsByClassName('elector')[0].getElementsByTagName('img')
	var english = document.getElementsByClassName('EnglishShow')[0].getElementsByTagName('img')
	var computer = document.getElementsByClassName('computerRepare')[0].getElementsByTagName('img')
	clearClassName()

	switch(position) {
		case -2:
			break;
		case -3:
			for (var i = 1,flow = 0; i < 6; ++i, ++flow) {
				var str = 'flow' + flow
				addClassName(elector[i],str)
			}
			break
		case -4:
			var str = 'flow5' 
			addClassName(grade[1], str)
			break
		case -5:
			var str = 'flow6' 
			addClassName(computer[1], str)
			break
		case -6:
			var str = 'flow7' 
			addClassName(english[1], str)
			break
		case -7:
			var str = 'flow8' 
			addClassName(lost[1], str)
			var str = 'flow9' 
			addClassName(lost[2], str)
			break
	}
}
function Product() {
	var box = document.getElementsByClassName('productsImageBox')[0]
	var left = document.getElementsByClassName('leftArrow')[0]
	var right = document.getElementsByClassName('rightArrow')[0]
	var bottomNav = document.getElementsByClassName('bottomNav')[0].getElementsByTagName('div')
	var maxWidth = 7
	var position = 0

	left.onclick = function () {
		if (position == 0) {
			// position=0
			return
			// document.getElementsByClassName('productsImageBox')[0].style.transitionDuration='0s'
			// productArrow(position)
		} else {
			position++ 
			productArrow(position)
		}
	}
	right.onclick = function () {
		if (position == -maxWidth) {
			return
			// position = 0
			// console.log(box.style)
			// box.style.transitionDuration = '0s'
			// productArrow(position)

		} else {
			position--
			productArrow(position)
		}
	}
	bottomNav[0].onclick = function () {
		if (position !=-3) {
			position = -3
			productArrow(position)
		} else {
			return
		}
	}
	bottomNav[1].onclick = function () {
		if (position != -2) {
			position = -2
			productArrow(position)
		}else {
			return
		} 
	}
	bottomNav[2].onclick = function () {
		if (position != -1) {
			position = -1
			productArrow(position)
		} else {
			return
		} 
	}
	bottomNav[3].onclick = function () {
		if (position == 0) {
			return
		}else {
			position = 0
			productArrow(position)
		}
	}
	bottomNav[0].onmouseover = function () {
		canvasApp07('productsCanvas02','bottomNavLine')
		console.log(ifcanvasApp07back)
		if (ifcanvasApp07back) {
			console.log(ifcanvasApp07back)
			ifcanvasApp07back = false;
			canvasApp07back('productsCanvas05','bottomNavLine3');
		}
		bottomNav[0].onmouseout = function () {
		canvasApp07back('productsCanvas02','bottomNavLine')

	}
	}
	bottomNav[1].onmouseover = function () {
		canvasApp07('productsCanvas03','bottomNavLine1')
		
		if (ifcanvasApp07back) {
			ifcanvasApp07back = false;
			canvasApp07back('productsCanvas05','bottomNavLine3')

		}
		bottomNav[1].onmouseout = function () {
		canvasApp07back('productsCanvas03','bottomNavLine1')
			}
	}
	bottomNav[2].onmouseover = function () {
		canvasApp07('productsCanvas04','bottomNavLine2')
		if (ifcanvasApp07back) {
			ifcanvasApp07back = false;
			canvasApp07back('productsCanvas05','bottomNavLine3')
		}
		bottomNav[2].onmouseout = function () {
		canvasApp07back('productsCanvas04','bottomNavLine2')
		
	}
	}
	bottomNav[3].onmouseover = function () {
		canvasApp07('productsCanvas05','bottomNavLine3')
		bottomNav[3].onmouseout = function () {
		canvasApp07back('productsCanvas05','bottomNavLine3')
	}
	}
}
var ifcanvasApp07back = true
Product()
