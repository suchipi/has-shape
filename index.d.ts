export function hasShape<Input, Shape>(
  input: Input,
  shape: Shape
): input is Input & Shape;
