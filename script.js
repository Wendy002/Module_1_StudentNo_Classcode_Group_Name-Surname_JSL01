function validateSyntax() {
    debugger;
    const input = document.getElementById('petInput').value;
    // Validation logic goes here
    console.log(input.slice(0,4));

    if (input[0,4] === "pet_" && _.isNumber(input[4,8])){

        let result = `Valid Syntax \U+1F4AF`;
    }  else{

        let result = `Invalid Syntax \U+1FAE3`;
    }


    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
    console.log(result)
    document.getElementById('result').textContent = result;
}


