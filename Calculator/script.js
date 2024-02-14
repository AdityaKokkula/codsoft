const field=document.getElementById("field");
function append(input){
    field.value+=input;
}
function clearDisplay(){
    field.value="";
}
function calculate(){
    try{
        field.value=eval(field.value);
    }
    catch{
        field.value="Error"
    }

}