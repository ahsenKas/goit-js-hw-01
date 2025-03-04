function getElementWidth(content, padding, border) {
    // Parametrelerdeki px'leri sayıya dönüştürmek için parseFloat kullanacağız
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; // Hem sol hem sağ padding'i ekleyeceğiz
    const borderWidth = parseFloat(border) * 2; // Hem sol hem sağ border'ı ekleyeceğiz

    // Toplam genişlik
    const totalWidth = contentWidth + paddingWidth + borderWidth;
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
