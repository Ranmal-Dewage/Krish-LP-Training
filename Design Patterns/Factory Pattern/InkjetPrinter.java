package inkjetprinter;

import printer.Printer;

public class InkjetPrinter extends Printer{

	@Override
	protected void printDetails(String data){
		System.out.println("Printing '" + data + "' via Inkjet Mode.......");
	} 
	
}