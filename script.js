function validateSyntax() {
 
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    // declare result here
    let result= "";
    const validPattern =/^pet_\d{4}[^\d_]+$/;

    if (validPattern.test(input)){
        //valid syntax
        result = `Valid Syntax \u{1F4AF}`;
        alert("Yay Valid input!!!");
        
    }  else{
        //invalid syntax
        result = `Invalid Syntax \u{1FAE3} `;
        alert("Enter Valid input :(");
    }

    // output on the screen using id 'result'
    document.getElementById('result').textContent = result;
}


