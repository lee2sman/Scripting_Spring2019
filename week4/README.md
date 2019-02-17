# Week 4

- reflections on Processing Community Day NYC
- questions?
- critique "They Live" site

- Events

- Javascript without jquery examples

- Version Control with Git and GitHub
  - Git vs GitHub
  - basics of Git
  - a Git workflow
  - working with GitHub as a remote repository
  - Publishing a free website with GitHub pages

---

## review "They Live Assignment"

## Events
- setInterval
- working with functions

## Version Control!

Version Control is the practice of saving copies or snapshots of your code at each significant stage as you work on a project. Like a meta-undo, version control lets you move forward and backward in time to get to different versions of your code across a project’s files. Without version control software, you might take a DIY approach by copying a project’s entire directory and naming it with the date. But what if you want to make multiple copies with slightly different versions and you want to use parts of each of these versions? What if you want to share and work simultaneously on a project with partners? How can multiple people collaborate together over time? Version control software lets you do this.

I recommend the book [Version Control By Example](https://ericsink.com/vcbe/html/bk01-toc.html), an affordable and easy-to-read book, along with free online version.

### What is Git?

*Git is one kind of local version control software that you run on your own computer.* It was invented by Linus Torvalds, famous for and the namesake of Linux, the world's largest open source project. Git lets you track changes to your files incrementally over time. Each project has its own git system that tracks the files for just that project.

While working on your code, you might decide you're at a good temporary stopping point. At that point, you use Git to save that version of your code, almost like taking a snapshot of that moment and time of your code.

#### Goals of Git

- It’s fast
- it’s distributed (the code exists in multiple locations, with each person being able to contribute)
- each commit has a corresponding hash (meaning every single change is tracked)
- everyone working on the code has a local copy of the history of the program

### Collaboration

So far, we've mostly spoken about working with code yourself, but Git also contains functionality for collaboration. It contains commonds that allow you to push and pull your code changes to others' machines.

If you fork (aka copy) someone else’s code/program, you pull it onto your computer so that you can edit the code. Afterwards, you can push it to your own online repository (aka repo) or you can do a pull request to the original code and that person will look at your code and decide to integrate the two together (or not).

No one's version of the code is considered best or the parent. This is good as it allows everyone to contribute on a network, but what happens when you each have made lots of changes and need to combine them together?

### What is GitHub?

GitHub is a place to store identical working directories of files, called repositories (aka repos). So GitHub is a *hub* for *Git* repositories.

GitHub is a software company as well as the name for a website where you can post your projects you are tracking with git. It is quite popular, but there are other alternatives such as [GitLab](https://about.gitlab.com/). GitHub was purchased by Microsoft in 2018. With GitHub, you take copies of your git-tracked programs and push them to a remote GitHub server. If multiple people are working on the same project, each making different changes, there are tools built in to rectify and merge your code for a project.

GitHub has some additional features. *Issues* is a place to log bugs or other problems with code. Most projects include a README.md file, with some basic information on how to get started with the code and simple documentation.

##### Version Control models

- centralized - one central server. each person checks out and merges changes to a main server. only one person can “check out” the code at a time.
- distributed - each person has a local repository. when they make changes, they “check in” with the main online copy and reconcile the two together. (GitHub is this style)

#### Version control Vocab

- repository aka repo
  - aka a folder holding one particular project you are going to track with Git
- pull request
  - aka "I have improved your code and am requesting that you pull my code and merge it into yours."
- git init
  - Command to start tracking a project you are working on.
- git add
  - Tells Git to get ready to take a snapshot of a moment in time. You add a number of files, which is called "Staging" those files.
- git commit -m "message"
  - Any files that are staged (using git add) get committed, or permanently staged in a snapshot of your code. It's typical to give a message like "added README" or "removed window bug" so you can look back later and find why you made certain changes
- git status
  - Tells you what code has been added (staged), what code has changed from your previous commit, and whether the local code is ahead of your snapshot that is up on GitHub
- git merge
  - the process of merging your code into the saved code of another branch.
- git pull
  - updates your local code with any changes/updates from the remote snapshot up on GitHub. Use this if a collaborator has made changes and you'd like to pull them into your own code.
- git push
  - Take your saved commit and push the updated code snapshot to the remote repository on GitHub

## Install GitHub

- from [here](http://git-scm.com/downloads)

## Set some defaults on your computer for GitHub

Do this in your Terminal.

Set the default name

```
git config --global user.name "Your name Here"
```

Set up your default email

```
git config --global user.email "your_email@example.com"
```

## Resources

[Learn Git](https://try.github.io/)

# Homework

## GitHub practice
Learn and practice working with GitHub! Each time you study it, it will become easier.

- Watch [Git and GitHub for Poets](https://www.youtube.com/watch?v=BCQHnlnPusY&t=2s) with The Coding Train
- Review this [step-by-step guide to GitHub Desktop](https://programminghistorian.org/en/lessons/getting-started-with-github-desktop)
- practice making a new GitHub repository
	- add some text file(s) to it
	- make changes
	- Commit the changes
	- Publish (push) to a connected repository on GitHub 
	- **LINK ME TO THIS GITHUB REPOSITORY**

## Response to What Screens Want
- Read [What Screens Want](https://frankchimero.com/writing/what-screens-want/)
At the end Chimero writes

> Let me leave you with this: the point of my writing was to ask what screens want. I think that’s a great question, but it is a secondary concern. What screens want needs to match up with what we want.

  - Write a 1/2 page response
  - What do you want to build?

