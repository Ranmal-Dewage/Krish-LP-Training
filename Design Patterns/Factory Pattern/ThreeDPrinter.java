package threedprinter;

import printer.Printer;

public class ThreeDPrinter extends Printer{
	
	@Override
	protected void printDetails(String data){
		System.out.println("Printing '" + data + "' via 3D Mode.......");
	} 
	
}