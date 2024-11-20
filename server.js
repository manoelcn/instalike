import express from 'express';

const posts = [
    {
        id: 1,
        descricao: 'Uma foto',
        imagem: 'https://placecats.com/millie/300/150'
    },
    {
        id: 2,
        descricao: 'Foto de um gatinho brincando',
        imagem: 'https://placecats.com/garfield/300/200'
    },
    {
        id: 3,
        descricao: 'Um gato olhando para a janela',
        imagem: 'https://placecats.com/felix/250/300'
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function getPostID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

app.get('/post/:id', (req, res) => {
    const index = getPostID(req.params.id);
    res.status(200).json(posts[index]);
});
