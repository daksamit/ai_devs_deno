export const getArrayFromLines = (str: string) =>
  str?.split("\n").filter(Boolean);
