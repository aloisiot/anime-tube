/**
 * Reduz uma string a uma quantidade especificada de caracters
 * @param text String a ser resumido
 * @param length Comprimento da nova string resumida
 * @returns String reduzida
 */
export default function resumeText(text: string, length: number): string {
    return text.slice(0, length)
}