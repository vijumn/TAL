namespace TAL.Model.Premium
{
    public class Occupation
    {
        public int OccupationId { get; set; }
        public string Name { get; set; }

        public Rating Rating { get; set; }

        public int RatingId { get; set; }
    }
}