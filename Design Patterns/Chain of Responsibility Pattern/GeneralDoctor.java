package generaldoctor;

import patient.Patient;
import diseaseseverity.DiseaseSeverity;
import handler.Handler;

public class GeneralDoctor extends Handler{
	
	@Override
	public void handlePatient(Patient patient){
		
		if(patient.getDiseaseSeverity() == DiseaseSeverity.MODERATE){
			System.out.println("Diagnose the Patient " + patient.getName() + " by the General Doctor \n");
		}else{
			System.out.println("Passing the Patient " + patient.getName() + " to Higher Authority from General Doctor");
			this.successor.handlePatient(patient);
		}
		
	}
	
}