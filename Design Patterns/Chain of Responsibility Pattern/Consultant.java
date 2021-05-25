package consultant;

import patient.Patient;
import diseaseseverity.DiseaseSeverity;
import handler.Handler;

public class Consultant extends Handler{
	
	@Override
	public void handlePatient(Patient patient){
		
		if(patient.getDiseaseSeverity() == DiseaseSeverity.CRITICAL){
			System.out.println("Diagnose the Patient " + patient.getName() + " by the Consultant");
		}
	
	}
	
}