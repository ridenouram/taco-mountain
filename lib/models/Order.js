const mongoose =  require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  food: [
    {
      foodItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food',
        required: true
      },
      purchasePrice: {
        type: Number,
        required: true
      },
      _id: false
    }
  ],
  subtotal: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  tip: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  versionKey: false,
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;