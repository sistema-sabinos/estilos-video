# Plano comentado da prévia, modelo-conversa

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. balao, de 0,00 s a 3,44 s

Fala: "Chegou mensagem, minha planta tá amarelando"

```json
{
  "tipo": "balao",
  "de": 0,
  "ate": 3.44,
  "legenda": true,
  "mensagem": {
    "de": "outro",
    "em": 2.65,
    "digitando": 1.3,
    "texto": "Minha planta tá amarelando"
  }
}
```

## 2. balao, de 3,44 s a 4,88 s

Fala: "e eu rego todo dia."

```json
{
  "tipo": "balao",
  "de": 3.44,
  "ate": 4.88,
  "mensagem": {
    "de": "outro",
    "em": 4.16,
    "digitando": 0.6,
    "texto": "E eu rego todo dia"
  }
}
```

## 3. destaque, de 4,88 s a 7,17 s

Fala: "O erro tá aí. Regar pelo calendário."

```json
{
  "tipo": "destaque",
  "de": 4.88,
  "ate": 7.17,
  "texto": "Regar pelo calendário",
  "em": 5.97,
  "nivel": "alerta",
  "detalhe": "O erro tá aí",
  "detalheEm": 6.42
}
```

## 4. conversa, de 7,17 s a 10,22 s

Fala: "Terra encharcada deixa a raiz sem ar, e ela apodrece."

```json
{
  "tipo": "conversa",
  "de": 7.17,
  "ate": 10.22,
  "fixada": {
    "rotulo": "Erro",
    "tom": "errado",
    "texto": "Regar pelo calendário"
  },
  "mensagens": [
    {
      "de": "eu",
      "em": 7.38,
      "digitando": 0.2,
      "texto": "Terra encharcada",
      "esfriaEm": 8
    },
    {
      "de": "eu",
      "em": 8.37,
      "digitando": 0.3,
      "texto": "Raiz sem ar",
      "esfriaEm": 8.8
    },
    {
      "de": "eu",
      "em": 9.29,
      "digitando": 0.3,
      "texto": "E ela apodrece",
      "esfriaEm": 9.61
    }
  ]
}
```

## 5. numero, de 10,22 s a 13,72 s

Fala: "Faz assim: Primeiro, enfia o dedo uns dois centímetros na terra."

```json
{
  "tipo": "numero",
  "de": 10.22,
  "ate": 13.72,
  "valor": 2,
  "sufixo": "cm",
  "em": 12.26,
  "rotulo": "Enfia o dedo na terra",
  "rotuloEm": 11.62
}
```

## 6. conversa, de 13,72 s a 16,45 s

Fala: "Segundo, se tá úmida, espera mais um dia."

```json
{
  "tipo": "conversa",
  "de": 13.72,
  "ate": 16.45,
  "fixada": {
    "rotulo": "Dica",
    "tom": "certo",
    "texto": "Úmida"
  },
  "mensagens": [
    {
      "de": "outro",
      "em": 14.63,
      "digitando": 0.5,
      "texto": "Tá úmida"
    },
    {
      "de": "eu",
      "em": 15.17,
      "digitando": 0.3,
      "texto": "Espera mais um dia",
      "reacao": {
        "em": 15.89,
        "icone": "joinha"
      }
    }
  ]
}
```

## 7. conversa, de 16,45 s a 20,38 s

Fala: "Terceiro, se tá seca, Rega até a água sair pelo furo do vaso."

```json
{
  "tipo": "conversa",
  "de": 16.45,
  "ate": 20.38,
  "fixada": {
    "rotulo": "Dica",
    "tom": "certo",
    "texto": "Seca"
  },
  "mensagens": [
    {
      "de": "outro",
      "em": 17.62,
      "digitando": 0.4,
      "texto": "Tá seca"
    },
    {
      "de": "eu",
      "em": 18.24,
      "digitando": 0.3,
      "texto": "Rega até sair pelo furo",
      "reacao": {
        "em": 19.67,
        "icone": "check"
      }
    }
  ]
}
```

## 8. destaque, de 20,38 s a 23,41 s

Fala: "E vaso sem furo acumula água no fundo, então troca."

```json
{
  "tipo": "destaque",
  "de": 20.38,
  "ate": 23.41,
  "texto": "Vaso sem furo",
  "em": 20.48,
  "nivel": "alerta",
  "detalhe": "Acumula água no fundo",
  "detalheEm": 21.7
}
```

## 9. contraste, de 23,41 s a 28,33 s

Fala: "Regar todo dia vira folha amarela. regar quando a terra pede vira raiz saudável."

```json
{
  "tipo": "contraste",
  "de": 23.41,
  "ate": 28.33,
  "esquerdaEm": 23.51,
  "direitaEm": 26.43,
  "esquerda": {
    "titulo": "Regar todo dia",
    "viraEm": 24.35,
    "mensagens": [
      {
        "de": "eu",
        "em": 23.82,
        "texto": "Rega de novo"
      }
    ],
    "resultado": {
      "em": 25.09,
      "texto": "amarela",
      "tipo": "ruim"
    }
  },
  "direita": {
    "titulo": "Terra pede",
    "viraEm": 27.36,
    "mensagens": [
      {
        "de": "eu",
        "em": 26.81,
        "texto": "Dedo na terra"
      }
    ],
    "resultado": {
      "em": 27.57,
      "texto": "saudável",
      "tipo": "bom"
    }
  }
}
```

## 10. cta, de 28,33 s a 31,76 s

Fala: "Salva esse vídeo e testa hoje na sua planta."

```json
{
  "tipo": "cta",
  "de": 28.33,
  "ate": 31.76,
  "texto": "Salva esse vídeo e testa hoje",
  "destaque": "testa hoje",
  "icone": "salvar",
  "em": 28.43,
  "toqueEm": 28.82
}
```

## Créditos da prévia

Sem imagem de terceiro: tudo na tela é desenhado pelo próprio modelo (app de mensagens fictício e sem marca). Fonte Atkinson Hyperlegible Next (Google Fonts, SIL Open Font License).

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde, com o fundo trocado.
