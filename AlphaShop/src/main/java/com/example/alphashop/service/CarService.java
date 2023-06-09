package com.example.alphashop.service;

import com.example.alphashop.domain.Car;

import java.util.List;

public interface CarService {

    List<Car> selAll();
    List<Car> selAvailable();

    void insertCar(Car car);
    void deleteCar(int id);

}
