/* global AFRAME */
AFRAME.registerComponent('event-manager', {

    init: function () {
      this.bindMethods();
  
      this.boxGeometryEl = document.querySelector('#boxGeometry');
      this.sphereGeometryEl = document.querySelector('#sphereGeometry');
      this.torusGeometryEl = document.querySelector('#torusGeometry');
  
      this.boxButtonEl = document.querySelector('#boxButton');
      this.sphereButtonEl = document.querySelector('#sphereButton');
      this.torusButtonEl = document.querySelector('#torusButton');
  
      this.buttonToGeometry = {
        'bnt1': this.boxGeometryEl,
        'btn2': this.sphereGeometryEl,
        'btn3': this.torusGeometryEl
      };
  
      this.boxButtonEl.addEventListener('click', this.onClick);
      this.sphereButtonEl.addEventListener('click', this.onClick);
      this.torusButtonEl.addEventListener('click', this.onClick);
      this.boxButtonEl.addState('pressed');
    },
  
    bindMethods: function () {
      this.onClick = this.onClick.bind(this);
    },
  
    onClick: function (evt) {
      var targetEl = evt.target;
      if (targetEl === this.boxButtonEl ||
          targetEl === this.sphereButtonEl ||
          targetEl === this.torusButtonEl) {
        this.boxButtonEl.removeState('pressed');
        this.sphereButtonEl.removeState('pressed');
        this.torusButtonEl.removeState('pressed');
        this.boxGeometryEl.object3D.visible = false;
        this.sphereGeometryEl.object3D.visible = false;
        this.torusGeometryEl.object3D.visible = false;
        this.buttonToGeometry[targetEl.id].object3D.visible = true;
          }}})
  