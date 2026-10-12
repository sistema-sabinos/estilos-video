# Plano comentado da prévia, modelo-canal

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 2,71 s

Fala: "Qual microfone vale a pena para quem está começando um canal?"

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 2.71,
  "texto": "Qual microfone vale a pena pra quem tá começando?",
  "destaque": "vale a pena",
  "em": 0.16
}
```

## 2. numero, de 2,85 s a 4,71 s

Fala: "os três tipos mais comuns."

```json
{
  "tipo": "numero",
  "de": 2.85,
  "ate": 4.71,
  "valor": 3,
  "em": 3.14,
  "rotulo": "tipos mais comuns",
  "rotuloEm": 3.49,
  "titulo": "Separei"
}
```

## 3. reframe, de 4,71 s a 14,20 s

Fala: "O primeiro é o de lapela, que prende na roupa, pertinho da boca. O segundo é o USB, que liga direto no computador. E o terceiro é o sem fio, que deixa você andar enquanto grava."

```json
{
  "tipo": "reframe",
  "de": 4.71,
  "ate": 14.2,
  "titulo": "Os 3 tipos",
  "itens": [
    {
      "texto": "Lapela",
      "em": 5.69,
      "detalhe": "prende na roupa",
      "imagem": {
        "id": "mic-lapela"
      }
    },
    {
      "texto": "USB",
      "em": 9.1,
      "detalhe": "liga direto no computador",
      "imagem": {
        "id": "mic-usb"
      }
    },
    {
      "texto": "Sem fio",
      "em": 12.03,
      "detalhe": "deixa você andar",
      "imagem": {
        "id": "mic-sem-fio"
      }
    }
  ]
}
```

## 4. chamada, de 14,52 s a 16,64 s

Fala: "o final que eu falo qual deles encara barulho."

```json
{
  "tipo": "chamada",
  "de": 14.52,
  "ate": 16.64,
  "texto": "No final: qual encara barulho",
  "em": 14.56
}
```

## 5. capitulo, de 16,64 s a 18,90 s

Fala: "Agora, gravando na rua. com carro e gente"

```json
{
  "tipo": "capitulo",
  "de": 16.64,
  "ate": 18.9,
  "texto": "Gravando na rua",
  "em": 16.7
}
```

## 6. cena, de 17,50 s a 19,50 s

Fala: "rua. com carro e gente passando"

```json
{
  "tipo": "cena",
  "de": 17.5,
  "ate": 19.5,
  "em": 17.58,
  "imagem": {
    "id": "rua",
    "efeito": "aproximar"
  }
}
```

## 7. destaque, de 19,51 s a 20,95 s

Fala: "O que manda é a distância,"

```json
{
  "tipo": "destaque",
  "de": 19.51,
  "ate": 20.95,
  "texto": "A distância",
  "em": 20.13,
  "detalhe": "é o que manda",
  "detalheEm": 20.13
}
```

## 8. frase, de 21,00 s a 23,89 s

Fala: "quanto mais perto da boca, menos barulho em volta ele pega."

```json
{
  "tipo": "frase",
  "de": 21,
  "ate": 23.89,
  "texto": "Quanto mais perto da boca, menos barulho em volta",
  "destaque": "menos barulho",
  "em": 21
}
```

## 9. reframe, de 23,89 s a 26,91 s

Fala: "Por isso, fora de casa, o de lapela costuma sair na frente."

```json
{
  "tipo": "reframe",
  "de": 23.89,
  "ate": 26.91,
  "titulo": "Fora de casa",
  "numerar": false,
  "itens": [
    {
      "texto": "Lapela",
      "em": 25.35,
      "detalhe": "costuma sair na frente",
      "imagem": {
        "id": "mic-lapela"
      }
    }
  ]
}
```

## 10. inscricao, de 26,91 s a 29,64 s

Fala: "Se esse vídeo te ajudou, se inscreve no canal."

```json
{
  "tipo": "inscricao",
  "de": 26.91,
  "ate": 29.64,
  "texto": "Se inscreve no canal",
  "em": 27.83,
  "cliqueEm": 28.09
}
```

## Créditos da prévia

Sem imagem de terceiro. As 4 fotos (microfone de lapela, microfone USB, kit sem fio e a rua) são da biblioteca do próprio modelo (public/img do template), geradas pra ele sem marca e sem texto. Fontes Inter e DM Mono (Google Fonts, SIL Open Font License).

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra previa. Apresentador gravado em fundo verde, com o fundo trocado.
