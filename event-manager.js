/* global AFRAME */
AFRAME.registerComponent('event-manager', {

    init: function () {
      this.bindMethods();
  
      this.btn1GeometryEl = document.querySelector('#boxGeometry');
      this.bnt2GeometryEl = document.querySelector('#boxGeometry');
      this.btn3GeometryEl = document.querySelector('#boxGeometry');
  
      this.btn1ButtonEl = document.querySelector('#boxButton');
      this.btn2ButtonEl = document.querySelector('#boxButton');
      this.btn3ButtonEl = document.querySelector('#boxButton');
  
      this.buttonToGeometry = {
        'btn1': this.btn1GeometryEl,
        'btn2': this.btn2GeometryEl,
        'btn3': this.btn3GeometryEl
      };
  
      this.btn1ButtonEl.addEventListener('click', this.onClick);
      this.btn2ButtonEl.addEventListener('click', this.onClick);
      this.btn3ButtonEl.addEventListener('click', this.onClick);
      this.btn1ButtonEl.addState('pressed');
    },
  
    bindMethods: function () {
      this.onClick = this.onClick.bind(this);
    },
  
    onClick: function (evt) {
      var targetEl = evt.target;
      if (targetEl === this.btn1ButtonEl ||
          targetEl === this.btn2ButtonEl ||
          targetEl === this.btn3ButtonEl) {
        this.btn1ButtonEl.removeState('pressed');
        this.btn2ButtonEl.removeState('pressed');
        this.btn3ButtonEl.removeState('pressed');
        this.btn1GeometryEl.object3D.visible = false;
        this.btn2GeometryEl.object3D.visible = false;
        this.btn3GeometryEl.object3D.visible = false;
        this.buttonToGeometry[targetEl.id].object3D.visible = true;
          }}})
  
  
