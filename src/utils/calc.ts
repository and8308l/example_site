export function calcProgress(start: number, end: number, progress: number) {
  return progress < start
    ? 0
    : progress > end
    ? 1
    : (progress - start) / (end - start);
}

export function linspace(start: number, stop: number, numPoints: number) {
  if (numPoints <= 1) {
    return [start];
  }
  const result = [];
  const step = (stop - start) / (numPoints - 1);
  for (let i = 0; i < numPoints; i++) {
    result.push(start + i * step);
  }
  return result;
}
