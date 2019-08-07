const Dev = require('../models/Dev');
const axios = require('axios');

module.exports = {
    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;
        
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);


        if(!targetDev) {
            return res.status(400).json({error: 'Dev not exists'});
        }

        if(targetDev.likes.includes(loggedDev._id)) {
            console.log('Deu Match')
            // return res.status(200).json({message: 'Match'});
        }
        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();
        return res.json(loggedDev);
    }
};