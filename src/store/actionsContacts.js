import { createAction, nanoid } from '@reduxjs/toolkit';

export const creatContactAction = createAction('NEW_CONTACT', (value) => {
    return {
        payload: {
            ...value,
            id: nanoid(),

        }
    }
})

export const deleteContact = createAction('DELL_CONTACT')