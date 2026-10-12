# Plano comentado da prévia, modelo-espelho

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. manchete, de 0,00 s a 3,87 s

Fala: "Protetor solar no rosto: três erros que tiram a sua proteção."

```json
{
  "tipo": "manchete",
  "de": 0,
  "ate": 3.87,
  "linhas": [
    "Protetor solar",
    "no rosto"
  ],
  "sub": "três erros que tiram a proteção"
}
```

## 2. destaque, de 3,87 s a 6,30 s

Fala: "O primeiro é a quantidade. A referência é"

```json
{
  "tipo": "destaque",
  "de": 3.87,
  "ate": 6.3,
  "texto": "O primeiro: a quantidade",
  "em": 3.92,
  "nivel": "chave"
}
```

## 3. definicao, de 6,30 s a 10,21 s

Fala: "a regra dos dois dedos, uma faixa em cada dedo para o rosto e pescoço."

```json
{
  "tipo": "definicao",
  "de": 6.3,
  "ate": 10.21,
  "termo": "Regra dos dois dedos",
  "em": 6.42,
  "significado": "uma faixa em cada dedo, pro rosto e pescoço",
  "significadoEm": 7.62
}
```

## 4. mapa, de 10,21 s a 15,44 s

Fala: "O segundo é esquecer as áreas que mais pegam sol. testa, nariz e lábios."

```json
{
  "tipo": "mapa",
  "de": 10.21,
  "ate": 15.44,
  "lado": "esquerda",
  "rotulo": "Erro 2",
  "titulo": "Onde mais pega sol",
  "nota": "as áreas esquecidas",
  "areas": [
    {
      "area": "testa",
      "em": 13.34
    },
    {
      "area": "nariz",
      "em": 13.9
    },
    {
      "area": "labios",
      "em": 14.54
    }
  ]
}
```

## 5. frase, de 15,44 s a 17,73 s

Fala: "que pedem protetor labial com FPS."

```json
{
  "tipo": "frase",
  "de": 15.44,
  "ate": 17.73,
  "texto": "Pedem protetor labial com FPS",
  "destaque": "com FPS",
  "em": 15.55
}
```

## 6. destaque, de 17,73 s a 20,20 s

Fala: "O terceiro é passar uma vez só. O indicado é"

```json
{
  "tipo": "destaque",
  "de": 17.73,
  "ate": 20.2,
  "texto": "Passar uma vez só",
  "em": 18.41,
  "nivel": "alerta"
}
```

## 7. numero, de 20,20 s a 21,95 s

Fala: "reaplicar a cada duas horas."

```json
{
  "tipo": "numero",
  "de": 20.2,
  "ate": 21.95,
  "valor": 2,
  "em": 21.28,
  "sufixo": "horas",
  "rotulo": "reaplicar a cada",
  "rotuloEm": 20.28
}
```

## 8. comparacao, de 21,95 s a 27,47 s

Fala: "num dia de 10 horas na rua isso dá cinco aplicações E tem gente que para na primeira."

```json
{
  "tipo": "comparacao",
  "de": 21.95,
  "ate": 27.47,
  "titulo": "Num dia de 10 horas",
  "escala": {
    "ate": 5,
    "passo": 1
  },
  "lados": [
    {
      "rotulo": "O indicado",
      "texto": "5 aplicações",
      "em": 23.97,
      "faixa": {
        "de": 0,
        "ate": 5,
        "em": 24.37,
        "emFim": 24.9
      }
    },
    {
      "rotulo": "Tem gente",
      "texto": "1 aplicação",
      "em": 25.81,
      "faixa": {
        "de": 0,
        "ate": 1,
        "em": 26.5,
        "emFim": 26.9
      },
      "textos": {
        "sobre": "para na primeira"
      }
    }
  ]
}
```

## 9. pergunta, de 27,47 s a 29,90 s

Fala: "E o FPS? Dermatologistas indicam,"

```json
{
  "tipo": "pergunta",
  "de": 27.47,
  "ate": 29.9,
  "texto": "E o FPS?",
  "em": 27.57
}
```

## 10. numero, de 29,90 s a 31,48 s

Fala: "no mínimo, 30."

```json
{
  "tipo": "numero",
  "de": 29.9,
  "ate": 31.48,
  "valor": 30,
  "em": 30.76,
  "prefixo": "FPS",
  "rotulo": "no mínimo",
  "rotuloEm": 30.08
}
```

## 11. passos, de 31,48 s a 34,90 s

Fala: "Então, quantidade, áreas e reaplicação."

```json
{
  "tipo": "passos",
  "de": 31.48,
  "ate": 34.9,
  "titulo": "Três erros",
  "itens": [
    {
      "texto": "Quantidade",
      "em": 31.96
    },
    {
      "texto": "Áreas",
      "em": 32.86
    },
    {
      "texto": "Reaplicação",
      "em": 33.12
    }
  ]
}
```

## 12. cta, de 34,90 s a 37,24 s

Fala: "Salva esse vídeo para lembrar amanhã cedo."

```json
{
  "tipo": "cta",
  "de": 34.9,
  "ate": 37.24,
  "texto": "Salva esse vídeo pra lembrar amanhã cedo",
  "icone": "salvar",
  "destaque": "Salva esse vídeo",
  "em": 34.96
}
```

## Créditos da prévia

Sem imagem de terceiro: tudo na tela (o rosto do mapa, réguas, fios e botões) é desenhado em vetor pelo próprio modelo. Fontes Bodoni Moda e Jost (Google Fonts, SIL Open Font License).

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra previa. Apresentador gravado em fundo verde, com o fundo trocado.
