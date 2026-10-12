# Plano comentado da prévia, modelo-balcao

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 1,40 s

Fala: "Aqui na Zabinno chegou a"

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 1.4,
  "texto": "Aqui na Zabinno",
  "destaque": "Zabinno",
  "em": 0.2,
  "cena": {
    "expositor": "presente",
    "itens": [
      "flor",
      "sacola",
      "flor"
    ],
    "placa": "Aberto"
  }
}
```

## 2. abertura, de 1,40 s a 4,19 s

Fala: "luminária solar retrô pra sua parede."

```json
{
  "tipo": "abertura",
  "de": 1.4,
  "ate": 4.19,
  "texto": "Luminária solar retrô",
  "destaque": "solar retrô",
  "em": 1.4
}
```

## 3. vitrine, de 4,19 s a 9,06 s

Fala: "Ela tem filamento à mostra no vidro, luz quente, âmbar, clima de vela acesa"

```json
{
  "tipo": "vitrine",
  "de": 4.19,
  "ate": 9.06,
  "itens": [
    {
      "texto": "Filamento à mostra",
      "em": 4.46,
      "imagem": {
        "id": "filamento"
      }
    },
    {
      "texto": "Luz quente âmbar",
      "em": 6.24,
      "imagem": {
        "id": "luz-quente"
      }
    },
    {
      "texto": "Clima de vela",
      "em": 7.69,
      "imagem": {
        "id": "vela"
      }
    }
  ]
}
```

## 4. definicao, de 9,24 s a 13,06 s

Fala: "e sensor de presença, que acende sozinha quando alguém se aproxima à noite."

```json
{
  "tipo": "definicao",
  "de": 9.24,
  "ate": 13.06,
  "termo": "Sensor de presença",
  "em": 9.27,
  "significado": "Acende sozinha quando alguém se aproxima à noite",
  "significadoEm": 10.83
}
```

## 5. combo, de 13,27 s a 16,95 s

Fala: "isso sem fio, sem tomada e cem por cento solar."

```json
{
  "tipo": "combo",
  "de": 13.27,
  "ate": 16.95,
  "texto": "Sem fio, sem tomada",
  "em": 13.62,
  "valor": "100% solar",
  "valorEm": 15.29
}
```

## 6. passos, de 16,95 s a 22,45 s

Fala: "A placa carrega de dia, a bateria já vem inclusa e, quando escurece, ela trabalha sozinha."

```json
{
  "tipo": "passos",
  "de": 16.95,
  "ate": 22.45,
  "itens": [
    {
      "texto": "A placa carrega de dia",
      "em": 17.09
    },
    {
      "texto": "Bateria já vem inclusa",
      "em": 18.56
    },
    {
      "texto": "Quando escurece, trabalha sozinha",
      "em": 20.2
    }
  ]
}
```

## 7. destaque, de 22,45 s a 25,10 s

Fala: "É à prova d'água, encara sol e chuva o ano todo"

```json
{
  "tipo": "destaque",
  "de": 22.45,
  "ate": 25.1,
  "texto": "À prova d'água",
  "em": 22.57,
  "nivel": "chave",
  "detalhe": "Encara sol e chuva o ano todo",
  "detalheEm": 23.58
}
```

## 8. frase, de 25,10 s a 28,25 s

Fala: "e vem na cor preta, que combina com qualquer fachada."

```json
{
  "tipo": "frase",
  "de": 25.1,
  "ate": 28.25,
  "texto": "Na cor preta, combina com qualquer fachada",
  "destaque": "qualquer fachada",
  "em": 25.67
}
```

## 9. destaque, de 28,25 s a 30,20 s

Fala: "Só uma dica: instala onde pega de"

```json
{
  "tipo": "destaque",
  "de": 28.25,
  "ate": 30.2,
  "texto": "Só uma dica",
  "em": 28.3,
  "nivel": "alerta",
  "detalhe": "Instala onde pega",
  "detalheEm": 29.08
}
```

## 10. destaque, de 30,20 s a 32,42 s

Fala: "seis a oito horas de sol direto."

```json
{
  "tipo": "destaque",
  "de": 30.2,
  "ate": 32.42,
  "texto": "6 a 8 horas",
  "em": 30.25,
  "nivel": "chave",
  "detalhe": "de sol direto",
  "detalheEm": 31.29
}
```

## 11. cta, de 32,42 s a 35,12 s

Fala: "Gostou? Toca no link e garante a sua."

```json
{
  "tipo": "cta",
  "de": 32.42,
  "ate": 35.12,
  "texto": "Gostou? Toca no link",
  "destaque": "link",
  "em": 32.52,
  "icone": "link",
  "pedido": true
}
```

## Créditos da prévia

Sem imagem de terceiro. As três fotos da luminária são do próprio produto da Zabinno (luminária solar retrô), fornecidas pelo Sabino; a foto de fundo branco foi recortada em PNG transparente pra prévia. O resto da tela é desenhado em vetor pelo próprio modelo. Fontes Plus Jakarta Sans e Fraunces (Google Fonts, SIL Open Font License).

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde, com o fundo trocado.
