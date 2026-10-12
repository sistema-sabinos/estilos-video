# Plano comentado da prévia, modelo-chave

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 1,68 s

Fala: "Vai alugar um apartamento?"

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 1.68,
  "texto": "Vai alugar um apartamento?",
  "destaque": "apartamento",
  "em": 0.01,
  "numero": "302"
}
```

## 2. destaque, de 1,68 s a 4,11 s

Fala: "Antes de assinar, confere três coisas."

```json
{
  "tipo": "destaque",
  "de": 1.68,
  "ate": 4.11,
  "texto": "Antes de assinar",
  "em": 1.68,
  "nivel": "chave",
  "detalhe": "confere três coisas",
  "detalheEm": 2.4
}
```

## 3. item, de 4,11 s a 9,60 s

Fala: "Primeiro, a vistoria. Fotografa cada cômodo, a sala, a cozinha e o banheiro"

```json
{
  "tipo": "item",
  "de": 4.11,
  "ate": 9.6,
  "etiqueta": "Vistoria",
  "etiquetaEm": 4.79,
  "titulo": "Fotografa cada cômodo",
  "painel": {
    "tipo": "prancheta",
    "itens": [
      {
        "texto": "Sala",
        "em": 7.46,
        "desenho": "sala"
      },
      {
        "texto": "Cozinha",
        "em": 7.96,
        "desenho": "cozinha"
      },
      {
        "texto": "Banheiro",
        "em": 8.8,
        "desenho": "banheiro"
      }
    ]
  }
}
```

## 4. frase, de 9,60 s a 11,87 s

Fala: "e anexa as fotos no contrato."

```json
{
  "tipo": "frase",
  "de": 9.6,
  "ate": 11.87,
  "texto": "Anexa as fotos no contrato",
  "destaque": "no contrato",
  "em": 9.9
}
```

## 5. item, de 11,87 s a 17,13 s

Fala: "segundo a garantia Se o dono pedir caução em dinheiro, a lei do inquilinato diz que"

```json
{
  "tipo": "item",
  "de": 11.87,
  "ate": 17.13,
  "etiqueta": "Garantia",
  "etiquetaEm": 12.68,
  "titulo": "A garantia",
  "painel": {
    "tipo": "chaveiro",
    "chaves": [
      {
        "texto": "O dono pede",
        "icone": "pessoa",
        "em": 14.02
      },
      {
        "texto": "Caução em dinheiro",
        "icone": "dinheiro",
        "em": 14.42
      },
      {
        "texto": "Lei do inquilinato",
        "icone": "livro",
        "em": 15.79
      }
    ]
  }
}
```

## 6. vezes, de 17,13 s a 20,03 s

Fala: "ela pode ser de, no máximo, 3 meses de aluguel."

```json
{
  "tipo": "vezes",
  "de": 17.13,
  "ate": 20.03,
  "rotulo": "No máximo",
  "n": 3,
  "numeroEm": 18.65,
  "unidade": "meses de aluguel",
  "fonte": "Lei 8.245/91, art. 38"
}
```

## 7. frase, de 20,03 s a 22,08 s

Fala: "Mais que isso, pode recusar."

```json
{
  "tipo": "frase",
  "de": 20.03,
  "ate": 22.08,
  "texto": "Mais que isso, pode recusar",
  "destaque": "pode recusar",
  "em": 20.03
}
```

## 8. item, de 22,08 s a 28,48 s

Fala: "Terceiro, as contas da casa. Aluguel, condomínio e IPTU somam o custo de verdade do mês,"

```json
{
  "tipo": "item",
  "de": 22.08,
  "ate": 28.48,
  "etiqueta": "Contas",
  "etiquetaEm": 22.97,
  "titulo": "As contas da casa",
  "painel": {
    "tipo": "conta",
    "linhas": [
      {
        "rotulo": "Aluguel",
        "em": 24.41
      },
      {
        "rotulo": "Condomínio",
        "em": 25.02
      },
      {
        "rotulo": "IPTU",
        "em": 25.91
      }
    ],
    "total": "Custo de verdade do mês"
  }
}
```

## 9. comparacao, de 28,48 s a 31,24 s

Fala: "Faz essa conta antes de se apaixonar pelo imóvel."

```json
{
  "tipo": "comparacao",
  "de": 28.48,
  "ate": 31.24,
  "modo": "antes-depois",
  "lados": [
    {
      "rotulo": "Antes",
      "texto": "Faz essa conta",
      "em": 28.53
    },
    {
      "rotulo": "Depois",
      "texto": "Se apaixona pelo imóvel",
      "em": 29.52
    }
  ]
}
```

## 10. cta, de 31,24 s a 34,00 s

Fala: "Salva esse vídeo e manda para quem está procurando casa."

```json
{
  "tipo": "cta",
  "de": 31.24,
  "ate": 34,
  "texto": "Para quem está procurando casa",
  "em": 31.97,
  "acoes": [
    {
      "texto": "Salva",
      "icone": "salvar",
      "em": 31.24
    },
    {
      "texto": "Manda",
      "icone": "enviar",
      "em": 31.75
    }
  ]
}
```

## Créditos da prévia

Sem imagem de terceiro: tudo na tela (porta, quadro de chaves, prancheta com os cômodos, chaveiros, recibo, etiquetas) é desenhado em vetor pelo próprio modelo. Fontes Young Serif e Familjen Grotesk (Google Fonts, SIL Open Font License).

Fato do roteiro: o limite da caução em dinheiro (no máximo três meses de aluguel) é o art. 38, parágrafo 2, da Lei 8.245/1991, conferido em https://www.planalto.gov.br/ccivil_03/leis/l8245.htm.

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra previa. Apresentador gravado em fundo verde, com o fundo trocado.
