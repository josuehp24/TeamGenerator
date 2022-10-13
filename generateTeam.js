
const generateTeam = ({team}) => {
const html=[]

const generateManager =([manager]) => {
    let managerHTML=`
    <div class="card"
        <div class="card-header">${manager.name}<br/>manager<div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${manager.info}</li>
            <li class="list-group-item"> Email:${manager.email}</li>
            <li class="list-group-item"> Office #:${manager.officeNumber}</li>
        </ul>
    </div>
        `;
        html.push(managerHTML);
}
const generateEngineer =({engineer}) => {
    let engineerHTML=
    `<div class="card"
        <div class="card-header">${engineer.name}<br/>Engineer<div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${engineer.info}</li>
            <li class="list-group-item"> Email:${engineer.email}</li>
            <li class="list-group-item"> GitHub User:${engineer.gitHub}</li>
        </ul>
    </div>`;

        html.push(engineerHTML);
}

const generateIntern = ({intern}) => {
    let internHTML=
    `<div class="card"
        <div class="card-header">${intern.name}<br/>Intern<div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${intern.info}</li>
            <li class="list-group-item"> Email:${intern.email}</li>
            <li class="list-group-item"> School:${intern.school}</li>
        </ul>
    </div>`

        html.push(internHTML);
}

 for (let i = 0; 1 < team.length; i++){
    if (team(i).getRole() === 'manager'){
        generateManager(team[i]);
    }
    if (team(i).getRole() === 'engineer'){
        generateEngineer(team[i]);
    }
    if (team(i).getRole() === 'intern'){
        generateIntern(team[i]);
    }
 }
 return html.join('');
}
 module.exports = team =>{

    return
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/style.css" >
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <script scr="index.js"></script>
    <script scr="generateTeam.js"> </script>
    <script scr="./lib/employee.js"></script>
    <script scr="./lib/engineer.js"></script>
    <script scr="./lib/intern.js"></script>
    <script scr="./lib/manager.js"></script>
    <title></title>
</head>
<body>
    <header>
        <h1>Team Members</h1>
    </header>
    <main>${team} </main>

    
</body>
</html>`

}