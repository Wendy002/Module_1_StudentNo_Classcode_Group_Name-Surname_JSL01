function validateSyntax() {
 
    const input = document.getElementById('petInput').value;
    // Validation logic goes here
    // declare result here
    let result;

    if (input.slice(0,4) !== "pet_" && isNaN(input.slice(4,8))){

        //invalid syntax
        result = `Invalid Syntax \u{1FAE3} `;
        alert("Enter Valid input :(");
        
    }  else{
           //valid syntax
        result = `Valid Syntax \u{1F4AF}`;
        alert("Yay Valid input!!!");
        
    }

    // output on the screen using id 'result'
    document.getElementById('result').textContent = result;
}


