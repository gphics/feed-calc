export default function resultCalc({
  name,
  seedInput,
  inputStandard,
  outputStandard,
  landSize,
  landPrice,
  fertilizerName,
  fertilizerSize,
  fertilizerPrice,
  seedPrice,
  herbicidePrice,
}) {
  if (+seedInput < inputStandard || fertilizerSize < 200 || landSize < 1) {
    alert(
      "inputed value must be greater or equal to the standard value in the computation table."
    );
    return false;
  }

  const obj = {
    name,
    fertilizerName,
    totalInputCost: 0,
    totalOutputCost: 0,
    profit: 0,
    landInputPrice: 0,
    fertilizerInputPrice: 0,
    herbicideInputPrice: 0,
    seedInputPrice:0
  };
  const inputRes = seedInput / inputStandard;

  const seedOutput = Math.round(inputRes * outputStandard);
  // console.log(seedInput, inputStandard,inputRes, seedOutput)
  if (seedPrice) {
    obj.seedInputPrice = seedPrice * seedInput;
    obj.totalOutputCost = seedPrice * seedOutput;
    obj.totalInputCost += obj.seedInputPrice;
  }

  if (fertilizerPrice) {
    obj.fertilizerInputPrice = fertilizerSize * fertilizerPrice;
    obj.totalInputCost += obj.fertilizerInputPrice;
  }
  if (landPrice) {
    obj.landInputPrice = landPrice * landSize;
    obj.totalInputCost += obj.landInputPrice;
  }
  if (herbicidePrice) {
    obj.totalInputCost += herbicidePrice;
  }
  obj.profit = obj.totalOutputCost - obj.totalInputCost;
  return obj;
}
