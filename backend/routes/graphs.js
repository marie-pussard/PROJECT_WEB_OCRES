const router = require('express').Router();
let Graph = require('../models/graph.model');

router.route('/').get((req, res) => {
  Graph.find()
    .then(graphs => res.json(graphs))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:type').get((req, res) => {
    Graph.find()
      .then(graphs => res.json(graphs))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.get('/graphe1', (req,res) => {
    graphs.aggregate([
        {$match: {
            $and : [
                { Type: 1},
                { username: 'hello'}
            ]
        }},
        {$sort: {Vitesse_moy: -1}},
        {$limit: 1},
    ])
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const type = Number(req.body.type);
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newGraph = new Graph({
    username,
    type,
    description,
    duration,
    date,
  });

  newGraph.save()
  .then(() => res.json('graph added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Graph.findById(req.params.id)
    .then(graphs => res.json(graphs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Graph.findByIdAndDelete(req.params.id)
    .then(() => res.json('graph deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Graph.findById(req.params.id)
    .then(graphs => {
      graphs.username = req.body.username;
      graphs.sport = req.body.description;
      graphs.temps = Number(req.body.duration);
      graphs.date = Date.parse(req.body.date);

      graphs.save()
        .then(() => res.json('graphs updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;