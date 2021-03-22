let hamburguer = document.querySelector('.hamburguer');
let valorTotal = 0;
let precoPaginas = 0;
let precoScript = 1;
let contScript = 0;
let precoLayout = 0;
let custoPrazo = 1;

hamburguer.addEventListener('click',function(){
	document.querySelector('.container').classList.toggle('show-menu');
	fechaAbre();
})
document.querySelector('#qtde').addEventListener("change", attPaginas);
document.querySelector('#js').addEventListener("change", attScript);
document.querySelector('#layout-sim').addEventListener("change", attLayout);
document.querySelector('#layout-nao').addEventListener("change", attLayout);
document.querySelector('#prazo').addEventListener("change", attPrazo);

function fechaAbre(){
	let fechar = document.querySelector('.hamburguer i').classList;
	fechar.toggle('fa-bars');
	fechar.toggle('fa-times');
}
function attPaginas(){
	precoPaginas = 100 * document.querySelector('#qtde').value;
	console.log(`Atualizando preço das paginas = ${precoPaginas}`);
	attPreco();
}
function attScript(){
	if ( contScript % 2 == 0) {
		precoScript = 1.10;
		console.log(`Usará script!= ${precoScript}`);
	} else{
		precoScript = 1;
		console.log(`Não usará script!= ${precoScript}`);
	}
	contScript++;
	attPreco();
}
function attLayout(){
	// console.log(document.querySelector("#layout-sim").checked);
	// console.log(document.querySelector("#layout-nao").checked);
	if (document.querySelector("#layout-sim").checked === true) {
		precoLayout = 500;
		console.log(`Precisará de layout sim: ${precoLayout}`);
	} else if(document.querySelector('#layout-nao').checked === true){
		precoLayout = 0;
		console.log(`Precisará de layout nao: ${precoLayout}`);
	}
	attPreco();	
}
function attPrazo(){
	custoPrazo= 2-(document.querySelector("#prazo").value*0.10);
	console.log("Quero um prazo de "+document.querySelector("#prazo").value+" : "+custoPrazo);
	document.querySelector('label[for="prazo"').innerText = "Prazo de (	"+document.querySelector("#prazo").value+") semanas" ;
	attPreco();
}
function attPreco(){
	valorTotal = (((precoPaginas * precoScript)+ precoLayout )*custoPrazo);
	// valorTotal = (pagiXscript + layoutT) * urgencia;
	console.log(`Valor Total deu = ${valorTotal}`);
	document.querySelector('#valorTotal').innerText = `R$ ${valorTotal.toFixed(2)}`;
}

