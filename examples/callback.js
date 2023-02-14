const loadScript=function(src,callback){
    const script=document.createElement('script');
    script.src=src;
    script.onload=function(){
        callback();
    }
    document.head.appendChild(script);
}
loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',function(){
    console.log(_.uniq([1,1,2,3,3,5,8,5,6,6]))
})