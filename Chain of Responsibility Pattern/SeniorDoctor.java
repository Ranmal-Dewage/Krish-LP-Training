package seniordoctor;

import patient.Patient;
import diseaseseverity.DiseaseSeverity;
import handler.Handler;

public class SeniorDoctor extends Handler{
	
	@Override
	public void handlePatient(Patient patient){
		
		if(patient.getDiseaseSeverity() == DiseaseSeverity.HIGH){
			System.out.println("Diagnose the Patient " + patient.getName() + " by the Senior Doctor \n");
		}else{
			System.out.println("Passing the Patient " + patient.getName() + " to Higher Authority from Senior Doctor");
			this.successor.handlePatient(patient);
		}
		
	}
	
}