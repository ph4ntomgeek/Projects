/* I could've used jquery but i want to brush up my js skills
so I decided to write the zoomin and zoomout code*/

//clear input box on submit

function cinp(){
	document.getElementsByTagName("INPUT").reset();
}

//zoom in and out function
var width=16;
var difference=2;
var interveralID =0;
function zoomin()
		{
			clearInterval(interveralID);
			interveralID=setInterval(expand,10);
      //this times the function and expands object after every 10ms
		}
function zoomout()
		{
			clearInterval(interveralID);
			interveralID=setInterval(shrink,10);
      //this shrinks the object after every 10ms
		}

//now we have both the functions defined
function expand()
		{
			if(width<20)
			{
				width = width+difference;
				document.getElementById("img1").style.width=width;
				console.log(width);
			}
			else
			{
				clearInterval(interveralID);
			}
			
		}
function shrink()
		{
			if(width>16)
			{
				width = width-difference;
				document.getElementById("img1").style.width=width;
				console.log(width);
			}
			else
			{
				clearInterval(interveralID);
			}
			
		}
