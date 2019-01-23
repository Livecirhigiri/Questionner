const joi=require("joi");
const db=require("../config/connection");

exports.create=(req,res)=>{
    const newComment={
        user:1,
        comment:req.body.comment,
        question:parseInt(req.params.id)
    };
    db.query("SELECT * FROM question WHERE id_question=$1",[newComment.question])
      .then(result=>{
          if(result.rows.length===0){
              return res.status(404).json({error:"sorry question not found"});
          }
          db.query("INSERT INTO comments(user_id,question_id,comment) VALUES($1,$2,$3) returning *",
          [newComment.user,newComment.question,newComment.comment])
           .then(comment=>{
               return res.json({status:200,comment:comment.rows});
           })
           .catch(er=>{
               console.log(er);
           })
      })
      .catch(error=>{
          console.log(error);
      })
  
}