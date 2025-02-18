// src/components/Room3D.tsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface Room3DProps {
  width: number;
  length: number;
  height: number;
  furniture?: {
    width: number;
    length: number;
    height: number;
  } | null;
}

const Room3D: React.FC<Room3DProps> = ({ width, length, height, furniture }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    // Improved Camera Position
    camera.position.set(width, height, length * 2);
    camera.lookAt(0, height / 2, 0);

    // Lighting for better contrast and shadows
    const ambientLight = new THREE.AmbientLight(0x404040, 2); 
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(0, height * 2, length);
    scene.add(directionalLight);

    // Create Floor
    const floorGeometry = new THREE.PlaneGeometry(width, length);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Create Walls with BoxGeometry for thickness
    const wallThickness = 0.1;
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xe5e5e5 });

    // Back Wall
    const backWallGeometry = new THREE.BoxGeometry(width, height, wallThickness);
    const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
    backWall.position.set(0, height / 2, -length / 2);
    scene.add(backWall);

    // Front Wall
    const frontWallGeometry = new THREE.BoxGeometry(width, height, wallThickness);
    const frontWall = new THREE.Mesh(frontWallGeometry, wallMaterial);
    frontWall.position.set(0, height / 2, length / 2);
    scene.add(frontWall);

    // Left Wall
    const leftWallGeometry = new THREE.BoxGeometry(wallThickness, height, length);
    const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
    leftWall.position.set(-width / 2, height / 2, 0);
    scene.add(leftWall);

    // Right Wall
    const rightWallGeometry = new THREE.BoxGeometry(wallThickness, height, length);
    const rightWall = new THREE.Mesh(rightWallGeometry, wallMaterial);
    rightWall.position.set(width / 2, height / 2, 0);
    scene.add(rightWall);

    // Add Furniture if available
    if (furniture) {
      const furnitureGeometry = new THREE.BoxGeometry(furniture.width, furniture.height, furniture.length);
      const furnitureMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
      const furnitureMesh = new THREE.Mesh(furnitureGeometry, furnitureMaterial);
      furnitureMesh.position.set(0, furniture.height / 2, 0);
      scene.add(furnitureMesh);
    }

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on Component Unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [width, length, height, furniture]);

  return <div ref={mountRef}></div>;
};

export default Room3D;
