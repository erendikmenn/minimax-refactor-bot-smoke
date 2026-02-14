export const RULE_16 = {
  id: "rule-16",
  weight: 16,
  enabled: true
};

export function applyRule16(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_16.weight;
}
