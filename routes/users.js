const router = require("express").Router();
const userController = require("../controllers/userController");

// Get all user
router.get("/", userController.getAllUser);

// Get user by id
router.get("/:id", userController.getUserById);

//Create user
router.post("/", userController.createUser);

//Update user
router.get("/:id", userController.updateUser);

//Delete user
router.delete("/:id", userController.deleteUser);

module.exports = router;