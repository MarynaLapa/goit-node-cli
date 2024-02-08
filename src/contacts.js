const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, db, "contacts.json"); 
console.log('contactPath', contactsPath)

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}

async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find
}

async function removeContact(contactId){
    //  Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
    // Повертає об'єкт доданого контакту (з id).
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}