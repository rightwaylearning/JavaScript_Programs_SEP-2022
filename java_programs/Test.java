import java.io.File;

class Test{

    public static void main(String args[]){
       try{
       File f = new File("");
       f.createNewFile();
        System.out.println("file is created");
       }catch(Exception e){
         System.out.println(e);
        }
    }


}