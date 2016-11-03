Convoyarge
-------------------------
-------------------------
This is a geo-sensitive localization app, that allows users to assimilate POI pins on location grid and share with friends.  

[![Build Status](https://travis-ci.org/nmishra/convoyarge.svg?branch=master)](https://travis-ci.org/nmishra/convoyarge)

Setup
------------------------------
------------------------------
1. Add your github key to repo. Instructions are [here](https://help.github.com/articles/generating-an-ssh-key/)
2. create a local folder on your development environment  
```mkdir -p ~/products/ && cd ~/products```
3. clone the repo  
```git clone git@github.com:nmishra/convoyarge.git .```
4. add remote host 
```git remote add nach git@github.com:nmishra/convoyarge.git```
5. ```cd ~/products/src/javascript```
6. Install gulp and dependencies through the following command:
```npm install jshint@2.9.4 minimatch@3.0.3 gulp gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del browser-sync gulp-load-plugins --save-dev```
7. if you run ```gulp``` , you should be get a message like  
```[09:30:08] Using gulpfile ~/products/convoyarge/src/javascript/gulpfile.js
[09:30:08] Starting 'clean'...
[09:30:08] Finished 'clean' after 6 ms
[09:30:08] Starting 'default'...
[09:30:08] Starting 'styles'...
[09:30:08] No files matched your Sass source.
[09:30:08] Starting 'scripts'...
[09:30:08] Starting 'images'...
[09:30:08] Finished 'default' after 27 ms
[09:30:08] Finished 'styles' after 32 ms
[09:30:08] Finished 'scripts' after 25 ms
[09:30:08] Finished 'images' after 15 ms```  

Development 
-----------------------
-----------------------
1. create an issue in [Issues](https://github.com/nmishra/convoyarge/issues)
2. create a branch and track master. 
For example: the issue number is 120.
```git checkout -b 00120 origin/master```
3. do your coding
4. when you are ready to send a pull request, commit your changes locally.  
```git add <<files>>```  
```git commit -am "<<message>>" ```  
The message can be the issue title.
5. Fetch top of tree from remote repository  
```git fetch```
6. Rebase so that your commits are on the top of current commits.  
```git rebase -i```
Use the -i to squash multiple commit messages to single if you prefer that.
7. push to remote repository  
```git push -f nach HEAD```
The "nach" remote name is the name that you created in step 4. You could always push to origin, but to be on safer side, it's better to add a separate tracking name for pushing changes.
8. Goto to the [repo](https://github.com/nmishra/convoyarge) and create a Pull Request.
9. Add the reviewer in the Pull Request and create the Pull Request.
 