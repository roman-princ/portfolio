"use client";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      {children}
    </div>
  );
}