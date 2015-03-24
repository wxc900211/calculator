 
var num=0,result=0,numshow="0"; 
var operate=0; //判断输入状态的标志 
var calcul=0; //判断计算状态的标志 
function command(num){ 
var str=String(document.calculator.numScreen.value); //获得当前显示数据 
str=(str!="0") ? ((operate==0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
str=str + String(num); //给当前值追加字符 
document.calculator.numScreen.value=str; //刷新显示 
operate=0; //重置输入状态 
} 
function clearscreen(){ //清除数据 
num=0; 
result=0; 
numshow="0"; 
document.calculator.numScreen.value="0"; 
} 
function plus(){ //加法 
calculate(); //调用计算函数 
operate=1; //更改输入状态 
calcul=1; //更改计算状态为加 
} 
function minus(){ //减法 
calculate(); 
operate=1; 
calcul=2; 
} 
function times(){ //乘法 
calculate(); 
operate=1; 
calcul=3; 
} 
function divide(){ //除法 
calculate(); 
operate=1; 
calcul=4; 
} 
function equal(){ 
calculate(); //等于 
operate=1; 
num=0; 
result=0; 
numshow="0"; 
} 
// 
function calculate(){ 
numshow=Number(document.calculator.numScreen.value); 
if(num!=0){ //判断前一个运算数是否为零以及防重复按键的状态 
switch(calcul){ //判断要输入状态 
case 1:result=num+numshow;break; //计算"+" 
case 2:result=num-numshow;break; //计算"-" 
case 3:result=num*numshow;break; 
case 4:result=num/numshow;break; 
} 
} 
else{ 
result=numshow; 
} 
numshow=String(result); 
document.calculator.numScreen.value=numshow; 
num=result; //存储当前值 
} 
