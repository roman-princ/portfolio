"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles } from "@react-three/drei";
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

const CHASSIS = { color: "#2a2440", metalness: 0.8, roughness: 0.3 };

// Rows of glowing "code" — thin bars in palette colors, like a blurred editor.
function CodeLines({
  width,
  count,
  top,
  gap = 0.13,
  z = 0.01,
  colors = ["#22d3ee", "#a78bfa", "#f472b6", "#34d399", "#e8e6f5"],
}: {
  width: number;
  count: number;
  top: number;
  gap?: number;
  z?: number;
  colors?: string[];
}) {
  const lines = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        w: width * (0.35 + Math.random() * 0.55),
        x: -width / 2,
        y: top - i * gap,
        color: colors[Math.floor(Math.random() * colors.length)],
      })),
    [count, width, top, gap, colors]
  );
  return (
    <group>
      {lines.map((l, i) => (
        <mesh key={i} position={[l.x + l.w / 2, l.y, z]}>
          <boxGeometry args={[l.w, 0.05, 0.01]} />
          <meshBasicMaterial color={l.color} />
        </mesh>
      ))}
    </group>
  );
}

// Open laptop with a code-filled screen.
function DevLaptop({
  position,
  rotation = [0, 0, 0],
  scale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  return (
    <Float speed={1.3} rotationIntensity={0.45} floatIntensity={0.8}>
      <group position={position} rotation={rotation} scale={scale}>
        {/* base / keyboard deck */}
        <RoundedBox args={[2.2, 0.12, 1.5]} radius={0.05} smoothness={3}>
          <meshStandardMaterial {...CHASSIS} />
        </RoundedBox>
        <mesh position={[0, 0.062, 0.08]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.95, 1.15]} />
          <meshBasicMaterial color="#171233" />
        </mesh>
        {/* lid, tilted open ~110° */}
        <group position={[0, 0.05, -0.72]} rotation={[-0.35, 0, 0]}>
          <RoundedBox
            args={[2.2, 1.45, 0.08]}
            radius={0.035}
            smoothness={3}
            position={[0, 0.72, 0]}
          >
            <meshStandardMaterial {...CHASSIS} />
          </RoundedBox>
          {/* display */}
          <mesh position={[0, 0.72, 0.045]}>
            <planeGeometry args={[2.02, 1.28]} />
            <meshBasicMaterial color="#0d0a22" />
          </mesh>
          <group position={[0, 0.72, 0]}>
            <CodeLines width={1.7} count={8} top={0.5} z={0.05} />
          </group>
        </group>
      </group>
    </Float>
  );
}

// Floating terminal panel with traffic lights and green prompt lines.
function TerminalPanel({
  position,
  rotation = [0, 0, 0],
  scale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[2.6, 1.7, 0.08]} radius={0.035} smoothness={3}>
          <meshStandardMaterial color="#141026" metalness={0.6} roughness={0.35} />
        </RoundedBox>
        {/* title bar */}
        <mesh position={[0, 0.72, 0.045]}>
          <boxGeometry args={[2.5, 0.18, 0.01]} />
          <meshBasicMaterial color="#241d3f" />
        </mesh>
        {["#f87171", "#fbbf24", "#34d399"].map((c, i) => (
          <mesh key={c} position={[-1.1 + i * 0.15, 0.72, 0.06]}>
            <sphereGeometry args={[0.04, 12, 12]} />
            <meshBasicMaterial color={c} />
          </mesh>
        ))}
        <CodeLines
          width={2.1}
          count={7}
          top={0.42}
          z={0.05}
          colors={["#34d399", "#34d399", "#e8e6f5", "#22d3ee"]}
        />
      </group>
    </Float>
  );
}

// Little rocket — for the "Where I've shipped" chapter.
function Rocket({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const flame = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!flame.current) return;
    const f = 1 + Math.sin(clock.elapsedTime * 22) * 0.25;
    flame.current.scale.set(1, f, 1);
  });
  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={1.1}>
      <group position={position} rotation={[0, 0, -0.5]} scale={scale}>
        {/* body */}
        <mesh>
          <cylinderGeometry args={[0.28, 0.34, 1.3, 20]} />
          <meshStandardMaterial color="#e8e6f5" metalness={0.5} roughness={0.25} />
        </mesh>
        {/* nose cone */}
        <mesh position={[0, 0.92, 0]}>
          <coneGeometry args={[0.29, 0.55, 20]} />
          <meshStandardMaterial color="#f472b6" metalness={0.4} roughness={0.3} />
        </mesh>
        {/* porthole */}
        <mesh position={[0, 0.25, 0.29]}>
          <sphereGeometry args={[0.11, 14, 14]} />
          <meshBasicMaterial color="#22d3ee" />
        </mesh>
        {/* fins */}
        {[0, (Math.PI * 2) / 3, (Math.PI * 4) / 3].map((a) => (
          <mesh
            key={a}
            position={[Math.cos(a) * 0.3, -0.62, Math.sin(a) * 0.3]}
            rotation={[0, -a, 0]}
          >
            <boxGeometry args={[0.07, 0.45, 0.32]} />
            <meshStandardMaterial color="#a78bfa" metalness={0.5} roughness={0.3} />
          </mesh>
        ))}
        {/* flame */}
        <mesh ref={flame} position={[0, -0.95, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.2, 0.6, 14]} />
          <meshBasicMaterial color="#fbbf24" transparent opacity={0.85} />
        </mesh>
      </group>
    </Float>
  );
}

// Browser window with traffic lights, URL pill and a wireframe hero layout.
function BrowserPanel({
  position,
  rotation = [0, 0, 0],
  scale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[2.8, 2, 0.08]} radius={0.035} smoothness={3}>
          <meshStandardMaterial color="#191331" metalness={0.6} roughness={0.35} />
        </RoundedBox>
        {/* toolbar */}
        <mesh position={[0, 0.86, 0.045]}>
          <boxGeometry args={[2.7, 0.22, 0.01]} />
          <meshBasicMaterial color="#241d3f" />
        </mesh>
        {["#f87171", "#fbbf24", "#34d399"].map((c, i) => (
          <mesh key={c} position={[-1.2 + i * 0.15, 0.86, 0.06]}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color={c} />
          </mesh>
        ))}
        {/* URL pill */}
        <mesh position={[0.25, 0.86, 0.055]}>
          <boxGeometry args={[1.7, 0.11, 0.01]} />
          <meshBasicMaterial color="#0d0a22" />
        </mesh>
        {/* page: hero block + text + two cards */}
        <mesh position={[0, 0.35, 0.05]}>
          <boxGeometry args={[2.4, 0.55, 0.01]} />
          <meshBasicMaterial color="#7c3aed" />
        </mesh>
        <CodeLines
          width={2.4}
          count={3}
          top={-0.08}
          z={0.05}
          colors={["#e8e6f5", "#a78bfa"]}
        />
        {[-0.63, 0.63].map((x) => (
          <mesh key={x} position={[x, -0.62, 0.05]}>
            <boxGeometry args={[1.14, 0.45, 0.01]} />
            <meshBasicMaterial color={x < 0 ? "#22d3ee" : "#f472b6"} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Smartphone with a glowing app screen.
function FunPhone({
  position,
  rotation = [0, 0, 0],
  scale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  return (
    <Float speed={1.7} rotationIntensity={0.6} floatIntensity={1.2}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[0.82, 1.62, 0.1]} radius={0.045} smoothness={4}>
          <meshStandardMaterial {...CHASSIS} />
        </RoundedBox>
        <mesh position={[0, 0, 0.055]}>
          <planeGeometry args={[0.7, 1.48]} />
          <meshBasicMaterial color="#0d0a22" />
        </mesh>
        {/* notch camera */}
        <mesh position={[0, 0.66, 0.06]}>
          <sphereGeometry args={[0.028, 10, 10]} />
          <meshBasicMaterial color="#241d3f" />
        </mesh>
        {/* app header + grid of app tiles */}
        <mesh position={[0, 0.42, 0.06]}>
          <boxGeometry args={[0.6, 0.3, 0.01]} />
          <meshBasicMaterial color="#7c3aed" />
        </mesh>
        {[0, 1, 2, 3].map((i) => (
          <mesh
            key={i}
            position={[i % 2 ? 0.17 : -0.17, 0.05 - Math.floor(i / 2) * 0.4, 0.06]}
          >
            <boxGeometry args={[0.26, 0.26, 0.01]} />
            <meshBasicMaterial
              color={["#22d3ee", "#f472b6", "#34d399", "#a78bfa"][i]}
            />
          </mesh>
        ))}
        {/* home indicator */}
        <mesh position={[0, -0.62, 0.06]}>
          <boxGeometry args={[0.3, 0.035, 0.01]} />
          <meshBasicMaterial color="#e8e6f5" />
        </mesh>
      </group>
    </Float>
  );
}

// Envelope for the contact chapter.
function Envelope({
  position,
  rotation = [0, 0, 0],
  scale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  return (
    <Float speed={1.5} rotationIntensity={0.55} floatIntensity={1.1}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[1.5, 1, 0.09]} radius={0.04} smoothness={3}>
          <meshStandardMaterial color="#e8e6f5" metalness={0.3} roughness={0.35} />
        </RoundedBox>
        {/* flap seams forming the V */}
        <mesh position={[-0.37, 0.14, 0.05]} rotation={[0, 0, -0.55]}>
          <boxGeometry args={[0.92, 0.045, 0.01]} />
          <meshBasicMaterial color="#a78bfa" />
        </mesh>
        <mesh position={[0.37, 0.14, 0.05]} rotation={[0, 0, 0.55]}>
          <boxGeometry args={[0.92, 0.045, 0.01]} />
          <meshBasicMaterial color="#a78bfa" />
        </mesh>
        {/* seal */}
        <mesh position={[0, -0.02, 0.06]}>
          <sphereGeometry args={[0.09, 14, 14]} />
          <meshBasicMaterial color="#f472b6" />
        </mesh>
      </group>
    </Float>
  );
}

// Paper plane circling the contact orb.
function PaperPlane({
  center,
  radius = 3.4,
}: {
  center: [number, number, number];
  radius?: number;
}) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime * 0.55;
    group.current.position.set(
      center[0] + Math.cos(t) * radius,
      center[1] + Math.sin(t * 1.7) * 0.5,
      center[2] + Math.sin(t) * radius * 0.55
    );
    group.current.rotation.y = -t;
    group.current.rotation.z = Math.sin(t) * 0.3;
  });
  return (
    <group ref={group}>
      {/* flattened 4-sided cone reads as a paper dart, nose along +Z */}
      <mesh rotation={[Math.PI / 2, Math.PI / 4, 0]} scale={[0.55, 1, 1]}>
        <coneGeometry args={[0.28, 0.95, 4, 1]} />
        <meshStandardMaterial
          color="#f5f3ff"
          metalness={0.2}
          roughness={0.4}
          flatShading
        />
      </mesh>
    </group>
  );
}

// Developer fuel — mug with rising steam.
function CoffeeMug({
  position,
  rotation = [0, 0, 0],
  scale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  const steam = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    steam.current?.children.forEach((puff, i) => {
      const phase = (clock.elapsedTime * 0.35 + i / 3) % 1;
      puff.position.y = 0.6 + phase * 0.9;
      puff.scale.setScalar(0.07 + phase * 0.06);
      const mat = (puff as THREE.Mesh).material as THREE.MeshBasicMaterial;
      mat.opacity = 0.55 * (1 - phase);
    });
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
      <group position={position} rotation={rotation} scale={scale}>
        {/* body */}
        <mesh>
          <cylinderGeometry args={[0.5, 0.42, 1, 26]} />
          <meshStandardMaterial color="#a78bfa" metalness={0.35} roughness={0.35} />
        </mesh>
        {/* coffee surface */}
        <mesh position={[0, 0.51, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.42, 26]} />
          <meshBasicMaterial color="#31200f" />
        </mesh>
        {/* handle */}
        <mesh position={[0.5, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <torusGeometry args={[0.3, 0.06, 12, 24, Math.PI]} />
          <meshStandardMaterial color="#a78bfa" metalness={0.35} roughness={0.35} />
        </mesh>
        {/* steam puffs */}
        <group ref={steam}>
          {[0, 1, 2].map((i) => (
            <mesh key={i} position={[(i - 1) * 0.14, 0.7, 0]}>
              <sphereGeometry args={[1, 10, 10]} />
              <meshBasicMaterial color="#e8e6f5" transparent opacity={0.4} />
            </mesh>
          ))}
        </group>
      </group>
    </Float>
  );
}

// Mortarboard for the CTU student chapter.
function GradCap({
  position,
  rotation = [0, 0, 0],
  scale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} rotation={rotation} scale={scale}>
        {/* skull cap — 4-sided taper reads as the square base */}
        <mesh position={[0, -0.2, 0]} rotation={[0, Math.PI / 4, 0]}>
          <cylinderGeometry args={[0.5, 0.58, 0.4, 4]} />
          <meshStandardMaterial {...CHASSIS} flatShading />
        </mesh>
        {/* board */}
        <mesh position={[0, 0.04, 0]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[1.55, 0.08, 1.55]} />
          <meshStandardMaterial {...CHASSIS} />
        </mesh>
        {/* button */}
        <mesh position={[0, 0.12, 0]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshBasicMaterial color="#fbbf24" />
        </mesh>
        {/* tassel */}
        <mesh position={[0.78, -0.14, 0.78]} rotation={[0, 0, 0.08]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
          <meshBasicMaterial color="#fbbf24" />
        </mesh>
        <mesh position={[0.8, -0.45, 0.8]}>
          <coneGeometry args={[0.06, 0.18, 10]} />
          <meshBasicMaterial color="#fbbf24" />
        </mesh>
      </group>
    </Float>
  );
}

// Briefcase with neon seam — the freelance work chapter.
function Briefcase({
  position,
  rotation = [0, 0, 0],
  scale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  return (
    <Float speed={1.4} rotationIntensity={0.45} floatIntensity={0.9}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[1.6, 1.05, 0.5]} radius={0.08} smoothness={3}>
          <meshStandardMaterial color="#4c1d95" metalness={0.45} roughness={0.4} />
        </RoundedBox>
        {/* lid seam */}
        <mesh position={[0, 0.18, 0.255]}>
          <boxGeometry args={[1.58, 0.035, 0.01]} />
          <meshBasicMaterial color="#22d3ee" />
        </mesh>
        {/* handle */}
        <mesh position={[0, 0.6, 0]}>
          <torusGeometry args={[0.24, 0.05, 10, 22, Math.PI]} />
          <meshStandardMaterial color="#2a2440" metalness={0.6} roughness={0.35} />
        </mesh>
        {/* latches */}
        {[-0.5, 0.5].map((x) => (
          <mesh key={x} position={[x, 0.18, 0.26]}>
            <boxGeometry args={[0.14, 0.09, 0.03]} />
            <meshBasicMaterial color="#fbbf24" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Classic database cylinder stack.
function DatabaseStack({
  position,
  rotation = [0, 0, 0],
  scale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  return (
    <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.9}>
      <group position={position} rotation={rotation} scale={scale}>
        {["#22d3ee", "#a78bfa", "#f472b6"].map((color, i) => (
          <mesh key={color} position={[0, 0.44 * (1 - i), 0]}>
            <cylinderGeometry args={[0.58, 0.58, 0.34, 28]} />
            <meshStandardMaterial color={color} metalness={0.55} roughness={0.3} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Chat bubble with a live typing indicator.
function ChatBubble({
  position,
  rotation = [0, 0, 0],
  scale = 1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  const dots = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    dots.current?.children.forEach((dot, i) => {
      dot.position.y = Math.abs(Math.sin(clock.elapsedTime * 3.2 - i * 0.55)) * 0.1;
    });
  });
  return (
    <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.1}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[1.5, 1, 0.3]} radius={0.14} smoothness={4}>
          <meshStandardMaterial color="#7c3aed" metalness={0.35} roughness={0.35} />
        </RoundedBox>
        {/* tail */}
        <mesh position={[-0.5, -0.6, 0]} rotation={[0, 0, 0.7]}>
          <coneGeometry args={[0.17, 0.42, 4]} />
          <meshStandardMaterial color="#7c3aed" metalness={0.35} roughness={0.35} />
        </mesh>
        {/* typing dots */}
        <group ref={dots} position={[0, -0.02, 0.17]}>
          {[-0.35, 0, 0.35].map((x, i) => (
            <mesh key={i} position={[x, 0, 0]}>
              <sphereGeometry args={[0.095, 12, 12]} />
              <meshBasicMaterial color="#f5f3ff" />
            </mesh>
          ))}
        </group>
      </group>
    </Float>
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
      {/* Chapter 0 — hero: the dev's desk */}
      <DevLaptop
        position={[3, 0, -1.1]}
        rotation={[0.3, -0.5, 0.03]}
        scale={1.25}
      />
      <CoffeeMug
        position={[-3, 1.6, -1.7]}
        rotation={[0.15, 0.3, -0.1]}
        scale={0.8}
      />
      <FunKnot position={[-3.4, -1.7, -1.6]} />

      {/* Chapter 1 — about: student + the arsenal */}
      <GradCap
        position={[-3.1, -SPACING + 0.6, -1.3]}
        rotation={[0.2, -0.3, -0.12]}
        scale={1.1}
      />
      <TerminalPanel
        position={[3.3, -SPACING + 0.9, -1.9]}
        rotation={[0.05, -0.45, 0.04]}
        scale={0.95}
      />

      {/* Chapter 2 — experience: freelance work, shipped */}
      <Rocket position={[-3.3, -SPACING * 2 + 0.4, -1.5]} scale={1.15} />
      <Briefcase
        position={[3.2, -SPACING * 2 + 0.3, -1.3]}
        rotation={[0.1, -0.35, 0.06]}
        scale={1.1}
      />

      {/* Chapter 3 — projects: web + mobile + data */}
      <DatabaseStack
        position={[-3.2, -SPACING * 3 + 0.4, -1.4]}
        rotation={[0.12, 0.3, 0.05]}
        scale={1}
      />
      <BrowserPanel
        position={[3.1, -SPACING * 3 + 0.8, -1.8]}
        rotation={[0.04, -0.5, 0.03]}
        scale={0.95}
      />
      <FunPhone
        position={[2, -SPACING * 3 - 1.9, -0.9]}
        rotation={[0.15, 0.35, -0.15]}
        scale={0.85}
      />

      {/* Chapter 4 — contact: send the message */}
      <Envelope
        position={[-3.1, -SPACING * 4 + 0.8, -1.5]}
        rotation={[0.1, 0.4, -0.08]}
        scale={1.05}
      />
      <ChatBubble
        position={[3.1, -SPACING * 4 + 0.5, -1.4]}
        rotation={[0.05, -0.35, 0.05]}
        scale={1}
      />
      <PaperPlane center={[0, -SPACING * 4 - 0.6, -2.6]} radius={3} />

      <Shards count={isMobile ? 16 : 30} />
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
