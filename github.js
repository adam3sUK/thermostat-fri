const got = require('got');

const fetchRepoInfo = (repoName, repoResponse) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    repoResponse(response);
  });
}

fetchRepoInfo('adam3sUK/thermostat', (responseHandler) => {
  console.log(JSON.parse(responseHandler.body));
});