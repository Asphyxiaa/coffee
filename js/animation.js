/**
 * Created by lanou on 17/3/22.
 */
var pageArr = [page1,page2,page3,page4,page5,page6];
for(var i = 1 ; i < pageArr.length ; i++){
    //console.log(pageArr[i])
    letBlockNone(i,"none")
}

function animation (currentPage,direction){
    if(direction == 1){
        letBlockNone(currentPage+1,"none");
        letBlockNone(currentPage,"block");
    }
    if(direction == -1){
        letBlockNone(currentPage-1,"none");
        letBlockNone(currentPage,"block");

    }
}
function letBlockNone (currentPage,type){
    var animationE = [];
    var pageObj = pageArr[currentPage]
    for(x in pageObj.children){
        if(pageObj.children[x].nodeName == "DIV" || pageObj.children[x].nodeName =="UL" || pageObj.children[x].nodeName =="SPAN"){
            animationE.push(pageObj.children[x])
        }
    }
    for(x in animationE){
        animationE[x].style.display = type;
    }
}
