export const RULE_37 = {
  id: "rule-37",
  weight: 37,
  enabled: true
};

export function applyRule37(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_37.weight;
}
