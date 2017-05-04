function get(obj){
    if(obj.value=="姓名"||obj.value=="手机"||obj.value=="就餐人数"){
        obj.original = obj.value;
        obj.value="";
        obj.style.color="#000";
    }
}
function lost(obj){
    if(obj.value==""){
        obj.value = obj.original;
        obj.style.color = "#999";
    }

}
