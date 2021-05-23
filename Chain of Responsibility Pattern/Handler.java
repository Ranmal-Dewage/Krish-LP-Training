package handler;

import patient.Patient;

public abstract class Handler{
	
	protected Handler successor;
	
	public void setSuccessor(Handler successor){
		
		this.successor = successor;
		
	}
	
	public abstract void handlePatient(Patient patient);
	
}