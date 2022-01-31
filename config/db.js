const knex=require('knex')({
    client:"mysql",
    connection:{
        user:"root",
        password:"Akshit@123",
        database:"akshit",
        host:"localhost"
    }
})

knex.schema.createTable('bhatt', table=>{
    table.increments("id")
    table.string("name")
    table.string("email")
    table.string("password")
}).then(()=>{
    console.log('table created');
}).catch(err=>{
    console.log(err.message);
})

// knex.schema.dropTable('bhatt').then(()=>{
//     console.log("tables deleted");
// }).catch((err)=>{
//     console.log(err.message);
// })

module.exports=knex