function contact() {
	var btn = document.getElementsByClassName('switchBtn')
	var boxContain = document.getElementsByClassName('containContact')[0]

	btn[0].onclick = prev
	function prev() {
		if (btn[0].classList.lenght == 2) {
			return
		}else {
			btn[0].classList.add('afterClick')
			btn[1].classList.remove('afterClick')

			boxContain.classList.remove('flowUp')
		}
	}
	btn[1].onclick = next
	function next() {
		btn[0].classList.remove('afterClick')
		btn[1].classList.add('afterClick')

		boxContain.classList.add('flowUp')
	}
	if (opts.load == 14) {
		prev()
	}
	if (opts.load == 15) {
		next()
	}
}