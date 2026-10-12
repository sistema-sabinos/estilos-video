# Plano comentado da prévia, modelo-etapas

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 7,13 s

Fala: "IA não resolve nada se ela esquece o teu negócio a cada conversa. SabinOS conserta isso em quatro passos: Primeiro, o"

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 7.13,
  "texto": "SabinOS",
  "sub": "Em quatro passos",
  "etapas": 4,
  "icone": "robo"
}
```

## 2. etapa, de 7,13 s a 12,28 s

Fala: "Kit, um sistema de trabalho com IA para o teu negócio, aberto no GitHub. Segundo, a"

```json
{
  "tipo": "etapa",
  "de": 7.13,
  "ate": 12.28,
  "rotulo": "Kit",
  "icone": "link",
  "telas": [
    {
      "imagem": {
        "id": "kit"
      },
      "em": 7.13,
      "rolar": [
        0,
        0.02
      ],
      "zoom": 1
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 7.73,
      "rolar": [
        0.362,
        0.37
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "kit"
      },
      "em": 8.56,
      "rolar": [
        0.1,
        0.13
      ],
      "zoom": 1.05
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 9.12,
      "rolar": [
        0,
        0.01
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 9.93,
      "rolar": [
        0.12,
        0.14
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "kit"
      },
      "em": 10.61,
      "rolar": [
        0,
        0.02
      ],
      "zoom": 1.3
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 11.3,
      "rolar": [
        0.38,
        0.39
      ],
      "zoom": 1.6
    }
  ]
}
```

## 3. etapa, de 12,28 s a 17,66 s

Fala: "instalação. VS Code, Git, Node e o Claude, um de cada vez. Terceiro, a"

```json
{
  "tipo": "etapa",
  "de": 12.28,
  "ate": 17.66,
  "rotulo": "Instalação",
  "icone": "raio",
  "telas": [
    {
      "imagem": {
        "id": "kit"
      },
      "em": 12.28,
      "rolar": [
        0.52,
        0.54
      ],
      "zoom": 1.05
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 13.15,
      "rolar": [
        0.475,
        0.48
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 14.03,
      "rolar": [
        0.515,
        0.52
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 14.76,
      "rolar": [
        0.565,
        0.57
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 15.41,
      "rolar": [
        0.595,
        0.6
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "kit"
      },
      "em": 16.04,
      "rolar": [
        0.53,
        0.58
      ],
      "zoom": 1.05
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 16.71,
      "rolar": [
        0.615,
        0.62
      ],
      "zoom": 1.6
    }
  ]
}
```

## 4. etapa, de 17,66 s a 23,48 s

Fala: "pasta. Ela vira a memória do negócio, e o Claude lê tudo no começo de cada sessão. Quarto, o"

```json
{
  "tipo": "etapa",
  "de": 17.66,
  "ate": 23.48,
  "rotulo": "Pasta",
  "icone": "casa",
  "telas": [
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 17.66,
      "rolar": [
        0.675,
        0.68
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 18.46,
      "rolar": [
        0.4,
        0.405
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "kit"
      },
      "em": 19.31,
      "rolar": [
        0.7,
        0.74
      ],
      "zoom": 1.05
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 20.24,
      "rolar": [
        0.42,
        0.425
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 21.13,
      "rolar": [
        0.776,
        0.78
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 21.96,
      "rolar": [
        0.724,
        0.73
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 22.82,
      "rolar": [
        0.8,
        0.81
      ],
      "zoom": 1.6
    }
  ]
}
```

## 5. etapa, de 23,48 s a 26,89 s

Fala: "estilo de vídeo. São mais de 70 prontos no catálogo."

```json
{
  "tipo": "etapa",
  "de": 23.48,
  "ate": 26.89,
  "rotulo": "Estilo",
  "icone": "estrela",
  "telas": [
    {
      "imagem": {
        "id": "estilos"
      },
      "em": 23.48,
      "rolar": [
        0,
        0.02
      ],
      "zoom": 1
    },
    {
      "imagem": {
        "id": "estilosz"
      },
      "em": 24.05,
      "rolar": [
        0.1,
        0.14
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 24.63,
      "rolar": [
        0.865,
        0.87
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "estilosz"
      },
      "em": 25.36,
      "rolar": [
        0.4,
        0.45
      ],
      "zoom": 1.6
    },
    {
      "imagem": {
        "id": "estilosz"
      },
      "em": 26.1,
      "rolar": [
        0.7,
        0.76
      ],
      "zoom": 1.6
    }
  ]
}
```

## 6. grade, de 26,89 s a 30,79 s

Fala: "Kit, Instalação, Pasta e Estilo, nessa ordem."

```json
{
  "tipo": "grade",
  "de": 26.89,
  "ate": 30.79,
  "telas": [
    {
      "imagem": {
        "id": "kit"
      },
      "em": 26.89,
      "rolar": [
        0,
        0
      ]
    },
    {
      "imagem": {
        "id": "kit"
      },
      "em": 27.1,
      "rolar": [
        0.53,
        0.53
      ]
    },
    {
      "imagem": {
        "id": "kitz"
      },
      "em": 28.17,
      "rolar": [
        0.43,
        0.43
      ]
    },
    {
      "imagem": {
        "id": "estilos"
      },
      "em": 28.9,
      "rolar": [
        0.2,
        0.2
      ]
    }
  ]
}
```

## 7. prova, de 30,79 s a 32,97 s

Fala: "E esse vídeo aqui foi editado com um deles."

```json
{
  "tipo": "prova",
  "de": 30.79,
  "ate": 32.97,
  "imagem": {
    "id": "estilos"
  },
  "rotulo": "Esse vídeo",
  "icone": "estrela",
  "zoom": 2.2,
  "foco": {
    "x": 0.1,
    "y": 0.498
  }
}
```

## 8. cta, de 32,97 s a 35,84 s

Fala: "Comenta "SABINOS" que eu te mando o link."

```json
{
  "tipo": "cta",
  "de": 32.97,
  "ate": 35.84,
  "texto": "Comenta SabinOS",
  "icone": "comentar"
}
```

## Créditos da prévia

Sem imagem de terceiro. As telas são capturas das páginas públicas do próprio SabinOS no GitHub, feitas com a ferramenta de captura do modelo:

- Repositório do kit: "sistema-sabinos/kit", autor Sistema SabinOS, página própria, https://github.com/sistema-sabinos/kit
- Catálogo de estilos: "sistema-sabinos/estilos-video", autor Sistema SabinOS, página própria, https://github.com/sistema-sabinos/estilos-video

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra previa. Apresentador gravado em fundo verde, com o fundo trocado.
