angular.module('navModule').component('navComponent', {
  templateUrl: 'nav-module/nav-module.template.html',
  controller: function NavModuleController() {
    this.sections = [
      {name: 'About'},
      {name: 'Work'},
      {name: 'Technologies'},
      {name: 'Contact'}
    ];
    this.collapsed = true;
    this.toggleCollapsed = function() {
      this.collapsed = !this.collapsed
    };
    this.anchorScroll = function(e) {
      if(location.pathname.replace(/^\//, '') === e.target.pathname.replace(/^\//, '') && location.hostname === e.target.hostname) {
        var target = document.querySelector(e.target.hash);
        target.scrollIntoView({behavior: "smooth"});
        return false;
      }
    }
  }
});