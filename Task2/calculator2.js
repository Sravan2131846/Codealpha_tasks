   let display=document.getElementById('display')
   function addedtodisplay(input){
      display.value+=input
   }

 function calculate(){
   try{
   display.value=eval(display.value);
   }
   catch(error){
      display.value="Error"
   }
 }
 function cleardisplay(){
   display.value="";

 }
 function deletelast(){
   display.value=display.value.substring(0,display.value.length-1);

 }