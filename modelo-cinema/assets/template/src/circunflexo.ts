// Cormorant Circunflexo: as letras â, ê e ô da Cormorant Garamond 4.001 (pesos 500, 600 e 700)
// com o circunflexo redesenhado, mais baixo, mais largo e centrado na letra. Larguras iguais às da
// Cormorant. Vem na frente da Cormorant na pilha da fonte e só vale pra essas três letras; o itálico
// continua inteiro na Cormorant. Gerado por script: não edite à mão. Sem import, pra rodar solto no Node.
//
// Copyright 2015 The Cormorant Project Authors (github.com/CatharsisFonts/Cormorant)
// Versão modificada (circunflexo de â, ê e ô redesenhado), com outro nome de família.
//
// This Font Software is licensed under the SIL Open Font License, Version 1.1.
// This license is copied below, and is also available with a FAQ at:
// https://openfontlicense.org
//
// -----------------------------------------------------------
// SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
// -----------------------------------------------------------
//
// PREAMBLE
// The goals of the Open Font License (OFL) are to stimulate worldwide
// development of collaborative font projects, to support the font creation
// efforts of academic and linguistic communities, and to provide a free and
// open framework in which fonts may be shared and improved in partnership
// with others.
//
// The OFL allows the licensed fonts to be used, studied, modified and
// redistributed freely as long as they are not sold by themselves. The
// fonts, including any derivative works, can be bundled, embedded,
// redistributed and/or sold with any software provided that any reserved
// names are not used by derivative works. The fonts and derivatives,
// however, cannot be released under any other type of license. The
// requirement for fonts to remain under this license does not apply
// to any document created using the fonts or their derivatives.
//
// DEFINITIONS
// "Font Software" refers to the set of files released by the Copyright
// Holder(s) under this license and clearly marked as such. This may
// include source files, build scripts and documentation.
//
// "Reserved Font Name" refers to any names specified as such after the
// copyright statement(s).
//
// "Original Version" refers to the collection of Font Software components as
// distributed by the Copyright Holder(s).
//
// "Modified Version" refers to any derivative made by adding to, deleting,
// or substituting -- in part or in whole -- any of the components of the
// Original Version, by changing formats or by porting the Font Software to a
// new environment.
//
// "Author" refers to any designer, engineer, programmer, technical
// writer or other person who contributed to the Font Software.
//
// PERMISSION & CONDITIONS
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of the Font Software, to use, study, copy, merge, embed, modify,
// redistribute, and sell modified and unmodified copies of the Font
// Software, subject to the following conditions:
//
// 1) Neither the Font Software nor any of its individual components,
// in Original or Modified Versions, may be sold by itself.
//
// 2) Original or Modified Versions of the Font Software may be bundled,
// redistributed and/or sold with any software, provided that each copy
// contains the above copyright notice and this license. These can be
// included either as stand-alone text files, human-readable headers or
// in the appropriate machine-readable metadata fields within text or
// binary files as long as those fields can be easily viewed by the user.
//
// 3) No Modified Version of the Font Software may use the Reserved Font
// Name(s) unless explicit written permission is granted by the corresponding
// Copyright Holder. This restriction only applies to the primary font name as
// presented to the users.
//
// 4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
// Software shall not be used to promote, endorse or advertise any
// Modified Version, except to acknowledge the contribution(s) of the
// Copyright Holder(s) and the Author(s) or with their explicit written
// permission.
//
// 5) The Font Software, modified or unmodified, in part or in whole,
// must be distributed entirely under this license, and must not be
// distributed under any other license. The requirement for fonts to
// remain under this license does not apply to any document created
// using the Font Software.
//
// TERMINATION
// This license becomes null and void if any of the above conditions are
// not met.
//
// DISCLAIMER
// THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
// OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
// COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
// DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
// OTHER DEALINGS IN THE FONT SOFTWARE.

export const FAMILIA_CIRCUNFLEXO = "Cormorant Circunflexo";
// só â, ê e ô; maiúsculas e o resto ficam na Cormorant
export const FAIXA_CIRCUNFLEXO = "U+00E2, U+00EA, U+00F4";
// No itálico a família só tem esta faixa vazia (uso privado): sem ela o navegador pegaria a face
// normal e inclinaria o â, o ê e o ô no meio do itálico de verdade da Cormorant.
export const FAIXA_ITALICO_VAZIA = "U+E000";
export const PESOS_CIRCUNFLEXO = ["500", "600", "700"] as const;

const DADOS: Record<(typeof PESOS_CIRCUNFLEXO)[number], string> = {
  "500": "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",
  "600": "AAEAAAANAIAAAwBQR0RFRgARAAQAAAhcAAAAFkdQT1NEdkx1AAAIdAAAACBHU1VCI34kjAAACJQAAAAwT1MvMmAQXB0AAAFYAAAAYGNtYXAA/QJBAAAByAAAAERnbHlmxgDJYAAAAhgAAALGaGVhZCl5IToAAADcAAAANmhoZWEFhAS9AAABFAAAACRobXR4Bx0AzgAAAbgAAAAQbG9jYQIJAXcAAAIMAAAACm1heHAADwBNAAABOAAAACBuYW1lTkloyQAABOAAAANccG9zdP+fADIAAAg8AAAAIAABAAAABABCpVE0Dl8PPPUAAwPoAAAAAOGGfhkAAAAA5vNgOgAh/u0BxALVAAAABgACAAAAAAAAAAEAAAOc/uEAAAH1ACH/+wHEA+gAAAAAAAAAAAAAAAAAAAAEAAEAAAAEAEwACgAAAAAAAQAAAAAAAAAAAAAAAAAAAAAABAIgAlgABQAAAooCWAAAAEsCigJYAAABXgAyAOgAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAATk9ORQDAAOIA9AOc/uEAAARJARsAAAABAAAAAAGCAnEAAAAgAAMB9QBeAeYAIQGkAC4BngAhAAAAAgAAAAMAAAAUAAMAAQAAABQABAAwAAAACAAIAAIAAADiAOoA9P//AAAA4gDqAPT///8g/xn/DQABAAAAAAAAAAAAAABiAKYBFQFjAAAACgBe/u0BmwLVAAMADwAVABkAIwApADUAOQA9AEgAAFMRIREDMxUjFTM1IzUzNSMHMzUjNSMXNTMVBzMVIxUzNTM1IxcjFTM1IwczNTMVIzUjFTM1IwMzNSMXNTMVBzMHFTM1IzczNSNeAT3zQUKmQkKlAaZCZCEhQkJCZEKmhoamIEQiImUhpmRCpqYhZYZGRqZlRSCm/u0D6PwYA4UmICAmIOgiRUUjI18kIkYhfSJjshgwUHFx/uJxUDAwWS8hIS8iAAMAIf/zAcQCjAAQAB4AKwAAVyImJjU0PgIzMhYWFRQGBicyNjU0JiYjIgYVFBYWExYGJycHBiY3NzYyF+s+WjIoQU0lP1ovPGIdLDAnPiUsMCQ/bQMMAlFRAQ0BUAEYAg06YTg0TDEYPF41PlwzFE1MRWI0SUlCZjoB0wECAllZAgIBrwMDAAADAC7/+AGpAowAJAA+AEsAAEUGIyImNTU0JiMiBgYHBgYjIiY1ND4CMzIWFRUUFjMyNzYWBwUiJjU0NjY3NxcHDgIVFBYzMjY3NxcHBgYTFgYnJwcGJjc3NjIXAT0EBRAgGRsZGwwBAxkXFxQpP0QaKTUUExAUBQQF/t0qKR42IWsDSQwcEyAUCRIMNgFHFyeuAgwCUFECDQJQARgCBgIuLLA/OB0lDRkaFQ4WKSATNDi0HyAJAgsCMigfHCMXDCgPHwQPGBQYHQUIJA8yEA8B4QECAllZAgIBrwMDAAADACH/9AGBAowAIQAlADIAAFciJiY1NDY2MzIWFRQGIyM2JiMiBhUUFhYzMjY3NhYHBgYDJzcVJxYGJycHBiY3NzYyF+U/WC06ZD87QgQHUgMhJi0zJEYzHyoYAgcCJEuzAd4MAgwCUFECDQJQARgCDDZZMjxgOjg7DRA6QlNFOlUwEQ0CCAMjHgEGEQQU3wECAllZAgIBrwMDAAAAAAAACABmAAMAAQQJAAAApAAAAAMAAQQJAAEAKgCkAAMAAQQJAAIADgDOAAMAAQQJAAQAMgDcAAMAAQQJAAUAYAEOAAMAAQQJAAYAMAFuAAMAAQQJAA0BIgGeAAMAAQQJAA4ANgLAAEMAbwBwAHkAcgBpAGcAaAB0ACAAMgAwADEANQAgAFQAaABlACAAQwBvAHIAbQBvAHIAYQBuAHQAIABQAHIAbwBqAGUAYwB0ACAAQQB1AHQAaABvAHIAcwAgACgAZwBpAHQAaAB1AGIALgBjAG8AbQAvAEMAYQB0AGgAYQByAHMAaQBzAEYAbwBuAHQAcwAvAEMAbwByAG0AbwByAGEAbgB0ACkAQwBvAHIAbQBvAHIAYQBuAHQAIABDAGkAcgBjAHUAbgBmAGwAZQB4AG8AUgBlAGcAdQBsAGEAcgBDAG8AcgBtAG8AcgBhAG4AdAAgAEMAaQByAGMAdQBuAGYAbABlAHgAbwAgADYAMAAwAFYAZQByAHMAaQBvAG4AIAA0AC4AMAAwADEAOwAgAGMAaQByAGMAdQBuAGYAbABlAHgAbwAgAG0AaQBuAHUAcwBjAHUAbABvACAAcgBlAGQAZQBzAGUAbgBoAGEAZABvAEMAbwByAG0AbwByAGEAbgB0AEMAaQByAGMAdQBuAGYAbABlAHgAbwAtADYAMAAwAFQAaABpAHMAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAaQBzACAAbABpAGMAZQBuAHMAZQBkACAAdQBuAGQAZQByACAAdABoAGUAIABTAEkATAAgAE8AcABlAG4AIABGAG8AbgB0ACAATABpAGMAZQBuAHMAZQAsACAAVgBlAHIAcwBpAG8AbgAgADEALgAxAC4AIABUAGgAaQBzACAAbABpAGMAZQBuAHMAZQAgAGkAcwAgAGEAdgBhAGkAbABhAGIAbABlACAAdwBpAHQAaAAgAGEAIABGAEEAUQAgAGEAdAA6ACAAaAB0AHQAcABzADoALwAvAG8AcABlAG4AZgBvAG4AdABsAGkAYwBlAG4AcwBlAC4AbwByAGcAaAB0AHQAcABzADoALwAvAG8AcABlAG4AZgBvAG4AdABsAGkAYwBlAG4AcwBlAC4AbwByAGcAAwAAAAAAAP+cADIAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAADAAAAAAAAAACAAEAAQADAAEAAAABAAAACgAcAB4AAURGTFQACAAEAAAAAP//AAAAAAAAAAEAAAAKACwALgADREZMVAAUY3lybAAebGF0bgAeAAQAAAAA//8AAAAAAAAAAAAA",
  "700": "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",
};

export const dadosCircunflexo = (peso: (typeof PESOS_CIRCUNFLEXO)[number]) => DADOS[peso];

export type FaceCircunflexo = { familia: string; fonte: string; peso: string; estilo: "normal" | "italic"; faixa: string };

export const facesCircunflexo = (): FaceCircunflexo[] =>
  PESOS_CIRCUNFLEXO.flatMap((peso) => {
    const fonte = `url(data:font/ttf;base64,${DADOS[peso]})`;
    return [
      { familia: FAMILIA_CIRCUNFLEXO, fonte, peso, estilo: "normal" as const, faixa: FAIXA_CIRCUNFLEXO },
      { familia: FAMILIA_CIRCUNFLEXO, fonte, peso, estilo: "italic" as const, faixa: FAIXA_ITALICO_VAZIA },
    ];
  });

// Cria cada face com o FontFace do navegador, entrega pro adicionar (document.fonts) e devolve a
// promessa de todas carregadas.
export const registrarCircunflexo = <F extends { load(): Promise<unknown> }>(
  adicionar: (face: F) => void,
  Face: new (familia: string, fonte: string, descritores: { weight: string; style: string; unicodeRange: string }) => F,
) =>
  Promise.all(
    facesCircunflexo().map((f) => {
      const face = new Face(f.familia, f.fonte, { weight: f.peso, style: f.estilo, unicodeRange: f.faixa });
      adicionar(face);
      return face.load();
    }),
  );
