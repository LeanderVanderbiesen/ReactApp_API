const url = 'http://localhost:1337';

export const getAll = () => fetch(`${url}/`).then((response) => {
    if (response.statusText === 'OK') {
        return response.json();
    }
    throw new Error('Something went wrong GETTING nobelprizes');
});

export const getDetail = (id) => fetch(`${url}/nobelprizeWinner/${id}`).then((response) => {
    if (response.statusText === 'OK') {
        return response.json();
    }
    throw new Error('Something went wrong GETTING nobelprize winner with id' + id);
});

export const update = (id, nobelprizeWinner) => fetch(`${url}/nobelprizeWinner/${id}`, {
    method: 'PUT',
    body: JSON.stringify(nobelprizeWinner),
    mode: 'cors',
    headers: new Headers({
        'Content-Type': 'application/json',
    })
}).then((response) => {
    if(response.statusText === 'OK') {
        return response.json();
    }
    throw new Error('Something went wrong UPDATING winner with id' + id);
});

export const del = (id) => fetch(`${url}/nobelprizeWinner/${id}`, {
    method: 'DELETE',
}).then((response) => {
    if(response.statusText === 'OK') {
        return response.json();
    }
    throw new Error('Something went wrong DELETING Nobelprize Winner with id' + id);
});