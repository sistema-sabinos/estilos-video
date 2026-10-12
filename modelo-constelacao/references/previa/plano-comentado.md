# Plano comentado da prévia, modelo-constelacao

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 1,72 s

Fala: "Sabe achar as Três Marias?"

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 1.72,
  "rotulo": "Céu noturno",
  "texto": "Sabe achar as Três Marias?",
  "destaque": "Três Marias?"
}
```

## 2. carta, de 1,72 s a 7,70 s

Fala: "Numa noite de verão, procura no céu três estrelas brilhantes em linha reta, bem juntinhas."

```json
{
  "tipo": "carta",
  "de": 1.72,
  "ate": 7.7,
  "enquadrar": [
    "mintaka",
    "alnilam",
    "alnitak"
  ],
  "passos": [
    {
      "acao": "acender",
      "em": 3.96,
      "estrelas": [
        "mintaka",
        "alnilam",
        "alnitak"
      ],
      "ritmo": 0.3,
      "contador": "estrelas brilhantes"
    },
    {
      "acao": "brilhar",
      "em": 4.76,
      "estrelas": [
        "mintaka",
        "alnilam",
        "alnitak"
      ]
    },
    {
      "acao": "ligar",
      "em": 5.71,
      "linhas": [
        [
          "mintaka",
          "alnilam"
        ],
        [
          "alnilam",
          "alnitak"
        ]
      ],
      "nome": "Três Marias",
      "nomeEm": 6.6
    }
  ]
}
```

## 3. carta, de 7,70 s a 10,08 s

Fala: "Elas são o cinturão de Órion, o caçador."

```json
{
  "tipo": "carta",
  "de": 7.7,
  "ate": 10.08,
  "enquadrar": [
    "mintaka",
    "alnilam",
    "alnitak",
    "betelgeuse",
    "bellatrix",
    "rigel",
    "saiph"
  ],
  "passos": [
    {
      "acao": "acender",
      "em": 8.79,
      "estrelas": [
        "betelgeuse",
        "bellatrix",
        "rigel",
        "saiph"
      ],
      "ritmo": 0.15
    },
    {
      "acao": "ligar",
      "em": 9.41,
      "linhas": [
        [
          "betelgeuse",
          "bellatrix"
        ],
        [
          "betelgeuse",
          "alnitak"
        ],
        [
          "bellatrix",
          "mintaka"
        ],
        [
          "alnitak",
          "saiph"
        ],
        [
          "mintaka",
          "rigel"
        ]
      ],
      "nome": "Órion, o caçador",
      "nomeEm": 9.51
    }
  ]
}
```

## 4. carta, de 10,08 s a 13,20 s

Fala: "Agora segue essa linha para um lado e ela chega em Sirius,"

```json
{
  "tipo": "carta",
  "de": 10.08,
  "ate": 13.2,
  "enquadrar": [
    "mintaka",
    "alnilam",
    "alnitak",
    "betelgeuse",
    "bellatrix",
    "rigel",
    "saiph",
    "sirius"
  ],
  "passos": [
    {
      "acao": "acender",
      "em": 10.17,
      "estrelas": [
        "mintaka",
        "alnilam",
        "alnitak",
        "betelgeuse",
        "bellatrix",
        "rigel",
        "saiph"
      ],
      "ritmo": 0.05
    },
    {
      "acao": "prolongar",
      "em": 10.85,
      "de": "mintaka",
      "ate": "alnitak",
      "alvo": "sirius",
      "chegaEm": 12.65,
      "marca": {
        "texto": "Sírius",
        "em": 12.65
      }
    },
    {
      "acao": "brilhar",
      "em": 12.65,
      "estrelas": [
        "sirius"
      ]
    }
  ]
}
```

## 5. destaque, de 13,20 s a 15,34 s

Fala: "a estrela mais brilhante do céu noturno."

```json
{
  "tipo": "destaque",
  "de": 13.2,
  "ate": 15.34,
  "texto": "Mais brilhante do céu noturno",
  "em": 13.68,
  "nivel": "chave"
}
```

## 6. carta, de 15,34 s a 19,31 s

Fala: "Pro outro lado, ela chega em Aldebaran, uma estrela alaranjada."

```json
{
  "tipo": "carta",
  "de": 15.34,
  "ate": 19.31,
  "enquadrar": [
    "mintaka",
    "alnilam",
    "alnitak",
    "betelgeuse",
    "bellatrix",
    "rigel",
    "saiph",
    "aldebaran"
  ],
  "passos": [
    {
      "acao": "acender",
      "em": 15.45,
      "estrelas": [
        "mintaka",
        "alnilam",
        "alnitak",
        "betelgeuse",
        "bellatrix",
        "rigel",
        "saiph"
      ],
      "ritmo": 0.05
    },
    {
      "acao": "prolongar",
      "em": 15.77,
      "de": "alnitak",
      "ate": "mintaka",
      "alvo": "aldebaran",
      "chegaEm": 16.93,
      "marca": {
        "texto": "Aldebarã",
        "em": 16.93
      }
    },
    {
      "acao": "brilhar",
      "em": 18.56,
      "estrelas": [
        "aldebaran"
      ]
    }
  ]
}
```

## 7. pergunta, de 19,31 s a 21,00 s

Fala: "Quer ver ainda mais estrelas?"

```json
{
  "tipo": "pergunta",
  "de": 19.31,
  "ate": 21,
  "texto": "Quer ver ainda mais estrelas?",
  "em": 19.43
}
```

## 8. constelacao, de 21,00 s a 29,20 s

Fala: "Fica longe da luz da cidade, escolhe uma noite sem lua e espera uns 20 minutos para os olhos se acostumarem com o escuro. Aí o céu se enche de estrelas."

```json
{
  "tipo": "constelacao",
  "de": 21,
  "ate": 29.2,
  "titulo": "Ver mais estrelas",
  "estrelas": [
    {
      "texto": "Longe da cidade",
      "em": 21.16
    },
    {
      "texto": "Noite sem lua",
      "em": 23.12
    },
    {
      "texto": "Esperar 20 minutos",
      "em": 23.99
    },
    {
      "texto": "Olhos no escuro",
      "em": 26.02
    }
  ],
  "alvo": {
    "texto": "Céu estrelado",
    "em": 27.31
  }
}
```

## 9. cta, de 29,20 s a 31,88 s

Fala: "Salva esse vídeo e testa hoje à noite."

```json
{
  "tipo": "cta",
  "de": 29.2,
  "ate": 31.88,
  "texto": "Salva e testa hoje à noite",
  "icone": "salvar",
  "destaque": "hoje à noite"
}
```

## Créditos da prévia

Sem imagem de terceiro: a carta celeste, as estrelas e as linhas são desenhadas em vetor pelo próprio modelo, com as posições do catálogo do template (Órion, Sírius e Aldebarã). Fontes Spectral e Reddit Sans (Google Fonts, SIL Open Font License).

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde, com o fundo trocado.
