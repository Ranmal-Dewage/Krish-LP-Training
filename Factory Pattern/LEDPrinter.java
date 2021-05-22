package ledprinter;

import printer.Printer;

public class LEDPrinter extends Printer{
	
	@Override
	protected void printDetails(String data){
		System.out.println("Printing '" + data + "' via LED Mode.......");
	} 
	
}