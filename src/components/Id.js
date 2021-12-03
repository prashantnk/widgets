// let currId = 0;

// const Id = () => {
//     return currId++;
// }
// export default Id;
const useId = () => {
    let id = 0;
    const getId = () => {
        console.log(id);
        return id++;
    }
    return getId;
}

export default useId;