import java.util.*;
class factors 
{
    public static void main(String args[])
    {
        Scanner s1 = new Scanner(System.in);
        System.out.println("Enter any number");
        int n = s1.nextInt;
        int i = 2;
        for(i = 2 ; i <= n ; ++i)
        {
            if(n % i == 0)
            {
                System.out.print(i+" ");
            }
        }
        System.out.print(" Factors of "+n+" are  :");
    }
}