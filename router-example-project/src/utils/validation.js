export function isRequiredCheck(value) {
  console.log("!!!!Validating value:", value);
  return value && value.trim().length > 0;
}

export function isValidImage(value) {
  return (
    value &&
    (value.endsWith(".jpg") ||
      value.endsWith(".jpeg") ||
      value.endsWith(".png"))
  );
}
