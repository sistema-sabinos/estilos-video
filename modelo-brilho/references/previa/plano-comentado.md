# Plano comentado da prévia, modelo-brilho

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 3,43 s

Fala: "Três cuidados com a pele que levam menos de 5 minutos por dia."

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 3.43,
  "texto": "3 cuidados com a pele, menos de 5 minutos",
  "destaque": "menos de 5 minutos",
  "linhas": [
    "3 cuidados",
    "com a pele,",
    "menos de 5 minutos"
  ],
  "tempo": {
    "valor": "5",
    "unidade": "min",
    "em": 2.36
  }
}
```

## 2. amostras, de 3,43 s a 6,04 s

Fala: "Serve pra pele seca, oleosa ou mista."

```json
{
  "tipo": "amostras",
  "de": 3.43,
  "ate": 6.04,
  "layout": "cheio",
  "titulo": "Serve pra pele",
  "itens": [
    {
      "em": 4.44,
      "nome": "Seca",
      "cor": "nude"
    },
    {
      "em": 4.85,
      "nome": "Oleosa",
      "cor": "pessego"
    },
    {
      "em": 5.43,
      "nome": "Mista",
      "cor": "rosado"
    }
  ]
}
```

## 3. truque, de 6,04 s a 11,20 s

Fala: "Lava o rosto com água morna, nunca quente, porque água quente resseca a pele. Dois."

```json
{
  "tipo": "truque",
  "de": 6.04,
  "ate": 11.2,
  "numero": 1,
  "rotulo": "Cuidado",
  "produto": "Água morna",
  "cor": "iluminador",
  "produtoEm": 7.57,
  "dicas": [
    {
      "em": 6.84,
      "texto": "lava o rosto",
      "icone": "gota"
    },
    {
      "em": 8.36,
      "texto": "nunca quente",
      "icone": "x"
    },
    {
      "em": 9.67,
      "texto": "água quente resseca",
      "icone": "alerta"
    }
  ],
  "marcas": [
    {
      "forma": "circulo",
      "onde": "testa",
      "em": 6.99,
      "raio": 0.12,
      "cor": "iluminador"
    },
    {
      "forma": "circulo",
      "onde": "maca",
      "em": 10.24,
      "cor": "iluminador"
    }
  ]
}
```

## 4. truque, de 11,20 s a 16,30 s

Fala: "Hidratante logo depois do banho, com a pele ainda úmida, que ele segura a água ali. Três,"

```json
{
  "tipo": "truque",
  "de": 11.2,
  "ate": 16.3,
  "layout": "lado",
  "numero": 2,
  "rotulo": "Cuidado",
  "produto": "Hidratante",
  "cor": "rosado",
  "produtoEm": 11.76,
  "dicas": [
    {
      "em": 12.31,
      "texto": "logo depois do banho",
      "icone": "relogio"
    },
    {
      "em": 13.63,
      "texto": "pele ainda úmida",
      "icone": "gota",
      "liga": 0
    },
    {
      "em": 14.95,
      "texto": "segura a água",
      "icone": "check",
      "liga": 1
    }
  ],
  "marcas": [
    {
      "forma": "brilho",
      "onde": "macaAlta",
      "em": 13.86
    },
    {
      "forma": "brilho",
      "onde": "testa",
      "em": 15.41
    }
  ]
}
```

## 5. truque, de 16,30 s a 19,60 s

Fala: "protetor solar, todo dia, mesmo nublado, porque"

```json
{
  "tipo": "truque",
  "de": 16.3,
  "ate": 19.6,
  "numero": 3,
  "rotulo": "Cuidado",
  "produto": "Protetor solar",
  "cor": "pessego",
  "produtoEm": 16.58,
  "dicas": [
    {
      "em": 17.54,
      "texto": "todo dia",
      "icone": "relogio"
    },
    {
      "em": 18.43,
      "texto": "mesmo nublado",
      "icone": "check"
    }
  ]
}
```

## 6. destaque, de 19,60 s a 22,69 s

Fala: "a maior parte da radiação ultravioleta passa pelas nuvens."

```json
{
  "tipo": "destaque",
  "de": 19.6,
  "ate": 22.69,
  "texto": "Radiação passa pelas nuvens",
  "em": 20.23,
  "nivel": "alerta"
}
```

## 7. truque, de 22,69 s a 26,41 s

Fala: "Capricha na testa, no nariz e nas orelhas, que ficam mais expostas."

```json
{
  "tipo": "truque",
  "de": 22.69,
  "ate": 26.41,
  "layout": "lado",
  "rotulo": "Capricha",
  "produto": "Mais expostas",
  "cor": "pessego",
  "produtoEm": 25.59,
  "dicas": [
    {
      "em": 23.3,
      "texto": "na testa",
      "icone": "brilho",
      "liga": 0
    },
    {
      "em": 24.07,
      "texto": "no nariz",
      "icone": "brilho",
      "liga": 1
    },
    {
      "em": 24.77,
      "texto": "nas orelhas",
      "icone": "brilho",
      "liga": 2
    }
  ],
  "marcas": [
    {
      "forma": "circulo",
      "onde": "testa",
      "em": 23.3,
      "raio": 0.12,
      "cor": "pessego"
    },
    {
      "forma": "circulo",
      "onde": "nariz",
      "em": 24.07,
      "raio": 0.08,
      "cor": "pessego"
    },
    {
      "forma": "circulo",
      "onde": {
        "u": 0.58,
        "v": 0
      },
      "em": 24.77,
      "raio": 0.08,
      "cor": "pessego"
    }
  ]
}
```

## 8. resultado, de 26,41 s a 28,76 s

Fala: "Pronto, pele cuidada em 5 minutos."

```json
{
  "tipo": "resultado",
  "de": 26.41,
  "ate": 28.76,
  "marcasEm": 26.46,
  "texto": [
    "Pronto,",
    "pele cuidada"
  ],
  "numero": {
    "valor": 5,
    "unidade": "min",
    "em": 27.52,
    "emFim": 28,
    "icone": "relogio"
  }
}
```

## 9. cta, de 28,76 s a 31,28 s

Fala: "Salva esse vídeo pra montar sua rotina amanhã."

```json
{
  "tipo": "cta",
  "de": 28.76,
  "ate": 31.28,
  "texto": "Salva pra montar sua rotina",
  "destaque": "sua rotina",
  "icone": "salvar",
  "em": 28.81
}
```

## Créditos da prévia

Sem imagem de terceiro.

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra previa. Apresentador gravado em fundo verde, com o fundo trocado.
