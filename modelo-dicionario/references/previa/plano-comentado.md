# Plano comentado da prévia, modelo-dicionario

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 2,90 s

Fala: "Três palavras do banco que enganam muita gente."

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 2.9,
  "texto": "palavras do banco",
  "em": 0.32,
  "destaque": "enganam",
  "subtitulo": "que enganam muita gente",
  "numero": {
    "texto": "3",
    "em": 0.01
  }
}
```

## 2. verbete, de 2,90 s a 10,96 s

Fala: "Primeira. Limite do cheque especial. Parece dinheiro seu guardado ali pra você usar. Na real, é um empréstimo, e o banco cobra juros sobre ele."

```json
{
  "tipo": "verbete",
  "de": 2.9,
  "ate": 10.96,
  "palavra": {
    "texto": "limite",
    "silabas": "li·mi·te",
    "em": 3.67
  },
  "classe": "s.m.",
  "parece": {
    "texto": "dinheiro seu",
    "glosa": "guardado pra usar",
    "em": 5.4,
    "riscaEm": 7.79
  },
  "significa": {
    "texto": "um empréstimo",
    "rotulo": "Na real",
    "em": 8.53,
    "viraEm": 8.15
  },
  "carimbo": {
    "em": 10.01
  }
}
```

## 3. verbete, de 10,96 s a 18,40 s

Fala: "Segunda, rotativo do cartão. Parece um alívio quando você paga só uma parte da fatura. Na verdade, é um dos juros mais caros do país."

```json
{
  "tipo": "verbete",
  "de": 10.96,
  "ate": 18.4,
  "palavra": {
    "texto": "rotativo",
    "silabas": "ro·ta·ti·vo",
    "em": 11.95
  },
  "parece": {
    "texto": "um alívio",
    "glosa": "pagar só uma parte",
    "em": 13.21,
    "riscaEm": 15.48
  },
  "significa": {
    "texto": "um dos juros mais caros",
    "rotulo": "Na verdade",
    "em": 16.57,
    "viraEm": 16.15
  },
  "carimbo": {
    "em": 17.55,
    "texto": "Cuidado"
  },
  "classe": "s.m."
}
```

## 4. remissao, de 18,40 s a 26,10 s

Fala: "E aquele dinheiro guardado pra um imprevisto, como se chama? Reserva de emergência. O ideal é juntar de 3 a 6 meses dos seus gastos."

```json
{
  "tipo": "remissao",
  "de": 18.4,
  "ate": 26.1,
  "palavra": {
    "texto": "reserva de emergência",
    "silabas": "re·ser·va de e·mer·gên·ci·a",
    "em": 21.41
  },
  "definicao": {
    "texto": "3 a 6 meses dos seus gastos",
    "em": 23.98
  },
  "rotulo": {
    "texto": "Dinheiro pra um imprevisto",
    "em": 18.66
  },
  "classe": "s.f."
}
```

## 5. destaque, de 26,10 s a 28,60 s

Fala: "num lugar que você consegue sacar no mesmo dia."

```json
{
  "tipo": "destaque",
  "de": 26.1,
  "ate": 28.6,
  "texto": "Sacar no mesmo dia",
  "em": 27.44,
  "nivel": "chave"
}
```

## 6. cta, de 28,60 s a 31,20 s

Fala: "Salva esse vídeo pra não cair nessa pegadinha."

```json
{
  "tipo": "cta",
  "de": 28.6,
  "ate": 31.2,
  "chamada": "Salva",
  "texto": "pra não cair nessa pegadinha",
  "destaque": "pegadinha",
  "icone": "salvar",
  "em": 28.63
}
```

## Créditos da prévia

Sem imagem de terceiro.

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde, com o fundo trocado.
