function getElementWidth(content, padding, border) {
    const toplamGenişlik = (content) + (padding * 2) + (border * 2);
    
    return toplamGenişlik;

}
console.log(getElementWidth(Number.parseFloat("50px"), Number.parseFloat("8px"), Number.parseFloat("4px")));
console.log(getElementWidth(Number.parseFloat("60px"), Number.parseFloat("12px"), Number.parseFloat("8.5px")));
console.log(getElementWidth(Number.parseFloat("200px"), Number.parseFloat("0px"), Number.parseFloat("0px")));


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
