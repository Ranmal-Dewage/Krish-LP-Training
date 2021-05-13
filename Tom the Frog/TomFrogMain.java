package main;

import distancetime.DistanceTimeMap;
import java.util.Scanner;

public class TomFrogMain{
	
	public static void main(String[] args){
				
		String  distanceString;
		Scanner userInput = new Scanner(System.in);
		DistanceTimeMap distanceTimeMap = new DistanceTimeMap();
		
		System.out.println(" ");
		System.out.print("Input the Total Distance Tom the Frog must Jump (meters) : ");
		
		distanceString = userInput.nextLine();
		
		while(!distanceTimeMap.isNumeric(distanceString)){
			
			System.out.println("\n");
			System.out.println("!!!!!!!!!! Enter Positive Integer Values Only !!!!!!!!!! ");
		    System.out.println("\n");
			System.out.print("Again Input the Total Distance Tom the Frog must Jump (meters) : ");
			distanceString = userInput.nextLine();
			
		}
		
		int totalDistance = Integer.parseInt(distanceString);
		int totalTimeTaken = 0;
		int hopCount = 0;
		
		System.out.println("\n");
		System.out.println("^ = Hopping Instances");
		System.out.println("_ = Resting Instances");
		System.out.println("\n");
		System.out.print("Jumping is in Progress... : ");
		
		while(totalDistance != 0){
			
			if(distanceTimeMap.checkHopDistance(totalDistance)){
				totalDistance = 0;
				hopCount ++;
				System.out.print("^");				
			}
			else{
				totalDistance -= distanceTimeMap.getNextDistance();
				hopCount++;
				totalTimeTaken += distanceTimeMap.getTimeInterval();
				System.out.print("^_");	
			}	
			
		}
		
		System.out.println("\n\n");
		System.out.println("Total Hop Count : " + hopCount);
		System.out.println("Total Time Taken : " + totalTimeTaken + " seconds");
	
	}
	
}