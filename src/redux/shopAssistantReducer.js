const ADD_PRODUCT = 'shopAssistant/ADD_PRODUCT';
const DELETE_PRODUCT = 'shopAssistant/DELETE_PRODUCT';
const ADD_ORDER = 'shopAssistant/ADD_ORDER';
const DELETE_ORDER = 'shopAssistant/DELETE_ORDER';
const CHANGE_PRODUCT = 'shopAssistant/CHANGE_PRODUCT';

const initialState = {
    _id: [],
    products: [
        {id: 0.1, name: 'guitar', description: 'this is good guitar, really good!', price: 337,
            photos: ['https://kickgoods.ru/upload/iblock/41c/lava_me_2_acoustic_guitar_front.jpg',
                'https://i.ebayimg.com/images/g/9-UAAOSwNw1eFOKp/s-l1600.jpg',
                'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/2/c/2ccffa222639dea6bf0bd8b34351d5e4ed38e3be_219891_2qwe.jpg'],},
        {id: 0.2, name: 'medvejuti', description: 'so cute! ooo.. i`m mini medvejut, take me )))', price: 666,
            photos: ['https://moe.shikimori.one/system/people/original/28597.jpg?1580333821',
                'https://static.findanime.net/uploads/pics/01/20/608.jpg']},
        {id: 0.3, name: 'My Little Pony', description: 'is an animated childrens television series based on ' +
                'Hasbros fourth incarnation (also referred to as the fourth generation or "G4" by collectors) ' +
                'of the My Little Pony line of toys and animated works.', price: 125,
            photos: ['https://home.be-in.ru/media/beingallery/gallary/things/2019/10/09/im755578.jpg',
                'https://img.akusherstvo.ru/images/magaz/im1023764.jpg']},
        {id: 0.4, name: 'Tesla', description: 'Built on a new platform that is fundamentally different from the Model S and Model X.' +
                ' Designed to become the first mass-produced electric vehicle from Tesla Inc.', price: 35000,
            photos: ['https://cdn.motor1.com/images/mgl/EJmLz/s1/2022-tesla-model-x.jpg',
                'https://3.bp.blogspot.com/-kh_romtBPKY/WKj2teI40fI/AAAAAAAAFE4/IjeWSc37j58Y5sM6KdwvoX6Zo7irK-qCgCLcB/s640/1.png']},
        {id: 0.5, name: 'Gibson', description: 'The Gibson Les Paul Classic from the Modern ' +
                'Collection lineup combines traditional Les Paul design with the latest in ...', price: 3000,
            photos: ['https://sc1.musik-produktiv.com/pic-010109188xl/gibson-les-paul-standard-heritage-cherry-sunburst-10109188.jpg',
                'http://images.musicstore.de/images/1280/gibson-les-paul-classic-ebony_1_GIT0049473-000.jpg']},
        {id: 0.6, name: 'Ring of omnipotence', description: 'one ring to rule them all', price: 10000000,
            photos: ['https://super01.ru/pictures/product/big/91311_big.jpg',
                'https://gamemerch.ru/wp-content/uploads/2018/05/3.jpg']},
        {id: 0.7, name: 'Levitating Bonsai Plant (wenge)', description: 'Levitating plants LePlant are an amazing combination of nature and high technology, which causes delight and admiration. Plants float in the air, getting enough sunlight for full development.\n' +
                'Bonsai is a miniature tree that prefers diffused light and moderate watering as the soil dries.', price: 230,
            photos: ['https://static-sl.insales.ru/images/products/1/7043/304274307/IMG_8426.jpg',
                'https://static-sl.insales.ru/images/products/1/4953/304272217/IMG_8476.jpg']},
    ],
    _ordersId: [],
    orders: [],
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
        case CHANGE_PRODUCT:
            const changedProduct = {
                id: action.id,
                name: action.name,
                description: action.description,
                price: action.price,
                photos: action.photos
            }
            let arrayOfProducts = [...state.products.filter(product => product.id !== action.id), changedProduct].sort((a,b) => a.id > b.id ? 1 : -1);
            return {
                ...state,
                products: arrayOfProducts,
            };

        case ADD_ORDER:
            state._ordersId.push(state._ordersId.length);
            let newOrder = {
                id: state._ordersId[state._ordersId.length-1],
                productsInCart: action.products,
            };
            return {
                ...state,
                orders: [newOrder, ...state.orders],
            };
        case DELETE_ORDER:
            return {
                ...state,
                orders: [...state.orders.filter(order => order.id !== action.id)],
            };
        default:
            return state;
    }
};

export const addProduct = (name, description, price, photos) => ({type: ADD_PRODUCT, name, description, price, photos});
export const deleteProduct = (id) => ({type: DELETE_PRODUCT, id});
export const addOrder = (products) => ({type: ADD_ORDER, products});
export const deleteOrder = (id) => ({type: DELETE_ORDER, id});
export const changeProduct = (id, name, description, price, photos) => ({type: CHANGE_PRODUCT, id, name, description, price, photos});

export default shopAssistantReducer;