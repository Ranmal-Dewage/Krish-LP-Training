package traineedoctor;

import patient.Patient;
import diseaseseverity.DiseaseSeverity;
import handler.Handler;

public class TraineeDoctor extends Handler{
	
	@Override
	public void handlePatient(Patient patient){
		
		if(patient.getDiseaseSeverity() == DiseaseSeverity.LOW){
			System.out.println("Diagnose the Patient " + patient.getName() + " by the Trainee Doctor \n");
		}else{
			System.out.println("Passing the Patient " + patient.getName() + " to Higher Authority from Trainee Doctor");
			this.successor.handlePatient(patient);
		}
		
	}
	
}