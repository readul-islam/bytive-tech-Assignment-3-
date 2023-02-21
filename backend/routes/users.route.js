const express = require('express');
const { createUser, getAllUser, dropUser, updateUser } = require('../controller/users.controller');
const router = express.Router()




router.post('/add-user', createUser)
router.get('/get-users', getAllUser)
router.delete('/delete-user', dropUser)
router.put('/update-user', updateUser)












module.exports = router;