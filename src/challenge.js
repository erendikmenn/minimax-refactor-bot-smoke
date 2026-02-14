export function scoreTicket(ticket) {
  const priority = Number(ticket?.priority ?? 0);
  const ageHours = Number(ticket?.ageHours ?? 0);
  const customerTier = String(ticket?.customerTier ?? "standard");

  let score = 0;

  if (priority >= 4) {
    score += 4;
  } else if (priority === 3) {
    score += 3;
  } else if (priority === 2) {
    score += 2;
  } else {
    score += 1;
  }

  if (ageHours > 72) {
    score += 4;
  } else if (ageHours > 24) {
    score += 2;
  } else if (ageHours > 8) {
    score += 1;
  }

  if (customerTier === "enterprise") {
    score += 3;
  } else if (customerTier === "pro") {
    score += 2;
  } else {
    score += 1;
  }

  let label = "low";
  if (score >= 10) {
    label = "critical";
  } else if (score >= 7) {
    label = "high";
  } else if (score >= 5) {
    label = "medium";
  }

  return { score, label };
}
