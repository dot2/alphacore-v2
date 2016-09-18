FlowRouter.route('/', {
    name: 'Home',
    action() {
        BlazeLayout.render('MainLayout', {main: 'home'});
    },
    // triggersExit: function(){
    //     var selector = '.nav a[href="' + FlowRouter.current().path + '"]';
    //     $('.nav-item').removeClass('acitve');
    //     $(selector).addClass('acitve');
    // }
});
