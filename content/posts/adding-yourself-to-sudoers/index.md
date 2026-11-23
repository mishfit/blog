---
title: "Adding Yourself to Sudoers"
date: 2021-02-14 08:31:00
categories: [linux,debian,setup]
links: https://www.glenngillen.com/thoughts/adding-yourself-to-the-sudoers-file
draft: false
lastmod: 2026-11-23
---

Adding my account to sudoers is one of the setup steps I repeat on a new Debian machine. I prefer Debian to Ubuntu, though that is mostly habit.

## Add the account

First, assume root and authenticate when prompted.

```sh
su -
```

Open the sudoers file through `visudo`.

```sh
visudo
```

I add my account after the root entry, replacing the placeholder with my username.

```text
<your_account_here> ALL=(ALL:ALL)      ALL
```

Save the file and exit the editor, then leave the root session.

```sh
exit
```
