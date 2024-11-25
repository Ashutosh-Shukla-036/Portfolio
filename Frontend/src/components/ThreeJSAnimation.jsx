import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import moonImage from '../assets/moon2.jpg'; // Renamed to moonImage to avoid name conflict

const ThreeJSAnimation = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Add Moon with even larger size (size 12)
        const moonTexture = new THREE.TextureLoader().load(moonImage); // Using the renamed moonImage import
        const moonGeometry = new THREE.SphereGeometry(12, 32, 32); // Increased size to 12
        const moonMaterial = new THREE.MeshStandardMaterial({
            map: moonTexture, // Apply moon texture
            roughness: 0.2, // Make it smoother for a shinier surface
            metalness: 0.8, // Increase metalness for a more reflective look
            bumpMap: moonTexture, // Add bump map for some depth
            bumpScale: 0.1,
        });
        const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial); // Renamed variable
        moonMesh.position.set(0, 0, -30); // Position the moon in the center
        scene.add(moonMesh);

        // Add particles for stars
        const particlesGeometry = new THREE.BufferGeometry();
        const particleCount = 5000;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 200;
        }
        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );
        const particlesMaterial = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.2,
        });
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        // Add Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(20, 20, 20);
        scene.add(pointLight);

        // Add a stronger light to illuminate the moon
        const moonLight = new THREE.PointLight(0xffffff, 2, 100); // Brighter light for moon
        moonLight.position.set(0, 10, -30); // Position it close to the moon
        scene.add(moonLight);

        // SpotLight for the Moon's reflective effect
        const spotLight = new THREE.SpotLight(0xffffff, 2, 100, Math.PI / 4, 0.1, 2);
        spotLight.position.set(-10, 40, 20);
        scene.add(spotLight);

        // Adding fog for atmospheric effect
        scene.fog = new THREE.Fog(0x000000, 20, 200); // Adds a distant fog effect for depth

        // Set camera position
        camera.position.z = 30;

        // Add orbit controls for interactive camera movement
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Smooth damping for controls
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;

        // Animation loop
        const clock = new THREE.Clock();
        const animate = () => {
            const elapsedTime = clock.getElapsedTime();

            // Rotate the moon and particles for animation
            moonMesh.rotation.y = elapsedTime * 0.05;
            particles.rotation.y = elapsedTime * 0.1;
            particles.rotation.x = elapsedTime * 0.05;

            // Update the controls
            controls.update(); // Only required if controls.enableDamping or controls.auto-rotation are enabled

            // Render the scene
            renderer.render(scene, camera);

            // Request animation frame
            requestAnimationFrame(animate);
        };

        animate();

        // Handle cleanup on unmount
        return () => {
            renderer.dispose();
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="absolute top-0 left-0 w-full h-full z-[-1]"
        />
    );
};

export default ThreeJSAnimation;
