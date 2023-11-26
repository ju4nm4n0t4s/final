const mongoose=require ('mongoose');
const URI='mongodb://localhost:27017/ptueba_we';
mongoose.connect(URI).then(db =>console.log('base de datos conectado')).catch(err=>console.error(err));
module.exports = mongoose;