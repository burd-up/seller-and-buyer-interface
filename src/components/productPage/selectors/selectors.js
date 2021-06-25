export const oneProductCartSelector = (products, productsInCartId, productId) => {
//создаем объект где свойство это элемент массива, а его значение это колличество таких элементов в массиве
    let obj = productsInCartId.reduce(function (acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
//получение массива с уникальными id
    let arr = Object.keys(obj);
//делаем из массива строк массив чисел
    let newArr = arr.map(el => Number(el));
//делаем массив товаров в корзине
    let productsInCart = products.filter(products => newArr.includes(products.id)); //тут проверяем есль ли в массиве из вышележащего действия
                                                                                    // Id элемента и если есть то добавляем его в новый массив
//добавляем продуктам свойство с их колличеством
    let productInCartCurrent = productsInCart.map(product => {
        let newProduct = {...product};
        newProduct.quantity = obj[newProduct.id.toString()]
        return newProduct
    })
    //получаем массив с одним продуктом который мы ищем, затем выбираем этот продукт по индексу
    let ourProduct = productInCartCurrent.filter(el => el.id === productId)[0];
    return ourProduct;
}