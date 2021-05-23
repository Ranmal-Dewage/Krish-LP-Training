package childrenmeal;

import meal.Meal;

public class ChildrenMeal extends Meal{
	
	@Override
	public void orderMeal(int amount){
		System.out.println("Ordering "+ amount +" Children Meals......");
	}

}