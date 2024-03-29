

export const formatMoney=(amount:number):string=> {
    // try {
    //     const negativeSign = amount < 0 ? '-' : '';
    //     const [integerPart, decimalPart] = Math.abs(amount).toFixed(2).split('.');
    //     const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    //     const formattedDecimalPart = decimalPart.charAt(1) === '0' ? decimalPart.charAt(0) : decimalPart;
    //     if (decimalPart === '00') {
    //         return `${negativeSign}${formattedIntegerPart}`;
    //     } else {
    //         return `${negativeSign}${formattedIntegerPart}.${formattedDecimalPart}`;
    //     }
    // } catch (error) {
    //     console.error('错误的金额', error);
    //     return '';
    // }

    if(amount>10){
        return String(Math.floor(amount));
    }else if(amount>0){
        return amount.toFixed(1).replace(/\.?0+$/, ''); // 使用正则表达式去除末尾的0
    }else {
        return '-'
    }
}