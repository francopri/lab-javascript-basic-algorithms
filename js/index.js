//#region Iteration 1: Names and Input

let hacker1 = `Priscila`;
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Guilherme";
console.log(`The navigator's name is ${hacker2}.`);

//#endregion Iteration 1: Names and Input

//#region Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length}.`
  );
} else {
  console.log(
    `Wow, you both, ${hacker1} and ${hacker2} have equally long names, ${hacker1.length} characters!`
  );
}
//#endregion Iteration 2: Conditionals

//#region Iteration 3: Loops

//#region 3.1 CAPITOL WITH SPACE

// MODO USANDO FOR COM ACUMULADOR E GUARDANDO RESULTADO EM VARIÁVEL
//SEM O PROBLEMA DE UM ESPAÇO NO FINAL E SEM USAR O MÉTODO TRIM
let newName = "";

for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].toUpperCase();

  if (i !== hacker1.length - 1) {
    newName += " ";
  }
}

//NOTAR QUE NÃO HÁ ESPAÇO DEPOIS DA ÚLTIMA LETRA
console.log(`"${newName}"`);

// FUNCAO TRIM TIRA O ESPAÇO NAS EXTREMIDADES
// newName = newName.trim();

//MODO USANDO METODOS DE MANIPULAÇÃO DE ARRAY
console.log(hacker1.toUpperCase().split("").join(" ") + ".");

//MODO USANDO FOR IMPRIMINDO DIRETO NO CONSOLE SEM ARMAZENAR EM VARIÁVEL
for (let i = 0; i < hacker1.length; i++) {
  // PROCESS.STDOUT.WRITE ESCREVE SEM QUEBRA DE LINHA
  process.stdout.write(`${hacker1[i].toUpperCase()} `);
}

//DOIS TIPOS DE QUEBRA DE LINHA NO CONSOLE
// process.stdout.write('\n')
console.log();

//#endregion 3.1 CAPITOL WITH SPACE

//#region 3.2 REVERSE

// MODO USANDO FOR COM INDICE DECRESCENTE
let newNameReverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  newNameReverse += hacker2[i] + " ";
}
newNameReverse = newNameReverse.trim();
console.log(newNameReverse);

// MODO USANDO MÉTODO REVERSE DE UM ARRAY
const newNameReverse2 = hacker2.split("").reverse().join(" ");
console.log(newNameReverse2);

//#endregion 3.2 REVERSE

//#region  3.3 LEXICOGRAFIC

hacker1 = "Guilherme";
hacker2 = "Guilherme";

//MODO USANDO FOR PARA COMPARAR CADA CARACTER DOS 2 NOMES
let nameFirst;

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] > hacker2[i]) {
    nameFirst = hacker2;
    break;
  } else if (hacker1[i] < hacker2[i]) {
    nameFirst = hacker1;
    break;
  }
}

if (!nameFirst && hacker1.length != hacker2.length) {
  if (hacker1.length < hacker2.length) {
    nameFirst = hacker1;
  } else {
    nameFirst = hacker2;
  }
}

if (nameFirst === hacker1) {
  console.log(`The driver's name (${nameFirst}) goes first.`);
} else if (nameFirst === hacker2) {
  console.log(`Yo, the navigator (${nameFirst}) goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

//MODO USANDO A COMPARAÇÃO DIRETA ENTRE AS STRINGS SEM LAÇO
// if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
//   console.log(`The driver's name (${nameFirst}) goes first.`);

// } else if(hacker1.toLowerCase() > hacker2.toLowerCase() ){
//     console.log(`Yo, the navigator (${nameFirst}) goes first definitely.`)

// } else {
//     console.log(`What?! You both have the same name?`);
// }

//#endregion  3.3 LEXICOGRAFIC

//#endregion Iteration 3: Loops

//BONUS 1

// GERAR PARÁGRAFOS
let texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl velit, aliquet ut odio eu, aliquam tristique velit. Nullam quis velit sed nisl euismod auctor ac eget mi. Curabitur tincidunt augue sit amet mattis rhoncus. Fusce in ligula sapien. Suspendisse congue enim id efficitur aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc maximus quis orci vel dictum. Vestibulum finibus mi ut dui interdum, ut vehicula turpis porta. Etiam ac mattis elit. Donec et metus neque. Phasellus at arcu sed velit bibendum rutrum at eget elit. Praesent ornare ultrices aliquet. Maecenas sollicitudin neque vitae risus vulputate, quis feugiat ipsum semper.

Nam nulla arcu, lobortis id lectus quis, venenatis placerat enim. Donec vitae porttitor risus. Duis vitae aliquet ante. Ut non elementum magna. Donec laoreet nisl non lacinia sollicitudin. Nulla commodo at sapien sed lacinia. Vestibulum a tellus vel orci luctus lobortis quis et nulla. Cras quis vestibulum nibh. Nam eu rhoncus elit. Fusce volutpat enim et est laoreet, nec iaculis dui sagittis. Etiam eu augue placerat nisi venenatis blandit vel vitae lectus. Vestibulum eu augue eu purus tempus lacinia.

In blandit pulvinar ex vitae placerat. Proin eu malesuada ipsum, nec laoreet velit. Duis auctor ante sed vestibulum accumsan. Vestibulum bibendum sit amet est a ultricies. Phasellus nunc purus, condimentum vitae lorem a, venenatis mollis est. Morbi consequat volutpat sem. Aliquam sagittis scelerisque ex, a pulvinar quam semper id. Sed volutpat ut justo in sodales. Duis luctus laoreet est, et pellentesque dui elementum eget. Aliquam vulputate cursus sem. Nunc quis venenatis nibh, nec tincidunt magna. Ut rhoncus orci eu maximus ornare.`;

//ITEM 2 - CONTAR PALAVRAS - MODO 1 COM FOR

let qtdEspacos = 0;

const texto2 = texto.replaceAll("\n", " ");

for (let i = 0; i < texto2.length; i++) {
  if (texto2[i] === " " && texto2[i - 1] != " ") {
    qtdEspacos++;
  }
}

let qtdPalavras = qtdEspacos + 1;

console.log(qtdPalavras);

//ITEM 2 - CONTAR PALAVRAS - MODO SEM FOR COM ARRAY

const qtdPalavras2 = texto.replace(/\s+/gm, " ").split(" ").length;
console.log(qtdPalavras2);


//ITEM 3 - BUSCAR PALAVRA ET COM FOREACH

let palavras = texto2.split(" ");

let qtdEt = 0;

palavras.forEach((p) => {
  if (p.toLowerCase().replace(/\W/gm,'') == "et") {
    qtdEt++;
  }
});
console.log(qtdEt);

//ITEM 3 - BUSCAR PALAVRA ET COM REGEX

const qtdEt2 = texto.match(/\bet\b/gm).length;

console.log(qtdEt2);

//BONUS 2
