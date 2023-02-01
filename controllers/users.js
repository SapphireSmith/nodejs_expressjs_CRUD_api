import { v4 as uuid } from 'uuid';


let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    console.log(user);
    users.push({ id: uuid(), ...user });
    console.log(`User ${user.firstName} added to the database.`);
    res.end();
};

export const getUser = (req, res) => {
    const { id } = req.params;
    console.log(id);
    const user = users.find((user) => user.id === id)
    console.log(user);
    res.send(user);
};

export const deleteUser = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id);
    console.log(`user with id ${req.params.id} has been deleted`);
    res.end()
};

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    if (req.body.firstName) {
        user.firstName = req.body.firstName;
    }
    if (req.body.lastName) {
        user.lastName = req.body.lastName;
    }
    if (req.body.age) {
        user.age = req.body.age;
    }
    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`);
    res.end()
};