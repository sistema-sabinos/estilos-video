# Plano comentado da prévia, modelo-ao-pe-da-letra

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 3,95 s

Fala: "Tem expressão em inglês que traduzida ao pé da letra vira piada."

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 3.95,
  "em": 0.24,
  "texto": "Expressão em inglês que, traduzida ao pé da letra, vira piada",
  "destaque": "ao pé da letra"
}
```

## 2. literal, de 3,95 s a 16,00 s

Fala: "Se alguém te diz, it's raining cats and dogs. ao pé da letra tá chovendo gato e cachorro. Só que não cai bicho nenhum do céu. Quer dizer que tá chovendo muito. Aqui no Brasil a gente diz que tá chovendo canivete. Agora,"

```json
{
  "tipo": "literal",
  "de": 3.95,
  "ate": 16,
  "legenda": true,
  "expressao": "raining cats and dogs",
  "expressaoEm": 5.04,
  "ao": {
    "texto": "chovendo gato e cachorro",
    "em": 7.45,
    "imagem": {
      "id": "gatocao"
    }
  },
  "carimboEm": 9.23,
  "quer": [
    {
      "texto": "chovendo muito",
      "em": 11.51,
      "imagem": {
        "id": "chuva"
      }
    },
    {
      "texto": "chovendo canivete",
      "em": 14.43,
      "rotulo": "aqui no Brasil",
      "certo": true,
      "imagem": {
        "id": "canivete"
      }
    }
  ]
}
```

## 3. literal, de 16,00 s a 24,48 s

Fala: "break a leg, ao pé da letra, é quebre a perna. Parece praga, mas é o contrário. Quer dizer, boa sorte, e se fala muito antes de alguém subir no palco."

```json
{
  "tipo": "literal",
  "de": 16,
  "ate": 24.48,
  "legenda": true,
  "expressao": "break a leg",
  "expressaoEm": 16.09,
  "ao": {
    "texto": "quebre a perna",
    "em": 17.87,
    "imagem": {
      "id": "perna"
    }
  },
  "carimboEm": 19.54,
  "quer": [
    {
      "texto": "boa sorte",
      "em": 21.54,
      "detalhe": "antes de subir no palco",
      "detalheEm": 23.01,
      "imagem": {
        "id": "palco"
      }
    }
  ]
}
```

## 4. frase, de 24,48 s a 28,38 s

Fala: "Então, antes de traduzir palavra por palavra, pensa no sentido."

```json
{
  "tipo": "frase",
  "de": 24.48,
  "ate": 28.38,
  "em": 24.53,
  "texto": "Então, antes de traduzir palavra por palavra, pensa no sentido.",
  "risco": "palavra por palavra",
  "riscoEm": 26.6,
  "destaque": "sentido."
}
```

## 5. cta, de 28,38 s a 31,44 s

Fala: "Comenta aqui uma expressão pra eu traduzir no próximo vídeo."

```json
{
  "tipo": "cta",
  "de": 28.38,
  "ate": 31.44,
  "em": 28.46,
  "texto": "Comenta aqui uma expressão pra eu traduzir",
  "icone": "comentar",
  "destaque": "expressão"
}
```

## Créditos da prévia

Imagens das fichas, todas do Wikimedia Commons, conferidas na API pelo autor original (foto própria do autor ou obra do governo dos EUA):

- Gato e cachorro: "Dog and cat, Arco, Madeira", Gerda Arendt, CC0, https://commons.wikimedia.org/wiki/File:Dog_and_cat,_Arco,_Madeira.jpg (recortada em volta dos bichos)
- Chuva: "Rain on car window (52353733013)", NPS Photo / Carmen Aurrecoechea (Joshua Tree National Park), domínio público, https://commons.wikimedia.org/wiki/File:Rain_on_car_window_(52353733013).jpg
- Canivete: "Flylock pocket knife with two blades", Junkyardsparkle, CC0, https://commons.wikimedia.org/wiki/File:Flylock_pocket_knife_with_two_blades.jpg
- Perna engessada: "Short leg cast red", Jonascumgi, CC0, https://commons.wikimedia.org/wiki/File:Short_leg_cast_red.jpg
- Palco: "Theater Show", Kurt Kaiser, CC0, https://commons.wikimedia.org/wiki/File:Theater_Show.jpg

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra previa. Apresentador gravado em fundo verde, com o fundo trocado.
