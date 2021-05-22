package laserprinter;

import printer.Printer;

public class LaserPrinter extends Printer{
	
	@Override
	protected void printDetails(String data){
		System.out.println("Printing '" + data + "' via Laser Mode.......");
	} 
	
}