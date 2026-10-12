# Plano comentado da prévia, modelo-niveis

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. niveis, de 0,00 s a 2,00 s

Fala: "Ruim, bom, excelente."

```json
{
  "tipo": "niveis",
  "de": 0,
  "ate": 2,
  "itens": [
    {
      "rotulo": "Ruim",
      "em": 0,
      "imagem": {
        "id": "soluvel"
      },
      "fundo": "#DCE3EE"
    },
    {
      "rotulo": "Bom",
      "em": 0.5,
      "imagem": {
        "id": "coado"
      },
      "fundo": "#D3EAE4"
    },
    {
      "rotulo": "Excelente",
      "em": 1.12,
      "imagem": {
        "id": "moido"
      },
      "fundo": "#F7D9D1"
    }
  ]
}
```

## 2. niveis, de 2,00 s a 4,28 s

Fala: "Ruim é o solúvel de todo dia."

```json
{
  "tipo": "niveis",
  "de": 2,
  "ate": 4.28,
  "itens": [
    {
      "rotulo": "Ruim",
      "em": 2,
      "imagem": {
        "id": "soluvel"
      },
      "fundo": "#DCE3EE",
      "depois": {
        "rotulo": "Solúvel",
        "em": 2.46
      }
    }
  ]
}
```

## 3. niveis, de 4,28 s a 6,85 s

Fala: "Bom é o coado no filtro de papel."

```json
{
  "tipo": "niveis",
  "de": 4.28,
  "ate": 6.85,
  "itens": [
    {
      "rotulo": "Solúvel",
      "em": 4.28,
      "imagem": {
        "id": "soluvel"
      },
      "fundo": "#DCE3EE"
    },
    {
      "rotulo": "Bom",
      "em": 4.3,
      "imagem": {
        "id": "coado"
      },
      "fundo": "#D3EAE4",
      "depois": {
        "rotulo": "Coado",
        "em": 5.05
      }
    }
  ]
}
```

## 4. niveis, de 6,85 s a 10,27 s

Fala: "Excelente é o grão moído na hora, cheio de aroma."

```json
{
  "tipo": "niveis",
  "de": 6.85,
  "ate": 10.27,
  "itens": [
    {
      "rotulo": "Solúvel",
      "em": 6.85,
      "imagem": {
        "id": "soluvel"
      },
      "fundo": "#DCE3EE"
    },
    {
      "rotulo": "Coado",
      "em": 6.85,
      "imagem": {
        "id": "coado"
      },
      "fundo": "#D3EAE4"
    },
    {
      "rotulo": "Excelente",
      "em": 6.87,
      "imagem": {
        "id": "moido"
      },
      "fundo": "#F7D9D1",
      "depois": {
        "rotulo": "Moído",
        "em": 8.23
      }
    }
  ]
}
```

## 5. cta, de 10,27 s a 13,28 s

Fala: "Comenta café se você é do time excelente."

```json
{
  "tipo": "cta",
  "de": 10.27,
  "ate": 13.28,
  "texto": "Comenta \"CAFÉ\"",
  "em": 10.33
}
```

## Créditos da prévia

Sem imagem de terceiro. Os três cartões (pote de solúvel, coador com xícara e moedor manual com grãos) foram desenhados por código pra prévia.

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra previa. Apresentador gravado em fundo verde, com o fundo trocado.
