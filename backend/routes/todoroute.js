const express = require("express");
const {
    createTodo,
    deleteTodo,
    getTodos,
    updateTodo,
} = require("../controller/todocontroller.js");
const { authenticate } = require("../middleware/authorize.js");

const router = express.Router();

router.post("/create", authenticate, createTodo);
router.get("/fetch", authenticate, getTodos);
router.put("/update/:id", authenticate, updateTodo);
router.delete("/delete/:id", authenticate, deleteTodo);

module.exports=router;