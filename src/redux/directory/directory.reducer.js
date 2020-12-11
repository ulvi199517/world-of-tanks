const INITIAL_STATE = {
    sections: [
        {
            title: 'ussr',
            imageUrl: 'https://i.ibb.co/mSB9P1g/sssr-flag-svg.png',
            id: 1,
            linkUrl: 'shop/ussr'

        },
        {
            title: 'germany',
            imageUrl: 'https://i.ibb.co/LNtjsyM/Germany-svg.png',
            id: 2,
            linkUrl: 'shop/germany'
        },
        {
            title: 'u.k',
            imageUrl: 'https://i.ibb.co/D9k0DJH/UK-flag.jpg',
            id: 3,
            linkUrl: 'shop/uk'
        },
        {
            title: 'u.s.a',
            imageUrl: 'https://i.ibb.co/02y2bWN/usa-flag.png',
            id: 4,
            linkUrl: 'shop/usa' 
        },
        {
            title: 'france',
            imageUrl: 'https://i.ibb.co/vXyLHf4/french-flag-svg.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/france'
        }
    ]
};
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}
export default directoryReducer;