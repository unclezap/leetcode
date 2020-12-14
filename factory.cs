public class Order{}

public class Traveler
{
    public string Id { get; set;} 
    public string Name { get; set;}
    public string FavoriteColor { get; set;}
    public string AverageAirSpeedOfUnladenedSwallow {get; set;}
    public List<Order> Orders {get; set;}

    public static Traveler From Defaults ()
    {
        var traveler = new Customer { Status = "unapproved", Name = "Traveler"}
        traveler.Orders = new List<Order> ();
        return traveler;
    }

    public static Traveler FromExisting (IDictionary values)
    {

        var traveler = new Traveler ();

        return traveler
    }
}

public class TravelerFactory
{
    public Traveler FromDefaults ()
    {
        var traveler = new Traveler { Status = "unapproved", Name = "Traveler"};
        traveler.Orders = new List<Order> ();
        return traveler;
    }

    public Traveler FromExisting (IDictionary values)

    {
    var traveler = new Traveler ();

    return traveler
    }
}

var travelerFactory = new TravlerFactory();
var travler = travelerFactory.FromDefaults();