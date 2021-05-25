package printmanager;

import printer.Printer;

public class PrintManager{
	
	private static PrintManager printManager;
	private static Printer printer;
	
	private PrintManager(){
		if(printManager != null){
			throw new RuntimeException("Use getPrintManager Method !!!");
		}
	}
	
	public static PrintManager getPrintManager(){
		if(printManager == null){
			synchronized(PrintManager.class){
				if(printManager == null){
					printManager = new PrintManager();					
				}
			}
		}
		return printManager;
	}
	
	public static Printer getPrinter(){
		if(printer == null){
			synchronized(PrintManager.class){
				if(printer == null){
					printer = new Printer();					
				}
			}
		}
		return printer;
	}
	
}