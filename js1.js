//alert('hello world');

var a = 10 ;
var b = 10;
var c=a+b;

if(a>b)
{
    document.write("a is greater than b");
}
else if(a===b)
{
    document.write("A equal to B");
}
else
{
    document.write("b is greater than a ");
}

document.write("<br>");

document.write("------------new branch (v1)----------------")
document.write("<br>");
switch(b+a)
{
    case 10 : document.write("its 10 case");
    break;
    case 20 : document.write("its 20 case");
    break;
    case 30 : document.write('')
}
document.write("<br/>");
document.write("-------------------------")
document.write("<br>");
var i =4;
while(i<20){
    document.write("*"+i);
    i++;
    document.write("<br/>");

}


