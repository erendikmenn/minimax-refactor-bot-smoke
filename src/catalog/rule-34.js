export const RULE_34 = {
  id: "rule-34",
  weight: 34,
  enabled: true
};

export function applyRule34(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_34.weight;
}
