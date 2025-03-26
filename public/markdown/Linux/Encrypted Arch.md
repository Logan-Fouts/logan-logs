# Arch Linux Installation Guide with Full Disk Encryption

### Boot into Arch Linux Live Environment
1. Create a bootable USB with Arch Linux ISO
2. Boot from the USB
3. Verify UEFI mode:
   ```bash
   ls /sys/firmware/efi/efivars
   ```
   (This should display directory contents)

### Internet Connection
- Use ethernet for easiest setup
- For WiFi, use `iwctl`
- Verify connection:
  ```bash
  ping archlinux.org
  ```

## Disk Partitioning

### Identify Disk
```bash
lsblk
fdisk -l
```

### Create Partition Table
```bash
fdisk /dev/sdX  # Replace sdX with your disk name

# Create GPT partition table
# Inside fdisk, type 'g' to create new GPT label
```

### Create Partitions
1. EFI Partition (100M)
2. Boot Partition (512M)
3. Main Encrypted Partition (Remaining space)

### Format Partitions
```bash
# EFI Partition
mkfs.fat -F32 /dev/sdX1

# Boot Partition
mkfs.ext4 /dev/sdX2
```

## Encryption Setup

### Create Encrypted Container
```bash
# Encrypt main partition
cryptsetup --use-random luksFormat /dev/sdX3
cryptsetup luksOpen /dev/sdX3 cryptlvm
```

### LVM Setup
```bash
# Create Physical Volume
pvcreate /dev/mapper/cryptlvm

# Create Volume Group
vgcreate vg0 /dev/mapper/cryptlvm

# Create Logical Volumes
lvcreate -L 8G vg0 -n swap
lvcreate -L 100G vg0 -n root
lvcreate -l 100%FREE vg0 -n home
```

### Format Logical Volumes
```bash
mkswap /dev/vg0/swap
mkfs.ext4 /dev/vg0/root
mkfs.ext4 /dev/vg0/home
```

## Mount Filesystems
```bash
mount /dev/vg0/root /mnt
mkdir /mnt/boot
mkdir /mnt/home
mkdir /mnt/efi

mount /dev/sdX2 /mnt/boot
mount /dev/sdX1 /mnt/efi
mount /dev/vg0/home /mnt/home
swapon /dev/vg0/swap
```

## Install Base System
```bash
pacstrap -K /mnt base linux linux-firmware \
    lvm2 networkmanager sudo vim git \
    base-devel

# Generate filesystem table
genfstab -U /mnt >> /mnt/etc/fstab
```

## Chroot and Configure
```bash
arch-chroot /mnt

# Set timezone
ln -sf /usr/share/zoneinfo/Your/Timezone /etc/localtime
hwclock --systohc

# Localization
echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
locale-gen
echo "LANG=en_US.UTF-8" > /etc/locale.conf

# Hostname
echo "myhostname" > /etc/hostname

# Create user
useradd -m -G wheel yourusername
passwd yourusername

# Allow sudo for wheel group
visudo  # Uncomment: %wheel ALL=(ALL) ALL
```

## Initramfs and Bootloader
```bash
# Configure mkinitcpio
vim /etc/mkinitcpio.conf
# Add 'encrypt' and 'lvm2' to HOOKS before 'filesystems'

mkinitcpio -P

# Install GRUB
pacman -S grub efibootmgr
grub-install --target=x86_64-efi --efi-directory=/efi --bootloader-id=GRUB

# Configure GRUB
vim /etc/default/grub
# Add to GRUB_CMDLINE_LINUX:
# cryptdevice=/dev/sdX3:cryptlvm root=/dev/vg0/root

grub-mkconfig -o /boot/grub/grub.cfg
```

## Finalize
```bash
# Enable network
systemctl enable NetworkManager

# Exit and reboot
exit
umount -R /mnt
reboot
```

## Additional Security Tips
- Backup LUKS header:
  ```bash
  sudo cryptsetup luksHeaderBackup /dev/sdX3 --header-backup-file luks-header-backup
  ```