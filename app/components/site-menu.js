import Ember from 'ember';

export default Ember.Component.extend({

  menuId: 'meblesadowscy.pl',
  menuTag: 'li',
  articleRouteName: 'mainPage.nav',
  cssClass: '',
  jumpToAnchor: function(){
    var $=Ember.$;
    $('div').animate({
      scrollTop: $('#o_firmie').offset().top //offset if required
    }, 600);
  },

  actions : {

  pressed : function() {
    this.jumpToAnchor();
  }
}

});
