// Selecionando o button
const button = document.querySelector("button");

// Selecionando o body
const body = document.body;

// Guardando o estado do tema que começa como undefined por padrão
let darkMode;

// Armazenando dois possíveis textos para o elemento button em um array
const themeButtonText = ["Trocar Para: Light Mode", "Trocar Para: Dark Mode"];

// Criando a função e seu parâmetro
const themeChangeButtonText = ButtonElement => {

	// Analsiando o estado do tema
	darkMode
	  ? (ButtonElement.innerText = themeButtonText[0])
	  : (ButtonElement.innerText = themeButtonText[1]);
  }

// Criando a função
const themeChange = () => {

	// Invertendo o valor da variável
	darkMode = !darkMode;

	//Acessando o body via DOM e implementando/tirando a classe
	body.classList.toggle("dark-mode");

    // Chamando o localStorage e acessando o método
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

	// Chamando a função responsável por mudar o texto do botão
	themeChangeButtonText(button);
}

// Criando a função que analisa o tema
const themeAnalisys = () => {

	// Re-atribuindo o valor da variável conforme o valor salvo
	darkMode = JSON.parse(localStorage.getItem("darkMode"));

	// Verificando se darkMode é true
	if (darkMode) {
		//Adicionando darkMode
    body.classList.add("dark-mode");
  }
}

// Adicionando o evento e chamando a função themeChange
button.addEventListener("click", themeChange);

//Chamando a função em escopo global
themeAnalisys()