function strCount(str:string, sub:string): number{
    let index: number = 0
    let result: number = 0
    let lensub: number = lenSub(sub)

    function count(str: string, index: number, result: number, lensub: number, sub:string): number{
        if (str[index] === undefined) return result
        if (StringLenSub(str, index, lensub) === sub) {
            result++
            index += lensub
        }else {
            index += 1
        }
        
        return count(str, index, result, lensub, sub)
    }
    
    return count(str, index, result, lensub, sub)
  
}

function lenSub(str: string): number {
    let index: number = 0

    function countlen(str: string, index: number): number {
        if (str[index] === undefined) return index
        index++
        return countlen(str, index)
    }
    return countlen(str, index)
}

function StringLenSub(str: string, index: number, lenSub: number): string {
    let result: string = ""
    function add(str:string, index:number, lenSub: number, result:string): string {
        if (lenSub === 0) return result
        result += str[index]
        index++
        lenSub--
        return add(str, index, lenSub, result)
    }

    return add(str, index, lenSub, result)
}

console.log(strCount("xxxx234434xxxx12xxx", "xxx"))