export function hasShape(input, shape) {
  if (typeof input !== "object" || input == null) {
    return input === shape;
  }

  return Object.keys(shape).every((key) => hasShape(input[key], shape[key]));
}
