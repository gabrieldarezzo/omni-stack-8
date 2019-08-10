const Dev = require('../models/Dev');
const axios = require('axios');

module.exports = {
    async store(req, res) {

        // console.log('req.io', req.io);
        // console.log('req.connectedUsers', req.connectedUsers);


        const { user } = req.headers;
        const { devId } = req.params;
        
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);


        if(!targetDev) {
            return res.status(400).json({error: 'Dev not exists'});
        }

        if(targetDev.likes.includes(loggedDev._id)) {
            const loggedSocket = req.connectedUsers[user];
            const targetSocket = req.connectedUsers[devId];
            // return res.status(200).json({message: 'Match'});
        }
        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();
        return res.json(loggedDev);
    }
};