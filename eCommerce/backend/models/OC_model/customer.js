const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  // street: {
  //   type: String,
  //   trim: true,
  // },

  // city: {
  //   type: String,
  //   trim: true,
  // },

  // province: {
  //   type: String,
  //   trim: true,
  // },

  // country: {
  //   type: String,
  //   trim: true,
  // },

  // psCode: {
  //   type: String,
  //   trim: true,
  // },

  // phone: {
  //   type: String,
  //   required: true,
  //   maxlength: 13,
  //   trim: true,
  //   validate(value) {
  //     if (!validator.isMobilePhone(value)) {
  //       throw new Error("Please enter valid mobile number");
  //     }
  //   },
  // },
  
  // DOB: {
  //   type: String,
  //   required: true,
  //   validate(value) {
  //     if(!validator.isDate(value)) {
  //       throw new Error("Please enter valid date");
  //     }
  //   }
  // },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please enter valid email address");
      }
    },
  },

  role:{
    type: String,
    enum: ['admin', 'customer'],
    default: 'customer',
  },
  
  pwd: {
    type: String,
    required: true,
    trim: true,
  },
  
  // imageUrl: {
  //   type: String,
  // },

  // cart: [{
  //   productId: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: true,
  //     ref: "products"
  //   },
  //   productname: {
  //     type: String,
  //     require: true
  //   },
  //   productPrice: {
  //     type: Number,
  //     required: true
  //   },
  //   quantity: {
  //     type: Number,
  //     required: true
  //   },
  //   productImage: {
  //     type: String,
  //     required: false
  //   },
  //   totalPrice: {
  //     type: Number,
  //     required: true
  //   }
  // }],

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// @Action - encrypt the password
customerSchema.pre('save', async function(next){
    if(!this.isModified("pwd")){
        next();
    }
    const salt = await bcrypt.genSalt(8);
    this.pwd = await bcrypt.hash(this.pwd, salt);
});

// @Action - Get auth token
customerSchema.methods.generateAuthToken = async function () {
  const customer = this;
  const token = jwt.sign({ _id: customer._id }, "jwtSecret");
  customer.tokens = customer.tokens.concat({ token });
  await customer.save();
  return token;
};

// @Action - Find customer by credentials
customerSchema.statics.findByCredentials = async (email, pwd1) => {
  const customer1 = await customer.findOne({ email });
  if (!customer1) {
    throw new Error("Please enter authorized email");
  }
  const isMatch = await bcrypt.compare(pwd1, customer1.pwd);
  if (!isMatch) {
    throw new Error("Password is not matched");
  }
  return customer1;
};

const customer = mongoose.model("customers", customerSchema);

module.exports = customer;
