export function summarizeMetrics(metrics) {
  const data = Array.isArray(metrics) ? metrics : [metrics];

  let min = Infinity;
  let max = -Infinity;
  let total = 0, count = 0;

  for (const item of data) {
    if (item == null || item === "") {
      continue;
    }

    const value = Number(item);
    if (!Number.isFinite(value)) {
      continue;
    }

    min = Math.min(min, value);
    max = Math.max(max, value);
    total += value;
    count += 1;
  }

  if (count === 0) {
    return "count=0; min=n/a; max=n/a; avg=n/a";
  }

  const avg = total / count;
  return `count=${count}; min=${min}; max=${max}; avg=${avg.toFixed(2)}`;
}
