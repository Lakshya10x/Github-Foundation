## GitHub Hidden Folder

There is a hidden folder called `.git` which tells you that out project is a git repo.

If you want to create a git repo in a new project, we'll create the folder and initialize that repo using ``git init``.
```
mkdir /workspaces/tmp/new-project
cd /workspace/tmp/new-project
git init
touch Readme.md


code Readme.md
git status
git add Readme.md

# Makes changes to readme.md
git commit -m "add readme file"
```

## Cloning

We can clone by 3 ways -> HTTPS, SSH, GitHub CLI.

Since we're using the GitHub CodeSpaces we'll create a temporary directory in our workspace.

```sh
mkdir /workspace/tmp
cd /workspace/tmp
```

### HTTPS

```sh
git clone https://github.com/Sharma10x/Github-Demo.git
cd GitHub-Demo
ls -la
```
> You'll need to generate a Personal Access Token (PAT)
https://github.com/settings/tokens

You'll use the PAT as your password when you login.
Give it access to Contents for Commits

## SSH

```ssh
git clone git@github.com:Sharma10x/Github-Demo.git
cd Github-Demo
```

We'll need to create our own SSH rsa keypair
```sh
ssh-keygen -t rsa
```

For WSL users and if you create a non default key you might need to add it 
```sh
eval `ssh-agent`
ssh-add /home/andrew/.ssh/alt-github_id_rsa
```

We can test our connection here :
```
ssh -T git@github.com
```


### Github CLI

Install the CLI
eg- Linux (Ubuntu)

```
(type -p wget >/dev/null || (sudo apt update && sudo apt-get install wget -y)) \
&& sudo mkdir -p -m 755 /etc/apt/keyrings \
&& wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
&& sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
```

```
gh auth login
gh repo clone Sharma10x/Github-Demo
```

## Commits

To commit the code, which will open up the commit edit message in the editor of choice
```sh
git commit
```
Make a commit and commit message without opening editor
```
git commit -m "add another exclamation mark"
```

Set the global editor

```
git config --global core.editor emacs
```
## Branches

List of branches 
```
git branch
```

Create New Branch
```
git branch branch-name
```

Checkout the branch
```
git checkout dev
```

Doing fetch we can actually see if we're out of date or not.
```
git fetch
```
>Note
git fetch updates your remote-tracking branches under refs/remotes/<remote>/. This operation is safe to run at any time since it never changes any of your local branches under refs/heads.

git pull brings a local branch up-to-date with its remote version, while also updating your other remote-tracking branches.

## Remote

## Stashing

## Merging

## Add
When we want to stag changes that will be included in commit
we can use the . to add all possible files
```
git add Readme.md
git add .
```


## Reset 

Reset allow you to move Staged changes to be unstaged.
useful when you want to revert all files not to be commited

```
git add .
git reset
```

>git reset will revert a git add.

## Status

It shows you what files will or will not be commited

```
git status
```
## GitConfig File

The gitconfig file is what stores your global configuration for git such as email,name,editor & more.

Showing the contents of our .gitconfig file
```
git config --list 
```
when you 1st install Git on a machine you are supposed to set up your name and email.
```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

## Log

git log will show recent git commits to the git tree

```
git log
```

## Push

when we want to push a repo to our remote origin
```
git push
```