# Installing and Configuring Arch
## Requirements
1. A USB flash drive
2. Arch iso
3. Some time to thoroughly read [Arch Wiki](https://wiki.archlinux.org/title/installation_guide) documentation :)
---
# The Process
## Initial Steps
### 1. Boot to the USB
- Insert the USB flashed with the verified Arch iso and select it as your boot option.
### 2. Verify 64 bit mode
- Run the following command and verify it returns 64 for x64 UEFI:
``` bash
cat /sys/firmware/efi/fw_platform_size
```
### 3. Get internet working
- I recommend just connecting with ethernet, if you do so the internet in the live environment should just work.
- You can check by pinging google for example
```bash
ping google.com
```
## Disk partitioning
### 4. List the available disks
```bash
lsblk
```
### 5. Choose an example layout
- On the arch wiki they recommend either UEFI with GPT or BIOS with MBR. I would say for a first time install try choosing from one of those.

| Mount Point | Partition | Partition Type | Suggested Size |
| ---- | ---- | ---- | ---- |
| /mnt/boot | /dev/efi_system_partition | EFI system partition | 1 GiB |
| [SWAP] | /dev/swap_partition | Linux swap | At least 4GiB but I tend to make it around the size of my RAM |
| /mnt | /dev/root_partition | Linux x86-64 root (/) | At least 23-32 GiB |
- #### UEFI with GPT
	- **Reasons to Use:**
		- **Support for Larger Drives:** GPT allows for drives larger than 2TB, catering to modern storage needs.
		- **Improved Boot Times:** UEFI can reduce boot times compared to traditional BIOS.
		- **Enhanced Security Features:** Offers features like Secure Boot, which helps protect against malware attacking the boot process.
	- **Reasons Not to Use:**
		- **Compatibility Issues:** Some older hardware and operating systems may not support UEFI/GPT.
			- **Complexity:** For users unfamiliar with UEFI, its interface and options can be more complex than traditional BIOS.
- #### BIOS with MBR
	- **Reasons to Use:**
		- **Wide Compatibility:** Almost universally supported by operating systems and hardware, making it a safe choice for older systems.
		- **Simplicity:** Familiar interface and setup process for many users, with straightforward partitioning.	
	- **Reasons Not to Use:**
		- **Limited Drive Size:** MBR supports drives up to 2TB, which may not suffice for modern storage requirements.
		- **Fewer Features:** Lacks modern features like Secure Boot, which can be a drawback from a security standpoint.
### 6. Use fdisk to do the partitioning
```bash
// List all disks and partitions you should probably delete all partitions on the disk you wish to use
fdisk -l
```
**Create an EFI partition if UEFI system** on your disk if you're using a UEFI system. Skip if not applicable.
  - Use `fdisk` followed by your disk identifier (e.g., `/dev/sda`) to start partitioning.
- **Create a new partition:** Press `n` to create a new partition, select `1` for the partition number, use default block size, and for size, type `+512M` to allocate 512MB.
- **Set the partition type to EFI System:**
  - Press `t` to change the partition type.
  - Press `L` to list all partition types.
  - Enter the number corresponding to the EFI System type.
### 7. Format the partition
- Format each of newly created partitions example using Ext4 filesystem:
```disk
mkfs.ext4 /dev/_root_partition
```
- If you chose to use a swap then you must format it as swap:
```bash
mkswap /dev/_swap_partition
```
### 8. Mount the partitions
- Depending on what layout you choose mount each partition.
- Example to mount the root volume to `/mnt`:
```bash
mount /dev/_root_partition_ /mnt
```
- For UEFI systems, mount the EFI system partition:
```bash
mount --mkdir /dev/_efi_system_partition_ /mnt/boot
```
- To enable your swap run:
```bash
swapon /dev/_swap_partition_
```
## Installation
### 9. Install essentials using pacstrap
- Install base packages, kernel, and firmware for common hardware
```bash
pacstrap -K /mnt base linux linux-firmware vim
```
### 10. Create a fstab file 
```bash
genfstab -U /mnt >> /mnt/etc/fstab
```
### 11. Change root into the arch system
```bash
arch-chroot /mnt
```
### 12. Set your time zone and localization
- Time zone
```bash
ln -sf /usr/share/zoneinfo/_Region_/_City_ /etc/localtime
hwclock --systohc
```
- Localization
	- Edit `/etc/locale.gen` to and uncomment `en_US.UTF-8 UTF-8` and other needed UTF-8 locales. Generate them by running:
```bash
locale-gen
// If local.conf does nto exist create it.
echo "LANG=en_US.UTF-8" >> /etc/locale.conf
```
### 13. Network Config
- Create `/etc/hostname` to store hostname
```bash
echo "yourhostname" >> /etc/hostname
```
### 14. Root account config
- Set the root passwd
```bash
passwd
```
### 15. Install the bootloader
- I chose to install GRUB as my bootloader
```bash
pacman -S grub efibootmgr

mkdir /boot/efi

mount /dev/sda1 /boot/efi

grub-install --target=x86_64-efi --bootloader-id=GRUB --efi-directory=/boot/efi

grub-mkconfig -o /boot/grub/grub.cfg
```
## Final Configuration
### 16. Create a new sudo user
```bash
pacman -S sudo

useradd -m your_username
passwd your_username

usermod -aG wheel,audio,video,storage your_username

// Uncomment the wheel ALL=(ALL:ALL) ALL line
vim visudo
```
### 17. Install desktop environment (Example: Gnome)
```bash
pacman -S xorg networkmanager
pacman -S gnome

systemctl enable gdm.service
systemctl enable NetworkManager.service
```
### 18. Exit, Unmount, and Reboot
```
exit
umount -l /mnt
shutdown
```