// Selecionando o button
const button = document.querySelector("button");

// Selecionando o body
const body = document.body;

// Criando estado booleano do noso tema
let darkMode = false;

// Criando a função
function themeChange(){

	// Invertendo o valor da variável
	darkMode = !darkMode;

	//Acessando o body via DOM e implementando/tirando a classe
	body.classList.toggle("dark-mode");

    // Chamando o localStorage e acessando o método
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
}

// Criando a função que analisa o tema
function themeAnalasys() {

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
themeAnalasys()