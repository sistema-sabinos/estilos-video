# Plano comentado da prévia, modelo-autoridade

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,12 s a 3,30 s

Fala: "Te cobraram uma conta que você não devia e você pagou."

```json
{
  "tipo": "abertura",
  "de": 0.12,
  "ate": 3.3,
  "rotulo": "Direito do consumidor",
  "texto": "Te cobraram uma conta que você não devia?",
  "destaque": "não devia?",
  "em": 0.17
}
```

## 2. destaque, de 3,30 s a 5,15 s

Fala: "Dá pra pedir de volta."

```json
{
  "tipo": "destaque",
  "de": 3.3,
  "ate": 5.15,
  "texto": "Dá pra pedir de volta",
  "em": 3.89,
  "nivel": "chave"
}
```

## 3. citacao, de 5,15 s a 12,05 s

Fala: "O Código de Defesa do Consumidor, no artigo 42, diz que quem é cobrado em quantia indevida tem direito à devolução"

```json
{
  "tipo": "citacao",
  "de": 5.15,
  "ate": 12.05,
  "fonte": "Código de Defesa do Consumidor",
  "titulo": "Art. 42",
  "em": 7.17,
  "texto": "Quem é cobrado em quantia indevida tem direito à devolução em dobro do que pagou a mais, com correção e juros.",
  "grifo": "devolução em dobro",
  "grifoEm": 11.44
}
```

## 4. numero, de 12,05 s a 15,37 s

Fala: "em dobro do que pagou a mais, com correção e juros."

```json
{
  "tipo": "numero",
  "de": 12.05,
  "ate": 15.37,
  "valor": 2,
  "sufixo": "x",
  "em": 12.23,
  "rotulo": "do que pagou a mais",
  "rotuloEm": 12.53,
  "marcadores": 2,
  "legenda": true
}
```

## 5. definicao, de 16,40 s a 20,23 s

Fala: "repetição do indébito, a devolução do que você pagou sem dever."

```json
{
  "tipo": "definicao",
  "de": 16.4,
  "ate": 20.23,
  "termo": "Repetição do indébito",
  "em": 16.47,
  "significado": "A devolução do que você pagou sem dever",
  "significadoEm": 18.25
}
```

## 6. destaque, de 20,23 s a 23,35 s

Fala: "Só tem uma exceção. o engano justificável."

```json
{
  "tipo": "destaque",
  "de": 20.23,
  "ate": 23.35,
  "texto": "Só tem uma exceção",
  "em": 20.28,
  "nivel": "alerta",
  "detalhe": "o engano justificável",
  "detalheEm": 21.54
}
```

## 7. contraste, de 23,35 s a 26,19 s

Fala: "E aí, você vai reclamar no grito ou com prova?"

```json
{
  "tipo": "contraste",
  "de": 23.35,
  "ate": 26.19,
  "pergunta": "Como você vai reclamar?",
  "conector": "ou",
  "opcoes": [
    {
      "texto": "No grito",
      "em": 24.69
    },
    {
      "texto": "Com prova",
      "em": 25.35
    }
  ]
}
```

## 8. lista, de 26,19 s a 33,20 s

Fala: "Faz assim: Primeiro, junta o comprovante do pagamento. Depois, pede o estorno por escrito e anota o protocolo."

```json
{
  "tipo": "lista",
  "de": 26.19,
  "ate": 33.2,
  "rotulo": "Faz assim",
  "itens": [
    {
      "texto": "Junta o comprovante",
      "em": 27.06,
      "icone": "documento"
    },
    {
      "texto": "Pede o estorno por escrito",
      "em": 29.09,
      "icone": "retorno"
    },
    {
      "texto": "Anota o protocolo",
      "em": 31.52,
      "icone": "check"
    }
  ]
}
```

## 9. frase, de 33,20 s a 35,98 s

Fala: "Se não resolver, procura o Procon ou o juizado."

```json
{
  "tipo": "frase",
  "de": 33.2,
  "ate": 35.98,
  "texto": "Se não resolver, procura o Procon ou o juizado",
  "destaque": "Procon ou o juizado",
  "em": 33.25
}
```

## 10. cta, de 35,98 s a 38,04 s

Fala: "Salva esse vídeo pra não esquecer."

```json
{
  "tipo": "cta",
  "de": 35.98,
  "ate": 38.04,
  "texto": "Salva esse vídeo",
  "destaque": "Salva",
  "icone": "salvar",
  "em": 36.04
}
```

## Créditos da prévia

Sem imagem de terceiro: tudo na tela é desenhado em vetor pelo próprio modelo. Fontes Instrument Serif e Inter (Google Fonts, SIL Open Font License). O texto do cartão é um resumo do artigo 42, parágrafo único, do Código de Defesa do Consumidor (Lei 8.078/1990), dito na fala.

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra previa. Apresentador gravado em fundo verde, com o fundo trocado.
