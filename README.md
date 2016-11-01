Convoyarge
-------------------------
-------------------------
This is a geo-sensitive localization app, that allows users to assimilate POI pins on location grid and share with friends.

Setup and Development Process
------------------------------
1. Add your github key to repo. Instructions are [here](https://help.github.com/articles/generating-an-ssh-key/)
2. create a local folder on your development environment  
```mkdir -p ~/products/ && cd ~/products```
3. clone the repo  
```git clone git@github.com:nmishra/convoyarge.git .```
4. add remote host 
```git remote add nach git@github.com:nmishra/convoyarge.git```
5. create an issue in [Issues](https://github.com/nmishra/convoyarge/issues)
6. create a branch and track master. 
For example: the issue number is 120.
```git checkout -b 00120 origin/master```
7. do your coding
8. when you are ready to send a pull request, commit your changes locally.  
```git add <<files>>```  
```git commit -am "<<message>>" ```  
The message can be the issue title.
9. Fetch top of tree from remote repository  
```git fetch```
10. Rebase so that your commits are on the top of current commits.  
```git rebase -i```
Use the -i to squash multiple commit messages to single if you prefer that.
10. push to remote repository  
```git push -f nach HEAD```
The "nach" remote name is the name that you created in step 4. You could always push to origin, but to be on safer side, it's better to add a separate tracking name for pushing changes.
11. Goto to the [repo](https://github.com/nmishra/convoyarge) and create a Pull Request.
12. Add the reviewer in the Pull Request and create the Pull Request.
 