export function removeLastFromArray(arr: any[]) {
    const newArr = [...arr];
    newArr.pop();
    return newArr;
}
