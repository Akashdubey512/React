import express  from 'express';


const app = express();

// app.get('/',(req,res) =>{
//     res.send('server is running')
// })
//get a list of 5 users
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        { id: 4, name: 'Bob Brown' },
        { id: 5, name: 'Charlie Davis' }
    ];
    res.send(users);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
