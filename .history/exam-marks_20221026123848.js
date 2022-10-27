
/* যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.
 */

var marks = prompt('Enter your marks: ');

if(marks >= 90){
    console.log("A+");
}
else if(marks >=80 && marks <=90){
    console.log("A");
}
else if(marks >=70 && marks <=80){
    console.log("B");
}
else if(marks >=60 && marks <=70){
    console.log("C");
}
else if(marks >=50 && marks <=60){
    console.log("D");
}
else if(marks <=50){
    console.log("Fail");
}