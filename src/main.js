const canvas = document.querySelector('.gameCanvas'),
	context = canvas.getContext('2d');
let widthCanvas = canvas.width;
let heightCanvas = canvas.height;
let widthMonster = 50;

//////C TABLEAU BLANC
let buttonDraw = document.getElementById('draw');
buttonDraw.addEventListener('click', dessiner);
function dessiner() {

	document.querySelector('.parametresDraw').removeAttribute('hidden');
	console.log('on dessine ?? amuse toi sur le canvas !');
	var radios = document.getElementsByName("typeForme");
	var valeurSelectionnee = "";
	//context.moveTo(0, 0);
	canvas.addEventListener('click', event => {
		console.log('on dessine ??');
		console.log('ta souris X = ' + event.offsetX);
		console.log('ta souris Y = ' + event.offsetY);

		for (var i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				valeurSelectionnee = radios[i].value;
				break;
			}
		}
		console.log("on dessine " + valeurSelectionnee);

		if (valeurSelectionnee == 'rectangle') {
			// context.strokeRect(event.offsetX, event.offsetY, 100, 100);
			context.fillStyle = 'green';
			context.fillRect(event.offsetX, event.offsetY, document.getElementById('xTaille').value, document.getElementById('yTaille').value);
		}

		else if (valeurSelectionnee == 'trait') {
			context.lineTo(event.offsetX, event.offsetY);
			context.stroke();
		}

		else if (valeurSelectionnee == 'cercle') {
			context.strokeStyle = 'purple';
			context.fillStyle = 'blue';
			context.lineWidth = 5;
			context.arc(event.offsetX, event.offsetY, 100, 0, 360, true);
			context.fill();
			context.stroke();
		}

		else {
			alert('Veuillez selectionner une forme pour la dessiner');
		}
	});
}

/////E ANIMATION
let buttonVeille = document.getElementById('veille');
buttonVeille.addEventListener('click', animation);
function animation() {
	let x = 0;
	let y = 0;
	const image = new Image();
	image.src = '../images/monster.png';

	image.addEventListener('load', event => {
		context.drawImage(image, x, y);
		requestAnimationFrame(render);
	});

	function render() {
		context.clearRect(0, 0, widthCanvas, heightCanvas);
		context.drawImage(image, x, y);
		requestAnimationFrame(render);
	}

	let xMax = false;
	let yMax = false;
	function moveMonster() {
		if (!xMax) {
			x++;
			if (x == 600 - 56) {
				xMax = true;
			}
		}
		if (!yMax) {
			y++;
			if (y == 400 - 52) {
				yMax = true;
			}
		}
		if (xMax) {
			x--;
			if (x == 0) {
				xMax = false;
			}
		}
		if (yMax) {
			y--;
			if (y == 0) {
				yMax = false;
			}
		}
	}
	requestAnimationFrame(render);
	setInterval(moveMonster, 1000 / 6000);

}

/////F PILOTAGE AVEC LES FLECHES CLAVIER
let buttonPlay = document.getElementById('play');
buttonPlay.addEventListener('click', play);
function play() {
	let x = 0;
	let y = 0;
	const image = new Image();
	image.src = '../images/monster.png';

	image.addEventListener('load', event => {
		context.drawImage(image, x, y);
		requestAnimationFrame(render);
	});

	function render() {
		context.clearRect(0, 0, widthCanvas, heightCanvas);
		context.drawImage(image, x, y);
		requestAnimationFrame(render);
	}


	document.addEventListener("keydown", function (event) {
		console.log("Touche appuyée : " + event.key);
		moveMonsterKeyboard(event.key);
	});

	let vitesse = 10;
	function moveMonsterKeyboard(clavier) {
		if (clavier == 'ArrowDown') {
			if (y < heightCanvas - widthMonster) {
				console.log('on va en bas');
				y = y + vitesse;
			}
			else {
				y = 0;
			}
		}

		if (clavier == 'ArrowUp') {
			if (y > 0) {
				console.log('on va en haut');
				y = y - vitesse;
			}
			else {
				y = heightCanvas - 50;
			}
		}

		if (clavier == 'ArrowRight') {
			if (x < widthCanvas - widthMonster) {
				console.log('on va a gauche');
				x = x + vitesse;
			}
			else {
				x = 0;
			}
		}

		if (clavier == 'ArrowLeft') {
			if (x > 0) {
				console.log('on va a droite');
				x = x - vitesse;
			}
			else {
				x = widthCanvas - 50;
			}
		}
	}
}


/////// CLEAR
let buttonClear = document.getElementById('clear');
buttonClear.style.backgroundColor = "red";
buttonClear.addEventListener('click', clear);
function clear() {
	console.log("effacement...");
	context.clearRect(0, 0, widthCanvas, heightCanvas);
	location.reload();
	document.querySelector('.parametresDraw').setAttribute('hidden', '');
}