function validateSyntax() {
 
    const input = document.getElementById('petInput').value;
    // Validation logic goes here
    // declare result here
    let result;

    if (input.slice(0,4) !== "pet_" && isNaN(input.slice(4,8))){

        
        result = `Invalid Syntax \U+1FAE3`;
        
    }  else{

        result = `Valid Syntax \U+1F4AF`;
        
    }


    document.getElementById('result').textContent = result;
}


