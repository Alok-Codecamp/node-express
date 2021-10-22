const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hello my my gf node');
})

const users = [
    {
        id: 0,
        name: 'sabana',
        email: 'sabana@gmail.com',
        phone: 109345783,
    },
    {
        id: 1,
        name: 'nusrat',
        email: 'nusrat@gmail.com',
        phone: 109345783,
    },
    {
        id: 2,
        name: 'sabnur',
        email: 'bobita@gmail.com',
        phone: 109345783,
    },
    {
        id: 3,
        name: 'mousumi',
        email: 'mousumi@gmail.com',
        phone: 109345783,
    },
    {
        id: 4,
        name: 'srabonti',
        email: 'srabonti@gmail.com',
        phone: 109345783,
    }

]

app.get('/users', (req, res) => {
    //use query parametere
    const searching = req.query.search;
    if (searching) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(searching));
        res.send(searchResult)
    }
    else {
        res.send(users);
    }

})

app.post('/users', (req, res) => {
    const newuser=req.body;
    newuser.id=users.length;
    users.push(newuser)
    res.json(newuser);
})
//dynamic parametere
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.get('/fruits/mangos/fazli', (req, res) => {
    res.send('this is fazli amm')
})
app.listen(port, () => {
    console.log('listening to port', port)
})

