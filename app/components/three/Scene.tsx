"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { scrollBus } from "@/app/lib/scrollBus";

// One "chapter" of 3D scenery per page section. The whole world slides up
// past the fixed camera as the user scrolls.
const SPACING = 11;
const CHAPTERS = 5;

const PALETTE = ["#22d3ee", "#a78bfa", "#f472b6", "#34d399"];

function CameraRig() {
  useFrame((state, delta) => {
    const cam = state.camera;
    cam.position.x = THREE.MathUtils.damp(
      cam.position.x,
      scrollBus.mouseX * 0.7,
      2.2,
      delta
    );
    cam.position.y = THREE.MathUtils.damp(
      cam.position.y,
      -scrollBus.mouseY * 0.45,
      2.2,
      delta
    );
    cam.lookAt(0, 0, 0);
  });
  return null;
}

// Accent light that drifts through the palette as you scroll.
function MoodLight() {
  const light = useRef<THREE.PointLight>(null);
  const stops = useMemo(() => PALETTE.map((c) => new THREE.Color(c)), []);
  useFrame(() => {
    if (!light.current) return;
    const t = scrollBus.progress * (stops.length - 1);
    const i = Math.min(Math.floor(t), stops.length - 2);
    light.current.color.copy(stops[i]).lerp(stops[i + 1], t - i);
  });
  return (
    <pointLight
      ref={light}
      position={[0, 0, 6]}
      intensity={60}
      distance={40}
      decay={2}
    />
  );
}

// Hero centerpiece: a molten, wobbling blob.
function HeroBlob({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.3}>
      <mesh position={position}>
        <icosahedronGeometry args={[1.8, 48]} />
        <MeshDistortMaterial
          color="#6d28d9"
          emissive="#3b0764"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.8}
          distort={0.48}
          speed={2.1}
        />
      </mesh>
    </Float>
  );
}

function FunKnot({
  position,
  args = [0.75, 0.28, 220, 32, 2, 3] as [
    number,
    number,
    number,
    number,
    number,
    number,
  ],
  spin = 0.3,
}: {
  position: [number, number, number];
  args?: [number, number, number, number, number, number];
  spin?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * spin;
    mesh.current.rotation.y += delta * spin * 1.4;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={mesh} position={position}>
        <torusKnotGeometry args={args} />
        <meshNormalMaterial />
      </mesh>
    </Float>
  );
}

// Three crossing neon rings around a funky core — the "gyroscope".
function Gyro({ position }: { position: [number, number, number] }) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.x += delta * 0.35;
    group.current.rotation.y += delta * 0.22;
  });
  return (
    <group ref={group} position={position}>
      <mesh>
        <torusGeometry args={[2.15, 0.05, 12, 96]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.72, 0.05, 12, 96]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1.32, 0.05, 12, 96]} />
        <meshBasicMaterial color="#f472b6" transparent opacity={0.7} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
}

// DNA-ish helix of neon cubes for the experience timeline.
function Helix({ position }: { position: [number, number, number] }) {
  const group = useRef<THREE.Group>(null);
  const cubes = useMemo(() => {
    const from = new THREE.Color("#22d3ee");
    const to = new THREE.Color("#f472b6");
    return Array.from({ length: 26 }, (_, i) => {
      const t = i / 25;
      const angle = t * Math.PI * 4;
      return {
        position: [Math.cos(angle) * 1.9, t * 5.4 - 2.7, Math.sin(angle) * 1.9] as [
          number,
          number,
          number,
        ],
        rotation: [angle, angle * 0.5, 0] as [number, number, number],
        color: from.clone().lerp(to, t),
      };
    });
  }, []);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.28;
  });
  return (
    <group ref={group} position={position}>
      {cubes.map((c, i) => (
        <mesh key={i} position={c.position} rotation={c.rotation}>
          <boxGeometry args={[0.32, 0.32, 0.32]} />
          <meshStandardMaterial color={c.color} roughness={0.3} metalness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

// Breathing wireframe orb for the contact chapter.
function PulseOrb({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.elapsedTime;
    mesh.current.scale.setScalar(1 + Math.sin(t * 1.4) * 0.12);
    mesh.current.rotation.y = t * 0.2;
    mesh.current.rotation.x = Math.sin(t * 0.3) * 0.3;
  });
  return (
    <group position={position}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[2, 2]} />
        <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
}

// Confetti of little floating shards scattered along the whole scroll depth.
function Shards({ count }: { count: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 22,
        y: 5 - Math.random() * (SPACING * (CHAPTERS - 1) + 12),
        z: -8 + Math.random() * 9,
        scale: 0.09 + Math.random() * 0.28,
        speed: 0.2 + Math.random() * 0.7,
        offset: Math.random() * Math.PI * 2,
      })),
    [count]
  );

  useEffect(() => {
    if (!mesh.current) return;
    const colors = PALETTE.map((c) => new THREE.Color(c));
    seeds.forEach((_, i) => mesh.current!.setColorAt(i, colors[i % colors.length]));
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
  }, [seeds]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.elapsedTime;
    seeds.forEach((s, i) => {
      dummy.position.set(s.x, s.y + Math.sin(t * s.speed + s.offset) * 0.7, s.z);
      dummy.rotation.set(t * s.speed + s.offset, t * s.speed * 0.7, s.offset);
      dummy.scale.setScalar(s.scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial roughness={0.35} metalness={0.5} flatShading />
    </instancedMesh>
  );
}

function World() {
  const world = useRef<THREE.Group>(null);
  const { size } = useThree();
  const isMobile = size.width < 768;
  const scale = isMobile ? 0.62 : 1;

  useFrame((_, delta) => {
    if (!world.current) return;
    const targetY = scrollBus.progress * SPACING * (CHAPTERS - 1) * scale;
    world.current.position.y = THREE.MathUtils.damp(
      world.current.position.y,
      targetY,
      3,
      delta
    );
    // Lean into fast scrolls for a bit of attitude.
    const lean = THREE.MathUtils.clamp(scrollBus.velocity * -0.004, -0.06, 0.06);
    world.current.rotation.z = THREE.MathUtils.damp(
      world.current.rotation.z,
      lean,
      2.5,
      delta
    );
  });

  return (
    <group ref={world} scale={scale}>
      {/* Chapter 0 — hero */}
      <HeroBlob position={[2.9, 0.2, -1.2]} />
      <FunKnot position={[-3.4, -1.6, -1.5]} />
      <mesh position={[0, 0, -6]}>
        <icosahedronGeometry args={[4.2, 1]} />
        <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.08} />
      </mesh>

      {/* Chapter 1 — about */}
      <Gyro position={[-3.1, -SPACING, -1.4]} />

      {/* Chapter 2 — experience */}
      <Helix position={[3.3, -SPACING * 2, -1.8]} />

      {/* Chapter 3 — projects */}
      <FunKnot
        position={[-3.2, -SPACING * 3, -1.4]}
        args={[1.05, 0.34, 256, 32, 2, 5]}
        spin={0.22}
      />

      {/* Chapter 4 — contact */}
      <PulseOrb position={[0, -SPACING * 4 - 0.5, -2.6]} />

      <Shards count={isMobile ? 24 : 46} />
      <Sparkles
        count={isMobile ? 80 : 160}
        scale={[20, SPACING * (CHAPTERS - 1) + 14, 10]}
        position={[0, -SPACING * 2, -3]}
        size={2.2}
        speed={0.35}
        opacity={0.55}
        color="#c4b5fd"
      />
    </group>
  );
}

export default function Scene() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      scrollBus.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      scrollBus.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 8]} intensity={1.1} />
        <pointLight
          position={[7, 4, 6]}
          intensity={70}
          distance={42}
          decay={2}
          color="#22d3ee"
        />
        <pointLight
          position={[-7, -5, 5]}
          intensity={85}
          distance={46}
          decay={2}
          color="#a78bfa"
        />
        <MoodLight />
        <CameraRig />
        <World />
      </Canvas>
    </div>
  );
}
