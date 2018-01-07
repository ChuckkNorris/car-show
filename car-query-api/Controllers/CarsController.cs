using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace car_query_api.Controllers
{
    [Route("api/[controller]/[action]")]
    public class CarsController : Controller
    {

        // GET api/cars/getyears
        [HttpGet]
        public async Task<Object> GetYears()
        {
            var response = await ExecuteCarQuery("getYears");
            return response;
        }

         [HttpGet]
        public async Task<Object> GetMakes(string year)
        {
            var response = await ExecuteCarQuery("getMakes", ("year", year));
            return response;
        }

         [HttpGet]
        public async Task<Object> GetModels(string year, string make)
        {
            var response = await ExecuteCarQuery("getModels",
                ("year", year),
                ("make", make)
            );
            return response;
        }

        [HttpGet]
        public async Task<Object> GetTrims(string year, string make, string model)
        {
            var response = await ExecuteCarQuery("getTrims",
                ("year", year),
                ("make", make),
                ("model", model)
            );
            return response;
        }

        [HttpGet]
        public async Task<Object> GetModel(string modelId)
        {
            var response = await ExecuteCarQuery("getModel", ("model", modelId));
            return response;
        }

        private async Task<Object> ExecuteCarQuery(string command, params (string, string)[] queryStringParams) {
             var client = new HttpClient();
            string fullUrl = $"https://www.carqueryapi.com/api/0.3/?cmd={command}";
            foreach (var param in queryStringParams) {
                fullUrl += $"&{param.Item1}={param.Item2}";
            }
            var response = await client.GetAsync(fullUrl);
            var resultString = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<Object>(resultString);
        }

    }
}
