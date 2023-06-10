const cloneArray = require("../main/cloneArray")
    

test("test property of clone array" , () => {
    const array = [1,1,1];
    expect(cloneArray(array)).not.toBe(array);
    expect(cloneArray(array)).toEqual(array);

}) 