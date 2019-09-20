const handleProfileGet = (req, res, db, bcrypt) => {
    const { id } = req.params;
    db.select('*').from('users').where( {id} )
    .then(user => {
        if(user.length){
            res.json(user[0]);
        }else{
            res.status(400).json('Not Found')
        }
    })
    .catch(res.status(400).json('Error getting users'))
}

module.exports = {
    handleProfileGet
}