import { Octokit, App } from "octokit";

console.log(`TOKEN: ${process.env.GH_TOKEN}`)

const octokit = new Octokit({
    auth: process.env.GH_TOKEN
  })
  
octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'Sharma10x',
    repo: 'Github-Foundation',
    ref: 'refs/heads/sdksjs',
    sha: '5ca643a49d5f5eac97207bad995b9aaf7ea802af',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  