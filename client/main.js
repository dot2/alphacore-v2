import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';
//
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

// Template.MainLayout.onRendered = function(){
//     $(document).ready(function() {
//         $(window).scroll(function() {
//             if($(event.target).scrollTop() > 0) {
//                 $('.top-btn').fadeIn();
//             } else {
//                 $('.top-btn').fadeOut();
//             }
//         });
//
//         $('.top-btn').click(function(){
//             $('html, body').animate({scrollTop : -100}, 1000);
//             return false;
//         });
//
//     });
// }
