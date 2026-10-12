# Plano comentado da prévia, modelo-cifra

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 2,94 s

Fala: "Quer tocar a primeira música no violão essa semana?"

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 2.94,
  "texto": "Primeira música essa semana?",
  "destaque": "essa semana?",
  "em": 0.55
}
```

## 2. acordes, de 2,94 s a 6,88 s

Fala: "Começa com três acordes, Lá menor, Dó e Sol."

```json
{
  "tipo": "acordes",
  "de": 2.94,
  "ate": 6.88,
  "acordes": [
    {
      "cifra": "Am",
      "em": 4.91
    },
    {
      "cifra": "C",
      "em": 5.74
    },
    {
      "cifra": "G",
      "em": 6.39
    }
  ]
}
```

## 3. definicao, de 6,88 s a 10,14 s

Fala: "No lá menor, os dedos ficam só na primeira e na segunda casa."

```json
{
  "tipo": "definicao",
  "de": 6.88,
  "ate": 10.14,
  "termo": "Lá menor",
  "em": 6.98,
  "significado": "Só na primeira e na segunda casa",
  "significadoEm": 8.23
}
```

## 4. destaque, de 10,14 s a 14,10 s

Fala: "Um erro de quem começa é apertar forte demais e travar a mão."

```json
{
  "tipo": "destaque",
  "de": 10.14,
  "ate": 14.1,
  "texto": "Apertar forte demais",
  "em": 11.62,
  "nivel": "alerta",
  "detalhe": "travar a mão",
  "detalheEm": 13
}
```

## 5. destaque, de 14,10 s a 16,32 s

Fala: "Aperta só o bastante pra corda soar limpa."

```json
{
  "tipo": "destaque",
  "de": 14.1,
  "ate": 16.32,
  "texto": "Só o bastante",
  "em": 14.46,
  "nivel": "chave",
  "detalhe": "corda soar limpa",
  "detalheEm": 15.49
}
```

## 6. compasso, de 16,32 s a 22,98 s

Fala: "Treina assim: quatro tempos em cada acorde, devagar, e troca. Quando a troca sair sem parar, acelera."

```json
{
  "tipo": "compasso",
  "de": 16.32,
  "ate": 22.98,
  "legenda": true,
  "compassos": [
    "Am",
    "C",
    "G"
  ],
  "trocaEm": 20.22,
  "tocarEm": 17.41,
  "andamentos": [
    {
      "em": 19.27,
      "texto": "devagar",
      "periodo": 1.05
    },
    {
      "em": 22.42,
      "texto": "acelera",
      "periodo": 0.5
    }
  ]
}
```

## 7. batida, de 22,98 s a 26,96 s

Fala: "Aí entra a batida: baixo, baixo, cima, baixo, cima."

```json
{
  "tipo": "batida",
  "de": 22.98,
  "ate": 26.96,
  "titulo": "Aí entra a batida",
  "setas": [
    {
      "dir": "baixo",
      "em": 24.36
    },
    {
      "dir": "baixo",
      "em": 24.9
    },
    {
      "dir": "cima",
      "em": 25.73
    },
    {
      "dir": "baixo",
      "em": 26.12
    },
    {
      "dir": "cima",
      "em": 26.66
    }
  ]
}
```

## 8. cifra, de 26,96 s a 30,60 s

Fala: "Em uma semana, treinando todo dia, a troca já sai mais solta."

```json
{
  "tipo": "cifra",
  "de": 26.96,
  "ate": 30.6,
  "titulo": "Treinando todo dia",
  "tituloEm": 27.83,
  "semana": {
    "em": 27.23,
    "rotulo": "1 semana"
  },
  "linhas": [
    [
      {
        "cifra": "Am",
        "em": 29.35
      },
      {
        "cifra": "C",
        "em": 29.67
      },
      {
        "cifra": "G",
        "em": 29.87
      }
    ],
    [
      {
        "cifra": "Mais solta",
        "em": 30.1
      }
    ]
  ]
}
```

## 9. cta, de 30,60 s a 33,52 s

Fala: "Salva esse vídeo pra treinar hoje à noite."

```json
{
  "tipo": "cta",
  "de": 30.6,
  "ate": 33.52,
  "texto": "Salva pra treinar hoje à noite",
  "destaque": "Salva",
  "icone": "salvar"
}
```

## Créditos da prévia

Sem imagem de terceiro: tudo na tela (diagramas de acorde, metrônomo, setas da batida, folha de cifra) é desenhado em vetor pelo próprio modelo. Fonte Schibsted Grotesk (Google Fonts, SIL Open Font License). Sons de corda do próprio template.

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde, com o fundo trocado.
