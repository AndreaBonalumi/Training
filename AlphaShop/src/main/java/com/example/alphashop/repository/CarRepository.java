package com.example.alphashop.repository;

import com.example.alphashop.domain.Car;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface CarRepository {

    List<Car> selAll();
    List<Car> selAvailable();
    void insertCar(Car car);
    void deleteCar(int id);
    // void editCar(Car car);


}
