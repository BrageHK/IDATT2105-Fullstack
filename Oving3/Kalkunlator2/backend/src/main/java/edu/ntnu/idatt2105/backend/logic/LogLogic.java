package edu.ntnu.idatt2105.backend.logic;

import org.apache.juli.logging.Log;

import java.util.ArrayList;

public class LogLogic {
    private ArrayList<String> log;

    public LogLogic(){
        log = new ArrayList<>();
    }

    public void addLog(String log){
        this.log.add(log);
    }

    public ArrayList<String> getLog(){
        return log;
    }
}
