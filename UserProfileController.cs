using GuruSki.API.DataProvider;
using GuruSki.API.EntityModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;




namespace GuruSki.API.Controllers
{
    /// <summary>
    /// User Controller
    /// </summary>
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly GuruSkiDBContext dBContext;

        /// <summary>
        /// Inject DataAccess Class Layer
        /// </summary>
        public UserProfileController(GuruSkiDBContext dBContext)
        {
            this.dBContext = dBContext;
        }

        /// <summary>
        /// localhost:PortNumber/consultants
        /// return 200 ok
        /// </summary>
        [HttpGet]
        [Route("consultants")]
        public IActionResult GetAllUserProfiles() 
        { 
            var users = dBContext.Users.ToList();

            return Ok(users);
        }

        /// <summary>
        /// localhost:PortNumber/Id
        /// return 200 ok
        /// </summary>
        [HttpGet]
        [Route("{Id}")]
        public IActionResult GetUserProfileById([FromRoute] string Id)
        {
            var user = dBContext.Users.FirstOrDefault(x => x.UserId == Id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        /// <summary>
        /// localhost:PortNumber/create
        /// retrun 201
        /// </summary>
        [HttpPost]
        [Route("create")]
        public IActionResult PostUserProfile([FromBody] User userProfile)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return bad request if model validation fails
            }

            // Check if a user with the same UserId already exists
            var existingUser = dBContext.Users.FirstOrDefault(u => u.UserId == userProfile.UserId);

            if (existingUser != null)
            {
                // Return a conflict response (HTTP 409) indicating the user already exists
                return Conflict($"User with ID {userProfile.UserId} already exists.");
            }

            // If the user doesn't exist, add it to the database
            dBContext.Users.Add(userProfile);
            dBContext.SaveChanges();

            return CreatedAtAction(nameof(GetUserProfileById), new { Id = userProfile.UserId }, userProfile);
        }

        /// <summary>
        /// localhost:PortNumber/Id
        /// retrun 
        /// </summary>
        [HttpPatch]
        [Route("{Id}")]
        public IActionResult UpdateUserProfile([FromRoute] string Id, [FromBody] User updateModel) 
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return bad request if model validation fails
            }

            var existingUser = dBContext.Users.FirstOrDefault(x => x.UserId == Id);

            if (existingUser == null)
            {
                return NotFound(); // Return 404 if user not found
            }

            // Update user properties based on the received updateModel
            existingUser.UserGivenName = updateModel.UserGivenName;
            existingUser.UserFamilyName = updateModel.UserFamilyName;
            existingUser.UserNicknameName = updateModel.UserNicknameName;
            existingUser.UserEmail = updateModel.UserEmail;
            existingUser.UserImageUrl = updateModel.UserImageUrl;

            dBContext.SaveChanges(); // Save changes to the database

            return Ok(existingUser); // Return updated user with 200 OK
        }

        /// <summary>
        /// localhost:PortNumber/delete
        /// retrun 
        /// </summary>
        [HttpDelete]
        [Route("{Id}")]
        public IActionResult DeleteUserProfile([FromRoute] string Id) 
        {
            try
            {
                var userToDelete = dBContext.Users.FirstOrDefault(x => x.UserId == Id);

                if (userToDelete == null)
                {
                    return NotFound(); // If the user with the given ID is not found
                }

                dBContext.Users.Remove(userToDelete);
                dBContext.SaveChanges();

                return NoContent(); // If the user is successfully deleted
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}"); // Handle other exceptions
            }

        }


       
    }
}
