const homeRoutes = require('./home'); 
const addcaseRoutes = require('./addcase'); 
const caseRoutes = require('./cases'); 
const adminRoutes = require('./admin'); 

const constructorMethod = (app) => {

    app.use('/', homeRoutes);
    app.use('/addcase', addcaseRoutes);
    app.use('/cases', caseRoutes);
    app.use('/admin', adminRoutes);



    app.use('*', (req, res) => {   
        res.status(404).json({ error: 'Not found' });  
    }); 
};

module.exports = constructorMethod