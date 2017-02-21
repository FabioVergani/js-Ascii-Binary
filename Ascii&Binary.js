//Ascii&Binary
  function A2B(s){return s.replace(/./g,function(s){let n=s.charCodeAt().toString(2);return '00000000'.slice(n.length)+n})}
  function B2A(s){return s.replace(/[01]{8}/g,function(s){return String.fromCharCode(parseInt(s,2))})}



/*
var t="Ascii&Binary", s=A2B(t);
console.log(t,'\n',s);
s=B2A(s);
console.log(s,s===t);
*/
