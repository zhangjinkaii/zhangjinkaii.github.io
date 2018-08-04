function animate2(ele,offset) {
	clearInterval(ele.timer);

	ele.timer = setInterval(function(){
		if(ele.offsetLeft == offset) {
			clearInterval(ele.timer);
		}else {
			var step = (offset - ele.offsetLeft)/10;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			ele.style.left = ele.offsetLeft + step + 'px';
		}
	},15);
}