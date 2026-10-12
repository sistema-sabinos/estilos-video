# Plano comentado da prévia, modelo-tela-viva

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 5,04 s

Fala: "Olha isso aqui. É insano. Esse é o SabinOS, um sistema de trabalho com IA pro teu"

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 5.04,
  "texto": "SabinOS no GitHub",
  "legenda": true
}
```

## 2. tela, de 0,00 s a 9,23 s

Fala: "Olha isso aqui. É insano. Esse é o SabinOS, um sistema de trabalho com IA pro teu negócio, e ele mora inteiro no GitHub. Aqui em cima tá a descrição."

```json
{
  "tipo": "tela",
  "de": 0,
  "ate": 9.23,
  "legenda": true,
  "captura": "kit",
  "proporcao": 3.0035,
  "ini": {
    "x": 0.5,
    "y": 0.095,
    "zoom": 1
  },
  "fim": {
    "x": 0.74,
    "y": 0.059,
    "zoom": 2.3
  },
  "cursor": [
    {
      "x": 0.098,
      "y": 0.0332,
      "em": 0.69
    },
    {
      "x": 0.728,
      "y": 0.0576,
      "em": 2.35,
      "clique": true
    },
    {
      "x": 0.781,
      "y": 0.0662,
      "em": 5.04
    },
    {
      "x": 0.819,
      "y": 0.0326,
      "em": 6.99,
      "clique": true
    },
    {
      "x": 0.731,
      "y": 0.06,
      "em": 8.27,
      "clique": true
    }
  ]
}
```

## 3. tela, de 9,23 s a 14,17 s

Fala: "Descendo, tem o como instalar em 6 passos numerados, um embaixo do outro."

```json
{
  "tipo": "tela",
  "de": 9.23,
  "ate": 14.17,
  "legenda": true,
  "captura": "kit",
  "proporcao": 3.0035,
  "ini": {
    "x": 0.32,
    "y": 0.2573,
    "zoom": 1.7
  },
  "fim": {
    "x": 0.32,
    "y": 0.3387,
    "zoom": 2
  },
  "cursor": [
    {
      "x": 0.2,
      "y": 0.237,
      "em": 9.23
    },
    {
      "x": 0.153,
      "y": 0.2594,
      "em": 10.63,
      "clique": true
    },
    {
      "x": 0.097,
      "y": 0.2716,
      "em": 11.5
    },
    {
      "x": 0.13,
      "y": 0.3458,
      "em": 13.05
    },
    {
      "x": 0.13,
      "y": 0.3733,
      "em": 13.76
    }
  ]
}
```

## 4. tela, de 14,17 s a 19,02 s

Fala: "Pra baixar, é só clicar nesse botão verde. Agora, nesse aqui é que fica bom."

```json
{
  "tipo": "tela",
  "de": 14.17,
  "ate": 19.02,
  "legenda": true,
  "captura": "kit",
  "proporcao": 3.0035,
  "ini": {
    "x": 0.6,
    "y": 0.0539,
    "zoom": 1.3
  },
  "fim": {
    "x": 0.66,
    "y": 0.0498,
    "zoom": 2.2
  },
  "cursor": [
    {
      "x": 0.58,
      "y": 0.064,
      "em": 14.21
    },
    {
      "x": 0.656,
      "y": 0.0498,
      "em": 15.78,
      "clique": true
    },
    {
      "x": 0.69,
      "y": 0.052,
      "em": 17.51
    }
  ]
}
```

## 5. tela, de 19,02 s a 20,84 s

Fala: "é o catálogo de estilos de vídeo"

```json
{
  "tipo": "tela",
  "de": 19.02,
  "ate": 20.84,
  "legenda": true,
  "captura": "estilos",
  "proporcao": 2.7,
  "ini": {
    "x": 0.5,
    "y": 0.0826,
    "zoom": 1
  },
  "fim": {
    "x": 0.32,
    "y": 0.12,
    "zoom": 1.7
  },
  "cursor": [
    {
      "x": 0.102,
      "y": 0.0369,
      "em": 19.08,
      "clique": true
    },
    {
      "x": 0.105,
      "y": 0.0829,
      "em": 20.46
    }
  ]
}
```

## 6. numero, de 20,84 s a 23,85 s

Fala: "São 79 estilos, uma pasta pra cada um."

```json
{
  "tipo": "numero",
  "de": 20.84,
  "ate": 23.85,
  "valor": 79,
  "em": 21.08,
  "titulo": "estilos de vídeo",
  "rotulo": "uma pasta pra cada um",
  "rotuloEm": 22.43
}
```

## 7. tela, de 23,85 s a 29,23 s

Fala: "E esse que você tá vendo agora é o Tela Viva. Perto disso, editar tudo na mão parece coisa de outro século."

```json
{
  "tipo": "tela",
  "de": 23.85,
  "ate": 29.23,
  "legenda": true,
  "captura": "estilos",
  "proporcao": 2.7,
  "ini": {
    "x": 0.35,
    "y": 0.735,
    "zoom": 1.5
  },
  "fim": {
    "x": 0.24,
    "y": 0.8063,
    "zoom": 2.4
  },
  "cursor": [
    {
      "x": 0.12,
      "y": 0.784,
      "em": 24.51
    },
    {
      "x": 0.094,
      "y": 0.8095,
      "em": 25.35,
      "clique": true
    },
    {
      "x": 0.2,
      "y": 0.812,
      "em": 27.41
    }
  ]
}
```

## 8. tela, de 29,23 s a 33,32 s

Fala: "Qual estilo você quer ver primeiro? Comenta aqui e dá dois toques na tela."

```json
{
  "tipo": "tela",
  "de": 29.23,
  "ate": 33.32,
  "legenda": true,
  "captura": "estilos",
  "proporcao": 2.7,
  "ini": {
    "x": 0.4,
    "y": 0.56,
    "zoom": 1.3
  },
  "fim": {
    "x": 0.3,
    "y": 0.45,
    "zoom": 1.9
  },
  "cursor": [
    {
      "x": 0.094,
      "y": 0.5994,
      "em": 29.25
    },
    {
      "x": 0.094,
      "y": 0.5572,
      "em": 30.13
    },
    {
      "x": 0.094,
      "y": 0.5044,
      "em": 31.33,
      "clique": true
    }
  ]
}
```

## Créditos da prévia

Sem imagem de terceiro. As duas telas são capturas das páginas do próprio SabinOS no GitHub, feitas com o `ferramentas/capturar.mjs` do template em 2026-10-12 (com `--esperar 9`, lista carregada, e a barra de navegação do GitHub recortada do topo):

- Repositório do kit: "sistema-sabinos/kit", SabinOS, https://github.com/sistema-sabinos/kit
- Catálogo de estilos: "sistema-sabinos/estilos-video", SabinOS, https://github.com/sistema-sabinos/estilos-video

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde, com o fundo trocado.
