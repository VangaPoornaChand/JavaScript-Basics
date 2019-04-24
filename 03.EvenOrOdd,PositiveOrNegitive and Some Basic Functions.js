var Num = 123;
document.write("Given Value is " + Num);
if(Num%2==0)
	document.write("<br><br>Number is Even");
else
	document.write("<br><br>Number is Odd");

if(Num>0)
	document.write("<br><br>Number is Positive");
else if(Num<0)
	document.write("<br><br>Number is Negative");
else
	document.write("<br><br>Number is Nither Positive nor Negitive...");

switch(Num%5)
{
	case 0: document.write("<br><br>The Remainder of Num When Divided by 5 is 0");break;
	case 1: document.write("<br><br>The Remainder of Num When Divided by 5 is 1");break;
	case 2: document.write("<br><br>The Remainder of Num When Divided by 5 is 2");break;
	case 3: document.write("<br><br>The Remainder of Num When Divided by 5 is 3");break;
	case 4: document.write("<br><br>The Remainder of Num When Divided by 5 is 4");break;
	default:document.write("<br><br>Your Number : "+Num);

}

document.write("<h2>Printing 1 to 3 Tables<br>1 Table is printed using while loop<br>2 Table is printed using do while loop<br>3 Table is printed using for loop");
var i=1;
while(i<21)
{
	document.write("<br>1 x "+i+" = "+(1*i)+"");
	i++;
}
document.write("<br><br>");
i = 1;
do{
document.write("<br>2 x "+i+" = "+(2*i)+"");i++;
}while(i<21);
document.write("<br><br>");
for(i=0;i<21;i++)
{
	document.write("<br>3 x "+i+" = "+(3*i))
}