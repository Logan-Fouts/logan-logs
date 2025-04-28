# Linux Administration Basics

## 1. **Basic Linux Commands**

- **File Operations**:
  - `ls`: List directory contents.
  - `cat`: Display file content.
  - `head`/`tail`: Show the beginning or end of a file.
  - `cp`/`mv`/`rm`: Copy, move, or remove files.
  - `touch`: Create an empty file or update file timestamps.
- **Text Processing**:
  - `grep`: Search text using patterns.
  - `wc`: Count lines, words, and bytes in a file.
  - `echo`: Print text to the terminal.
- **System Information**:
  - `date`: Display or set the system date and time.
  - `uname`: Display system information.
  - `df`/`du`: Check disk usage.

## 2. **File System Management**

- **Mounting File Systems**:
  - Use `mount` to attach file systems to directories.
  - Persistent mounts are configured in `/etc/fstab`.
- **Disk Usage**:
  - `du`: Report disk usage of files and directories.
  - `df`: Display free disk space on mounted file systems.
- **File Permissions**:
  - `chmod`: Change file permissions (read, write, execute).
  - `chown`: Change file ownership.
  - `chgrp`: Change group ownership.
- **File Contexts (SELinux)**:
  - `semanage fcontext`: Manage SELinux file contexts.
  - `restorecon`: Restore default SELinux contexts.

## 3. **User and Group Management**

- **User Management**:
  - `useradd`: Create new users.
  - `passwd`: Set or change user passwords.
  - `usermod`: Modify user properties (e.g., add to groups).
  - `userdel`: Delete users.
- **Group Management**:
  - `groupadd`: Create new groups.
  - `groupmod`: Modify group properties.
  - `groupdel`: Delete groups.
- **Sudo Privileges**:
  - Configure sudo access in `/etc/sudoers.d/`.
  - Use `visudo` to safely edit sudo configurations.

## 4. **Service Management**

- **Systemd**:
  - `systemctl`: Manage system services (start, stop, enable, disable).
  - `journalctl`: View system logs managed by systemd.
- **Service Configuration**:
  - Edit service files in `/etc/systemd/system/`.
  - Use `systemctl daemon-reload` to apply changes.
- **Service Logs**:
  - Use `journalctl` to view logs for specific services.

## 5. **Networking**

- **Network Configuration**:
  - `nmcli`: Configure network interfaces and connections.
  - `ip`: Display and configure network interfaces, routes, and addresses.
- **Firewall Management**:
  - `firewall-cmd`: Manage firewall rules and zones.
  - Add services to the firewall (e.g., `firewall-cmd --add-service=http`).
- **Remote Access**:
  - `ssh`: Securely connect to remote systems.
  - `ssh-keygen`: Generate SSH keys for passwordless authentication.
  - `ssh-copy-id`: Copy SSH keys to remote systems.

## 6. **Package Management**

- **Yum/DNF**:
  - `yum install`: Install packages.
  - `yum remove`: Remove packages.
  - `yum update`: Update installed packages.
- **Package Groups**:
  - `yum group install`: Install groups of related packages.
- **RPM**:
  - `rpm -i`: Install RPM packages.
  - `rpm -e`: Remove RPM packages.
  - `rpm -q`: Query installed packages.

## 7. **SELinux (Security-Enhanced Linux)**

- **Modes**:
  - `Enforcing`: SELinux actively enforces policies.
  - `Permissive`: SELinux logs policy violations but does not enforce them.
  - `Disabled`: SELinux is turned off.
- **File Contexts**:
  - Use `semanage fcontext` to define SELinux contexts for files and directories.
  - Use `restorecon` to apply the correct SELinux contexts.
- **Port Management**:
  - Use `semanage port` to manage SELinux port assignments.

## 8. **Network-Attached Storage (NAS)**

- **NFS (Network File System)**:
  - Mount NFS shares using `mount -t nfs`.
  - Configure persistent mounts in `/etc/fstab`.
- **Automounter**:
  - Use `autofs` to automatically mount NFS shares when accessed.
  - Configure automounter maps in `/etc/auto.master`.

## 9. **System Logs and Monitoring**

- **System Logs**:
  - `/var/log/messages`: General system logs.
  - `/var/log/secure`: Security-related logs.
- **Journald**:
  - Use `journalctl` to view logs managed by systemd.
  - Configure persistent logging in `/etc/systemd/journald.conf`.
- **Monitoring Tools**:
  - `top`/`htop`: Monitor system processes and resource usage.
  - `vmstat`: Report virtual memory statistics.

## 10. **Backup and Restore**

- **File Backups**:
  - Use `tar` to create compressed backups (e.g., `tar -czf backup.tar.gz /path/to/backup`).
- **System Backups**:
  - Use `rsync` for incremental backups.
  - Use `dd` for disk-level backups.
- **Restore**:
  - Use `tar` and `rsync` to restore files and directories.

## 11. **Security and Hardening**

- **Firewall Rules**:
  - Use `firewall-cmd` to restrict access to services.
- **SELinux Policies**:
  - Configure SELinux to enforce security policies.
- **User Privileges**:
  - Limit sudo access and use strong passwords.
- **Security Tools**:
  - Install and configure tools like `fail2ban` and `clamav`.

## 12. **Automation and Scripting**

- **Shell Scripting**:
  - Write scripts to automate repetitive tasks.
- **Cron Jobs**:
  - Use `crontab` to schedule scripts and commands.
- **Systemd Services**:
  - Create custom systemd services to run scripts at boot.

## 13. **Troubleshooting and Recovery**

- **Boot Process**:
  - Understand the Linux boot process and troubleshoot boot issues.
- **File System Repair**:
  - Use `fsck` to repair corrupted file systems.
- **System Logs**:
  - Analyze system logs to diagnose issues.
- **Recovery Mode**:
  - Boot into recovery mode to fix system problems.
