# My Linux Setup (As of now)

I use Arch Linux as my primary operating system, coupled with the GNOME desktop environment. Below are the GNOME extensions I have enabled:

## GNOME Extensions

- **Caffeine**: Prevents the desktop from going to sleep.
- **Coverflow Alt-Tab**: Provides a visually appealing Alt-Tab experience.
- **Just Perfection**: Allows fine-tuning of the GNOME desktop.
- **PaperWM**: Turns GNOME into a tiling window manager.
- **User Themes**: Enables user-defined themes.

## Neovim Configuration

For my text editing and development needs, I use Neovim with the following setup:

- **Lazy Loader**: Speeds up the loading of plugins by only loading them when necessary.
- **Mason**: A package manager for Neovim, making it easy to manage LSP servers, DAP servers, linters, and formatters.
- More information available in my nvim setup doc.

## Additional Tools and Customizations

### Shell

I use **Bash** for my shell. Below is a snippet of my `.bashrc` configuration:

```sh
#
# ~/.bashrc
#

[[ $- != *i* ]] && return

export PATH=$PATH:/home/lfouts/.local/bin

alias grep='grep --color=auto'
alias ls='eza --color=always --long --no-filesize --icons=always --no-time --no-user --no-permissions'

function parse_git_branch {
  git branch 2>/dev/null | sed -n 's/* \(.*\)/\1/p'
}

function parse_git_dirty {
  git diff --quiet 2>/dev/null >/dev/null
  [ $? -eq 1 ] && echo "*"
}

git_branch() {
  local branch=$(parse_git_branch)
  if [ -n "$branch" ]; then
    echo "─[${RED}${branch}$(parse_git_dirty)${CYAN}]"
  fi
}

RED='\[\033[0;31m\]'
GREEN='\[\033[0;32m\]'
YELLOW='\[\033[0;33m\]'
BLUE='\[\033[0;34m\]'
PURPLE='\[\033[0;35m\]'
CYAN='\[\033[0;36m\]'
WHITE='\[\033[0;37m\]'
RESET='\[\033[0m\]'

PS1="${CYAN}╭─[${GREEN}\u${CYAN}@${YELLOW}\h${CYAN}]─[${PURPLE}\W${CYAN}]$(git_branch)\n╰─\$ ${RESET}"

neofetch
```

### File Synchronization

I use **Syncthing** to keep my files synchronized across multiple devices. It's a reliable tool for ensuring my data is always up-to-date, whether I'm working on my desktop or laptop. I use a central server and only let devices sync to each other directly if I cannot connect to the central server. This makes the setup simple and easy to maintain.

### Appearance

I use the **Nord** color theme across my system the aesthetics, and my GNOME theme is set to **Adwaita-dark**.
