package org.maoco.reduxcrudapi;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController  
@RequestMapping("/food")
public class FoodController {

    private final FoodService foodService;

    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<FoodEntity> getFood(@PathVariable Long id) {
        return ResponseEntity.ok(foodService.getFood(id));
    }

    @PostMapping
    public ResponseEntity<FoodEntity> createNewFood(@RequestBody FoodEntity food) {
        return ResponseEntity.ok(foodService.createNewFood(food));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteFoodById(@PathVariable Long id) {
        return ResponseEntity.ok(foodService.deleteById(id));
    }

    @GetMapping
    public ResponseEntity<Collection<FoodEntity>> getAllFood() {
        return ResponseEntity.ok(foodService.getAll());
    }
}
