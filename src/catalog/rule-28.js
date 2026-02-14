export const RULE_28 = {
  id: "rule-28",
  weight: 28,
  enabled: true
};

export function applyRule28(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_28.weight;
}
