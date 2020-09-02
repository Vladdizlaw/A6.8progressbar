let procent=0;
function onepercent (procent){
	let procentw = `${procent}%`;
	$("#my-progress-bar").width(`${procentw}`);
	//console.log(procent);//
	}
function threepercent (procent){
	let procentw = `${procent}%`;
	$("#my-progress-bar").width(`${procentw}`);
	//console.log(procent);//
	}
function fivepercent (procent){
	let procentw = `${procent}%`;
	$("#my-progress-bar").width(`${procentw}`);
	//console.log(procent)//
	}
$(".j-button1").click((event)=>{
	procent=procent+1;
	onepercent (procent);
	});
$(".j-button3").click((event)=>{
	procent=procent+3;
	threepercent (procent);
	});
$(".j-button5").click((event)=>{
	procent=procent+5;
	fivepercent (procent);
	});