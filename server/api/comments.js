const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

/* mislin da ne triba 
router.post("/one", (req, res) => {
  Comment.findOne({
    where: { CommentID: req.body.commentID },
    attributes: ["Heading", "Description"]
  })
    .then(comment => res.send(comment))
    .catch(error => console.log(error));
});
*/
module.exports = router;
