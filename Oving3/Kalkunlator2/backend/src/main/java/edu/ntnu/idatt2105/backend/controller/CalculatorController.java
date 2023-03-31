package edu.ntnu.idatt2105.backend.controller;

import edu.ntnu.idatt2105.backend.service.CalculatorLogic;
import edu.ntnu.idatt2105.backend.model.Expression;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class CalculatorController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CalculatorController.class);

    private final CalculatorLogic calculatorLogic = new CalculatorLogic();

    @PostMapping("/calculate")
    @ResponseBody
    public ResponseEntity<String> calculate(@RequestBody Expression body) {
        String exp = body.getExpression();
        LOGGER.info("Received: " + exp);
        if (exp == null) return ResponseEntity.noContent().build();
        String result;
        try {
            result = calculatorLogic.calculate(exp);
            LOGGER.info("result: "+ result);
        } catch (NumberFormatException e) {
            LOGGER.error("Error with expression format: " + e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            LOGGER.error("Received error from calculation service " + e.getMessage());
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
        LOGGER.info("Sending: " + result);
        return ResponseEntity.ok(result);
    }
}