export const RULE_15 = {
  id: "rule-15",
  weight: 15,
  enabled: true
};

export function applyRule15(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_15.weight;
}
