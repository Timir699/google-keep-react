export const notesCreate = note => {
    return {
        type: 'NOTE_CREATE',
        payload: note
    }
}
export const notesThrash = note => {
    return {
        type: 'NOTE_THRASH',
        payload: note
    }
}
export const notesDelete = (note) => {
    return {
        type: 'NOTE_DELETE',
        payload: note
    }
}