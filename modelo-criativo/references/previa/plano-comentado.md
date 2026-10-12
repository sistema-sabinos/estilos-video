# Plano comentado da prévia, modelo-criativo

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. gancho, de 0,00 s a 2,90 s

Fala: "Para de deixar a entrada da sua casa no escuro."

```json
{
  "tipo": "gancho",
  "de": 0,
  "ate": 2.9,
  "texto": "Entrada de casa no escuro?",
  "destaque": "no escuro",
  "em": 1.02,
  "icone": "alerta",
  "iconeEm": 2.33
}
```

## 2. gancho, de 2,90 s a 6,93 s

Fala: "Deixei essa luminária o dia inteiro no sol e de noite ela acendeu quando eu cheguei."

```json
{
  "tipo": "gancho",
  "de": 2.9,
  "ate": 6.93,
  "texto": "De noite, acendeu quando eu cheguei",
  "destaque": "acendeu",
  "em": 4.96,
  "imagem": {
    "id": "luminaria-noite"
  },
  "telaCheia": 4.52,
  "icone": "sol",
  "iconeEm": 4.52
}
```

## 3. gancho, de 6,93 s a 10,57 s

Fala: "Se você gosta de luz quente, de vela no jardim, olha essa aqui."

```json
{
  "tipo": "gancho",
  "de": 6.93,
  "ate": 10.575,
  "texto": "Luz quente de vela no jardim",
  "destaque": "luz quente",
  "em": 7.81,
  "imagem": {
    "id": "luminaria-em-uso"
  },
  "icone": "coracao",
  "iconeEm": 8.65
}
```

## 4. heroi, de 10,57 s a 13,00 s

Fala: "Ela é a luminária solar retrô da Zabinno."

```json
{
  "tipo": "heroi",
  "de": 10.575,
  "ate": 13,
  "imagem": {
    "id": "luminaria"
  },
  "em": 10.62,
  "palavra": "Ela",
  "titulo": "Luminária Solar Retrô",
  "tituloEm": 10.82,
  "destaque": "Solar Retrô",
  "etiquetas": [
    {
      "texto": "Zabinno",
      "em": 12.34,
      "icone": "estrela"
    }
  ]
}
```

## 5. prova, de 13,00 s a 16,81 s

Fala: "Tem uma lâmpada de filamento à mostra no vidro com luz quente cor de âmbar."

```json
{
  "tipo": "prova",
  "de": 13,
  "ate": 16.81,
  "imagem": {
    "id": "luminaria-em-uso"
  },
  "em": 13.26,
  "palavra": "lâmpada",
  "texto": "Filamento com luz quente âmbar",
  "textoEm": 13.96
}
```

## 6. prova, de 16,81 s a 19,75 s

Fala: "O sensor de presença acende a luz quando alguém se aproxima."

```json
{
  "tipo": "prova",
  "de": 16.81,
  "ate": 19.75,
  "imagem": {
    "id": "luminaria-noite"
  },
  "em": 16.95,
  "palavra": "sensor",
  "texto": "Acende quando alguém se aproxima",
  "textoEm": 17.72
}
```

## 7. topicos, de 19,75 s a 23,46 s

Fala: "Funciona só com sol, sem fio, sem tomada e sem conta de luz."

```json
{
  "tipo": "topicos",
  "de": 19.75,
  "ate": 23.46,
  "itens": [
    {
      "texto": "Funciona só com sol",
      "em": 19.91
    },
    {
      "texto": "Sem fio",
      "em": 21.05
    },
    {
      "texto": "Sem tomada",
      "em": 21.58
    },
    {
      "texto": "Sem conta de luz",
      "em": 22.36
    }
  ]
}
```

## 8. destaque, de 23,46 s a 25,50 s

Fala: "A bateria já vem inclusa, e ela é"

```json
{
  "tipo": "destaque",
  "de": 23.46,
  "ate": 25.5,
  "texto": "Bateria inclusa",
  "em": 23.58,
  "nivel": "chave"
}
```

## 9. prova, de 25,50 s a 28,36 s

Fala: "IP65, encara sol e chuva o ano todo."

```json
{
  "tipo": "prova",
  "de": 25.5,
  "ate": 28.36,
  "icone": "sol",
  "em": 25.61,
  "palavra": "IP65,",
  "texto": "Encara sol e chuva o ano todo",
  "textoEm": 26.49,
  "numero": {
    "valor": 65,
    "em": 25.61,
    "prefixo": "IP"
  }
}
```

## 10. cta, de 28,36 s a 31,84 s

Fala: "Clique em Saiba Mais e garante a sua com envio imediato."

```json
{
  "tipo": "cta",
  "de": 28.36,
  "ate": 31.84,
  "texto": "Saiba mais",
  "em": 28.78,
  "toqueEm": 29.12,
  "icone": "link",
  "imagem": {
    "id": "luminaria"
  },
  "titulo": "Garante a sua",
  "tituloEm": 29.49
}
```

## 11. selo, de 30,21 s a 31,84 s

Fala: "envio imediato."

```json
{
  "tipo": "selo",
  "de": 30.21,
  "ate": 31.84,
  "texto": "Envio imediato",
  "em": 30.21,
  "icone": "frete"
}
```

## Créditos da prévia

Sem imagem de terceiro. As 3 fotos são da luminária solar retrô da própria loja do Sabino (Zabinno), do material do anúncio dele; o recorte em PNG transparente foi feito a partir da foto de fundo branco.

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde, com o fundo trocado.
