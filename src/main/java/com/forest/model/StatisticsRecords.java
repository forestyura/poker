package com.forest.model;

public class StatisticsRecords {
    private String name;
    private int point;

    public StatisticsRecords(String name, int point) {
        this.name = name;
        this.point = point;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
