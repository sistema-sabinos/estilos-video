# Plano comentado da prévia, modelo-quiz

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 2,40 s

Fala: "Essa pergunta derruba muita gente."

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 2.4,
  "em": 0.18,
  "texto": "Essa pergunta derruba muita gente",
  "destaque": "derruba"
}
```

## 2. quiz, de 2,40 s a 14,55 s

Fala: "qual é o planeta mais quente do Sistema Solar? A, Mercúrio. B, Vênus. C, Marte. D, Júpiter. Três… dois… um… É Vênus!"

```json
{
  "tipo": "quiz",
  "de": 2.4,
  "ate": 14.55,
  "em": 2.49,
  "texto": "Qual é o planeta mais quente do Sistema Solar?",
  "opcoes": [
    {
      "texto": "Mercúrio",
      "em": 4.94,
      "textoEm": 5.42,
      "imagem": {
        "id": "mercurio"
      }
    },
    {
      "texto": "Vênus",
      "em": 6.41,
      "textoEm": 6.98,
      "imagem": {
        "id": "venus"
      }
    },
    {
      "texto": "Marte",
      "em": 7.86,
      "textoEm": 8.5,
      "imagem": {
        "id": "marte"
      }
    },
    {
      "texto": "Júpiter",
      "em": 9.38,
      "textoEm": 9.93,
      "imagem": {
        "id": "jupiter"
      }
    }
  ],
  "contagem": [
    {
      "numero": 3,
      "em": 10.61
    },
    {
      "numero": 2,
      "em": 11.64
    },
    {
      "numero": 1,
      "em": 12.7
    }
  ],
  "certa": 1,
  "revelaEm": 13.82
}
```

## 3. fato, de 14,55 s a 23,30 s

Fala: "Mercúrio fica mais perto do Sol, mas Vênus tem uma atmosfera grossa de gás carbônico que prende o calor. E a superfície passa dos 460 graus."

```json
{
  "tipo": "fato",
  "de": 14.55,
  "ate": 23.3,
  "em": 14.65,
  "texto": "Mercúrio fica mais perto, mas Vênus prende o calor",
  "detalhe": "Atmosfera grossa de gás carbônico",
  "detalheEm": 17.22,
  "destaque": "460 graus",
  "destaqueEm": 21.7
}
```

## 4. revelacao, de 23,30 s a 28,32 s

Fala: "E tem mais, adivinha quanto dura um dia lá? Mais que o ano inteiro de Vênus."

```json
{
  "tipo": "revelacao",
  "de": 23.3,
  "ate": 28.32,
  "em": 24.88,
  "texto": "Quanto dura um dia em Vênus?",
  "resposta": "Mais que o ano",
  "revelaEm": 26.31
}
```

## 5. comparacao, de 28,32 s a 32,14 s

Fala: "Ele leva mais tempo para girar em volta de si mesmo do que para dar a volta no Sol."

```json
{
  "tipo": "comparacao",
  "de": 28.32,
  "ate": 32.14,
  "titulo": "Leva mais tempo para…",
  "lados": [
    {
      "rotulo": "Dia",
      "texto": "Girar em volta de si mesmo",
      "em": 29.56
    },
    {
      "rotulo": "Ano",
      "texto": "Dar a volta no Sol",
      "em": 31.31
    }
  ],
  "vencedor": 0,
  "vencedorEm": 31.83
}
```

## 6. cta, de 32,14 s a 34,36 s

Fala: "Comenta aqui se você acertou de primeira."

```json
{
  "tipo": "cta",
  "de": 32.14,
  "ate": 34.36,
  "em": 32.14,
  "texto": "Comenta se acertou de primeira",
  "icone": "comentar"
}
```

## Créditos da prévia

Planetas, todos NASA em domínio público (Wikimedia Commons), recortados em PNG transparente pra prévia:

- Mercúrio: "Mercury Globe-MESSENGER mosaic centered at 0degN-0degE", NASA/JHUAPL, https://commons.wikimedia.org/wiki/File:Mercury_Globe-MESSENGER_mosaic_centered_at_0degN-0degE.jpg
- Vênus: "Venus globe", NASA/JPL, https://commons.wikimedia.org/wiki/File:Venus_globe.jpg
- Marte: "Mars Rotate (True Color)", NASA, https://commons.wikimedia.org/wiki/File:Mars_Rotate_(True_Color).jpg
- Júpiter: "Jupiter in true color", NASA, https://commons.wikimedia.org/wiki/File:Jupiter_in_true_color.jpg

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde, com o fundo trocado.
