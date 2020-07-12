---
title: JavaScript antes do Framework • Tudo é objeto
description: O que você precisa saber antes de partir para um
  framework/biblicoteca JavaScript como React ou Vue
date: 2020-07-11T01:32:35.000Z
featuredImage: assets/images/bret-kavanaugh-gsuweur61nq-unsplash_min.jpg
imageCopyright: "@bretkavanaugh"
category: javascript
background: "#F0DB4F"
---
Quando trabalhamos com desenvolvimento, não raro, aprendemos as coisas sob demanda. O que quero dizer com isso?

Bem, você entende a lógica e os conceitos, que é o principal e quando surge algum problema que você ainda não sabe resolver, então você pesquisa sobre esse caso específico. Isso funciona muito bem para mim.

Mas para que isso funcione é importante saber a lógica do que você está fazendo. Até para saber onde e como procurar uma solução.

Quando você começa a aprender uma tecnologia como JavaScript que a todo momento surge algo novo, talvez você se sinta sempre atrasado e pressionado a pular direto para o framework da moda e não os fundamentos da linguagem. 

E não há nada de errado em aprender um framework, existe muita coisa legal por aí. Mas na minha jornada como Dev considero que entender alguns conceitos da linguagem foram essenciais antes de partir para o React.

Por isso, farei uma série de posts que será um resumão ou um apanhado geral sobre esses conceitos. O primeiro deles que me ajudou não só com React, mas no começo quando estava estudando JavaScript foi encarar TUDO como objeto.

## Objeto, noções básicas

Um objeto é uma coleção de dados e/ou funcionalidades relacionadas.

Como acontece com muitas coisas em JavaScript, a criação de um objeto geralmente começa com a definição e a inicialização de uma variável. Então vamos criar nosso primeiro objeto:

```javascript
const pessoa = {}
```

Pronto! Diferente do mundo real, no código nós podemos tratar uma pessoa como objeto 😅  e aqui esta nosso primeiro.

## Propriedades e Métodos

Propriedades são variáveis que terá algum valor qualquer e Métodos são simplesmente funções. Vamos atualizar nosso objeto para o código abaixo:

```javascript
const pessoa = { 	
    nome: 'Willian', 	
    idade: 21,
	ficarMaisVelho() { 
		this.idade++
		console.log('Agora eu tenho ' + this.idade + ' anos.')
	},
    dizerOi() { 
		console.log('Olá! Eu sou ' + this.nome + '.')
	}
}
```

\
*Você deve estar se perguntando o que é o "this". A palavra-chave `this` se refere ao objeto atual em que o código está sendo escrito — nesse caso o `this` se refere a `pessoa`. Mas falaremos com mais detalhes sobre em um outro post.*

Continuando com o nosso objeto, depois de salvar e atualizar, tente inserir alguns dos itens a seguir no console JavaScript no *devtools* do seu navegador:

```javascript
// temos aqui as propridades
pessoa.nome
// < Willian

pessoa.idade
// < 21
```

```javascript
// temos aqui os métodos, que como sabemos, nada mais são do que funções, 
// então podemos executá-los adicionando parentêses ()

pessoa.ficarMaisVelho()
// < Agora eu tenho 22 anos.

pessoa.dizerOi
// < Olá! Eu sou o Willian.
```

Agora temos alguns dados e funcionalidades dentro de nosso objeto e como vimos podemos acessá-los com uma sintaxe simples!

## Notação de ponto

Se pararmos para analisar, dentro do método **ficarMaisVelho** após incrementar a idade nós exibimos a mensagem ‘Ficou mais velho’ e para isso **usamos um objeto**. Como sabemos disso? Perceba o uso do ponto, temos um `console.log`, ou seja acessamos/ativamos o método **log** do objeto console. 🤯

![via GIPHY](https://media.giphy.com/media/msriR5ybSpQgo/source.gif)

\
Quando eu entendi que praticamente 99% do tempo eu estou utilizando objetos com propriedades e métodos em JavaScript, foi quando eu realmente comecei a aprender a linguagem. Podemos pensar que tudo é objeto tanto que se você for no console do *devtools* em seu navegador e digitar até uma string* e um ponto verá várias propriedades e métodos que poderá acessar.

*\*String, assim como Number, é um tipo primitivo porém não deixa de ser um objeto criado a partir do seu construtor  new String().*

![](assets/images/string-devtools.png)

```javascript
// total de caracteres da string
'Willian'.length
// < 7

// toUpperCase você percebe que é uma função, 
// portanto um método que podemos executar: “Willian”.toUpperCase()
'Willian'.toUpperCase()

// < 'WILLIAN'
```

Resumindo, em javascript tudo pode se considerar objeto que com exceção de `undefined` e `null` sempre vamos acessar propriedades e métodos utilizando o .(ponto). 

Faça o teste você mesmo, e se você tentar com um array? Comenta aqui embaixo.