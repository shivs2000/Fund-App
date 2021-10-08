const createUser = require('./controllers/createUser');
const deleteUser = require('./controllers/delUser');
const getUser = require('./controllers/getUser');
const getUsers = require('./controllers/getUsers');
const login = require('./controllers/login');
const updateUser = require('./controllers/updateUser');

const router=require('express').Router();
router.post('/login',login);
router.get('/user',getUser);
router.get('/users',getUsers);
router.post('/createUser',createUser);
router.put('/updateUser',updateUser);
router.delete('/deleteUser',deleteUser);


module.exports=router;
