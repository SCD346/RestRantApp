const router = require('express').Router()
const db = require('../models')

//ROUTE: Get all places
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch((err) => {
      console.log(err)
      res.render('error404')
    })
})
//ROUTE: Post new place
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtLcEbK72DdI2-0yjNOHLvzQeJqLRKhirxA&usqp=CAU'
  }
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch((err) => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', { message })
      } else {
        res.render('error404')
      }
    })
})

//ROUTE: Post a comment
router.post('/:id/comment', (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      if (req.body.rant === 'on') {
        req.body.rant = true
      } else {
        req.body.rant = false
      }

      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id)
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`)
          })
        })
        .catch((err) => {
          console.log('This is the error: ', err)
          res.render('error404')
        })
    })
    .catch((err) => {
      res.render('error404')
    })
})

//ROUTE: Get the 'new' form
router.get('/new', (req, res) => {
  res.render('places/new')
})

//ROUTE: (Show) Get a place by
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then((place) => {
      console.log(place.comments)
      res.render('places/show', { place })
    })
    .catch((err) => {
      console.log('err', err)
      res.render('error404')
    })
})

//ROUTE: Update/edit a place
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`)
    })
    .catch((err) => {
      console.log('EDIT ATTEMPT ERROR: ', err)
      res.render('error404')
    })
})

//ROUTE: Get the edit form
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render('places/edit', { place })
    })
    .catch((err) => {
      console.log('ACCESS EDIT FORM ERROR:', err)
      res.render('error404')
    })
})

//ROUTE: Delete a place
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/places')
    })
    .catch((err) => {
      console.log('HERE IS WHAT HAPPENED: ', err)
      res.render('error404')
    })
})

// router.post('/:id/rant', (req, res) => {
//   res.send('GET /places/:id/rant stub')
// })

// router.delete('/:id/rant/:rantId', (req, res) => {
//   res.send('GET /places/:id/rant/:rantId stub')
// })
router.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
    .then(() => {
      console.log('Success')
      res.redirect(`/places/${req.params.id}`)
    })
    .catch((err) => {
      console.log('err', err)
      res.render('error404')
    })
})
module.exports = router
