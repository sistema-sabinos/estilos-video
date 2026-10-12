# Plano comentado da prévia, modelo-carrossel

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. capa, de 0,00 s a 3,45 s

Fala: "Três trocas simples pra sobrar dinheiro no fim do mês."

```json
{
  "tipo": "capa",
  "de": 0,
  "ate": 3.45,
  "titulo": "3 trocas simples",
  "subtitulo": "pra sobrar dinheiro no fim do mês"
}
```

## 2. troca, de 3,45 s a 8,66 s

Fala: "Primeira. Troca a compra por impulso pela lista do mercado. Você leva só o que precisa."

```json
{
  "tipo": "troca",
  "de": 3.45,
  "ate": 8.66,
  "sai": {
    "texto": "Compra por impulso",
    "desenho": "carrinho",
    "em": 4.62
  },
  "riscaEm": 5.75,
  "entra": {
    "texto": "Lista do mercado",
    "desenho": "lista",
    "em": 6.04
  },
  "vantagens": [
    {
      "em": 7.5,
      "texto": "só o que precisa"
    }
  ]
}
```

## 3. troca, de 8,66 s a 12,90 s

Fala: "Segunda. Troca o parcelado no cartão pelo pagamento à vista."

```json
{
  "tipo": "troca",
  "de": 8.66,
  "ate": 12.9,
  "sai": {
    "texto": "Parcelado no cartão",
    "desenho": "cartao",
    "em": 9.98
  },
  "riscaEm": 11.47,
  "entra": {
    "texto": "Pagamento à vista",
    "desenho": "moeda",
    "em": 11.59
  }
}
```

## 4. destaque, de 12,90 s a 15,21 s

Fala: "E o mês que vem já começa sem conta antiga."

```json
{
  "tipo": "destaque",
  "de": 12.9,
  "ate": 15.21,
  "texto": "Mês que vem sem conta antiga",
  "em": 13.12,
  "nivel": "chave"
}
```

## 5. troca, de 15,21 s a 19,31 s

Fala: "Terceira. Troca o delivery da semana pela marmita feita em casa."

```json
{
  "tipo": "troca",
  "de": 15.21,
  "ate": 19.31,
  "sai": {
    "texto": "Delivery da semana",
    "desenho": "celular",
    "em": 16.44
  },
  "riscaEm": 17.63,
  "entra": {
    "texto": "Marmita feita em casa",
    "desenho": "casa",
    "em": 17.9
  }
}
```

## 6. frase, de 19,31 s a 21,40 s

Fala: "Não precisa mudar tudo de uma vez."

```json
{
  "tipo": "frase",
  "de": 19.31,
  "ate": 21.4,
  "texto": "Não precisa mudar tudo de uma vez",
  "risco": "tudo de uma vez",
  "em": 19.4
}
```

## 7. calendario, de 21,40 s a 26,22 s

Fala: "Começa guardando 50 reais por semana. Em 4 semanas, são 200 reais guardados."

```json
{
  "tipo": "calendario",
  "de": 21.4,
  "ate": 26.22,
  "titulo": "50 reais por semana",
  "destaque": "50 reais",
  "linhas": [
    {
      "em": 23.75,
      "rotulo": "Semana 1",
      "desenho": "moeda"
    },
    {
      "em": 24.07,
      "rotulo": "Semana 2",
      "desenho": "moeda"
    },
    {
      "em": 24.3,
      "rotulo": "Semana 3",
      "desenho": "moeda"
    },
    {
      "em": 24.44,
      "rotulo": "Semana 4",
      "desenho": "cofrinho"
    }
  ],
  "fechamento": {
    "em": 24.68,
    "texto": "200 reais guardados"
  }
}
```

## 8. pergunta, de 26,22 s a 30,91 s

Fala: "Qual troca você faz primeiro: a lista, o à vista ou a marmita?"

```json
{
  "tipo": "pergunta",
  "de": 26.22,
  "ate": 30.91,
  "texto": "Qual troca você faz primeiro?",
  "em": 26.95,
  "opcoes": [
    {
      "texto": "A lista",
      "em": 28.4
    },
    {
      "texto": "O à vista",
      "em": 29.21
    },
    {
      "texto": "A marmita",
      "em": 30.13
    }
  ]
}
```

## 9. cta, de 30,91 s a 33,00 s

Fala: "Salva esse vídeo pra não esquecer."

```json
{
  "tipo": "cta",
  "de": 30.91,
  "ate": 33,
  "texto": "Salva esse vídeo",
  "destaque": "Salva",
  "icone": "salvar",
  "detalhe": "pra não esquecer",
  "em": 31.01,
  "toqueEm": 31.39
}
```

## Créditos da prévia

Sem imagem de terceiro. Os desenhos a traço são da biblioteca do próprio modelo.

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra previa. Apresentador gravado em fundo verde, com o fundo trocado.
