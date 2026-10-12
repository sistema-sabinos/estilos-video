# Plano comentado da prévia, modelo-estudio

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 2,55 s

Fala: "A pergunta que mais chega aqui é sempre a mesma:"

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 2.55,
  "capitulo": "A pergunta",
  "texto": "A pergunta que mais chega aqui",
  "destaque": "mais chega aqui"
}
```

## 2. pergunta, de 2,55 s a 4,42 s

Fala: "quanto exercício eu preciso por semana?"

```json
{
  "tipo": "pergunta",
  "de": 2.55,
  "ate": 4.42,
  "em": 2.62,
  "texto": "Quanto exercício eu preciso por semana?",
  "destaque": "por semana?"
}
```

## 3. resposta, de 4,42 s a 8,95 s

Fala: "E a resposta é mais simples do que parece: A Organização Mundial da Saúde recomenda"

```json
{
  "tipo": "resposta",
  "de": 4.42,
  "ate": 8.95,
  "capitulo": "A resposta",
  "texto": "Mais simples do que parece",
  "destaque": "simples",
  "rotuloEm": 4.72,
  "em": 5.18,
  "fileira": {
    "itens": [
      {
        "texto": "Organização",
        "em": 6.95
      },
      {
        "texto": "Mundial",
        "em": 7.59
      },
      {
        "texto": "da Saúde",
        "em": 8.04
      }
    ]
  }
}
```

## 4. grafico, de 8,95 s a 12,25 s

Fala: "de 150 a 300 minutos de atividade moderada."

```json
{
  "tipo": "grafico",
  "de": 8.95,
  "ate": 12.25,
  "forma": "barras",
  "titulo": "Atividade moderada",
  "unidade": "minutos",
  "dados": [
    {
      "rotulo": "De",
      "valor": 150,
      "em": 9.12
    },
    {
      "rotulo": "A",
      "valor": 300,
      "em": 9.78
    }
  ]
}
```

## 5. numero, de 12,25 s a 15,30 s

Fala: "Isso dá uns 30 minutos por dia, 5 dias na semana."

```json
{
  "tipo": "numero",
  "de": 12.25,
  "ate": 15.3,
  "valor": 30,
  "sufixo": "min",
  "em": 12.71,
  "rotulo": "Por dia, 5 dias na semana",
  "rotuloEm": 13.56
}
```

## 6. definicao, de 15,30 s a 18,78 s

Fala: "Moderada é quando você ainda consegue falar, mas não consegue cantar."

```json
{
  "tipo": "definicao",
  "de": 15.3,
  "ate": 18.78,
  "capitulo": "Na prática",
  "termo": "Moderada",
  "em": 15.4,
  "significado": "Ainda consegue falar, mas não consegue cantar",
  "significadoEm": 16.38
}
```

## 7. topicos, de 18,78 s a 21,53 s

Fala: "Vale caminhada rápida, bicicleta e dança."

```json
{
  "tipo": "topicos",
  "de": 18.78,
  "ate": 21.53,
  "titulo": "Vale",
  "itens": [
    {
      "texto": "Caminhada rápida",
      "em": 19
    },
    {
      "texto": "Bicicleta",
      "em": 20.33
    },
    {
      "texto": "Dança",
      "em": 21.06
    }
  ]
}
```

## 8. trilha, de 21,53 s a 27,70 s

Fala: "E quem começa do zero não precisa de tudo isso na primeira semana. Dez minutos já contam. E você vai subindo aos poucos."

```json
{
  "tipo": "trilha",
  "de": 21.53,
  "ate": 27.7,
  "legenda": true,
  "capitulo": "Do zero",
  "curva": "sobe",
  "ilustrativo": true,
  "inicio": {
    "em": 22.34,
    "texto": "Do zero",
    "rotulo": "Começo"
  },
  "contagem": {
    "em": 24.37,
    "ate": 24.98,
    "valor": 10,
    "unidade": "minutos já contam",
    "rotulo": "Semana 1"
  },
  "marco": {
    "em": 26.51,
    "texto": "Subindo aos poucos"
  }
}
```

## 9. frase, de 27,70 s a 29,55 s

Fala: "Feito é melhor que perfeito."

```json
{
  "tipo": "frase",
  "de": 27.7,
  "ate": 29.55,
  "texto": "Feito é melhor que perfeito.",
  "destaque": "melhor que perfeito.",
  "em": 27.9
}
```

## 10. cta, de 29,55 s a 32,96 s

Fala: "Salva esse vídeo e manda pra quem vive dizendo que não tem tempo."

```json
{
  "tipo": "cta",
  "de": 29.55,
  "ate": 32.96,
  "capitulo": "Pra salvar",
  "em": 29.65,
  "texto": "Salva esse vídeo e manda pra quem não tem tempo",
  "icone": "salvar",
  "botao": "Salva",
  "titulo": "Quanto exercício por semana"
}
```

## Créditos da prévia

Sem imagem de terceiro.

Dado citado na fala: recomendação de 150 a 300 minutos semanais de atividade física moderada para adultos, das diretrizes de 2020 da Organização Mundial da Saúde (WHO guidelines on physical activity and sedentary behaviour, https://www.who.int/publications/i/item/9789240015128).

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra previa. Apresentador gravado em fundo verde, com o fundo trocado.
