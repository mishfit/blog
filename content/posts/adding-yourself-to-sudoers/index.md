---
title: "Adding Yourself to Sudoers"
date: 2021-02-14 08:31:00
categories: [linux,debian,setup]
links: https://www.glenngillen.com/thoughts/adding-yourself-to-the-sudoers-file
draft: true
---

There's a list of things you inevitably have to do when setting up a new machine. I prefer the debian flavor to ubuntu, but I don't have a great reason or anything like that, it's just a bias.

Some people do this in order not to run as root, even disabling root. I do it too, mostly out of habit as opposed to consciously trying to harden my linux instance.

## Adding youself to sudoers
Speaking of root, you'll have to assume root at least one last time to perform these steps

```
su -
```

Authenticate as root when prompted. Next edit the sudoers file using `visudo`:

```
visudo
```

Now, I'm a fan of `vim`, not so much one for `vi`...nevertheless, I'm not in this editor for long. I simply add my account after root.

```
<your_account_here> ALL=(ALL:ALL)      ALL
```

Exit and save the buffer, writing the sudoers file.

Exit the `su` session:
```
exit
```

