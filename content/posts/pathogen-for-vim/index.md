+++
title = "Pathogen for vim"
date = 2018-06-08
tags = ["vim", "pathogen", "video"]
categories = ["dev setup"]
lastmod = 2026-11-23
+++

I use Vim for these coding episodes. My setup includes a few plugins, so I wanted to explain how I installed them before showing code in an editor that might look unfamiliar.

The first step on a fresh installation is Pathogen. It manages Vim's runtime path so plugins can live in their own directories.

## Install Pathogen

These are the Linux setup commands used for the episode. The directory command creates both `autoload` and `bundle`.

```sh
sudo apt-get install curl
mkdir -p ~/.vim/autoload ~/.vim/bundle
curl -Lo ~/.vim/autoload/pathogen.vim https://raw.githubusercontent.com/tpope/vim-pathogen/master/autoload/pathogen.vim
vim ~/.vimrc
```

Add the following to `.vimrc`.

```vim
execute pathogen#infect()
syntax on
filetype plugin indent on
```

That prepares the editor for the plugins I wanted to cover in later episodes. The [Pathogen README](https://github.com/tpope/vim-pathogen) documents the setup and now points new Vim users toward built-in package management.
