public class Order{}

public class Traveler
{
    public string Id { get; set;} 
    public string Name { get; set;}
    public string FavoriteColor { get; set;}
    public string AverageAirSpeedOfUnladenedSwallow {get; set;}

    public static Traveler From Defaults ()
    {
        var traveler = new Customer { Status = "unapproved", Name = "Travler"}
    }
}