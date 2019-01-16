const mongoose = require('mongoose');
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const bcrypt = require('bcrypt');
const WORK_FACTOR = 10;

const schema = new mongoose.Schema ({
  username: {
    type: string,
    unique: true,
    required: [true, 'user is requiered'],
    lowercase: true,
    trim: true
  },
  password: {
    type: string,
    required: [true, 'password is requiered'],
    trim: true
  }
}, { timestamps: true });

schema.pre('save', function() {
  
})
