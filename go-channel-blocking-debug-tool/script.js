const res=document.getElementById('res');
function run(){
let txt=document.getElementById('input').value.toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('goroutine')) out+='- Possible goroutine leak or blocking detected\n';
if(txt.includes('borrow')||txt.includes('lifetime')) out+='- Ownership/lifetime issue\n';
if(txt.includes('pointer')) out+='- Pointer memory behavior\n';
if(txt.includes('template')) out+='- Template complexity detected\n';
if(txt.includes('async')) out+='- Async execution flow\n';
if(txt.includes('overflow')||txt.includes('segfault')) out+='- Memory safety issue\n';

if(val){
  out+='- Context: '+val+'\n';
}

out+='- Suggest debugging, optimization, or safe patterns\n';

res.innerText=out;
}