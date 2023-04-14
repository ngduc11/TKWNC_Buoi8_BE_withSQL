const db = require("./db");
sql = "SELECT * FROM tkwnc.students ORDER BY MaSV LIMIT 10,5";
db.query(sql).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});