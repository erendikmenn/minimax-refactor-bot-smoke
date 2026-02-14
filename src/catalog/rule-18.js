export const RULE_18 = {
  id: "rule-18",
  weight: 18,
  enabled: true
};

export function applyRule18(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_18.weight;
}
