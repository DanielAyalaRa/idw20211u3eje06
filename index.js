var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/eje05');

var Blog = mongoose.model('Blog',schema,'Blogs');

//BLOGS Objetos
var bloger1 = {
    title: 'Sherlock Holmes',			
    author: 'Donal',						
    body: 'Contenido entretenido y de misterio',						
    comments: [
        { 
            body: 'Es agredable',
            date: new Date('2021,01,05')
        }
    ],
    date: new Date('1995,11,17'),
    hidden: false,
    meta: 23
}

var bloger2 = {
    title: 'Ciencia y Tecnologia',			
    author: 'Felipe Ruelas',						
    body: 'Contenido cientifico y tecnologico',						
    comments: [
        { 
            body: 'Es agredable y bueno',
            date: new Date('2021,02,11')
        }
    ],
    date: new Date('2000,11,17'),
    hidden: false,
    meta: 21
}

var bloger3 = {
    title: 'Filosofia Avanzada',			
    author: 'Carlos Alberto',						
    body: 'Contenido conocimiento',						
    comments: [
        { 
            body: 'Es bueno',
            date: new Date('2020,03,11')
        }
    ],
    date: new Date('2000,11,17'),
    hidden: false,
    meta: 20
}
//FIN DE BLOGS

//Creacion del Blog
Blog.create(bloger3, function(error){
    if(error) {
        console.log(error);
        process.exit(1);
    }
    console.log("<---Blog Guardado--->");
    //Consulta Creacion
    Blog.find({}, function (error, docs) {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log("<------Consulta General Creacion------>");
        console.log(docs);
        process.exit(0);   
    });
});

//Actualizacion
/*Primero es crear el objeto que se va agregar y luego consultar para saber el id del objeto
 creado para hacer la actualizacion*/
Blog.update({_id: '60935ba76246e5004869b202'},{$set: {author: 'Arthur Conan Doyle'}},
function (error, docs) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("<------Actualizacion------>");
    console.log(docs);
    //Consulta Actualizacion
    Blog.find({}, function (error, docs) {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log("<------Consulta General Actualizacion------>");
        console.log(docs);
        process.exit(0);           
    });
});

//Eliminacion
/*Primero es crear el objeto que se va agregar y luego consultar para saber
 el id del objeto creado para eliminacion*/
Blog.findByIdAndRemove({_id: '60935ec1dc2c303be4657f0d'},
    function (error, docs) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("<------Eliminacion------>");
    console.log(docs);
    //Consulta Eliminacion
    Blog.find({}, function (error, docs) {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log("<------Consulta Eliminacion------>");
        console.log(docs);
        process.exit(0);
    });
});
