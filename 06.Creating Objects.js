
var Student = {
Name: "PoornaChand",
PIN: "1608-17-733-302",
display:function()
{
	document.write("<h1>" + Student.Name +" : "+ Student.PIN + "</h1><br>")
}

}
Student.display();

function College(Name,Board,Place)
{
this.Name = Name;
this.Board = Board;
this.Place = Place;
this.display = function()
{
	document.write("<h2> College Name : "+this.Name +"<br>Board : "+ this.Board +"<br>Place : "+ this.Place+"</h2><br>");
}
}
var c1 = new College("MATRUSRI ENGG COLLEGE","OU","SAIDABAD");
c1.display();
document.write("In this Document the above printed data is Displayed by creating the objects In JavaScript...Name and Pin is printed using one of the method of creating Objects and the other details are Printed using another Method.");
document.write("The method used to create the Name and PIN object is not sutable for creating multiple opjects in single line we need to write code again and again. Now another College details are printed for demonstration purposes.");
var c2 = new College("Ghanpur Polytechnic College","SBTET","Station Ghanpur");
document.write("<br><h3>Before Deleting place Property in our college function...</h3>");
c2.display();
delete c2.Place; 
document.write("<br><h3>After Deleting place Property in our college function...</h3>");
c2.display();
document.write("<br>We can add the properties to the objetcts even after writing any number of lines of code...<br>");
c2.Study_years = "2015 - 2018";
document.write("<h2>Study Year : " + c2.Study_years + "</h2>");

var str1 = new String("PC_1");
var str2 = "PC_2"
document.write("<h3>str1 = " + str1 + "<br>str2 = " + str2 + "</h3>");
document.write("<h2>Type of str1 : "+ typeof(str1) + "<br>Type of str2 : " + typeof(str2) + "</h2>")