export const RULE_33 = {
  id: "rule-33",
  weight: 33,
  enabled: true
};

export function applyRule33(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_33.weight;
}
