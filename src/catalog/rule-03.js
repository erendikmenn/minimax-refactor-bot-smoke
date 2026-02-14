export const RULE_03 = {
  id: "rule-03",
  weight: 03,
  enabled: true
};

export function applyRule03(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_03.weight;
}
