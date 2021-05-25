package nonvegeterianmeal;

import meal.Meal;

public class NonVegeterianMeal extends Meal{
	
	@Override
	public void orderMeal(int amount){
		System.out.println("Ordering "+ amount +" Non-Vegeterian Meals......");
	}

}