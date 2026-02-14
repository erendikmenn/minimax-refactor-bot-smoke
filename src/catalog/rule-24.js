export const RULE_24 = {
  id: "rule-24",
  weight: 24,
  enabled: true
};

export function applyRule24(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_24.weight;
}
