package com.forest.controller.statistic;

import com.forest.model.StatisticsRecords;
import com.forest.service.StatisticsRecordsList;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StatisticController {

    @RequestMapping("/statistics")
    @ResponseBody
    public List<StatisticsRecords> statistic() {
        return new StatisticsRecordsList().getRecordsList();
    }
}