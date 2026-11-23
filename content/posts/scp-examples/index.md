---
title: "SCP Examples"
date: 2019-05-07T06:52:33-06:00
lastmod: 2026-11-23
---

`scp` copies files between local and remote hosts over an SSH connection. Current OpenSSH uses SFTP for the transfer. These examples use placeholder usernames, hosts and paths. [OpenSSH manual](https://man.openbsd.org/scp)

## Copy a remote file to this machine

```sh
scp your_username@remotehost.edu:foobar.txt /some/local/directory
```

## Copy a local file to a remote host

```sh
scp foobar.txt your_username@remotehost.edu:/some/remote/directory
```

## Copy a directory recursively

```sh
scp -r foo your_username@remotehost.edu:/some/remote/directory/bar
```

## Copy between remote hosts

```sh
scp your_username@rh1.edu:/some/remote/directory/foobar.txt \
  your_username@rh2.edu:/some/remote/directory/
```

## Copy several local files

```sh
scp foo.txt bar.txt your_username@remotehost.edu:~
```

## Use a different SSH port

The uppercase `-P` selects the port.

```sh
scp -P 2264 foobar.txt your_username@remotehost.edu:/some/remote/directory
```

## Copy several remote files

```sh
scp your_username@remotehost.edu:/some/remote/directory/a \
  your_username@remotehost.edu:/some/remote/directory/b \
  your_username@remotehost.edu:/some/remote/directory/c .
```

Compression is optional through `-C`. The current [manual](https://man.openbsd.org/scp) documents it along with cipher selection and the legacy-protocol option. This article's former Triple-DES default claim and Blowfish examples were removed in the November 2026 review.

Thanks to Stewart Macleod for the port example.
