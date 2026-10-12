# Plano comentado da prévia, modelo-demo

Cada momento da prévia com a fala que caiu nele e o JSON exato do `src/plano.json` que gerou o efeito. O assunto é só exemplo: copie o estilo, não o assunto.

## 1. abertura, de 0,00 s a 3,71 s

Fala: "A memória do teu negócio inteiro cabe numa pasta só e eu vou te"

```json
{
  "tipo": "abertura",
  "de": 0,
  "ate": 3.71,
  "texto": "Seu negócio numa pasta só",
  "legenda": true
}
```

## 2. tela, de 0,00 s a 2,64 s

Fala: "A memória do teu negócio inteiro cabe numa"

```json
{
  "tipo": "tela",
  "de": 0,
  "ate": 2.64,
  "layout": "split",
  "captura": "kit",
  "proporcao": 3.125,
  "ini": {
    "x": 0.85,
    "y": 0.08,
    "zoom": 1.3
  },
  "fim": {
    "x": 0.85,
    "y": 0.08,
    "zoom": 1.45
  },
  "legenda": true,
  "cursor": [
    {
      "x": 0.765,
      "y": 0.0885,
      "em": 0.93
    }
  ]
}
```

## 3. imagem, de 2,64 s a 3,71 s

Fala: "pasta só e eu vou te"

```json
{
  "tipo": "imagem",
  "de": 2.64,
  "ate": 3.71,
  "imagem": {
    "id": "pasta"
  },
  "efeito": "aproximar",
  "legenda": true
}
```

## 4. tela, de 3,71 s a 11,05 s

Fala: "mostrar onde ela fica. Esse é o repositório do SabinOS no GitHub. Aqui em cima tem a descrição, sistema de trabalho com IA pro seu negócio."

```json
{
  "tipo": "tela",
  "de": 3.71,
  "ate": 11.05,
  "layout": "split",
  "captura": "kit",
  "proporcao": 3.125,
  "ini": {
    "x": 0.4,
    "y": 0.08,
    "zoom": 1.3
  },
  "fim": {
    "x": 0.85,
    "y": 0.085,
    "zoom": 1.6
  },
  "cursor": [
    {
      "x": 0.06,
      "y": 0.052,
      "em": 5.11
    },
    {
      "x": 0.765,
      "y": 0.0885,
      "em": 8.17
    },
    {
      "x": 0.85,
      "y": 0.0885,
      "em": 10.24
    }
  ]
}
```

## 5. tela, de 11,05 s a 16,56 s

Fala: "Descendo um pouco, tem o passo a passo de como instalar, tudo numerado. Pra baixar, é só clicar nesse botão verde."

```json
{
  "tipo": "tela",
  "de": 11.05,
  "ate": 16.56,
  "layout": "cheio",
  "captura": "kit",
  "proporcao": 3.125,
  "ini": {
    "x": 0.42,
    "y": 0.36,
    "zoom": 1.25
  },
  "fim": {
    "x": 0.45,
    "y": 0.2,
    "zoom": 1.4
  },
  "cursor": [
    {
      "x": 0.109,
      "y": 0.2995,
      "em": 11.05
    },
    {
      "x": 0.1,
      "y": 0.312,
      "em": 12.23
    },
    {
      "x": 0.1,
      "y": 0.4145,
      "em": 13.84
    },
    {
      "x": 0.68,
      "y": 0.07,
      "em": 15.87,
      "clique": true
    }
  ]
}
```

## 6. tela, de 16,56 s a 25,83 s

Fala: "Agora o catálogo de estilos de vídeo. São mais de 70 pastas, uma por estilo. E cada uma edita o teu vídeo de um jeito diferente. Esse aqui que você está vendo é o estilo demo."

```json
{
  "tipo": "tela",
  "de": 16.56,
  "ate": 25.83,
  "layout": "split",
  "captura": "estilos",
  "proporcao": 3.096,
  "ini": {
    "x": 0.4,
    "y": 0.08,
    "zoom": 1.3
  },
  "fim": {
    "x": 0.31,
    "y": 0.315,
    "zoom": 1.6
  },
  "cursor": [
    {
      "x": 0.094,
      "y": 0.052,
      "em": 16.7
    },
    {
      "x": 0.1,
      "y": 0.098,
      "em": 18.45
    },
    {
      "x": 0.1,
      "y": 0.15,
      "em": 19.6
    },
    {
      "x": 0.1,
      "y": 0.22,
      "em": 21.56
    },
    {
      "x": 0.1,
      "y": 0.315,
      "em": 24.94
    },
    {
      "x": 0.1,
      "y": 0.315,
      "em": 25.49,
      "clique": true
    },
    {
      "x": 0.1,
      "y": 0.315,
      "em": 25.86
    }
  ]
}
```

## 7. cta, de 25,83 s a 30,72 s

Fala: "E quando sai versão nova, você atualiza com um comando só. Comenta "Sistema" que eu te mando o link."

```json
{
  "tipo": "cta",
  "de": 25.83,
  "ate": 30.72,
  "layout": "eu",
  "texto": "Comenta Sistema",
  "icone": "comentar",
  "legenda": true
}
```

## Créditos da prévia

- Telas: capturas das páginas públicas do próprio SabinOS no GitHub, https://github.com/sistema-sabinos/kit e https://github.com/sistema-sabinos/estilos-video.
- Pasta: "Folder-front-color", Vijay Verma, CC0 (Wikimedia Commons), https://commons.wikimedia.org/wiki/File:Folder-front-color.png

Voz gerada por IA (Gemini TTS) a partir de um roteiro escrito pra prévia. Apresentador gravado em fundo verde.
