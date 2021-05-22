package printerfactory;

import printer.Printer;
import printerenum.PrinterType;
import inkjetprinter.InkjetPrinter;
import laserprinter.LaserPrinter;
import ledprinter.LEDPrinter;
import threedprinter.ThreeDPrinter;

public class PrinterFactory{
	
	public static Printer getPrinter(PrinterType printerType){
		
		switch(printerType){
			
			case INKJET:
				return new InkjetPrinter();
							
			case LASER:
				return new LaserPrinter();
							
			case LED:
				return new LEDPrinter();
							
			case THREE_D:
				return new ThreeDPrinter();
								
			default:
				return null;	
		}
		
	}
	
}