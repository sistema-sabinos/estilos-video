# Plano comentado da prévia, modelo-cinema

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. numero, de 0,00 s a 3,98 s

Fala: "Aos 25 anos, a Ana começa a guardar 300 reais por mês."

```json
{
  "tipo": "numero",
  "de": 0,
  "ate": 3.98,
  "valor": 300,
  "prefixo": "R$",
  "sufixo": "por mês",
  "rotulo": "A Ana, aos 25 anos",
  "rotuloEm": 0.02,
  "em": 2.24,
  "desenho": {
    "tipo": "moedas",
    "em": 0
  }
}
```

## 2. letreiro, de 3,98 s a 7,63 s

Fala: "Dez anos depois, ela para e nunca mais coloca um centavo."

```json
{
  "tipo": "letreiro",
  "de": 3.98,
  "ate": 7.63,
  "nivel": 3,
  "rotulo": "Dez anos depois",
  "rotuloEm": 4.03,
  "titulo": "Ela para",
  "tituloEm": 5,
  "linhas": [
    {
      "em": 5.63,
      "texto": "Nunca mais coloca um centavo."
    }
  ],
  "desenho": {
    "tipo": "calendario",
    "em": 4.03
  }
}
```

## 3. passos, de 7,63 s a 13,98 s

Fala: "O Bruno, amigo dela, só começa aos 35, guarda os mesmos 300 por mês até os 65."

```json
{
  "tipo": "passos",
  "de": 7.63,
  "ate": 13.98,
  "titulo": "O Bruno, amigo dela",
  "itens": [
    {
      "texto": "Só começa aos 35",
      "em": 8.73
    },
    {
      "texto": "Os mesmos 300 por mês",
      "em": 10.77
    },
    {
      "texto": "Até os 65",
      "em": 12.32
    }
  ]
}
```

## 4. comparacao, de 14,02 s a 19,00 s

Fala: "No total, ela tirou do bolso R$ 36 mil, ele R$ 108 mil."

```json
{
  "tipo": "comparacao",
  "de": 14.02,
  "ate": 19,
  "modo": "contra",
  "titulo": "No total, do bolso",
  "lados": [
    {
      "rotulo": "Ela",
      "texto": "R$ 36 mil",
      "em": 16
    },
    {
      "rotulo": "Ele",
      "texto": "R$ 108 mil",
      "em": 17.79
    }
  ]
}
```

## 5. cartela, de 19,00 s a 21,16 s

Fala: "até que chega a aposentadoria."

```json
{
  "tipo": "cartela",
  "de": 19,
  "ate": 21.16,
  "rotulo": "Até que",
  "rotuloEm": 19.43,
  "titulo": "A aposentadoria",
  "tituloEm": 19.95,
  "desenho": {
    "tipo": "sol",
    "em": 19.43
  },
  "cabeca": ""
}
```

## 6. numero, de 21,16 s a 23,58 s

Fala: "Com os dois rendendo 8% ao ano,"

```json
{
  "tipo": "numero",
  "de": 21.16,
  "ate": 23.58,
  "valor": 8,
  "sufixo": "% ao ano",
  "rotulo": "Os dois rendendo",
  "rotuloEm": 21.29,
  "em": 22.55
}
```

## 7. pergunta, de 23,58 s a 25,00 s

Fala: "Quem termina com mais?"

```json
{
  "tipo": "pergunta",
  "de": 23.58,
  "ate": 25,
  "texto": "Quem termina com mais?",
  "em": 23.63
}
```

## 8. destaque, de 25,00 s a 28,30 s

Fala: "A Ana. mesmo tendo guardado três vezes menos."

```json
{
  "tipo": "destaque",
  "de": 25,
  "ate": 28.3,
  "texto": "A Ana",
  "em": 25.05,
  "nivel": "chave",
  "detalhe": "Mesmo guardando três vezes menos",
  "detalheEm": 25.93
}
```

## 9. frase, de 28,30 s a 30,94 s

Fala: "O segredo tem nome. Tempo."

```json
{
  "tipo": "frase",
  "de": 28.3,
  "ate": 30.94,
  "texto": "O segredo tem nome: tempo.",
  "destaque": "tempo.",
  "em": 28.35
}
```

## 10. grafico, de 30,94 s a 34,20 s

Fala: "Cada real que entra cedo trabalha por mais anos."

```json
{
  "tipo": "grafico",
  "de": 30.94,
  "ate": 34.2,
  "forma": "linha",
  "titulo": "Cada real que entra cedo",
  "tendencia": "sobe",
  "tendenciaEm": 31.07,
  "ilustrativo": true
}
```

## 11. cta, de 34,20 s a 37,76 s

Fala: "Salva esse vídeo e manda para quem vive dizendo que começa depois."

```json
{
  "tipo": "cta",
  "de": 34.2,
  "ate": 37.76,
  "texto": "Salva e manda pra quem vive dizendo que começa depois.",
  "destaque": "começa depois.",
  "icone": "salvar",
  "em": 34.25
}
```

## Créditos da prévia

Sem imagem de terceiro: tudo na tela é desenhado em vetor pelo próprio modelo (moedas, calendário, sol e o gráfico a traço). Fontes Cormorant Garamond e Jost (Google Fonts, SIL Open Font License); na Cormorant, o circunflexo de â, ê e ô foi redesenhado (mais baixo e centrado), versão modificada sob a mesma licença.

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde, com o fundo trocado.
