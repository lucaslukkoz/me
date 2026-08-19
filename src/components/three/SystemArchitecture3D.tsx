"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ArchitectureNode {
  id: string;
  name: string;
  category: "edge" | "streaming" | "broker" | "service" | "cache" | "database";
  position: [number, number, number];
  color: string;
  description: string;
  metrics: string;
}

const NODES_DATA: ArchitectureNode[] = [
  {
    id: "edge",
    name: "API Gateway & Edge",
    category: "edge",
    position: [-60, 20, 0],
    color: "#38bdf8",
    description: "Reverse proxy, rate limiting, JWT validation & non-blocking streaming I/O.",
    metrics: "10k+ req/sec • <12ms p99",
  },
  {
    id: "stream",
    name: "Node.js Streams Pipeline",
    category: "streaming",
    position: [-25, 25, 30],
    color: "#22d3ee",
    description: "Memory-optimized backpressure streaming handling large payloads without blocking event loop.",
    metrics: "Zero memory leak • Chunked ETL",
  },
  {
    id: "broker",
    name: "Event Bus (Kafka / RabbitMQ)",
    category: "broker",
    position: [0, 0, 0],
    color: "#f59e0b",
    description: "Decoupled asynchronous fan-out message routing with Dead Letter Queues (DLQ).",
    metrics: "At-least-once • Distributed log",
  },
  {
    id: "workers",
    name: "BullMQ Distributed Workers",
    category: "service",
    position: [35, 25, -25],
    color: "#ec4899",
    description: "Concurrent background jobs, idempotency checks & automated exponential retries.",
    metrics: "5,000 jobs/min • Redis backed",
  },
  {
    id: "cache",
    name: "Redis Cache & Locks",
    category: "cache",
    position: [20, -30, 25],
    color: "#ef4444",
    description: "Distributed locks (Redlock), session storage & low-latency hot cache.",
    metrics: "<1ms latency • Sub-atomic locks",
  },
  {
    id: "db",
    name: "PostgreSQL & MongoDB Cluster",
    category: "database",
    position: [60, -15, 0],
    color: "#10b981",
    description: "ACID consistency, transactional outbox pattern & relational query indexing.",
    metrics: "Optimistic locking • Sharded read-replicas",
  },
];

export default function SystemArchitecture3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<ArchitectureNode>(NODES_DATA[2]);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0f1d, 0.003);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 45, 150);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x38bdf8, 1.5);
    dirLight.position.set(50, 80, 60);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x818cf8, 2, 200);
    pointLight.position.set(-40, 20, 40);
    scene.add(pointLight);

    // Group for all rotating objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(180, 24, 0x1e293b, 0x0f172a);
    gridHelper.position.y = -45;
    mainGroup.add(gridHelper);

    // Node Meshes
    const nodeMeshes: { mesh: THREE.Mesh; nodeData: ArchitectureNode; halo: THREE.Mesh }[] = [];

    NODES_DATA.forEach((node) => {
      const color = new THREE.Color(node.color);

      // Core Box / Octahedron
      const geom =
        node.category === "broker"
          ? new THREE.OctahedronGeometry(9, 1)
          : node.category === "database"
          ? new THREE.CylinderGeometry(7, 7, 10, 18)
          : new THREE.BoxGeometry(10, 10, 10);

      const mat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.2,
        metalness: 0.7,
        emissive: color,
        emissiveIntensity: 0.35,
      });

      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(...node.position);
      mesh.userData = { id: node.id, nodeData: node };
      mainGroup.add(mesh);

      // Wireframe Halo / Shell
      const haloGeom = new THREE.IcosahedronGeometry(9.5, 1);
      const haloMat = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const halo = new THREE.Mesh(haloGeom, haloMat);
      halo.position.set(...node.position);
      mainGroup.add(halo);

      nodeMeshes.push({ mesh, nodeData: node, halo });
    });

    // Connecting Lines & Dynamic Packets
    const connections: [number, number][] = [
      [0, 1], // Edge -> Stream
      [0, 2], // Edge -> Broker
      [1, 2], // Stream -> Broker
      [2, 3], // Broker -> Workers
      [2, 4], // Broker -> Cache
      [3, 5], // Workers -> DB
      [4, 5], // Cache -> DB
      [3, 4], // Workers -> Cache
    ];

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x64748b,
      transparent: true,
      opacity: 0.35,
    });

    connections.forEach(([startIdx, endIdx]) => {
      const start = NODES_DATA[startIdx].position;
      const end = NODES_DATA[endIdx].position;
      const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
      const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeom, lineMat);
      mainGroup.add(line);
    });

    // Flowing Event Packets
    const packetCount = 14;
    const packetGeom = new THREE.SphereGeometry(1.2, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.9,
    });

    const packets: {
      mesh: THREE.Mesh;
      start: THREE.Vector3;
      end: THREE.Vector3;
      progress: number;
      speed: number;
    }[] = [];

    for (let i = 0; i < packetCount; i++) {
      const conn = connections[i % connections.length];
      const start = new THREE.Vector3(...NODES_DATA[conn[0]].position);
      const end = new THREE.Vector3(...NODES_DATA[conn[1]].position);
      const mesh = new THREE.Mesh(packetGeom, packetMat);
      mainGroup.add(mesh);

      packets.push({
        mesh,
        start,
        end,
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.008,
      });
    }

    // Raycasting for node hover/clicks
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let isMouseDown = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isMouseDown = true;
      setIsInteracting(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      if (isMouseDown) {
        const deltaX = clientX - prevMouseX;
        const deltaY = clientY - prevMouseY;
        mainGroup.rotation.y += deltaX * 0.008;
        mainGroup.rotation.x = Math.max(-0.6, Math.min(0.6, mainGroup.rotation.x + deltaY * 0.006));
        prevMouseX = clientX;
        prevMouseY = clientY;
      }
    };

    const onPointerUp = () => {
      isMouseDown = false;
      setTimeout(() => setIsInteracting(false), 2000);
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map((n) => n.mesh));
      if (intersects.length > 0) {
        const clickedData = intersects[0].object.userData.nodeData as ArchitectureNode;
        if (clickedData) {
          setActiveNode(clickedData);
        }
      }
    };

    container.addEventListener("mousedown", onPointerDown);
    container.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("mouseup", onPointerUp);
    window.addEventListener("touchend", onPointerUp);
    container.addEventListener("click", handleClick);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Auto slow rotate if not actively dragging
      if (!isMouseDown) {
        mainGroup.rotation.y += 0.0025;
      }

      // Pulse nodes & rotate halos
      nodeMeshes.forEach(({ mesh, halo, nodeData }) => {
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.005;
        halo.rotation.y -= 0.015;
        halo.rotation.z += 0.01;

        if (activeNode.id === nodeData.id) {
          const s = 1 + Math.sin(elapsedTime * 4) * 0.08;
          mesh.scale.set(s, s, s);
          halo.scale.set(s * 1.1, s * 1.1, s * 1.1);
        } else {
          mesh.scale.set(1, 1, 1);
          halo.scale.set(1, 1, 1);
        }
      });

      // Animate flowing packets
      packets.forEach((packet) => {
        packet.progress += packet.speed;
        if (packet.progress > 1) {
          packet.progress = 0;
        }
        packet.mesh.position.lerpVectors(packet.start, packet.end, packet.progress);
      });

      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousedown", onPointerDown);
      container.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("touchend", onPointerUp);
      container.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeNode.id]);

  return (
    <div className="relative flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl md:p-6">
      {/* Top Banner with Instructions */}
      <div className="flex w-full flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
            Live 3D Architecture Topology
          </span>
        </div>
        <div className="text-xs text-slate-400">
          <span className="text-sky-400 font-medium">Drag to rotate 3D</span> • Click any node to inspect
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div
        ref={containerRef}
        className="relative h-[340px] w-full cursor-grab active:cursor-grabbing sm:h-[420px]"
      />

      {/* Active Node Detail Card */}
      <div className="mt-4 w-full rounded-xl border border-slate-800 bg-slate-900/90 p-4 transition-all sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div
              className="h-3.5 w-3.5 rounded-full shadow-md"
              style={{ backgroundColor: activeNode.color }}
            />
            <h4 className="text-base font-bold text-white sm:text-lg">
              {activeNode.name}
            </h4>
          </div>
          <span className="rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs font-medium text-sky-300 border border-sky-500/20">
            {activeNode.metrics}
          </span>
        </div>

        <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
          {activeNode.description}
        </p>

        {/* Quick Node Selector Pills */}
        <div className="mt-4 flex flex-wrap gap-2 pt-2">
          {NODES_DATA.map((node) => {
            const isSelected = activeNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-sky-500/20 text-sky-300 border border-sky-400/50 shadow-sm"
                    : "bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-700/50"
                }`}
              >
                {node.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
