package main;

import printer.Printer;
import printerenum.PrinterType;
import printerfactory.PrinterFactory;

public class PrinterMain{
	
	public static void main(String[] args){
		
		Printer laserPrinter = PrinterFactory.getPrinter(PrinterType.LASER);
		laserPrinter.operatePrinter("Niranka");
		
		Printer inkjetPrinter = PrinterFactory.getPrinter(PrinterType.INKJET);
		inkjetPrinter.operatePrinter("Ranmal");
		
		Printer ledPrinter = PrinterFactory.getPrinter(PrinterType.LED);
		ledPrinter.operatePrinter("Bambaragama");
		
		Printer threeDPrinter = PrinterFactory.getPrinter(PrinterType.THREE_D);
		threeDPrinter.operatePrinter("Dewage");
			
	}
	
}