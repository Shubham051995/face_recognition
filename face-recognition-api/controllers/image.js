const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'caa347946df14533b20a2e7813dd7c1f'
   });

handleApiCall = (req, res) => {
    app.models
        .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
        .then(data => {
            res.json(data);
        })
        .catch(err => res.status(400).json('unable to connect to api'))
}
      
const handleImage = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries',1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0]);
    })
    .catch(res.status(400).json('unable to get entries'))
}

module.exports = {
    handleImage,
    handleApiCall
}