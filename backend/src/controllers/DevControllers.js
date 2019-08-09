const axios = require('axios');
const Dev = require('../models/Dev');
module.exports = {
    async index(req, res) {
        if(!req.headers.user) {
            const users = await Dev.find();
            return res.json(users);        
        } else {
            const { user } = req.headers;
            const arrFields = [
                { _id: { $ne: user  } },
                { _id: { $nin: loggedDev.likes  } },
                { _id: { $nin: loggedDev.dislikes  } },
            ];
            const loggedDev = await Dev.findById(user);
            const users = await Dev.find({
                $and: arrFields
            });
            return res.json(users);
        }
    },
    async store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({
            user: username
        });

        if(userExists) {
            return res.json(userExists)
        }

        const response = await axios.get(`https://api.github.com/users/${username}`)

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({ 
            name,
            user: username,
            bio,
            avatar
        });
        return res.json(dev)
    }, 
    
};