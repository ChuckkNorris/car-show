import _ from 'lodash';

export const getLastModelTrimSpecs = (carDetailsResponse) => {
  const trims = _.get(carDetailsResponse, 'Trims', []) || [];
  if (trims.length < 1)
    return undefined;
  
  const trim = trims[trims.length - 1];
  const specs = Object.keys(trim).map(specName => {
    const specValue = trim[specName];
    return {
      name: specName,
      value: specValue
    };
  });
  return specs;
}
