const ThrashReducer = (state = [], action) => {
    switch (action.type) {
        case 'NOTE_THRASH':
            return [...state, action.payload]

        case 'NOTE_DELETE': {
            const allDeletedData = [...state, action.payload]
            const deletedArray = allDeletedData.filter((item) => item.id !== action.payload.id)
            return deletedArray
        }
        default:
            return state
    }
}

export default ThrashReducer