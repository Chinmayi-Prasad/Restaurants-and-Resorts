function openNav(){

		myFunction();

                        startTimer();

                        startTimer1();

	}

function myFunction(){

                        var x = document.getElementById("myTopnav");

                        if (x.className === "topnav")

                        {

                                    x.className += " responsive";

                        }           

                        else

                        {

                                    x.className = "topnav";

                        }

               }

function displayNextImage() {

              x = (x === images.length - 1) ? 0 : x + 1;

              document.getElementById("images").src = images[x];

          }

function startTimer()   {

                        setInterval(displayNextImage, 3000);

                        }



var images = [], x = -1;

images[0] = "images/animatedburger.gif";

images[1] = "images/choco.jpg";

images[2] = "images/food.jpg";

images[3] = "images/foodpizza.jpg";

images[4] = "images/gifburger.gif";

images[5] = "images/shinchan.gif" ;         

images[6] = "images/bking.jpg";



var colors =[];

colors[0]="blue";

colors[1]="green";

colors[2]="red";

colors[3]="grey";

colors[4]="orange";

colors[5]="aqua";

colors[6]="brown";

colors[7]="black";

colors[8]="purple";

colors[9]="chocolate";

colors[10]="magenta";

colors[11]="violet";

colors[12]="indigo";

colors[13]="sienna";

colors[14]="yellow";





var i=0;

function text(){

                        if (i>14)

                        {

                                    i=0;

                        }

                          document.getElementById("todaytreat").style.color = colors[i];

                          i++;

            }

function startTimer1()   {

                        setInterval(text, 3000);

                        }









