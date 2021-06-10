const ADD_PRODUCT = 'shopAssistant/ADD_PRODUCT';
const DELETE_PRODUCT = 'shopAssistant/DELETE_PRODUCT';

const initialState = {
    _id: [],
    products: [
        {id: 0.1, name: 'guitar', description: 'this is good guitar, really good!', price: 337,
            photos: ['https://kickgoods.ru/upload/iblock/41c/lava_me_2_acoustic_guitar_front.jpg',
                'https://i.ebayimg.com/images/g/9-UAAOSwNw1eFOKp/s-l1600.jpg',
                'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/2/c/2ccffa222639dea6bf0bd8b34351d5e4ed38e3be_219891_2qwe.jpg'],}
    ],
};

const shopAssistantReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            state._id.push(state._id.length);
            let newProduct = {
                id: state._id[state._id.length-1],
                name: action.name,
                description: action.description,
                price: action.price,
                photos: action.photos
            };
            return {
                ...state,
                products: [newProduct, ...state.products],
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: [...state.products.filter(product => product.id !== action.id)],
            };
        default:
            return state;
    }
};

export const addProduct = (name, description, price, photos) => ({type: ADD_PRODUCT, name, description, price, photos});
export const deleteProduct = (id) => ({type: DELETE_PRODUCT, id});

export default shopAssistantReducer;