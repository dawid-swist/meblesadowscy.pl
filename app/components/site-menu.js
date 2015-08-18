import Ember from 'ember';

export default Ember.Component.extend({

  menuId: 'meblesadowscy.pl',
  menuTag: 'li',
  cssClass: '',

  menu: [
    {menuLink: 'home', menuLabel: 'home'},
    {menuLink: 'oFirmie', menuLabel: 'o Firmie'},
    {menuLink: 'oferta', menuLabel: 'Oferta'},
    {menuLink: 'wspolpraca', menuLabel: 'Współpraca'},
    {menuLink: 'kontakt', menuLabel: 'Kontakt'}
]
});
