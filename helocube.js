function create3DEnvironment() {
  const renderer = new THREE.WebGLRenderer();

  const fieldOfView = 75;
  // Measured in degrees, not radians..

  const aspect = 2;
  // The canvas default (300px wide by 150px tall --> 2:1 --> 2)

  const near = 0.1;

  const far = 10000;

  const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();

  const width = 1;
  const height = 1;
  const depth = 1;
  const geometry = new THREE.BoxGeometery(width, height, depth);

  const material = new THREE.MeshBasicMaterial({ color: 0xc2c5cc });

  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const animate = (time, speed = 1) => {
    time *= 0.001;
    const rotation = time * speed;
    cube.rotation.x = rotation;
    cube.rotation.y = rotation;
    renderer.render(scene, camera);
    document.body.appendChild(rerender.domElement);
    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
}
create3DEnvironment();
