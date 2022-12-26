let userscore =0;
let compscore =0;
const userscore_span= document.getElementById("userscore");
const compscore_span= document.getElementById("compscore");
const scoreboard_div= document.querySelector(".scoreboard");
const result_p= document.querySelector(".result > p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissor_div= document.getElementById("s");
const userchoice_div=document.getElementById("userchoice");

function getcompchoice()
{
    const random=["r","p","s"];
    const compvalue=Math.floor(Math.random() * 3);
    return random[compvalue];
}

function convert(a)
{
    if(a=="r")
    return "Rock";
    else if(a=="p")
    return "Paper";
    else if(a=="s")
    return "Scissor";
}

function lose(userchoice,compchoice)
{
    compscore++;
    compscore_span.innerHTML = compscore ;
    let user=convert(userchoice);
    let comp=convert(compchoice);
    result_p.innerHTML= result_p.innerHTML= comp + "(comp)".fontsize(3) + " beats " + user + "(user)".fontsize(3) + " !! You lost :( " ;
    document.getElementById(userchoice).classList.add('redglow');

    setTimeout(function() { document.getElementById(userchoice).classList.remove('redglow') }, 300); 
}
function win(userchoice,compchoice)
{
    userscore++;
    userscore_span.innerHTML = userscore + ":";
    let user=convert(userchoice);
    let comp=convert(compchoice);
    result_p.innerHTML= user + "(user)".fontsize(3) + " beats " + comp + "(comp)".fontsize(3) + " !! You won :) " ;
    document.getElementById(userchoice).classList.add('greenglow');
    setTimeout(function() { document.getElementById(userchoice).classList.remove('greenglow') }, 300); 
}

function draw(userchoice)
{
    userscore_span.innerHTML = userscore + ":";
    compscore_span.innerHTML = compscore ;
    result_p.innerHTML= "It's a Drawww";
    document.getElementById(userchoice).classList.add('grayglow');
    setTimeout(function() { document.getElementById(userchoice).classList.remove('grayglow') }, 300);  
}

function game(userchoice)
{
    const compchoice=getcompchoice();
    switch(userchoice+compchoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,compchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice,compchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice);
            break;
    }
}

function main()
{
    rock_div.addEventListener('click' , function()
    {
        game("r");
    })
    paper_div.addEventListener('click' , function()
    {
        game("p");
    })
    scissor_div.addEventListener('click' , function()
    {
        game("s");
    })
}
main();