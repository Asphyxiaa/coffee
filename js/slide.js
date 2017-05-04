var h = document.documentElement.clientHeight || document.body.clientHeight ;
var currentPage = 0;
var offset = 0;
var isRoll = false;
var wrap = document.getElementsByClassName('wrap')[0];
var disY = null;
var timer = null;

wrap.addEventListener("touchstart",function(e){
    e = e || window.evnet;
    e.preventDefault();
    disY = e.changedTouches[0].pageY;
},false )
document.addEventListener("touchmove",function(e){
    e = e || window.evnet;
    e.preventDefault();
},false)
wrap.addEventListener("touchend",function(e){
    e = e || window.evnet;
    if(e.changedTouches[0].pageY > disY){
        if(isRoll){
            return;
        }
        if(currentPage == 0 ){
            return;
        }
        currentPage--;
        slide(1);
    }
    if(e.changedTouches[0].pageY < disY){
        if(isRoll){
            return;
        }
        if(currentPage == 5){
            return;
        }
        currentPage++;
        slide(-1);
    }
},false)
function slide(direction){
    isRoll = true;

    var timer = setInterval(function(){
        offset += direction*20;

        wrap.style.top = -((currentPage+direction)*h) + offset +'px';
        if( Math.abs(offset) > h ){
            offset = 0;
            wrap.style.top = -currentPage*h+'px';
            clearInterval(timer)
            isRoll = false;
            animation(currentPage,direction);
        }
    },20)
}

