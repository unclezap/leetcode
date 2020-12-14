public class Singleton
{
    private static Singleton _instance;

    protected Singleton () { }

    public static Singleton Instance ()
    {
        if (_instance == null) {
            _instance = new Singleton ();
        }
        return _instance;
    }
}