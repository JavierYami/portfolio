
export const validation = (contact) => {

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {};

    if(!contact.name) errors.name = 'Name cannot be empty';

    if(!regexEmail.test(contact.email)) errors.email = 'Please, introduce a valid email';

    if(!contact.message) errors.message = 'Message cannot be empty';
    
    return errors;
}