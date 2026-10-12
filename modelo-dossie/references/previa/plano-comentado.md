# Plano comentado da prévia, modelo-dossie

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 3,30 s

Fala: "Esse é o dossiê do golpe da tarefa paga."

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 3.3,
  "texto": "Golpe da tarefa paga",
  "destaque": "tarefa paga",
  "em": 1.35,
  "abreEm": 0.31,
  "carimboEm": 2.37
}
```

## 2. quadro, de 3,30 s a 23,90 s

Fala: "Começa com uma mensagem de um número que você não conhece. Ganhe dinheiro só curtindo vídeos. Você curte, manda o print e cai uma graninha na conta. Parece real. No outro dia, te colocam num grupo cheio de gente comemorando. Aí vem a tarefa especial. Deposita um valor pra ganhar o dobro. Você deposita, e o saque trava. Pra liberar, pedem mais uma taxa."

```json
{
  "tipo": "quadro",
  "de": 3.3,
  "ate": 23.9,
  "legenda": true,
  "evidencias": [
    {
      "em": 3.91,
      "forma": "ficha",
      "titulo": "Uma mensagem",
      "campos": [
        {
          "rotulo": "Número",
          "tarja": true,
          "em": 4.63
        },
        {
          "rotulo": "Remetente",
          "valor": "Você não conhece",
          "em": 5.43
        }
      ]
    },
    {
      "em": 6.3,
      "forma": "mensagem",
      "titulo": "Número desconhecido",
      "icone": "pessoa",
      "texto": "Ganhe dinheiro só curtindo vídeos.",
      "destaque": "só curtindo vídeos",
      "destaqueEm": 6.94
    },
    {
      "em": 10.16,
      "forma": "alerta",
      "titulo": "Na sua conta",
      "texto": "Caiu uma graninha",
      "textoEm": 10.4
    },
    {
      "em": 14.55,
      "forma": "ficha",
      "titulo": "Grupo cheio de gente",
      "campos": [
        {
          "rotulo": "Gente",
          "valor": "Comemorando",
          "em": 15.59
        }
      ]
    },
    {
      "em": 16.72,
      "forma": "ficha",
      "titulo": "Tarefa especial",
      "campos": [
        {
          "rotulo": "Depósito",
          "tarja": true,
          "em": 18.39
        },
        {
          "rotulo": "Promessa",
          "valor": "O dobro",
          "em": 19.8
        }
      ]
    },
    {
      "em": 21.34,
      "forma": "alerta",
      "titulo": "Saque travado",
      "texto": "Pra liberar, mais uma taxa",
      "textoEm": 22.14
    }
  ]
}
```

## 3. destaque, de 24,38 s a 27,25 s

Fala: "E o dinheiro nunca volta. Anota a regra."

```json
{
  "tipo": "destaque",
  "de": 24.38,
  "ate": 27.25,
  "texto": "O dinheiro nunca volta",
  "em": 24.51,
  "nivel": "alerta"
}
```

## 4. frase, de 27,25 s a 29,60 s

Fala: "Trabalho de verdade não cobra pra você trabalhar."

```json
{
  "tipo": "frase",
  "de": 27.25,
  "ate": 29.6,
  "texto": "Trabalho de verdade não cobra pra você trabalhar.",
  "destaque": "não cobra",
  "em": 27.25
}
```

## 5. cta, de 29,95 s a 32,96 s

Fala: "Salva esse caso e manda pra quem tá procurando renda extra."

```json
{
  "tipo": "cta",
  "de": 29.95,
  "ate": 32.96,
  "texto": "Manda pra quem procura renda extra",
  "destaque": "renda extra",
  "icone": "salvar",
  "em": 29.95,
  "carimboEm": 31.61
}
```

## Créditos da prévia

Sem imagem de terceiro: as provas (fichas, print de conversa, notificações, recorte, pasta e carimbos) são desenhadas pelo próprio modelo. Texturas e sons vêm da biblioteca do template. Fontes Sora, Special Elite e Permanent Marker (Google Fonts, SIL Open Font License e Apache 2.0).

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde, com o fundo trocado.
