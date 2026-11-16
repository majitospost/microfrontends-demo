import React, { useMemo } from 'react';

// useMemo guards the scale/bar-geometry math so it's only recomputed
// when the underlying data actually changes, not on every render this
// component's parent triggers (e.g. while the user is typing elsewhere).
export function BarChart({ data, width = 420, height = 200, highlightLabel }) {
  const bars = useMemo(() => {
    const max = Math.max(1, ...data.map((d) => d.value));
    const barWidth = width / data.length - 12;
    return data.map((d, i) => ({
      ...d,
      x: i * (width / data.length) + 6,
      barHeight: (d.value / max) * (height - 30),
      barWidth,
    }));
  }, [data, width, height]);

  return (
    <svg width={width} height={height} role="img" aria-label="Reporte de tickets por departamento">
      {bars.map((bar) => (
        <g key={bar.label}>
          <rect
            x={bar.x}
            y={height - 20 - bar.barHeight}
            width={bar.barWidth}
            height={bar.barHeight}
            fill={bar.label === highlightLabel ? '#DEE22A' : '#039fb8'}
            rx={4}
          />
          <text x={bar.x + bar.barWidth / 2} y={height - 5} fontSize="11" textAnchor="middle" fill="#132e53">
            {bar.label}
          </text>
          <text x={bar.x + bar.barWidth / 2} y={height - 24 - bar.barHeight} fontSize="11" textAnchor="middle" fill="#132e53">
            {bar.value}
          </text>
        </g>
      ))}
    </svg>
  );
}
