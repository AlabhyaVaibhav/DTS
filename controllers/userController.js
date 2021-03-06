var User = require('../models/user');
var Authority = require('../models/authority');

// Display list of all Users
exports.user_list = function(req, res) {
    console.log('inside userController.user_list');
    User.find({}, 'name authorities superadmin')
    .populate('authorities')
    .exec(function (err, list_users){
        if (err) throw err;
        res.render('user_list', { title: 'User List', user_list: list_users, token: req.query.token });
    });
};

// Display detail page for a specific User
exports.user_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
};

// Display User create form on GET
exports.user_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: User create GET');
};

// Handle User create on POST
exports.user_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: User create POST');
};

// Display User delete form on GET
exports.user_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: User delete GET');
};

// Handle User delete on POST
exports.user_delete_post = function(req, res) {
    console.log('Inside user_delete_post with userId: ' + req.body.userId);
    User.findByIdAndRemove(req.body.userId, function (err, results){
	if (err) throw err;
	res.redirect('/db/users?token='+req.body.token);
    });
};

// Display User update form on GET
exports.user_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: User update GET');
};

// Handle User update on POST
exports.user_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: User update POST');
};
