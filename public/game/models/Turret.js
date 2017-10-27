var THREE = require("three");
export default class Turret {
	constructor(dae, coords) {
		this.dae = new THREE.Object3D();
		this.parent = new THREE.Object3D();
		this.parent.position.x = -0.33;
		this.parent.position.z = -2;
		this.parent.position.y = +1.7;
		this.parent.rotation.y += Math.PI;
		this.dae.add(this.parent);
		this.angle = Math.PI - Math.PI;

		this.dae.position.x = coords[0];
		this.dae.position.y = coords[1];
	}
}