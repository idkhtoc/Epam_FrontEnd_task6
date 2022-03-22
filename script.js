// Task
function nameSort(arr, direction) {
    return arr.sort((a, b) => {
        if (a.name > b.name) { return direction ? 1 : -1; }
        if (a.name < b.name) { return direction ? -1 : 1; }
        return 0;
    });
}

const contacts = [
    {
        name: 'Tom',
        phoneNumber: '098-76-54-352'
    },
    {
        name: 'Peter',
        phoneNumber: '098-54-54-652'
    },
    {
        name: 'Anna',
        phoneNumber: '050-711-21-21'
    }
];

nameSort(contacts, true);

console.log(contacts);