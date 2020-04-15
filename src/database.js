import mongoose from 'mongoose';
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://joelvilca:*******@cluster0-tlkdr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useNewUrlParser:true
}).then(db => console.log('database Connect'))
.catch(err => console.log(err));