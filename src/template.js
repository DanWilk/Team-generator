
const roleChoice = (role, github, school, officeNumber) => {
    if (role === 'Engineer' ) {
        return `<li class="list-group-item">Github: <a href ="https://github.com/${github}">${github}</a></li>`
    } else if (role === 'Intern') {
        return `<li class="list-group-item">School: ${school}</li>`
    } else{
        return `<li class="list-group-item">Office Number: ${officeNumber}</li>`
    }
}

const roleChoiceImage = (role) => {
    if (role === 'Engineer' ) {
        return `<span class="oi oi-hard-drive"></span>`
    } else if (role === 'Intern') {
        return `<span class="oi oi-book"></span>`
    } else{
        return `<span class="oi oi-badge"></span>`
    }
}

const generateCards = cardDataArray => {
    return ` ${cardDataArray.map( ({name, id, role, email, ...rest}) => {
         return `
                <div class="card col-3" style="width: 18rem;">
                    <div class="card-header bg-primary text-light text-center">
                        <h3>${name}</h3>
                        <h4>${roleChoiceImage(role)}  ${role}</h4>
                    </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id:${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        ${roleChoice(role, rest.GitHub, rest.School, rest.officeNumber)}
                        </ul>
                </div>
        `})
        .join('')}
    `;   
}

module.exports = templateData => {

    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
      <link rel="stylesheet" href="./style.css">
    </head>
  
    <body>
      <main class=".container">
        <div class="row bg-danger d-flex">
            <div class="col-12">
                <h1 class="text-color-light text-center">My Team</h1>
            </div>
        </div>
        <div class="row d-flex">
            <div class="col"></div>
            <div class="col-12 col-md-6">
                <div class="row">
                    ${generateCards(templateData)}
                </div>
            </div>
            <div class="col"></div>
        </div>
      </main>
    </body>
    </html>
    `;
};