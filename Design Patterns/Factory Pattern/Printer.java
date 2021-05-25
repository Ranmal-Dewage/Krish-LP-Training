package printer;

public abstract class Printer{

	protected void powerOn(){
		System.out.println("Powering On Printer.......");
	}
	
	protected void powerOff(){
		System.out.println("Powering Off Printer.......");
	}
	
	protected abstract void printDetails(String data);
	
	public void operatePrinter(String data){
		powerOn();
		printDetails(data);
		powerOff();
		System.out.println("\n");
	}
	
}