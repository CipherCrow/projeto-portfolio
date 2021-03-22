let hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click',function(){
	document.querySelector('.container').classList.toggle('show-menu');
	fechaAbre();
})

function fechaAbre(){
	let fechar = document.querySelector('.hamburguer i').classList;
	fechar.toggle('fa-bars');
	fechar.toggle('fa-times');
}

document.querySelector('#qtde').addEventListener("change", attPreco);
document.querySelector('#js').addEventListener("change", attPreco);
document.querySelector('#layout-sim').addEventListener("change", attPreco);
document.querySelector('#layout-nao').addEventListener("change", attPreco);
document.querySelector('#prazo').addEventListener("change", function(){

	let atual = document.querySelector('#prazo').value;
	document.querySelector('label[for="prazo"]').innerText = `Prazo de (${atual}) semanas`;
	attPreco();
});

function attPreco(){
	const qtde = document.querySelector("#qtde").value;
	const temJs = document.querySelector("#js").checked;
	const temLayout = document.querySelector("#layout-sim").checked;
	const prazo = document.querySelector("#prazo").value;

	let valorTotal = qtde * 100;
	if (temJs) {valorTotal *= 1.1};
	if (temLayout) {valorTotal += 500};
	let urgencia = 1 - prazo*0.1;
	valorTotal *= 1 + urgencia; 
	// valorTotal = (pagiXscript + layoutT) * urgencia;
	document.querySelector('#valorTotal').innerText = `R$ ${valorTotal.toFixed(2)}`;
}

