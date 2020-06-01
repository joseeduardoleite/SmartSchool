using System;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SmartSchool.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfessorController: ControllerBase
    {
        [HttpGet]
        public IActionResult Get() {
            return Ok("Eduardo");
        }
    }
}