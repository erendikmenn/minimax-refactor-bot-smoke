export const RULE_19 = {
  id: "rule-19",
  weight: 19,
  enabled: true
};

export function applyRule19(input) {
  const value = Number(input ?? 0);
  if (!Number.isFinite(value)) {
    return 0;
  }
  return value + RULE_19.weight;
}
