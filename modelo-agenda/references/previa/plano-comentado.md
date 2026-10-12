# Plano comentado da prévia, modelo-agenda

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 3,60 s

Fala: "Dorme mal e acorda cansado? Monta uma agenda pra sua noite."

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 3.6,
  "texto": "Dorme mal? Monta uma agenda pra sua noite",
  "destaque": "agenda pra sua noite",
  "em": 0
}
```

## 2. passos, de 3,60 s a 8,20 s

Fala: "Às 5 da tarde, o último café. Às 10, celular longe da cama."

```json
{
  "tipo": "passos",
  "de": 3.6,
  "ate": 8.2,
  "itens": [
    {
      "texto": "Último café",
      "detalhe": "17:00",
      "em": 4.56
    },
    {
      "texto": "Celular longe da cama",
      "detalhe": "22:00",
      "em": 6.63
    }
  ]
}
```

## 3. blocos, de 8,20 s a 12,60 s

Fala: "Às dez e meia, luz baixa e um livro. E às 11, apaga a luz."

```json
{
  "tipo": "blocos",
  "de": 8.2,
  "ate": 12.6,
  "blocos": [
    {
      "categoria": "pausa",
      "titulo": "Luz baixa e um livro",
      "quando": "22:30",
      "em": 9.16
    },
    {
      "categoria": "foco",
      "titulo": "Apaga a luz",
      "quando": "23:00",
      "em": 11.46
    }
  ]
}
```

## 4. destaque, de 12,60 s a 15,20 s

Fala: "Parece pouco, mas o segredo é repetir."

```json
{
  "tipo": "destaque",
  "de": 12.6,
  "ate": 15.2,
  "texto": "Parece pouco, mas o segredo é repetir",
  "em": 12.63,
  "nivel": "chave"
}
```

## 5. ciclos, de 15,20 s a 20,50 s

Fala: "todo dia no mesmo horário. segunda, terça, quarta, até no sábado e no domingo."

```json
{
  "tipo": "ciclos",
  "de": 15.2,
  "ate": 20.5,
  "itens": [
    {
      "em": 16.98
    },
    {
      "em": 17.66
    },
    {
      "em": 18.3
    },
    {
      "em": 20
    }
  ],
  "rotulo": "dias",
  "rotuloEm": 15.32,
  "contagem": false
}
```

## 6. numero, de 20,50 s a 23,90 s

Fala: "um adulto precisa de pelo menos 7 horas de sono por noite."

```json
{
  "tipo": "numero",
  "de": 20.5,
  "ate": 23.9,
  "valor": 7,
  "sufixo": "horas",
  "em": 21.89,
  "rotulo": "Um adulto precisa de pelo menos",
  "rotuloEm": 20.53
}
```

## 7. destaque, de 23,90 s a 27,90 s

Fala: "Dormir 5 horas na semana e compensar no domingo bagunça o seu relógio."

```json
{
  "tipo": "destaque",
  "de": 23.9,
  "ate": 27.9,
  "texto": "Dormir 5 horas e compensar no domingo",
  "em": 23.94,
  "nivel": "alerta",
  "detalhe": "bagunça o seu relógio",
  "detalheEm": 26.52
}
```

## 8. comparacao, de 27,90 s a 30,02 s

Fala: "O certo é sete horas, todo dia."

```json
{
  "tipo": "comparacao",
  "de": 27.9,
  "ate": 30.02,
  "modo": "errado-certo",
  "lados": [
    {
      "rotulo": "Errado",
      "texto": "Compensar no domingo",
      "em": 27.94
    },
    {
      "rotulo": "O certo",
      "texto": "7 horas, todo dia",
      "em": 28.37
    }
  ]
}
```

## 9. pergunta, de 30,02 s a 32,10 s

Fala: "Que horas você vai dormir hoje?"

```json
{
  "tipo": "pergunta",
  "de": 30.02,
  "ate": 32.1,
  "texto": "Que horas você vai dormir hoje?",
  "em": 30.75
}
```

## 10. cta, de 32,10 s a 34,88 s

Fala: "Escolhe seu horário e salva esse vídeo para lembrar."

```json
{
  "tipo": "cta",
  "de": 32.1,
  "ate": 34.88,
  "texto": "Escolhe seu horário e salva esse vídeo",
  "destaque": "seu horário",
  "icone": "salvar",
  "acaoEm": 32.8,
  "etiquetas": [
    {
      "texto": "Seu horário",
      "icone": "relogio",
      "em": 32.32
    },
    {
      "texto": "Pra lembrar",
      "icone": "alerta",
      "em": 33.71
    }
  ]
}
```

## Créditos da prévia

Sem imagem de terceiro: tudo na tela é desenhado em vetor pelo próprio modelo. Fonte Golos Text (Google Fonts, SIL Open Font License).

Fato citado na fala: adultos de 18 a 60 anos precisam de pelo menos 7 horas de sono por noite (recomendação da American Academy of Sleep Medicine e da Sleep Research Society, citada pelo CDC no MMWR 65(6), 2016: https://www.cdc.gov/mmwr/volumes/65/wr/mm6506a1.htm).

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra previa. Apresentador gravado em fundo verde, com o fundo trocado.
