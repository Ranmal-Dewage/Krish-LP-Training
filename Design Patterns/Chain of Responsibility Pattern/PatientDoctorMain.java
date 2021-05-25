package main;

import traineedoctor.TraineeDoctor;
import generaldoctor.GeneralDoctor;
import seniordoctor.SeniorDoctor;
import consultant.Consultant;
import patient.Patient;
import diseaseseverity.DiseaseSeverity;

public class PatientDoctorMain{
	
	public static void main(String[] args){
		
		TraineeDoctor traineeDoctor = new TraineeDoctor();
		GeneralDoctor generalDoctor = new GeneralDoctor();
		SeniorDoctor seniorDoctor = new SeniorDoctor();
		Consultant consultant = new Consultant();
		
		traineeDoctor.setSuccessor(generalDoctor);
		generalDoctor.setSuccessor(seniorDoctor);
		seniorDoctor.setSuccessor(consultant);

		Patient p1 = new Patient("Dinesh", DiseaseSeverity.LOW, 26);
		traineeDoctor.handlePatient(p1);
		
		Patient p2 = new Patient("Harshana", DiseaseSeverity.MODERATE, 16);
		traineeDoctor.handlePatient(p2);
		
		Patient p3 = new Patient("Kanthi", DiseaseSeverity.HIGH, 40);
		traineeDoctor.handlePatient(p3);
		
		Patient p4 = new Patient("Bimal", DiseaseSeverity.CRITICAL, 35);
		traineeDoctor.handlePatient(p4);
	}
	
}