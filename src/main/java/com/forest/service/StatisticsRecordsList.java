package com.forest.service;

import com.forest.model.StatisticsRecords;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class StatisticsRecordsList {

    public List<StatisticsRecords> getRecordsList() {
        List<StatisticsRecords> recordsList = new ArrayList<>();
        recordsList.add(new StatisticsRecords("Mike", new Random().nextInt(10000)));
        recordsList.add(new StatisticsRecords("Antony", new Random().nextInt(10000)));
        recordsList.add(new StatisticsRecords("John", new Random().nextInt(10000)));
        recordsList.add(new StatisticsRecords("Fred", new Random().nextInt(10000)));
        recordsList.add(new StatisticsRecords("Dexter", new Random().nextInt(10000)));
        return recordsList;
    }
}
