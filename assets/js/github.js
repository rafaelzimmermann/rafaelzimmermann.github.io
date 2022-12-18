import { Octokit, App } from "https://cdn.skypack.dev/octokit";

const octokit = new Octokit();

var getRepoLanguages = async function(owner, repo) {
  return await octokit.request('GET /repos/{owner}/{repo}/languages', {
    owner: owner,
    repo: repo
  });
}

var getRepos = async function(owner) {
  let repo = "octopus"
  return await octokit.request('GET /users/{owner}/repos?sort=pushed&type=public&per_page=30', {
    owner: owner,
    repo: repo
  }).then(payload => {
    if (payload.status == 200) {
      return payload.data.filter(repo => repo.owner.login == owner).map(repo => repo.name);
    } else {
      return []
    }
  });
}

var getRateLimit = async function() {
  let payload = await octokit.request('GET /rate_limit', {})
  if (payload["status"] !== 200) {
    return 0;
  } else {
    return payload["data"]["rate"];
  }
}

var getUserLanguages = async function(user) {
  let repos = await getRepos(user)
  let languages = await Promise.all(repos.map(repo => getRepoLanguages(user, repo)))
  return languages;
}

getUserLanguages('rafaelzimmermann').then(console.log)
