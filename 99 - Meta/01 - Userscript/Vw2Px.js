function Vw2Px(rem, vw, screen = 375) {
  let adjst = 0.0083;
  const width = screen;
  const vwP = vw / 100;

  const isOdd = (vw * 10) % 2 === 1;

  if (!isOdd) {
    adjst = adjst * 2;
  }

  const remPx = Math.round((rem * 16) * 10000) / 10000;
  const vwPx = Math.round((width * vwP - adjst) * 10000) / 10000;

  const result = Math.round((remPx + vwPx) * 10000) / 10000;

  return result + "px";
}

module.exports = Vw2Px;
