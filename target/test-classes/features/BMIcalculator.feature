 Feature: BMICalculator feature
  Verify the BMI value
  
@Regression
  Scenario Outline: find the BMI value with age height and weight   
    Given The user is on the BMI calculator home page    
    When The user enters age height and weight "<age>","<height>","<weight>"
    And The user clicks bmicalculate button
    Then should show BMI value
    
    Examples: 
            |age|height|weight|
            |10|127|40|
            |30|156|70|
            |25|152|55|
            |20|160|45|
            |35|160|70|