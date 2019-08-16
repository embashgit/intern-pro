const InitState = {
    details: {
        url: '',
        phone: '',
        address: '',
    },
    isLoading: false,
}
const nigeria = {
    url: 'info@cinqbyte.com',
    phone: '+234 (0)813-310-9050 OR  +234 (0)803-600-4700',
    address: 'No. 12 Dawaki New Extention Bwari Area Council, Abuja.',
}

const ghana = {
    url: 'samsverify@ghanastetis.com',
    phone: '+233 55-839-6575 | +233 27-346-9278',
    address: 'F9/5 off Ring Road East, Osu.',
}
const contact = (state = InitState, action) => {
    switch (action.type) {
        case 'GET_LOCATION_REQUST':
            console.log("reducer");
            return {
                details: {},
                isLoading: true
            }
        case 'GET_LOCATION_CONTACT':
            switch (action.payload) {
                case nigeria.url:
                    return {
                        ...state,
                        details: nigeria,
                        isLoading: false
                    }
                case ghana.url:
                    return {
                        ...state,
                        details: ghana,
                        isLoading: false
                    }
                default:
                    return {
                        ...state,
                        details: nigeria,
                        isLoading: false
                    };
            }
        default:
            return state;
    }
}
export default contact