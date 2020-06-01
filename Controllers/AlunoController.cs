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
    public class AlunoController : Controller
    {
        [HttpGet]
        public IActionResult Get() {
            // return Ok("Duzer4");
            try
            {
                return Ok("");
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }
}