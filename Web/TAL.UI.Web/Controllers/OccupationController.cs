﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TAL.Database.Repository;
using TAL.Model.Premium;

namespace TAL.UI.Web.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class OccupationController : ControllerBase
    {
        private readonly IOccupationRepository _occupationRepository;
        public OccupationController(IOccupationRepository occupationRepository)
        {
            _occupationRepository = occupationRepository;

        }

        [Route("types")]
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<OccupationModel>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetOccupationList()
        {
            var occupationList = await _occupationRepository.ListAllAsync();
                
            return Ok(occupationList);
        }

    }
}