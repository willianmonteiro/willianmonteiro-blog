---
title: JavaScript antes do Framework - Destructuring
description: Entenda para que serve e como usar a sintaxe de Atribuição via desestruturação.
date: 2021-05-27 11:08:52
featuredImage: assets/images/xavi-cabrera-kn-umdzqdjm-unsplash_min.jpg
imageCopyright: "@xavi_cabrera"
category: javascript
background: "#F0DB4F"
---
## Desestruturar

> *verbo*
>
> 1. *transitivo direto e pronominal*
>
>    desfazer a estrutura, a sustentação a (alguém, algo ou si mesmo); desmanchar(-se), desorganizar(-se).

Bem, como podemos ver a definição de desestruturar, vamos desfazer a estrutura, no nosso caso de um objeto ou array.

A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair em variáveis distintas dados de arrays ou objetos. Ou seja, em termos mais simples, vamos retirar da estrutura aquilo que precisamos.



**Na prática**

Imagine que você gostaria de extrair algumas propriedades de um objeto. Em um ambiente Pré-ES6, você precisaria escrever o seguinte código:



```javascript
const user = {
  name: 'John',
  surname: 'Doe'
};

const name = user.name;
const surname = user.surname;

name;     // > 'John',
surname;  // > 'Doe'
```



Perceba como as coisas se repetem, atribuímos em uma variável `name` o valor de `user.name` e o valor em `surname `o valor der `user.surname`.

Nesses casos que a desestruturação faz seu nome. Vamos refatorar o código:



```javascript
const user = {
  name: 'John',
  surname: 'Doe'
};

const { name, surname } = user; // <-- 🤪

name;     // > 'John',
surname;  // > 'Doe'
```

\
Agora podemos perceber que extrair os dados dessa maneira nos proporcionando um código mais limpo, sem duplicar nomes de variável e propriedades do objeto.\
\
**Valores padrão**

No objeto em questão temos certeza de que teremos os 2 valores, mas é comum acontecer de termos valores opcionais ou que por algum outro motivo não está dentro do objeto.\
\
E isso poderia nos causar algum problema, visto que se o objeto desestruturado não tiver a propriedade especificada na atribuição de desestruturação, a variável será atribuída com `undefined`.\
\
Felizmente, nós podemos definir valores padrão para casos onde a propriedade pode não existir no objeto desestruturado. Exemplo de sintaxe:

```javascript
const user = {
  name: 'John',
  surname: 'Doe'
  // não existe a propriedade no nosso objeto
};

// mas colocamos um valor padrão para ela
const { name, surname, role = 'member' } = user; 

name;     // > 'John',
surname;  // > 'Doe'
role      // > member
```

\
Então, ao desestruturar se existir a propriedade ela usará seu valor, se não atribuirá o valor que definimos como padrão. O código acima, é o equivalente a fazermos isso:

```javascript

const defaultUserRole = 'member';
const role = user.role === undefined ? defaultUserRole : user.role;
```

\
**Aliases**

Se por algum motivo precisarmos que a variável tenha um nome diferente, ainda assim podemos desestruturar, basta usar o recusro de aliasing (basicamente dar um apelido ou outro nome para variável).\
Vamos a um exemplo prático:

```javascript
const user = {
  name: 'John',
  surname: 'Doe'
};


const { surname: lastName } = user;

lastName // > Doe

```

Nesse caso, apesar de estarmos desestruturando a propriedade `surname` estamos chamando ela de `lastName`.

**Nomes dinâmicos**

Outra funcionalidade muito útil é que podemos extrair para variáveis propriedades com um nome dinâmico (útil para casos em que a propriedade/nome é conhecido no tempo de execução ou vem de outra variável):

```javascript
const user = {
  name: 'John',
  role: 'member'
};

// nesse caso descobrimos a role de dentro do usuário
// vamos utilizar essa variável como nome de propridade
const { role } = user;

const roles = {
  member: ['read'],
  editor: ['read', 'write']
}

// estamos desestruturando 'member' de dentro do objeto roles
const { [role]: capabilities } = roles;

capabilities // > ['read']
```

**Resto**

Um objeto pode conter muitas propriedades e as vezes queremos apenas algumas específicas, o que fazer com o resto? Podemos utilizar a seguinte sintaxe:

```javascript
const user = {
  name: 'John',
  surname: 'Doe',
  email: 'johndoe@example.com.br',
};

const { name, ...rest } = user;

name // > John
rest // > { surname: 'Doe', email: 'johndoe@example.com.br' }
```

No exemplo acima `name` é o nome da propriedade a ser acessada e a variável `rest` é um objeto simples com as propriedades restantes.



**Objetos aninhados**

Nos exemplos acima, desestruturamos apenas obejtos simples e que continham apenas propriedades de tipos primitivos. Mas que dizer de objetos que contenham outros objetos?

```javascript
const user = {
  name: 'John',
  surname: 'Doe',
  address: {
    city: 'Florianópolis',
    state: 'Santa Catarina',
    country: 'Brasil',
  }
};


const { address: { city, state, country }} = user;

city // > Florianópolis
state // > Santa Catarina
country // > Brasil
```

`address` é o nome da propriedade que contém o objeto aninhado. Já `city` `state` `country` são os nomes das propriedades que queremos extrair desse objeto aninhado.

E assim como podemos ter objetos dentro de outros ilimitadamente, assim também o nível de aninhamento do qual podemos extrair propriedades é ilimitado. Basta adicionar mais colchetes aninhados, mas tente não exagerar 😅😅.

```javascript
const { prop1: { prop2: { prop3: { ... } } } } = object;
```

\
**Finalmentes**

Pudemos ver que a desestruturação é um recurso poderoso que nos permite extrair propriedades de um objeto e vincular esses valores a variáveis.

Particularmente gosto muito da desestruturação de objetos, acho a sintaxe mais limpa e curto a capacidade de extrair várias variáveis em uma única instrução. Mas como citei no inicio do post, também é possível desestruturar Arrays, porém estes ficam para um próximo post. 😜