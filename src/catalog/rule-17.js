export const RULE_17 = {
  id: "rule-17",
  weight: 17,
  enabled: true
};

export function applyRule17(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_17.weight;
}
