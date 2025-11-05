package org.maoco.reduxcrudapi.food;

import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class FoodService {

    private final FoodRepository foodRepository;

    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }


    public FoodEntity getFood(Long id) {
        return foodRepository.findById(id).orElse(null);
    }

    public FoodEntity createNewFood(FoodEntity food) {
        return foodRepository.save(food);
    }

    public String deleteById(Long id) {
        foodRepository.deleteById(id);

        return String.format("Record was deleted by %d id", id);
    }

    public Collection<FoodEntity> getAll() {
        return foodRepository.findAll();
    }
}
