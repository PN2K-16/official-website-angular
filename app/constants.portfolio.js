(function(){

 'use strict';

 angular.module('pn2k')
  .constant('Projects',{
  data:[
   {
    title:"LMS-Platform",
    name:"Application/System",
    url: "http://sabaragamuwa.library.reactive-solutions.xyz/",
    image:"img/projects/library.png",
    fullName:"Library Management System Platform",
    desc:"Library Management System Platform is developed targetting the user requirements of Sabaragamuwa National Library In Sri Lanka.",
    features:["Book Management","Customer Management", "Inventory Managemnt","Reports and Logs"],
    tech:["laravel.png","jquery.png"]
   },
   {
    title:"DMS-Platform",
    name:"Application/System",
    fullName:"Distribution Management System Platform",
    url: "http://www.accbooks.lk/dms/",
    desc:"A Distribution Management System developed targetting the general requirements of a distribution company.",
    features:["Stock Management","Customer Management","Vehicle Management","Product Management"," Sales Management","Good Recieve Notes"," Document Uploads","Reports and logs"],
    tech:["laravel.png","jquery.png"],

    image:"img/projects/dms.jpeg"
   },
   {
    title:"HRS-Platform",
    name:"Application/System",
    fullName:"Hotel Reservation System Platform",
    url: "http://www.myprowebsite.xyz",
    desc:"A Hotel Reservation System developed targetting the user requirements of a typical hotel reservation process alongside a customizable dynamic consumer website portal.",
    image:"img/projects/amalya.png",
    tech:["laravel.png","jquery.png","angular.png"],
    features:["Customizable website","Image/Banner uploads","Reservations / Bookings","Room/Hall Management","Calendar View","Menu Management","CRM Module","Payment Gateway Integration"]
   },
   {
    title:"KLARO Official",
    name:"Webiste",
    fullName:"KLARO Sri Lanka - Company Website",
    url: "http://www.klaro.lk/",
    image:"img/projects/klaro.png",
    tech:["jquery.png","bootstrap.jpg","html5.png"],
    desc:"KLARO Sri Lanka Official Company website designed and developed to showcase their projects, products and services",
    features:["Responisve","Mobile Ready"]
   },
   {
    title:"Chanulya Beauty Salon",
    name:"Webiste",
    url: "",
    image:"img/projects/notfound.png",
    tech:["jquery.png","bootstrap.jpg","html5.png"],
    desc:"Chanulya Beauty Salon is a customized website developed for a beauty parlour according to their needs to showcase their designs and recent projects",
    features:["Responisve","Mobile Ready"],
    fullName:"Chanulya Beauty Salon - Company Website"
   },
   {
    title:"FareShare SL",
    name:"Mobile",
    url: "",
    image:"img/projects/coming-soon.png",
    fullName:"FareShare SL",
    features:["Cross-Platform","Real Time"],
    desc:"Coming Soon...",
    tech:["angular.png","firebase.png","ionic.png"]
   }
  ]

 });


})();