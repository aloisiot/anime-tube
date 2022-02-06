/**
 * Divide uma lista de elementos em uma quantidade definida de sublistas
 * @param list Lista a ser dividida
 * @param qtdSubLists Quantidade de sublistas resultante
 * @returns Lista contendo as sublistas resultantes
 * 
 * Obs: Se a quantidade de sublistas for maior que metade do comprimento da lista,
 * entao o conterá uma quantidade de sublistas igual a metade do comprimento da lista;
 */
export default function splitList(list: any[], qtdSubLists: number) {
    var result: any = [[]];
    const max = Math.ceil(list.length / qtdSubLists)
    var subListIndex = 0;
  
    for (let i = 0; i < list.length; i++) {
      if (result[subListIndex] === undefined) {
        result[subListIndex] = [];
      }
  
      result[subListIndex].push(list[i]);
  
      if ((i + 1) % max === 0) {
        subListIndex = subListIndex + 1;
      }
    }
  
    return result;
}
