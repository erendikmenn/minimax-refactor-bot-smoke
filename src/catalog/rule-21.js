export const RULE_21 = {
  id: "rule-21",
  weight: 21,
  enabled: true
};

export function applyRule21(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_21.weight;
}
