// 42 Mural Three Scene 

// Scene
const scene = new THREE.Scene();

// Render size
const sizes = {
	width: window.innerWidth * 0.6,
	height: window.innerHeight
}

// Resize events
/*window.addEventListener('resize', () => 
{
	// Update sizes
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	// Update camera
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	// Update renderer
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio), 2)
})*/

// Geometry
const planet_geometry = new THREE.SphereGeometry(1,15,15);
const planet_material = new THREE.MeshNormalMaterial({color: 0xff0000})
planet_material.wireframe = true
const planet = new THREE.Mesh(planet_geometry, planet_material)
scene.add(planet) // Añadimos la malla del cubo a la escena

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3
scene.add(camera)

//Renderer
const canvas = document.querySelector('.planet_scene')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio), 2)

renderer.render(scene, camera)

// Animation

const anim = () =>
{
	// Update objects
	planet.rotation.y += 0.001
	planet.rotation.x += 0.001

	//Renderer
	renderer.render(scene, camera)

	// Llamamos a la funcion en el frame siguiente
	window.requestAnimationFrame(anim)
}

anim(anim)
