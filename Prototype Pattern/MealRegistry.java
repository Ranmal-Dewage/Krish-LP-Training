package mealregistry;

import java.util.HashMap;
import java.util.Map;
import mealenum.MealType;
import meal.Meal;
import childrenmeal.ChildrenMeal;
import vegeterianmeal.VegeterianMeal;
import nonvegeterianmeal.NonVegeterianMeal;

public class MealRegistry{
	
	private Map<MealType, Meal> meals = new HashMap<MealType, Meal>();
	
	public MealRegistry(){
		initialize();
	}
	
	public Meal getMeal(MealType mealType){
		Meal meal = null;
		try{
			meal = (Meal) meals.get(mealType).clone();			
		}catch(CloneNotSupportedException ex){
			ex.printStackTrace();
		}
		return meal;
	}
	
	private void initialize(){
		ChildrenMeal childrenMeal = new ChildrenMeal();
		childrenMeal.setMainMeal("Red Rice");
		childrenMeal.setSideMeal("Vegetables and Egg");
		childrenMeal.setBeverage("Milk Shake");
		childrenMeal.setDessert("Chocolate");
		childrenMeal.setPrice(1000);
		
		VegeterianMeal vegeterianMeal = new VegeterianMeal();
		vegeterianMeal.setMainMeal("White Rice");
		vegeterianMeal.setSideMeal("Vegetables and Salads");
		vegeterianMeal.setBeverage("Fruit Juice");
		vegeterianMeal.setDessert("Fruits");
		vegeterianMeal.setPrice(1600);
		
		NonVegeterianMeal nonVegeterianMeal = new NonVegeterianMeal();
		nonVegeterianMeal.setMainMeal("Biryani");
		nonVegeterianMeal.setSideMeal("Chickens and Eggs");
		nonVegeterianMeal.setBeverage("Coca-Cola");
		nonVegeterianMeal.setDessert("Watalappam");
		nonVegeterianMeal.setPrice(2000);
		
		meals.put(MealType.CHILDREN,childrenMeal);
		meals.put(MealType.VEGETERIAN,vegeterianMeal);
		meals.put(MealType.NON_VEGETERIAN,nonVegeterianMeal);
	}
	
}