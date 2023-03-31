package edu.ntnu.idatt2105.backend.service;

public class CalculatorLogic {
    public String calculate(String expression) {
        expression = expression.replaceAll("\\s+","");
        if (expression.isEmpty()) {
            return "0";
        }
        expression = multiplyAndDivide(expression);
        expression = addAndSubtract(expression);
        System.out.println("Expression " + expression);
        return expression;
    }

    public String multiplyAndDivide(String expression) {
        for(int i = 0; i < expression.length(); i++) {
            if(expression.charAt(i) == '*' || expression.charAt(i) == '/') {
                int j = i - 1;
                while(j >= 0 && Character.isDigit(expression.charAt(j))) {
                    j--;
                }
                int k = i + 1;
                while(k < expression.length() && Character.isDigit(expression.charAt(k))) {
                    k++;
                }
                String left = expression.substring(j + 1, i);
                String right = expression.substring(i + 1, k);
                String result = "";
                if(expression.charAt(i) == '*') {
                    result = String.valueOf(Double.parseDouble(left) * Double.parseDouble(right));
                } else {
                    result = String.valueOf(Double.parseDouble(left) / Double.parseDouble(right));
                }
                expression = expression.substring(0, j + 1) + result + expression.substring(k);
                i = j + 1;
            }
        }
        return expression;
    }

    public String addAndSubtract(String expression) {
        for(int i = 0; i < expression.length(); i++) {
            if(expression.charAt(i) == '+' || expression.charAt(i) == '-') {
                int j = i - 1;
                while(j >= 0 && Character.isDigit(expression.charAt(j))) {
                    j--;
                }
                int k = i + 1;
                while(k < expression.length() && Character.isDigit(expression.charAt(k))) {
                    k++;
                }
                String left = expression.substring(j + 1, i);
                String right = expression.substring(i + 1, k);
                String result = "";
                if(expression.charAt(i) == '+') {
                    result = String.valueOf(Integer.parseInt(left) + Integer.parseInt(right));
                } else {
                    result = String.valueOf(Integer.parseInt(left) - Integer.parseInt(right));
                }
                expression = expression.substring(0, j + 1) + result + expression.substring(k);
                i = j + 1;
            }
        }
        return expression;
    }
}