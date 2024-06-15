const express = require('express');
const subscribe = require('../models/subscription');
const router = express.Router();

router
.post('/subscribe', async (req, res) => {
    try {
      let sub = await subscribe.createsubscribe(req.body);
      res.send(sub)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


  .post('/edit-subscrption/:sub_id', async (req, res) => {
    try {
      let subscribecreates = await subscribe.updatesubscribe(req.params.sub_id,req.body);
      res.send(subscribecreates)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  


  .get('/get-subscription', async (req, res) => {
    try {
      let subscribeupdates = await subscribe.getsubscribe(req.body.id);
      res.send(subscribeupdates)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .post('/deletesubscribe/:sub_id', async (req, res) => {
    try {
      let subscribedeletes= await subscribe.deletesubscribe(req.params.sub_id);
      res.send(subscribedeletes)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  
module.exports=router; 
