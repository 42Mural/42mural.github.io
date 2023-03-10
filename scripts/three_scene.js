// 42 Mural Three Scene 

// Scene
const scene = new THREE.Scene();

// Render size
const sizes = {
	width: window.innerWidth,
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
const planet_geometry = new THREE.SphereGeometry(1,12,12);
const planet_material = new THREE.MeshNormalMaterial({color: 0xff0000})
planet_material.wireframe = true
const planet = new THREE.Mesh(planet_geometry, planet_material)
planet.position.x = 5
scene.add(planet) // Añadimos la malla del cubo a la escena

const torus_geo = new THREE.TorusGeometry(6,3,15,30)
const torus = new THREE.Mesh(torus_geo, planet_material)
torus.position.x = 5.3
scene.add(torus)

// Camera
const camera = new THREE.PerspectiveCamera(15, sizes.width / sizes.height);
camera.position.z = 0
camera.position.y = -10
camera.position.z = -10

camera.lookAt(planet.position)
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
	torus.rotation.z += 0.001

	//Renderer
	renderer.render(scene, camera)

	// Llamamos a la funcion en el frame siguiente
	window.requestAnimationFrame(anim)
}

anim(anim)
