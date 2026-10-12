# Plano comentado da prévia, modelo-devocional

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 4,43 s

Fala: "Tem noite que parece não ter fim, você deita, o pensamento não para,"

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 4.43,
  "em": 0.12,
  "texto": "Tem noite que parece não ter fim. Você deita, o pensamento não para.",
  "destaque": "não ter fim",
  "desenho": "lua",
  "desenhoEm": 0.15
}
```

## 2. frase, de 4,43 s a 6,95 s

Fala: "e o dia seguinte já pesa antes de chegar."

```json
{
  "tipo": "frase",
  "de": 4.43,
  "ate": 6.95,
  "em": 4.63,
  "texto": "E o dia seguinte já pesa antes de chegar.",
  "destaque": "pesa"
}
```

## 3. destaque, de 6,95 s a 9,91 s

Fala: "Se essa é a sua noite hoje, guarda isso."

```json
{
  "tipo": "destaque",
  "de": 6.95,
  "ate": 9.91,
  "em": 7.2,
  "texto": "Se essa é a sua noite hoje, guarda isso."
}
```

## 4. versiculo, de 9,91 s a 18,07 s

Fala: "Está escrito: O choro pode durar uma noite, mas a alegria vem pela manhã. Salmos, capítulo 30, versículo 5."

```json
{
  "tipo": "versiculo",
  "de": 9.91,
  "ate": 18.07,
  "chamada": "Está escrito",
  "chamadaEm": 10.16,
  "em": 11.17,
  "texto": "O choro pode durar uma noite, mas a alegria vem pela manhã.",
  "destaque": "alegria",
  "referencia": "Salmos 30:5",
  "referenciaPartes": [
    {
      "texto": "Salmos",
      "em": 15.48
    },
    {
      "texto": "30",
      "em": 16.28
    },
    {
      "texto": ":5",
      "em": 17.32
    }
  ]
}
```

## 5. destaque, de 18,07 s a 20,45 s

Fala: "Repara, a noite tem hora pra acabar."

```json
{
  "tipo": "destaque",
  "de": 18.07,
  "ate": 20.45,
  "em": 18.32,
  "texto": "Repara: a noite tem hora pra acabar."
}
```

## 6. luz, de 20,45 s a 23,20 s

Fala: "Então, descansa, que amanhã é recomeço."

```json
{
  "tipo": "luz",
  "de": 20.45,
  "ate": 23.2,
  "em": 20.64,
  "texto": "Então descansa, que amanhã é recomeço.",
  "palavra": "recomeço",
  "palavraEm": 22.4,
  "desenho": "amanhecer",
  "desenhoEm": 21.86
}
```

## 7. numero, de 23,20 s a 26,50 s

Fala: "Antes de dormir hoje, faz três coisas simples:"

```json
{
  "tipo": "numero",
  "de": 23.2,
  "ate": 26.5,
  "valor": 3,
  "em": 25.1,
  "rotulo": "coisas simples antes de dormir",
  "rotuloEm": 23.48
}
```

## 8. topicos, de 26,50 s a 31,33 s

Fala: "Desliga a tela. Agradece por uma coisa do dia e entrega o resto."

```json
{
  "tipo": "topicos",
  "de": 26.5,
  "ate": 31.33,
  "itens": [
    {
      "texto": "Desliga a tela",
      "em": 26.76
    },
    {
      "texto": "Agradece por uma coisa do dia",
      "em": 27.92
    },
    {
      "texto": "Entrega o resto",
      "em": 29.81
    }
  ]
}
```

## 9. cta, de 31,33 s a 34,40 s

Fala: "Manda esse vídeo pra alguém que tá passando por uma noite difícil."

```json
{
  "tipo": "cta",
  "de": 31.33,
  "ate": 34.4,
  "em": 31.59,
  "texto": "Manda esse vídeo pra alguém que tá passando por uma noite difícil.",
  "destaque": "alguém"
}
```

## Créditos da prévia

Sem imagem de terceiro: tudo na tela é desenhado em vetor pelo próprio modelo (lua, amanhecer, carta) e a textura de papel é feita por código. Fontes EB Garamond e Manrope (Google Fonts, SIL Open Font License).

Citação: Salmos 30:5, na tradução Almeida Revista e Corrigida (trecho "o choro pode durar uma noite, mas a alegria vem pela manhã").

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde, com o fundo trocado.
