// Express
const express = require('express');
const app = express();

// Path
const path = require('path');

// Static Directory
app.use(express.static(path.join(__dirname,'/dist')));

// Body Parser
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// - - - - = = = = Model = = = = - - - -
const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('mongodb+srv://user1:kKKQyl9rvr84KatY@cluster0-dekn4.mongodb.net/test?retryWrites=true');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
const { Schema } = mongoose;

const salesDataSchema = new Schema({
  SaleQty: {
    type: Number,
    trim: true,
    required: [true, "Rating is required"],
  },
  SalesRev: {
    type: Number,
    trim: true,
    required: [true, "Sales Revenue is required"],
  },
  UnitPrice: {
    type: Number,
    trim: true,
    required: [true, "Unit Price is required"]
  },
  ProductId: {
    type: Number,
    trim: true
  }

}, { timestamps: true})

const masterDataSchema = new Schema({
  ProductId: {
    type: Number,
    trim: true,
    required: [true, "Reviewer name is required"],
  },
  UPC: {
    type: Number,
    trim: true,
    required: [true, "Rating is required"],
  },
  Title: {
    type: String,
    minlength: [3, "Title must be at least 3 characters"],
    trim: true,
    required: [true, "Review is required"],
  },
  ArtistName: {
    type: String,
    trim: true,
    required: [true, "Artist Name is required"]
  },
  RelDate: {
    type: Date,
    trim: true,
    required: [true, "Release Date is required"]
  }

}, { timestamps: true})

masterDataSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
salesDataSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const MasterData = mongoose.model('MasterData', masterDataSchema, 'MasterData');
const SalesData = mongoose.model('SalesData', salesDataSchema, "SalesData");

// - - - - = = = = Controller = = = = - - - -
const productController = {
  index: (request, response) => {
    MasterData.find({})
    .then(records => response.json(records))
    .catch(error => console.log(error));
  },
  showRecord: (request, response) => {
    MasterData.findOne({ProductId: request.params.id})
      .then(record => response.json(record))
      .catch(error => response.json(error))
  },
  show: (request, response) => {
    SalesData.findOne({ProductId: request.params.id})
      .then(record => response.json(record))
      .catch(error => response.json(error));
  },
  create: (request, response) => {
    MasterData.create(request.body)
    .then(record => response.json(record))
    .catch(error => response.json(error));
  },
  createSales: (request, response) => {
    SalesData.create(request.body)
      .then(sales => response.json(sales))
      .catch(error => response.json(error))
  },
  destroy: (request, response) => {
    MasterData.findOneAndRemove(request.params.id)
    .then(record => response.json(record))
    .catch(error => console.log(error));
  },
  destroySales: (request, response) => {
    // console.log(typeof(request.params.id))
    SalesData.findOneAndRemove(request.params.id)
    .then(record => response.json(record))
    .catch(error => console.log(error));
  }
};

// - - - - = = = = Routes = = = = - - - -
app
.get('/master', productController.index)
.get('/master/:id', productController.showRecord)
.get('/sales/:id', productController.show)
.post('/master/new', productController.create)
.post('/sales/new/:id', productController.createSales)
.delete('/master/:id', productController.destroy)
.delete('/sales/:id', productController.destroySales)
.all("*", (req,res,next) => {
  res.sendFile(path.resolve("dist/index.html"))
});


// - - - - = = = = Server Listener = = = = - - - -
const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));

