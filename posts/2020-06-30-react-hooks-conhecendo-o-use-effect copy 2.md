---
date: 2020-06-30 07:48:20
title: React Hooks | UseEffect
description: Lidando com efeitos colaterais na sua aplicação
category: react
background: '#037069'
featuredImage: '/static/assets/images/lorem-image.png'
---
    -- JavaScript Starter
        -- Variáveis
        -- Operaçōes Matemáticas
        -- Funções
        -- Condicionais
        -- Operadores Lógicos
        -- Estruturas de Repetição
        -- Intervalo e timeout
        -- Chamadas Assíncronas
    -- JavaScript Essentials ES6+
        -- Tudo é Objeto
        -- Desestruturação
        -- Operador Rest/Spread
        -- Arrow Functions
        -- Funções Assíncronas usando Async/Await
        -- Métodos em Array - map
        -- Métodos em Array - filter
        -- Métodos em Array - reduce
        -- Template literals
        -- Short Sintax
    -- React Starter
        -- O que são Componentes?
        -- Ciclo de vida de um componente
    -- React Hooks
        -- useEffect
        -- useState
        -- useMemo
        -- useCallback
    --

```javascript
    let teste = () => {
      return 'hello world';
    }
    let teste = () => return 'hello world';
    let teste = () => 'hello world';

    teste() 
    // resultado: hello world
```

Antes de entender propriamente o funcionamento deste hook do React, 
é importante lembrar o porque da sua necessidade.

Para exemplificar, pensemos em uma função que faz uma chamada à API e manipula o DOM


