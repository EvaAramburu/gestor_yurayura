// Importar la función 
import { beTrue } from '../src/scripts/functions'; 

test("should return true", () => {
    let result = beTrue();
    expect(result).toBe(true);
});

