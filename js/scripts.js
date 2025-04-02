//ELEMENTOS DE HTML

const passwordElement = document.getElementById('password');
const passwordLengthElement = document.getElementById('password-length');
const rangeInputElement = document.getElementById('range-input');
const generatorButtonElement = document.getElementById('generator-button');

//CARACTERES DE LA CONTRSEÑA

const passwordCharacters =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

//LÓGICA GENERADOR DE CONTRASEÑA

//para qué había que usar el change?

const getPasswordLength = event => {
	passwordLengthElement.textContent = rangeInputElement.value;
	return getPasswordLength;
};
rangeInputElement.addEventListener('input', getPasswordLength);

const getPassword = () => {
	const inputValue = rangeInputElement.value;
	let randomCharacters = '';
	for (i = 0; i < inputValue; i++) {
		const randomPosition = Math.floor(
			Math.random() * passwordCharacters.length
		);
		const randomCharacter = passwordCharacters.charAt(randomPosition);
		randomCharacters += randomCharacter;
	}
	return randomCharacters;
};

const generatePassword = event => {
	passwordElement.value = getPassword(); //Por qué es value y no text content?
};
generatorButtonElement.addEventListener('click', generatePassword);
