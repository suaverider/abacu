# Abacus

A tiny endless runner to help you get started.

## Requirements

- Python 3 installed on your computer
  - Windows: install from https://www.python.org/downloads/ (check “Add Python to PATH”)
  - macOS: install from https://www.python.org/downloads/ or Homebrew
  - Linux: install with your package manager
No extra packages are required.

## Super-beginner, step-by-step (no assumptions)

You only need **one file** to run the game: `endless_runner.py`.

If you’re brand new, read this like a recipe. Do **each step in order**.

### Step 1: Put the file in a folder you can find

Create a folder on your Desktop called `runner_game`, and make sure
`endless_runner.py` is inside that folder.

Example folder layout:

```
Desktop/
  runner_game/
    endless_runner.py
```

#### How to make sure the filename is correct (important!)

The file must end in **.py** (not .txt).

- **Windows:** File Explorer → View → check **File name extensions**.
  - If the file says `endless_runner.py.txt`, rename it to `endless_runner.py`.
- **macOS:** Finder → right‑click the file → **Get Info** → check the name ends with `.py`.

### Step 2: Run the game (two easy options)

#### Option A: Double-click (simplest)

If Python is installed normally, you can just **double-click**
`endless_runner.py` and the game will open in its own window.

If double-click does nothing, use Option B below.

#### Option B: Open a terminal (this is where you type commands)

Pick the instructions for your system:

- **Windows**
  1. Press the **Windows key**, type **Command Prompt**, and open it.
  2. Type this and press Enter:
     ```
     cd %USERPROFILE%\Desktop\runner_game
     ```
  3. If you see an error, double‑check the folder name is **runner_game**.
- **macOS**
  1. Press **Command + Space**, type **Terminal**, and open it.
  2. Type this and press Enter:
     ```
     cd ~/Desktop/runner_game
     ```
- **Linux**
  1. Open **Terminal** from your apps menu.
  2. Type this and press Enter:
     ```
     cd ~/Desktop/runner_game
     ```

### Step 3: Run the game

Now type **one** of the commands below (pick the one that works):

- macOS/Linux:
  ```
  python3 endless_runner.py
  ```
- Windows:
  ```
  python endless_runner.py
  ```

If the game starts, you’re done! 🎉

### Step 4: If something doesn’t work

- If you see “command not found” or “python is not recognized,” Python is not
  installed or not on your PATH. Reinstall Python and check “Add Python to PATH.”
- If the window is blank, make sure you ran the command in the folder that
  actually contains `endless_runner.py`.
- If the window flashes and disappears on Windows, that usually means it crashed.
  Run it from **Command Prompt** instead so you can see the error message.
- If you’re still stuck, take a screenshot of your terminal after running the
  command and share it (it shows the exact error).

## Quick run (for people already comfortable with terminals)

```bash
python3 endless_runner.py
```

## Controls

- Space: jump
- R: restart after game over
- Q: quit

## How it works (quick overview)

- The runner is fixed on the left side of the screen.
- Obstacles spawn on the right and move left each frame.
- You can only jump; gravity brings you back down.
- The score goes up over time, and speed increases as you play.
