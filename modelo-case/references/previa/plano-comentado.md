# Plano comentado da prévia, modelo-case

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. case, de 0,00 s a 23,20 s

Fala: "Olha esse exemplo de uma família que vivia no vermelho. eles ganhavam 4 mil por mês e gastavam 4.500 todo mês faltava dinheiro e o cartão cobria a diferença. aí eles mudaram três coisas cancelaram as assinaturas que ninguém usava passaram a cozinhar em casa durante a semana e só iam ao mercado com lista. Em 90 dias o gasto caiu de 4.500 pra 3.600,"

```json
{
  "tipo": "case",
  "de": 0,
  "ate": 23.2,
  "antes": {
    "etiqueta": "Antes",
    "em": 0.22,
    "titulo": "A família",
    "icone": "equipe",
    "tituloEm": 0,
    "carimboEm": 1.23,
    "metricas": [
      {
        "rotulo": "Renda",
        "em": 3.46,
        "valor": "R$ 4 mil",
        "valorEm": 4.1,
        "detalhe": "por mês",
        "detalheEm": 4.57,
        "icone": "dinheiro",
        "iconeEm": 3.46,
        "sinal": "plano"
      },
      {
        "rotulo": "Gasto",
        "em": 5.21,
        "valor": "R$ 4.500",
        "valorEm": 5.76,
        "icone": "carrinho",
        "iconeEm": 5.21,
        "sinal": "sobe"
      },
      {
        "rotulo": "Todo mês",
        "em": 7.1,
        "valor": "faltava dinheiro",
        "valorEm": 7.44,
        "detalhe": "o cartão cobria",
        "detalheEm": 8.56,
        "icone": "calendario",
        "iconeEm": 7.1,
        "sinal": "cai"
      }
    ]
  },
  "mudancas": {
    "etiqueta": "O que mudou",
    "em": 10.47,
    "titulo": "Mudaram 3 coisas",
    "destaque": "3",
    "itens": [
      {
        "texto": "Cancelaram assinaturas",
        "em": 12.13,
        "icone": "video"
      },
      {
        "texto": "Cozinhar em casa",
        "em": 14.78,
        "icone": "casa"
      },
      {
        "texto": "Mercado só com lista",
        "em": 17.23,
        "icone": "documento"
      }
    ]
  },
  "prazo": {
    "texto": "90 dias",
    "em": 18.72,
    "fimEm": 19.38
  },
  "resultado": {
    "rotulo": "Gasto por mês",
    "em": 19.45,
    "direcao": "cai",
    "fator": 0.8,
    "depoisEm": 19.45,
    "movimentoEm": 19.81,
    "relacaoEm": 21.74,
    "valorAntes": "R$ 4.500",
    "valorDepois": "R$ 3.600"
  }
}
```

## 2. ficha, de 23,20 s a 26,62 s

Fala: "Hoje, sobram 400 reais todo mês, que vão direto pra a reserva."

```json
{
  "tipo": "ficha",
  "de": 23.2,
  "ate": 26.62,
  "etiqueta": "Hoje",
  "em": 23.34,
  "carimboEm": 23.34,
  "metricas": [
    {
      "rotulo": "Sobra",
      "em": 23.46,
      "valor": "R$ 400",
      "valorEm": 23.76,
      "detalhe": "todo mês",
      "detalheEm": 24.83,
      "icone": "moeda",
      "iconeEm": 23.46,
      "sinal": "sobe"
    },
    {
      "rotulo": "Vai direto pra",
      "em": 25.45,
      "valor": "a reserva",
      "valorEm": 26.02,
      "icone": "escudo",
      "iconeEm": 26.05
    }
  ]
}
```

## 3. pergunta, de 26,62 s a 28,30 s

Fala: "Quer montar esse plano na sua casa?"

```json
{
  "tipo": "pergunta",
  "de": 26.62,
  "ate": 28.3,
  "em": 26.72,
  "texto": "Quer montar esse plano na sua casa?",
  "destaque": "plano"
}
```

## 4. cta, de 28,30 s a 31,07 s

Fala: "Comenta PLANO aqui embaixo, que eu te mando passo a passo."

```json
{
  "tipo": "cta",
  "de": 28.3,
  "ate": 31.07,
  "em": 28.35,
  "texto": "Comenta PLANO aqui embaixo",
  "icone": "comentar",
  "destaque": "PLANO",
  "destaqueEm": 28.71
}
```

## Créditos da prévia

Sem imagem de terceiro.

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde, com o fundo trocado.
