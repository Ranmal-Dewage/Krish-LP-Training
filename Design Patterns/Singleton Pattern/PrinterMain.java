package main;

import printer.Printer;
import printmanager.PrintManager;

public class PrinterMain{
	
	public static void main(String[] args){
		
		PrintManager singletonPrintManager = PrintManager.getPrintManager();	
		
		Printer singletonPrinter = singletonPrintManager.getPrinter();
		
		singletonPrinter.printSingleSide("Ranmal");
		
		singletonPrinter.printDoubleSides("Dewage");
			
	}
	
}