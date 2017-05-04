/**
 * Created by lanou on 17/3/23.
 */
var index = 0;
var imgArr = [
    "img/1_171x171.png",
    "img/2_171x171.png",
    "img/3_171x171.png",
    "img/4_171x171.png",
    "img/5_171x171.png",
    "img/6_171x171.png",
    "img/7_171x171.png",
    "img/8_171x171.png",
    "img/9_171x171.png",
    "img/bg.png",
    "img/page1_1.png",
    "img/page1_2.png",
    "img/page1_cb.png",
    "img/page1_lb.png",
    "img/page1_lt.png",
    "img/page1_rb.png",
    "img/page1_rt.png",
    "img/page1Text.png",
    "img/page2_1.png",
    "img/page2_2.png",
    "img/page2_3.png",
    "img/page2_4.png",
    "img/page2_1.png",
    "img/page3_1.png",
    "img/page3_2.png",
    "img/page3_3.png",
    "img/page3_4.png",
    "img/page3_5.png",
    "img/page4_1.png",
    "img/page4_2.png",
    "img/page5_1.png",
    "img/page5_2.png",
    "img/page6_1.png",
    "img/round.png",
    "img/spoon.png",
];
var loadingImages = [];
var progressText = document.getElementsByClassName('progressText')[0];
var bar = document.getElementsByClassName('bar')[0];


for(var i = 0; i < imgArr.length ; i++){
    var lodadingObj = new Image();
    lodadingObj.src = imgArr[i];
    loadingImages.push(lodadingObj)
    lodadingObj.onload = function(){
        index++
        loadingProssess(index)
    }
}
function  loadingProssess(index){
    var jindu = parseInt( index /imgArr.length*100);
    progressText.innerHTML = jindu+"%";
    bar.style.left = (-100+jindu)+'%';
    if(index == imgArr.length){
        loadingOver();
    }
}
function loadingOver(){
    loading.style.display = "none";
}


var body = document.getElementsByTagName('body')[0];
body.style.height = h+'px';
