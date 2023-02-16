package edu.ntnu.idatt2105.backend.model;

public class Expression {
    private String  express;

    public Expression(String express, String exp2) {
        System.out.println(exp2);
        this.express = express;
    }

    public String getExpression() {
        return express;
    }
}