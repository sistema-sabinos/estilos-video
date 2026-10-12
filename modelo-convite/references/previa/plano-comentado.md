# Plano comentado da prévia, modelo-convite

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. convite, de 0,00 s a 4,00 s

Fala: "Vai receber gente em casa? Então anota o básico da mesa posta."

```json
{
  "tipo": "convite",
  "de": 0,
  "ate": 4,
  "titulo": "Vai receber?",
  "subtitulo": "O básico da mesa posta",
  "seloEm": 2.87
}
```

## 2. marco, de 4,00 s a 8,70 s

Fala: "Primeiro os talheres. O garfo fica na esquerda, a faca e a colher na direita."

```json
{
  "tipo": "marco",
  "de": 4,
  "ate": 8.7,
  "numero": "1",
  "extenso": "Os talheres",
  "numeroEm": 4.08,
  "itens": [
    {
      "em": 5.42,
      "texto": "Garfo na esquerda"
    },
    {
      "em": 6.96,
      "texto": "Faca e colher na direita"
    }
  ]
}
```

## 3. marco, de 8,70 s a 12,25 s

Fala: "Segundo, os copos. O de água fica logo acima da faca."

```json
{
  "tipo": "marco",
  "de": 8.7,
  "ate": 12.25,
  "numero": "2",
  "extenso": "Os copos",
  "numeroEm": 8.81,
  "itens": [
    {
      "em": 10.58,
      "texto": "Água acima da faca",
      "icone": "taca"
    }
  ]
}
```

## 4. marco, de 12,25 s a 16,50 s

Fala: "Terceiro, o pratinho de pão vai do lado esquerdo acima do garfo."

```json
{
  "tipo": "marco",
  "de": 12.25,
  "ate": 16.5,
  "numero": "3",
  "extenso": "O pão",
  "numeroEm": 12.35,
  "itens": [
    {
      "em": 12.99,
      "texto": "Pratinho de pão"
    },
    {
      "em": 14.68,
      "texto": "Esquerda, acima do garfo"
    }
  ]
}
```

## 5. definicao, de 16,50 s a 21,68 s

Fala: "Na hora de comer, a regra é uma só: Usa os talheres de fora para dentro, um par a cada prato."

```json
{
  "tipo": "definicao",
  "de": 16.5,
  "ate": 21.68,
  "termo": "A regra",
  "em": 17.4,
  "significado": "Talheres de fora pra dentro, um par a cada prato",
  "significadoEm": 18.43
}
```

## 6. comparacao, de 21,68 s a 27,40 s

Fala: "E o guardanapo? O erro mais comum é deixar ele na mesa. Ao sentar, ele vai direto para o colo."

```json
{
  "tipo": "comparacao",
  "de": 21.68,
  "ate": 27.4,
  "modo": "errado-certo",
  "titulo": "E o guardanapo?",
  "lados": [
    {
      "rotulo": "Erro comum",
      "texto": "Deixar na mesa",
      "em": 22.9
    },
    {
      "rotulo": "Ao sentar",
      "texto": "Direto pro colo",
      "em": 24.91
    }
  ],
  "vencedor": 1,
  "vencedorEm": 25.94
}
```

## 7. frase, de 27,40 s a 30,30 s

Fala: "Parece detalhe, mas é isso que deixa a mesa elegante."

```json
{
  "tipo": "frase",
  "de": 27.4,
  "ate": 30.3,
  "texto": "Parece detalhe, mas é isso que deixa a mesa elegante",
  "destaque": "elegante",
  "em": 27.51,
  "seloEm": 29.53
}
```

## 8. cta, de 30,30 s a 33,04 s

Fala: "Salva e manda para quem vai receber no fim de semana."

```json
{
  "tipo": "cta",
  "de": 30.3,
  "ate": 33.04,
  "texto": "Salva",
  "complemento": "e manda pra quem vai receber",
  "icone": "salvar",
  "em": 30.37,
  "seloEm": 30.45
}
```

## Créditos da prévia

Sem imagem de terceiro. O convite, os cartões, a fita, o lacre e os ícones são desenhados em vetor pelo próprio modelo. Fontes Great Vibes, Cinzel e EB Garamond (Google Fonts, SIL Open Font License).

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde, com o fundo trocado.
