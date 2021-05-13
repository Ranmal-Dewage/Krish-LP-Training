package distancetime;

import java.util.List;
import java.util.Arrays;

public class DistanceTimeMap{
	
	private List<Integer> distanceMapping = Arrays.asList(5, 3, 1);
	private List<Integer> timeMapping = Arrays.asList(1, 2, 5);
	private int distancePointer = 0;
	private int timePointer = 0;
	
	public int getNextDistance(){
		int temp = distancePointer;
		distancePointer ++;
		return distanceMapping.get(temp);
	}
	
	public int getTimeInterval(){
		int temp = timePointer;
		timePointer ++;
		return timeMapping.get(temp);
	}
	
	public boolean checkHopDistance(int distance){
		if (distancePointer == 3){
			distancePointer = 0;
		}
		if (timePointer == 3){
			timePointer = 0;
		}
		if(distance <= distanceMapping.get(distancePointer)){
			return true;
		}
		else{
			return false;
		}
	}
	
	public boolean isNumeric(String value){
		if(value.length() == 0){
			return false;
		}
		try{
			int temp = Integer.parseInt(value);
			if(temp < 0){
				return false;
			}
			return true;
		}catch(Exception ex){
			return false;
		}
	}
	
}