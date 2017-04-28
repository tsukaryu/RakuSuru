(function(){
  'use strict';

  var comment = document.getElementById('txt');
  var label = document.getElementById('label');
  var display = document.getElementById('display');
  var DB = "gorira";
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
    display.innerHTML = txt;

    if(txt.match("gorira")){
    display.className='highlight'
    }else{
    display.className="";
    }

  });
})();
