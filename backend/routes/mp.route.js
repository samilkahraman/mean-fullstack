const express = require('express');
const app = express();
const mpRoute = express.Router();

// Student model
let masifpanel = require('../model/Masif-Panel');

// Add Student
mpRoute.route('/agac-ekle').post((req, res, next) => {
    masifpanel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all student
mpRoute.route('/').get((req, res) => {
    masifpanel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single student
mpRoute.route('/agac-getir/:id').get((req, res) => {
    masifpanel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update student
mpRoute.route('/update-agac/:id').put((req, res, next) => {
    masifpanel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Masif panel successfully updated!')
    }
  })
})

// Delete student
mpRoute.route('/delete-agac/:id').delete((req, res, next) => {
    masifpanel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = mpRoute;