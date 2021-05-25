package printer;

public class Printer{
	
	public Printer(){
		
	}
	
	public void printSingleSide(String data){
		System.out.println("Printing '" + data + "' on One-Side Only.........");
	}
	
	public void printDoubleSides(String data){
		System.out.println("Printing '" + data + "' on Both-Sides.........");
	}

}