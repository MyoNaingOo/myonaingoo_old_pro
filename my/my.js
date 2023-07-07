function daf(){
	let body=document.body;
	let icon=document.getElementById('dlicon');
	icon.classList.toggle("fa-moon");
	icon.classList.toggle("fa-sun");
   body.classList.toggle("darkmode");
   body.classList.toggle("white");

   let dicon=document.getElementById('ldicon');
   dicon.classList.toggle("fa-moon");
   dicon.classList.toggle("fa-sun");
   
   
}




var nav=document.getElementById("navbg")



window.addEventListener('scroll',sc)


function sc(){
	if(window.scrollY>4.5){
		nav.classList.add("bg-primary")
	}else{
		nav.classList.remove("bg-primary")
	}
}



	




