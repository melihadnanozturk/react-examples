package org.maoco.reduxcrudapi.food;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')") // Hem USER hem ADMIN erişebilir
    public ResponseEntity<FoodEntity> getFood(@PathVariable Long id) {
        return ResponseEntity.ok(foodService.getFood(id));
    }

    @PostMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')") // Hem USER hem ADMIN erişebilir
    public ResponseEntity<FoodEntity> createNewFood(@RequestBody FoodEntity food) {
        return ResponseEntity.ok(foodService.createNewFood(food));
    }

    @DeleteMapping("/admin/{id}")
    @PreAuthorize("hasRole('ADMIN')") // Hem USER hem ADMIN erişebilir
    public ResponseEntity<String> deleteFoodById(@PathVariable Long id) {
        return ResponseEntity.ok(foodService.deleteById(id));
    }

    @GetMapping
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')") // Hem USER hem ADMIN erişebilir
    public ResponseEntity<Collection<FoodEntity>> getAllFood() {
        return ResponseEntity.ok(foodService.getAll());
    }
}
