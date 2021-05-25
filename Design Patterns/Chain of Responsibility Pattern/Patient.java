package patient;

import diseaseseverity.DiseaseSeverity;

public class Patient{
	
	private String name;
	private DiseaseSeverity diseaseSeverity;
	private int age;
	
	public Patient(String name, DiseaseSeverity diseaseSeverity, int age){
		this.name = name;
		this.diseaseSeverity = diseaseSeverity;
		this.age = age;	
	}
	
	public String getName(){
		return this.name;
	}
	
	public DiseaseSeverity getDiseaseSeverity(){
		return this.diseaseSeverity;
	}
	
	public int getAge(){
		return this.age;
	}
		
}