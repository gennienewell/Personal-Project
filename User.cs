using System.ComponentModel.DataAnnotations;

namespace GuruSki.API.EntityModels
{
    public class User
    {
        public string UserId { get; set; }

        public string UserName { get; set; }

        public string UserEmail { get; set; }

        public string? UserGivenName { get; set; }
        public string? UserFamilyName { get; set; }
        public string? UserNicknameName { get; set; }
        
        public string? UserImageUrl { get; set; }

        //public Guid ScheduleId { get; set; }
        //public Schedule? UserSchedule { get; set; }
    }
}
