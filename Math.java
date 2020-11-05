import jdk.jfr.Timestamp;

public final class Math {
    
    public static int add(int first, int second) {
        return first + second;
    }

    public static int multiply(int first, int second) {
        return first * second;
    }

    public static double divide(int dividend, int divisor) {
        if (divisor == 0)
            throw new IllegalArgumentException("You can't divide by zero!!!!");

        return dividend/divisor;
    }
}

public class MathTests {

    @Test
    public void add_TwoPlusTwo_ReturnsFour() {
        final int expected = 4;

        finalint actual = Math.add(2,2);

        Assert.assertEquals(actual, expected);
    }

}