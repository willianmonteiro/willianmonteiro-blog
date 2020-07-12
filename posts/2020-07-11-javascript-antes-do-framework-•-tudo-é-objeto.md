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

```
const pessoa = {}
```

Pronto! Diferente do mundo real, no código nós podemos tratar uma pessoa como objeto 😅  e aqui esta nosso primeiro.



## Propriedades e Métodos

Quando eu entendi que praticamente 99% do tempo eu estou utilizando objetos com propriedades e métodos em JavaScript, foi quando eu realmente comecei a aprender a linguagem.

Propriedades são variáveis que terá algum valor qualquer e Métodos são simplesmente funções. Vamos atualizar nosso objeto para o código abaixo:

```
const pessoa = { 	
    nome: ‘Willian’, 	
    idade: 21,
	ficarMaisVelho() { 
		this.idade++
		console.log(‘’Ficou mais velho.”)
	}
}
```



pessoa pessoa.nome pessoa.idade
pessoa.ficarMaisVelho()

A gente conseguiu ver como a gente cria um objeto e como acessa suas propriedades e métodos. Se pararmos para analisar, dentro do método ficar mais velho após incrementar a idade nós exibimos a mensagem ‘Ficou mais velho’ e para isso usamos um objeto. Como sabemos disso? Perceba o uso do ponto, temos um console.log, ou seja acessamos/ativamos o método log do objeto console.

Podemos pensar que tudo é objeto tanto que se você for no console do seu navegador e digitar até uma string* e um ponto verá várias propriedades e métodos que poderá acessar.

“Willian”.length - total de caracteres dentro dela

“Willian”.toUpperCase você percebe que é uma função, portanto um método que podemos executar: > “Willian”.toUpperCase() < “WILLIAN”

Um array: \[1, 2, 3].

 Em javascript tudo pode ser considerar objeto que com exceção de undefined e null vamos acessar propriedades e métodos utilizando o .(ponto), até mesmo false. 

undefined e null não terão propriedades, métodos

\*String, assim como Number, é um tipo primitivo porém não deixa de ser um objeto criado a partir do seu construtor  new String().