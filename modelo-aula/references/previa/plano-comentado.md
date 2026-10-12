# Plano comentado da prévia, modelo-aula

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. capitulo, de 0,00 s a 4,59 s

Fala: "Nessa aula, você vai aprender a dividir o salário com a regra 50, 30, 20."

```json
{
  "tipo": "capitulo",
  "de": 0,
  "ate": 4.59,
  "chamada": "Dividir o salário",
  "texto": "Regra 50, 30, 20",
  "em": 2.66
}
```

## 2. slide, de 4,59 s a 10,24 s

Fala: "Funciona em três partes, metade vai para as necessidades, aluguel, mercado e conta de luz."

```json
{
  "tipo": "slide",
  "de": 4.59,
  "ate": 10.24,
  "rotulo": "A regra",
  "titulo": "Três partes: metade para necessidades",
  "em": 4.65,
  "destaque": "necessidades",
  "itens": [
    {
      "texto": "Aluguel",
      "em": 7.94
    },
    {
      "texto": "Mercado",
      "em": 8.58
    },
    {
      "texto": "Conta de luz",
      "em": 9.3
    }
  ]
}
```

## 3. slide, de 10,24 s a 13,62 s

Fala: "30% vai para os desejos, como o lazer e restaurante."

```json
{
  "tipo": "slide",
  "de": 10.24,
  "ate": 13.62,
  "rotulo": "A regra",
  "titulo": "30% para os desejos",
  "em": 10.3,
  "destaque": "desejos",
  "itens": [
    {
      "texto": "Lazer",
      "em": 12.55
    },
    {
      "texto": "Restaurante",
      "em": 12.93
    }
  ]
}
```

## 4. numero, de 13,62 s a 17,05 s

Fala: "E 20% vai para a poupança ou para quitar dívidas."

```json
{
  "tipo": "numero",
  "de": 13.62,
  "ate": 17.05,
  "titulo": "A regra",
  "valor": 20,
  "sufixo": "%",
  "em": 13.88,
  "rotulo": "poupança ou dívidas",
  "rotuloEm": 14.82
}
```

## 5. numero, de 17,05 s a 21,09 s

Fala: "Vamos a um exemplo. Quem ganha R$ 3.000 por mês separa R$ 600 para a poupança."

```json
{
  "tipo": "numero",
  "de": 17.05,
  "ate": 21.09,
  "titulo": "Exemplo",
  "prefixo": "R$ ",
  "desde": 3000,
  "desdeEm": 18.19,
  "via": "separa",
  "viaEm": 19.21,
  "valor": 600,
  "em": 19.69,
  "rotulo": "para a poupança",
  "rotuloEm": 20.28
}
```

## 6. destaque, de 21,09 s a 23,52 s

Fala: "E aqui está o segredo: essa parte sai primeiro,"

```json
{
  "tipo": "destaque",
  "de": 21.09,
  "ate": 23.52,
  "texto": "Aqui está o segredo",
  "em": 21.15,
  "detalhe": "essa parte sai primeiro",
  "detalheEm": 22.2
}
```

## 7. frase, de 23,52 s a 25,44 s

Fala: "no dia em que o salário cai."

```json
{
  "tipo": "frase",
  "de": 23.52,
  "ate": 25.44,
  "texto": "No dia em que o salário cai",
  "destaque": "salário",
  "em": 23.52
}
```

## 8. slide, de 25,44 s a 30,11 s

Fala: "Então, anota o resumo: Necessidades, desejos e poupança. Do maior para o menor."

```json
{
  "tipo": "slide",
  "de": 25.44,
  "ate": 30.11,
  "titulo": "Anota o resumo",
  "em": 25.71,
  "destaque": "resumo",
  "itens": [
    {
      "texto": "Necessidades",
      "em": 26.52,
      "detalhe": "metade"
    },
    {
      "texto": "Desejos",
      "em": 27.37,
      "detalhe": "30%"
    },
    {
      "texto": "Poupança",
      "em": 27.96,
      "detalhe": "20%, sai primeiro"
    },
    {
      "texto": "Do maior para o menor",
      "em": 28.88
    }
  ]
}
```

## 9. cta, de 30,11 s a 33,28 s

Fala: "Na próxima aula, a gente monta a sua planilha."

```json
{
  "tipo": "cta",
  "de": 30.11,
  "ate": 33.28,
  "texto": "Na próxima aula, a gente monta a sua planilha",
  "icone": "salvar",
  "destaque": "planilha",
  "em": 30.13
}
```

## Créditos da prévia

Sem imagem de terceiro: tudo na tela é desenhado em vetor pelo próprio modelo. Fontes Plus Jakarta Sans e STIX Two Text (Google Fonts, SIL Open Font License).

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde e vertical, montado no quadro 16:9 com o fundo trocado.
