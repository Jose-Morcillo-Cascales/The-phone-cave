module.exports = app => {
    app.use('/api', require('./base.routes'))
    app.use('/api/mobiles', require('./mobiles.routes'))
}