+++
title = "Pathogen for vim"
date = 2018-06-08
tags = ["vim", "pathogen", "video"]
categories = ["dev setup"]
+++

### Hello everybody!

Welcome to a brand new episode.

Before we start getting into the actual code I'd like to show you for each episode, I wanted to make sure you could understand what's going on on my screen...I use vim, which is a really text based editor.

Now, you'll see a lot of people using Sublime or TextEdit or Visual Studio Code. There are a lot of things out there and there are some integrated development environments but I just really like vim. It's really simple for me to use. I generally just open it up to the directory in which I'm working and I've got a couple of plugins that make it a little non standard.

So, for instance, if you're used to the Sublime or Visual Studio Code way of working you'll often have a solution explorer or something to that effect. Now I didn't create this plugin but I've definitely jacked with vim enough to the point I feel like it's got everything that Visual Studio has and more but only the good parts.

Over here I've got a completely brand spanking new installation of vim and it does not have all that pretty goodness and so the first step in making it look like this is gettting pathogen...so that's what I'm going to show you today!

Installing a sort of plugin preloader for vim. So without further ado, let's get into it and do a couple of things:


```
$ sudo apt-get install curl
$ mkdir -p ~/.vim/autoload && ~/.vim/bundle
$ curl -Lo ~/.vim/autoload/pathogen.vim https://raw.githubusercontent.com/tpope/vim-pathogen/master/autoload/pathogen.vim
$ cd ~/.vim/autoload
$ vim ~/.vimrc
```

Now write this into your new vimrc file:

```
execute pathogen#infect()
syntax on
filetype plugin indent on
```

And there you have it, we've got vim with pathogen installed.

In the next episode we'll figure out things that we can shove into vim and what benefits and features and caveats there are for each of those plugins
