## GitHub Hidden Folder

There is a hidden folder called `.git` which tells you that out project is a git repo.

If you want to create a git repo in a new project, we'll create the folder and initialize that repo using ``git init``.
```
mkdir /workspaces/tmp/new-project
cd /workspace/tmp/new-project
git init
touch Readme.md
open Readme.md
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