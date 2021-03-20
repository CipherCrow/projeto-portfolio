let hamburguer = document.querySelector('.hamburguer');

function fechaAbre(){
	let fechar = document.querySelector('.hamburguer i').classList;
	fechar.toggle('fa-bars');
	fechar.toggle('fa-times');
}

hamburguer.addEventListener('click',function(){
	document.querySelector('.container').classList.toggle('show-menu');
	fechaAbre();
})