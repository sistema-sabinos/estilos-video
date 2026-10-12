# Plano comentado da prévia, modelo-campo

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. talhao, de 0,00 s a 8,25 s

Fala: "Produtor, olha a sua lavoura vista de cima. Cada talhão pede uma quantidade de água diferente e esse aqui do canto seca primeiro. Sabe quanto da"

```json
{
  "tipo": "talhao",
  "de": 0,
  "ate": 8.25,
  "texto": "Produtor, olha a sua lavoura",
  "em": 0.29,
  "destaque": "sua lavoura",
  "imagem": {
    "id": "estufas"
  },
  "areas": [
    {
      "x": 0.54,
      "y": 0.305,
      "w": 0.175,
      "h": 0.084
    },
    {
      "x": 0.7225,
      "y": 0.305,
      "w": 0.1775,
      "h": 0.084
    },
    {
      "x": 0.7225,
      "y": 0.389,
      "w": 0.1775,
      "h": 0.093
    },
    {
      "x": 0.7225,
      "y": 0.523,
      "w": 0.1775,
      "h": 0.083
    },
    {
      "x": 0.54,
      "y": 0.616,
      "w": 0.175,
      "h": 0.084
    },
    {
      "x": 0.7225,
      "y": 0.611,
      "w": 0.1775,
      "h": 0.089
    },
    {
      "x": 0.54,
      "y": 0.717,
      "w": 0.175,
      "h": 0.095
    },
    {
      "x": 0.7225,
      "y": 0.717,
      "w": 0.1775,
      "h": 0.087
    },
    {
      "x": 0.54,
      "y": 0.817,
      "w": 0.175,
      "h": 0.088
    },
    {
      "x": 0.7225,
      "y": 0.807,
      "w": 0.1775,
      "h": 0.094
    }
  ],
  "contornoEm": 1.41,
  "marcar": [
    {
      "area": 0,
      "em": 3.05,
      "texto": "Cada talhão"
    },
    {
      "area": 5,
      "em": 4.75
    },
    {
      "area": 9,
      "em": 5.95,
      "texto": "Esse aqui do canto"
    }
  ]
}
```

## 2. medidor, de 8,25 s a 12,66 s

Fala: "água doce do mundo vai para a agricultura? Mais de 70%."

```json
{
  "tipo": "medidor",
  "de": 8.25,
  "ate": 12.66,
  "titulo": "Água doce do mundo",
  "em": 8.3,
  "fracao": 0.7,
  "mudaEm": 9.55,
  "fracaoEm": 11.38,
  "texto": "Vai para a agricultura? Mais de 70%",
  "textoEm": 9.55,
  "destaque": "70%",
  "imagem": {
    "id": "gotejamento"
  }
}
```

## 3. destaque, de 12,66 s a 15,00 s

Fala: "é a maior fatia de longe E quando a"

```json
{
  "tipo": "destaque",
  "de": 12.66,
  "ate": 15,
  "texto": "A maior fatia, de longe",
  "em": 12.7,
  "nivel": "chave"
}
```

## 4. cotacao, de 15,00 s a 18,45 s

Fala: "conta de luz da bomba sobe, o custo de irrigar sobe junto."

```json
{
  "tipo": "cotacao",
  "de": 15,
  "ate": 18.45,
  "rotulo": "Conta de luz da bomba",
  "em": 15.08,
  "direcao": "sobe",
  "sobeEm": 16.2
}
```

## 5. previsao, de 18,45 s a 23,08 s

Fala: "Então, antes de ligar o pivô, olha a previsão. Se a chuva chega amanhã,"

```json
{
  "tipo": "previsao",
  "de": 18.45,
  "ate": 23.08,
  "texto": "Antes de ligar o pivô, olha a previsão",
  "em": 18.95,
  "destaque": "olha a previsão",
  "agora": "sol",
  "chegada": "chuva",
  "chegaEm": 21.86,
  "quando": "amanhã",
  "quandoEm": 22.43
}
```

## 6. frase, de 23,08 s a 24,90 s

Fala: "a bomba fica desligada hoje."

```json
{
  "tipo": "frase",
  "de": 23.08,
  "ate": 24.9,
  "texto": "A bomba fica desligada hoje",
  "destaque": "desligada hoje",
  "em": 23.11
}
```

## 7. topicos, de 24,90 s a 30,28 s

Fala: "Confere três coisas, umidade do solo, previsão do tempo e horário da bomba."

```json
{
  "tipo": "topicos",
  "de": 24.9,
  "ate": 30.28,
  "titulo": "Confere três coisas",
  "itens": [
    {
      "texto": "Umidade do solo",
      "em": 26.59
    },
    {
      "texto": "Previsão do tempo",
      "em": 27.42
    },
    {
      "texto": "Horário da bomba",
      "em": 28.92
    }
  ]
}
```

## 8. cta, de 30,28 s a 33,49 s

Fala: "Quer a planilha de controle da irrigação, Comenta água."

```json
{
  "tipo": "cta",
  "de": 30.28,
  "ate": 33.49,
  "texto": "Comenta ÁGUA",
  "destaque": "ÁGUA",
  "icone": "comentar",
  "em": 32.47,
  "material": {
    "texto": "Planilha de controle da irrigação",
    "em": 30.47,
    "linhas": [
      "Talhão",
      "Umidade do solo",
      "Chuva prevista",
      "Horas de bomba",
      "Total"
    ]
  }
}
```

## Créditos da prévia

Sem imagem de terceiro. A vista de cima da lavoura e a foto do gotejamento são da biblioteca do próprio template (public/img/estufas.jpg e gotejamento.jpg, geradas com IA, sem texto e sem marca, sem obrigação de crédito).

Dado da fala: a agricultura responde por mais de 70% da água doce retirada no mundo (FAO, AQUASTAT: 71 a 72% em 2022), https://www.fao.org/aquastat/

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra previa. Apresentador gravado em fundo verde, com o fundo trocado.
