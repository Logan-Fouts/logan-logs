# My [Josean Martinez](https://www.youtube.com/@joseanmartinez) Modified Nvim Setup

Here I will detail how I setup my NVim as my main IDE. It is 90% the same as Josean Martinez's but I just wanted to document how I have it mainly for myself.

As I add more to my setup and change it I will update this document.

## Intro

As I have said in my projects page, I got bored of using Vscode, so I decided to switch over to Nvim. At first I was using NvChad but I felt it had some areas in which it was lacking.

## Starting By Using Josean's Config

- To start off and do most of the leg work you can copy [this](https://github.com/josean-dev/dev-environment-files)config setup into your .config file.
- I recommend looking at the key maps in the config to begin understanding all the functionalities and binding. Otherwise which key is very helpful to explore the key motions available.

### The Plugins

#### Core Functions and UI Enhancements

- **alpha-nvim.lua**: Provides an attractive start screen for Neovim, offering quick access to recent files, sessions, and more.
- **bufferline.lua**: Enhances the buffer line at the top of the window, allowing for easy navigation and organization of open files.
- **colorizer.lua**: Automatically colorizes color codes (hex, RGB, etc.) in your code, making them easy to visualize.
- **colorscheme.lua**: Manages the color scheme of your Neovim, ensuring a consistent and pleasant aesthetic.
- **dressing.lua**: Improves the UI for selecting items and input prompts, making them more visually appealing and user-friendly.
- **gitsigns.lua**: Integrates git functionality directly into the editor, showing change markers in the gutter and providing commands for git operations.
- **lualine.lua**: A highly configurable status line plugin that displays information about the current buffer, git status, diagnostics, and more.
- **nvim-autopairs.lua**: Automatically closes quotes, brackets, etc., enhancing typing speed and reducing syntax errors.
- **nvim-surround.lua**: Facilitates adding, deleting, and changing surrounding characters like parentheses, brackets, quotes, etc., efficiently.
- **nvim-tree.lua**: A file explorer plugin that allows for easy navigation and management of your project's files.
- **nvim-treesitter.lua** and **nvim-treesitter-text-objects.lua**: Provide advanced syntax highlighting and text object selection based on the tree-sitter parsing library, improving code readability and manipulation.
- **nvim-web-devicons.lua**: Adds file type icons to Neovim plugins such as file explorers and buffers, enhancing visual recognition.
- **telescope.lua**: A highly extendable fuzzy finder that integrates with various Neovim features and plugins, making searching and opening files, running commands, and more, efficient and intuitive.
- **toggleterm.lua**: Provides the ability to easily toggle terminal windows on and off, integrating smoothly into your Neovim workflow.
- **vim-maximizer.lua**: Maximizes and restores the current window in Neovim to focus on the content without distractions.
- **which-key.lua**: Displays a popup with possible keybindings following a keystroke, making it easier to learn and remember shortcuts.

#### Language Support and Coding Enhancements

- **comment.lua**: Simplifies commenting code, allowing for quick toggling of comments in various programming languages.
- **formatting.lua** and **linting.lua**: Likely custom or third-party plugins for code formatting and linting, integrating with LSP or other tools to ensure code quality and consistency.
- **lsp (lspconfig.lua, mason.lua, none-ls.lua)**: Integrates the Language Server Protocol (LSP) for powerful IDE-like features such as auto-completion, go-to definition, and real-time linting and diagnostics.

### Modifying and Adding Plugins

#### nv-terminal

I like to add this plugin to have a nice floating terminal inside nvim.

- Add a file named nv-terminal.lua to the plugins folder and add the following config to it.

```lua
return {
  "NvChad/nvterm",
  config = function()
    require("nvterm").setup({
      terminals = {
        shell = vim.o.shell,
        list = {},
        type_opts = {
          float = {
            relative = "editor",
            row = 0.3,
            col = 0.1,
            width = 0.75,
            height = 0.5,
            border = "single",
          },
          horizontal = { location = "rightbelow", split_ratio = 0.3 },
          vertical = { location = "rightbelow", split_ratio = 0.5 },
        },
      },
      behavior = {
        autoclose_on_quit = {
          enabled = false,
          confirm = true,
        },
        close_on_exit = true,
        auto_insert = true,
      },
    })
  end,
}
```

- Add in the keybind
  - Add the following to the keymaps.lua file

```lua
keymap.set(
  "n",
  "<leader>tt",
  "<cmd>lua require('nvterm.terminal').toggle('float')<CR>",
  { desc = "Toggle floating terminal" }
) -- Toggle floating terminal

keymap.set("t", "<C-x>", "<C-\\><C-n>", { desc = "Exit terminal mode" }) --  Exit terminal mode
```

- Then Finally restart nvim and use :Lazy to install the new plugin.
