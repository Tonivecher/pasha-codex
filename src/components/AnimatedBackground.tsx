const noiseTexture = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/></filter><rect width='180' height='180' filter='url(#n)' opacity='1'/></svg>",
)}")`;

export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--graphite-950)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(243,238,229,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(243,238,229,0.035)_1px,transparent_1px)] bg-[size:8.333%_100%,100%_9rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_4%,rgba(138,98,66,0.18),transparent_26%),radial-gradient(circle_at_82%_12%,rgba(197,164,109,0.12),transparent_28%),linear-gradient(180deg,rgba(7,7,6,0)_0%,rgba(7,7,6,0.52)_48%,rgba(7,7,6,0.96)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
        style={{
          backgroundImage: noiseTexture,
          backgroundSize: "220px 220px",
        }}
      />
    </div>
  );
}
