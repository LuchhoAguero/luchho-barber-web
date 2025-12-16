export const cleanPhone = (phone = "") => {
  let digits = String(phone).replace(/\D+/g, "");
  if (digits.length > 8) {
    if (digits.startsWith("54")) return digits;
    if (digits.startsWith("0")) digits = digits.substring(1);
    return "54" + digits;
  }
  return digits;
};