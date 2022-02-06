export default function splitList(data: any[], numCols: number): any | null{
    const columns: any = []
    if(numCols > 0 && numCols <= data.length) {
        let col: any = []
        let count = 0
        
        data.forEach((d, i) => {
            col.push(d)
            if(count < (data.length / numCols) - 1){
                count++
            } else if(i < data.length - 1){
                columns.push(col)
                col = []
                count = 0
            } else {
                columns.push(col)
            }
        })
    }
    return columns
}