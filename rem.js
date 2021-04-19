(function (doc, win, undefined) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (clientWidth === undefined) return;
        //以ip6为基准  
        docEl.style.fontSize =(clientWidth*100) / 375 + 'px';
     };
   if (doc.addEventListener === undefined) return;
  win.addEventListener(resizeEvt, recalc, false);
   doc.addEventListener('DOMContentLoaded', recalc, false)
  
   // 接触toFixed()方法保留位数的后一位是5不进位的问题
   Number.prototype.toFixed=function (d) { 
    var s=this+""; 
    if(!d)d=0; 
    if(s.indexOf(".")==-1)s+="."; 
    s+=new Array(d+1).join("0"); 
    if(new RegExp("^(-|\\+)?(\\d+(\\.\\d{0,"+(d+1)+"})?)\\d*$").test(s)){
       var s="0"+RegExp.$2,pm=RegExp.$1,a=RegExp.$3.length,b=true;
       if(a==d+2){
           a=s.match(/\d/g); 
           if(parseInt(a[a.length-1])>4){
               for(var i=a.length-2;i>=0;i--){
                   a[i]=parseInt(a[i])+1;
                   if(a[i]==10){
                       a[i]=0;
                       b=i!=1;
                   }else break;
               }
           }
           s=a.join("").replace(new RegExp("(\\d+)(\\d{"+d+"})\\d$"),"$1.$2");
  
       }if(b)s=s.substr(1); 
       return (pm+s).replace(/\.$/,"");
  }return this+"";
  
  };
  })(document, window);