package distancetime;

import java.util.List;
import java.util.Arrays;
import java.math.BigDecimal;

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
	
	public boolean checkHopDistance(BigDecimal distance){
		if (distancePointer == 3){
			distancePointer = 0;
		}
		if (timePointer == 3){
			timePointer = 0;
		}
		if(distance.compareTo(new BigDecimal(distanceMapping.get(distancePointer))) == -1 
		   || distance.compareTo(new BigDecimal(distanceMapping.get(distancePointer))) == 0){
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
			double temp = Double.parseDouble(value);
			if(temp < 0){
				return false;
			}
			return true;
		}catch(Exception ex){
			return false;
		}
	}
	
}