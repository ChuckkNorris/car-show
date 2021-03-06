import _ from 'lodash';

const BASE_URL = 'https://www.carqueryapi.com/api/0.3';

const carService = {
  getYears: () => {
    const response = executeCarQuery('getYears');
    return response.years;
  },
  getMakes: (year) => {
    const response = executeCarQuery('getMakes', {
      year
    });
    return response.years;
  },
  getModels: (year, make) => {
    const response = executeCarQuery('getModels', {
      year,
      make: make.toLowerCase()
    });
    return response;
  },
  getTrims: (year, make, model) => {
    const response = executeCarQuery('getTrims', {
      year,
      make: make.toLowerCase(),
      model: model.toLowerCase()
    });
    return response;
  },
  getModel: (modelId) => {
    const response = executeCarQuery('getModel', {
      modelId 
    });
    return response;
  }
};

const executeCarQuery = (endpointName, params) => {
  let url = new URL(`http://localhost:5000/api/cars/${endpointName}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  return new Promise((resolve, reject) => {
    fetch(url).then(response => {
      response.json().then(json => {
        if (json.error) reject(json);
        else resolve(json);
      })
    })
  });
  // const response = await fetch(url);
  // const toReturn = await response.json();
  // return toReturn;
}

export default carService;


