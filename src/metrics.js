export function summarizeMetrics(metrics) {
  const data = Array.isArray(metrics) ? metrics : [];

  let min = Infinity;
  let max = -Infinity;
  let total = 0;
  let count = 0;

  for (let i = 0; i < data.length; i += 1) {
    const value = Number(data[i]);
    if (!Number.isFinite(value)) {
      continue;
    }

    if (value < min) {
      min = value;
    }
    if (value > max) {
      max = value;
    }

    total = total + value;
    count = count + 1;
  }

  if (count === 0) {
    return "count=0; min=n/a; max=n/a; avg=n/a";
  }

  const avg = total / count;
  let out = "";
  out += "count=" + count;
  out += "; min=" + min;
  out += "; max=" + max;
  out += "; avg=" + avg.toFixed(2);
  return out;
}
