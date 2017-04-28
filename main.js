(function(){
  'use strict';

  var comment = document.getElementById('txt');
  var label = document.getElementById('label');
  var display = document.getElementById('display');
  var DB = ["gorira","東京","obama","おかん"];
/*  var LIMIT = 20;
  label.innerHTML = LIMIT;

  var DISP = "hello, fucking world!";
  display.innerHTML = DISP;
*/

  comment.addEventListener('keyup',function(){
    var remaining = this.value.length;
    label.innerHTML = remaining;

    var txt = this.value;
    console.log(txt);
    /*txt内の特定語に<span></span>を追加*/
    for(var i = 0; i<DB.length;i++){
      if(txt.match(DB[i])){
  /*    display.className='highlight';*/
        var txt = txt.replace(DB[i],"<mark>"+DB[i]+"</mark>");
      }
    }


    /*完成したtxtを出力*/
    display.innerHTML = txt;
  });
})();
