// Esercizio
// Create un nuovo progetto Node.js (senza Express) ed installate la Prisma CLI e il Prisma Client.
// Successivamente definite un modello chiamato “Post” nel file schema.prisma, che deve contenere le seguenti proprietà:
// - title
// - slug (deve essere univoco)
// - image (non obbligatoria)
// - content
// - published (boolean)
// - createdAt
// - updatedAt
// Una volta creato il modello, dovete implementare le operazioni di CRUD specifiche per questo modello. Questo significa che dovete realizzare:
// - Una funzione che consente di creare un Post.
// - Una funzione che permette di leggere un Post usando lo slug.
// - Una funzione che restituisce l’elenco di tutti i Post.
// - Una funzione che consente di modificare un Post.
// - Una funzione che elimina un Post.

// importo prisma
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function createPosts() {
  prisma.post.createMany({
    data:[
        {
            title: 'Hello Prisma!',
            slug : 'Hello-Prisma!',
            content: 'questo è il mio primo post',
            published: true,
           
        },
        {
            title: 'secondo post con Prisma!',
            slug : 'secondo-post-con-Prisma!',
            content: 'questo è il mio secondo post',
            published: true,
           
        }
    ]
  })
  .then((result)=>{
    console.log('nuovo Post creato', result);
  })
}

function readPost(){
    prisma.post.findFirst({
        select:{
            slug:true,
        }
    })
    .then((post) => {
        console.log("il post: ", post);
      });
}

function readPostsList(){
    prisma.post.findMany()
    .then((postsList) => {
        console.log("Lista posts: ", postsList);
      });
}

function updatePost(){
    prisma.post.update({
        where:{
            id:2,
        },
        data:{
            content:'Questo è il contenuto del secondo Post modificato!'
        }
    })
    .then((postUpdated)=>{
        console.log(postUpdated);
    })
}

function deletePost(){
prisma.post.delete({
    where:{
        id:1,
    },
})
.then((postDeleted)=>{
    console.log('è stata cancellata la pizza id : ' , postDeleted);
})
}

// - Una funzione che consente di creare un Post.
// createPosts(),
// - Una funzione che permette di leggere un Post usando lo slug.
readPost(),
// - Una funzione che restituisce l’elenco di tutti i Post.
readPostsList(),
// - Una funzione che consente di modificare un Post.
updatePost()
// - Una funzione che elimina un Post.
deletePost()

