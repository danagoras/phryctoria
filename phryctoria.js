const input = prompt("Enter your message: ");
//alert('Your message is : ' + input);

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//console.log(alphabet.length);
const chars = Array.from(input);
console.log("Left  Right");

let torches = [];

for(let i=0; i<chars.length; i++)
{
    for(let j=0; i<alphabet.length; j++)
    {
        if(chars[i] == alphabet[j])
        {
            torches[i] = j + 1;
            if(torches[i]%5 != 0)
            {
                console.log(Math.ceil(torches[i]/5) + "       " + (torches[i]%5));
            }
            else
            {
                console.log(Math.ceil(torches[i]/5) + "       5");
            }
            
            break;
        }
    }
}
