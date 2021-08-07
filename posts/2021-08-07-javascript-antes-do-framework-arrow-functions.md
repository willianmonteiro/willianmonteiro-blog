---
title: JavaScript antes do Framework - Arrow Functions
description: Explorando as diferentes maneiras de declarar uma função.
date: 2021-08-07 12:27:18
featuredImage: assets/images/ussama-azam-26h317_umym-unsplash.jpg
imageCopyright: "@ussamaazam"
category: javascript
background: "#F0DB4F"
---
\
Na maioria das vezes, quando alguém sente que a curva de aprendizado de um framework como React é grande e difícil, o motivo não é o framework e sim alguma base da linguagem.

Tendo isso em mente, e continuando a série de posts sobre Javascript. Vamos falar sobre **Arrow Functions**, outra feature do ES6 que causa um pouco de confusão, principalmente devido a sua sintaxe e suas diferenças em relação as demais maneiras de declarar uma função.

## **Sintaxe**

Podemos declarar uma função de diferentes maneiras.

A maneira mais usual é com a palavra-chave de função:

```javascript
function hello() {
  return 'Hello World';
}

hello(); // > Hello World
```

Ou como uma expressão, que nada mais é do que atribuirmos nossa função para uma variável.

A principal diferença entre uma expressão de função e a declaração de uma função é o nome*,* o qual pode ser omitido em expressões para criar funções anônimas.

```javascript
const hello = function() {
  return 'Hello World';
}

hello(); // > Hello World
```

E finalmente, chegamos ao tópico da vez. Uma expressão **A*rrow Function*** possui uma sintaxe mais curta quando comparada as demais.

O que costuma causar um pouco de confusão no começo é que elas podem conter ou não chaves, as vezes precisam do `return` , as vezes não. Para descomplicar de vez, vamos ver alguns exemplos.

```javascript
// Função COM {} e por isso precisamos do return
const hello = () => {
  return 'Welcome to JavaScript'
}
```

Se a função tiver apenas uma instrução e a instrução retornar um valor, você pode remover as chaves e a palavra return.

```javascript
// Função SEM {} e return implícito
const hello = () => 'Welcome to JavaScript'
```

Beleza, agora entendemos as diferentes formas de declarar uma função e a sintaxe de uma Arrow Function. Porém como saber quando usar uma ou outra?