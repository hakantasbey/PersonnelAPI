"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */  
const {mongoose} = require('../configs/dbConnection')
/*--------------------------------------------------------*
{
    "userId": "65343222b67e9681f937f001",
    "token": "...tokenKey..."
  }
/* ------------------------------------------------------- */
// Tonken Model:

const TokenSchema = new mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Personnel',   // 'User'
        required: true,
        index: true
    },

    token:{
        type: String,
        trim: true,
        required: true,
        index: true,
        unique: true,
    }

},{
    collection: 'token',
    timestamps: true
})

/* ------------------------------------------------------- */

module.exports = mongoose.model('Token', TokenSchema)