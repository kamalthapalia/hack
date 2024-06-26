export const commaSeprator = (value: number) => {
    const stringValue = value.toString();
    const [integer, decimal] = stringValue.split('.');
    const formattedIntegerPart = integer
        .split('')
        .reverse()
        .join('')
        .match(/.{1,3}/g)
        ?.join(',')
        .split('')
        .reverse()
        .join('') || '';

    // Combine the integer part with the decimal part if it exists
    const formattedStr = decimal ? `${formattedIntegerPart}.${decimal}` : formattedIntegerPart;
    return formattedStr;
}