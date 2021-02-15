export const searchedArray = (array = [], searchkey) => {
    if(!Array.isArray(array)){
        return new Error('Expected array!').message
    }
    if(!searchkey){
        return array;
    }

    const newReturnableArray = []

    const recursiveChecker = (value, index) => {
        if(Array.isArray(value)){
            value.filter(arr_value => {
                recursiveChecker(arr_value, index)
            })
        }
        if(typeof value === 'object' && !Array.isArray(value)){
            for(let obj_value in value){
                recursiveChecker(value[obj_value], index)
            }
        }
        if(typeof value == 'string' || typeof value == 'number'){
            if(String(value).toLowerCase().search(String(searchkey).toLowerCase()) !== -1){
                newReturnableArray.push(array[index])
            }
        }

    }

    array.filter((v, index )=> recursiveChecker(v, index))

    return [...new Set(newReturnableArray)]

}