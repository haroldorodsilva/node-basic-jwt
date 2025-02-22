const express = require('express');
const userModel = require('../../../models/User');

module.exports = {
    async show(req, res, next) {

        let { userId } = req.params;

        let user = await userModel.findById(userId).select('name , email');

        if (!user) {
            return res.status(404).json({
                "errors": [{
                    "msg": " no user found"
                }]
            })
        }

        return res.status(200).json({
            "success": [{
                "msg": " user fetched successfully",
                "data": user
            }]
        })
    }

}
