var indicators11 = document.getElementsByClassName('indicators11');
var tabPane = document.getElementsByClassName('carousel-inner')[0].getElementsByTagName('ul')[0];
console.log(tabPane);
console.log(indicators11);

var len11 = indicators11.length;
var count = 1;
var interval2=0;

tabPane.onmouseover = function() {
	clearInterval(indicators11);
}
tabPane.onmouseout = function() {
	autoplay();
}
function autoplay() {
	clearInterval(interval2);
	interval2 = setInterval(function(){
		count = count > 2 ? 0 : count;
			for(var i = 0; i<len11;i++) {
			indicators11[i].className=indicators11[i].className.replace('active11','').trim();
		}
		var offset = - count * 760;
		animate3(tabPane,offset);
			indicators11[count].className +=' active11';
		count++;
	},3000);
}; 
autoplay();

for(var i = 0 ; i<len11; i++) {
	indicators11[i].myindex = i;
	indicators11[i].onmouseover = function () {
		for(var j = 0; j<len11;j++) {
			indicators11[j].className=indicators11[j].className.replace('active11','').trim();//链式调用
		}
		var offset = -this.myindex * 760;
		animate3(tabPane,offset);
		this.className += ' active11';
		count++;
	};
}


function animate3(ele,offLeft){
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		if(offLeft==ele.offsetLeft){
			clearInterval(ele.timer);
		}else{
			var step = (offLeft-ele.offsetLeft)/10;
			step = step > 0 ?Math.ceil(step):Math.floor(step);
			ele.style.left = ele.offsetLeft+step+"px";
		}
	},50);
}


/************第二个轮播***************/
var indicators2 = document.getElementsByClassName('indicators2');
var tabPane2 = document.getElementsByClassName('carousel-inner-2')[0].getElementsByTagName('ul')[0];
// var tabPane = document.getElementsByClassName('therr')[0];
console.log(tabPane2);
console.log(indicators2);

var len2 = indicators2.length;
var count2 = 1;
var interval2=0;

tabPane2.onmouseover = function() {
	clearInterval(indicators2);
}
tabPane2.onmouseout = function() {
	autoplay2();
}
function autoplay2() {
	clearInterval(interval2);
	interval2 = setInterval(function(){
		count2 = count2 > 2 ? 0 : count2;
			for(var i = 0; i<len2;i++) {
			indicators2[i].className=indicators2[i].className.replace('active2','').trim();
		}
		var offset = - count2 * 240;
		animate2(tabPane2,offset);
			indicators2[count2].className +=' active2';
		count2++;
	},5000);
}; 
autoplay2();

for(var i = 0 ; i<len2; i++) {
	indicators2[i].myindex2 = i;
	indicators2[i].onmouseover = function () {
		for(var j = 0; j<len2;j++) {
			indicators2[j].className=indicators2[j].className.replace('active2','').trim();//链式调用
		}
		var offset = -this.myindex2 * 240;
		animate2(tabPane2,offset);
		this.className += ' active2';
		count2 ++;
	};
}


/************第5个轮播***************/
var indicators5 = document.getElementsByClassName('indicators5');
var tabPane5 = document.getElementsByClassName('carousel-inner-5')[0].getElementsByTagName('ul')[0];
console.log(tabPane5);
console.log(indicators5);

var len5 = indicators5.length;
var count5 = 1;
var interval5=0;

tabPane5.onmouseover = function() {
	clearInterval(indicators5);
}
tabPane5.onmouseout = function() {
	autoplay5();
}
function autoplay5() {
	clearInterval(interval5);
	interval5 = setInterval(function(){
		count5 = count5 > 2 ? 0 : count5;
			for(var i = 0; i<len5;i++) {
			indicators5[i].className=indicators5[i].className.replace('active5','').trim();
		}
		var offset = - count5 * 310;
		animate2(tabPane5,offset);
			indicators5[count5].className +=' active5';
		count5++;
	},4000);
}; 
autoplay5();

for(var i = 0 ; i<len5; i++) {
	indicators5[i].myindex5 = i;
	indicators5[i].onmouseover = function () {
		for(var j = 0; j<len5;j++) {
			indicators5[j].className=indicators5[j].className.replace('active5','').trim();//链式调用
		}
		var offset = -this.myindex5 * 310;
		animate2(tabPane5,offset);
		this.className += ' active5';
		count5 ++;
	};
}


/************第5-2个轮播***************/
var indicators5two = document.getElementsByClassName('indicators5two');
var tabPane5two = document.getElementsByClassName('carousel-inner-5two')[0].getElementsByTagName('ul')[0];
console.log(tabPane5two);
console.log(indicators5two);

var len5two = indicators5two.length;
var count5two = 1;
var interval5two=0;

tabPane5two.onmouseover = function() {
	clearInterval(indicators5two);
}
tabPane5two.onmouseout = function() {
	autoplay5();
}
function autoplay5two() {
	clearInterval(interval5two);
	interval5two = setInterval(function(){
		count5two = count5two > 2 ? 0 : count5two;
			for(var i = 0; i<len5two;i++) {
			indicators5two[i].className=indicators5two[i].className.replace('active5two','').trim();
		}
		var offset = - count5two * 310;
		animate2(tabPane5two,offset);
			indicators5two[count5two].className +=' active5two';
		count5two++;
	},4000);
}; 
autoplay5two();

for(var i = 0 ; i<len5two; i++) {
	indicators5two[i].myindex5two = i;
	indicators5two[i].onmouseover = function () {
		for(var j = 0; j<len5two;j++) {
			indicators5two[j].className=indicators5two[j].className.replace('active5two','').trim();//链式调用
		}
		var offset = -this.myindex5two * 310;
		animate2(tabPane5two,offset);
		this.className += ' active5two';
		count5two ++;
	};
}

/************第5-3个轮播***************/
var indicators5three = document.getElementsByClassName('indicators5three');
var tabPane5three = document.getElementsByClassName('carousel-inner-5three')[0].getElementsByTagName('ul')[0];
console.log(tabPane5three);
console.log(indicators5three);

var len5three = indicators5three.length;
var count5three = 1;
var interval5three=0;

tabPane5three.onmouseover = function() {
	clearInterval(indicators5three);
}
tabPane5three.onmouseout = function() {
	autoplay5();
}
function autoplay5three() {
	clearInterval(interval5three);
	interval5three = setInterval(function(){
		count5three = count5three > 2 ? 0 : count5three;
			for(var i = 0; i<len5three;i++) {
			indicators5three[i].className=indicators5three[i].className.replace('active5three','').trim();
		}
		var offset = - count5three * 310;
		animate2(tabPane5three,offset);
			indicators5three[count5three].className +=' active5three';
		count5three++;
	},3000);
}; 
autoplay5three();

for(var i = 0 ; i<len5three; i++) {
	indicators5three[i].myindex5three = i;
	indicators5three[i].onmouseover = function () {
		for(var j = 0; j<len5three;j++) {
			indicators5three[j].className=indicators5three[j].className.replace('active5three','').trim();//链式调用
		}
		var offset = -this.myindex5three * 310;
		animate2(tabPane5three,offset);
		this.className += ' active5three';
		count5three ++;
	};
}



/************第6个轮播***************/
var indicators6 = document.getElementsByClassName('indicators6');
var tabPane6 = document.getElementsByClassName('carousel-inner-6')[0].getElementsByTagName('ul')[0];
// var tabPane = document.getElementsByClassName('therr')[0];
console.log(tabPane6);
console.log(indicators6);

var len6 = indicators6.length;
var count6 = 1;
var interval6=0;

tabPane6.onmouseover = function() {
	clearInterval(indicators6);
}
tabPane6.onmouseout = function() {
	autoplay6();
}
function autoplay6() {
	clearInterval(interval6);
	interval6 = setInterval(function(){
		count6 = count6 > 2 ? 0 : count6;
			for(var i = 0; i<len6;i++) {
			indicators6[i].className=indicators6[i].className.replace('active6','').trim();
		}
		var offset = - count6 * 240;
		animate2(tabPane6,offset);
			indicators6[count6].className +=' active6';
		count6++;
	},5000);
}; 
autoplay6();

for(var i = 0 ; i<len6; i++) {
	indicators6[i].myindex6 = i;
	indicators6[i].onmouseover = function () {
		for(var j = 0; j<len6;j++) {
			indicators6[j].className=indicators6[j].className.replace('active6','').trim();//链式调用
		}
		var offset = -this.myindex6 * 240;
		animate2(tabPane6,offset);
		this.className += ' active6';
		count6 ++;
	};
}



function animate2(ele,offLeft){
	//清除元素身上的定时器
	clearInterval(ele.timer);
	//开启一个定时器，用于移动元素
	ele.timer = setInterval(function(){
		if(offLeft==ele.offsetLeft){
			clearInterval(ele.timer);
		}else{
			//计算一次移动多少
			var step = (offLeft-ele.offsetLeft)/10;
			step = step > 0 ?Math.ceil(step):Math.floor(step);
			ele.style.left = ele.offsetLeft+step+"px";
		}
	},20);
}



var title = document.getElementsByClassName('active7');
		console.log(title);
		var neirong = document.getElementsByClassName('show2');
		console.log(neirong);
		var len=title.length;
		for(var i = 0; i<len;i++) {
			title[i].c=i;
			title[i].onclick=function() {
				// title[i].className=title[i].className.replace('a','').trim();
				for(var j=0;j<len;j++) {
					title[j].className=title[j].className.replace('abc','').trim();
					neirong[j].className=neirong[j].className.replace('b','').trim();
					// title[j].style.borderRight = 'hidden';
					// title[j].style.borderLeft  = '1px solid #f4ecdb'
				}
				this.className += ' abc';
				neirong[this.c].className += ' b';

			};
		}




