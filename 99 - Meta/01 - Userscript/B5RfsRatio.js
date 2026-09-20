function B5RfsRatio(rem, vw, screen = 375) {
  let adjst = 0.0083;
  const width = screen;
  const vwP = vw / 100;

  const isOdd = (vw * 10) % 2 === 1;

  if (!isOdd) {
    adjst = adjst * 2;
  }

  const remPx = Math.round((rem * 16) * 10000) / 10000;
  const vwPx = Math.round((width * vwP - adjst) * 10000) / 10000;

  const vw2Px = remPx + vwPx;

  return Math.round((vw2Px / 16) * 1000) / 1000;
}

module.exports = B5RfsRatio;
