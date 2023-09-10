using System.ComponentModel.DataAnnotations;

namespace ravens_api.Entities
{
    public interface TeamMember
    {
         [Required]
         public string Name { get; set; }

         [Required]
         public string Pronouns { get; set; }

         public string DietaryRequirements { get; set; }

         public string Allergies { get; set; }
    }
}