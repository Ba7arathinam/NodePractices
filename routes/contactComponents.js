const express = require('express')
const {getContact,getConatctById,UpdateContactById,deleteContactById,
    PostContact}= require('../controller/ContactController')
const router=express.Router()

router.route('/').get(getContact).post(PostContact)
router.route('/:id').get(getConatctById).delete(deleteContactById).put(UpdateContactById)


module.exports = router