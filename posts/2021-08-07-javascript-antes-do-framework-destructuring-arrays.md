---
title: JavaScript antes do Framework - Destructuring - Arrays
description: Como usar a sintaxe de Atribuição via desestruturação em Arrays.
date: 2021-08-06 10:42:20
featuredImage: assets/images/la-rel-easter-kucglbxjh_o-unsplash.jpg
imageCopyright: "@lastnameeaster"
category: javascript
background: "#F0DB4F"
---
## Desestruturar

> *verbo*
>
> 1. *transitivo direto e pronominal*
>
>    desfazer a estrutura, a sustentação a (alguém, algo ou si mesmo); desmanchar(-se), desorganizar(-se).

Conforme a definição, vamos desfazer a estrutura. No nosso caso de um objeto ou **array**.

A sintaxe de atribuição via desestruturação (destructuring assignment), é uma expressão JavaScript que possibilita extrair em variáveis distintas dados de arrays ou objetos. Ou seja, em termos mais simples, vamos retirar da estrutura aquilo que precisamos.

**Na prática**\
Assim como no post de [Desestruturação de Objetos](https://willianmonteiro.com.br/javascript-antes-do-framework-destructuring/), vamos ver como faríamos a desestruturação antes do ES6.

```javascript
const employee = ['John', 'Doe', 23, 'Software Developer', 'JavaScript', 'Google']

const name = employee[0];
const age = employee[2];
const tech = employee[4];


name; // > John
age; // > 23
tech; // > JavaScript
```

De cara conseguimos notar que temos de fazer a mesma coisa repetidamente. Para facilitar as coisas, em vez de passarmos por esse processo repetitivo, vamos ver um exemplo da desestruturação em Array.

```javascript
const employee = ['John', 'Doe', 23, 'Software Developer', 'JavaScript', 'Google']

const [name, surname] = employee;
 
name; // > John
surname; // > Doe
```

**Ignorando alguns itens**

Nem sempre vamos querer os os itens da matriz em ordem, talvez queiramos obter o primeiro e o último item e para conseguir fazer isso na desestruturação, será necessário ignorar alguns dos itens.

```javascript
const employee = ['John', 'Doe', 23, 'Software Developer', 'JavaScript', 'Google']

const [name,,,,,company] = employee;


name; // > John
company; // > Google
```

Que viagem é essa?

Observe que em vez de ter apenas uma vírgula, tínhamos cinco. O separador de vírgula é usado para pular valores em um array. Portanto, se você quiser pular um item, basta usar uma vírgula.

**Valores padrão**

Nem sempre teremos certeza dos valores que vamos encontrar, também é comum acontecer de termos valores opcionais ou que por algum outro motivo não está dentro do array.

E isso poderia nos causar algum problema, visto que assim como no objeto, se no array desestruturado não tiver a propriedade especificada na atribuição de desestruturação, a variável será atribuída com `undefined`.

A solução também é a mesma do objeto, vamos a um exemplo de como atribuir valores padrão no caso de array.

```javascript
const employee = ['John', 'Software Developer']

const [name, position, working = 'remotely'] = employee;


name; // > John
position; // > Software Developer
working; // > remotely
```

Portanto, a variável `working` passa a ser "*remotely*" porque não está definido no array.

**Resto**

Um array pode conter muitos itens e as vezes queremos apenas alguns, o que fazer com o resto? Podemos utilizar a seguinte sintaxe:

```javascript
const employee = ['John', 'Software Developer', 'JavaScript', 'Google']

const [name, ...jobData] = employee;

name; // > John
jobData; // > ["Software Developer", "JavaScript", "Google"]
```

Dessa forma, desestruturamos o `name` e guardamos as demais informações na variável `jobData`.

**Conclusão**

Espero que vocês tenham entendido como utilizar e visto as vantagens de se usar atribuição via desestruturação, seja nos Objetos ou Arrays. Essa feature é muito utilizado ao trabalhar com frameworks JavaScript.

E se você quiser saber mais sobre outras features do JavaScript que são importantes de serem entendidas antes de partir para o framework, fica atento para os próximos posts, onde falarei mais desse assunto!