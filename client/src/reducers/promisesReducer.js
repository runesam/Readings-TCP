export default function promises(state = {}, action) {
    if (action.type.includes('START_!')) {
        return { ...state, [action.payload.loaderKey || 'general']: true };
    }
    if (action.type.includes('SUCCESS_!') || action.type.includes('FAILURE_!')) {
        return { ...state, [action.payload.loaderKey || 'general']: false };
    }
    return state;
}
