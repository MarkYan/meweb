<!--
 window.onload = function (){
	function $(o){return document.getElementById(o)};
	var prev=$('prev'),next=$('next'),box=$('shower'),t_move;
	
	function move(dir){
		clearTimeout(t_move);
		var _fx=(function (form,to,s){
			var m=Math[form<to?'ceil':'floor'];
			return function (){return form+=m((to-form)*(s||0.04))};
		})(box.scrollLeft,box.scrollLeft+300*dir);
		t_move=setTimeout(function(){if((box.scrollLeft=_fx())%100)move(dir)},10);
	}
	
	prev.onclick=function(){move(-1)};
	next.onclick=function(){move(1)};
 }
 
 //function slideshow
 -->