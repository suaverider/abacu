import random
import sys
import time
import traceback
import tkinter as tk
from tkinter import messagebox


CANVAS_WIDTH = 800
CANVAS_HEIGHT = 300
GROUND_Y = 240

PLAYER_X = 80
PLAYER_SIZE = 28
GRAVITY = 1800
JUMP_VELOCITY = -650

OBSTACLE_WIDTH = 24
OBSTACLE_HEIGHTS = [24, 36]
SPAWN_BASE = 1.1


class EndlessRunner:
    def __init__(self, root):
        self.root = root
        self.root.title("Endless Runner")
        self.canvas = tk.Canvas(root, width=CANVAS_WIDTH, height=CANVAS_HEIGHT, bg="white")
        self.canvas.pack()

        self.info = tk.Label(root, text="Space = Jump | R = Restart | Q = Quit")
        self.info.pack()

        self.player = self.canvas.create_rectangle(
            PLAYER_X,
            GROUND_Y - PLAYER_SIZE,
            PLAYER_X + PLAYER_SIZE,
            GROUND_Y,
            fill="black",
        )

        self.ground = self.canvas.create_line(0, GROUND_Y, CANVAS_WIDTH, GROUND_Y)
        self.score_text = self.canvas.create_text(10, 10, anchor="nw", text="Score: 0")

        self.obstacles = []
        self.last_time = time.time()
        self.velocity_y = 0.0
        self.is_jumping = False
        self.game_over = False
        self.score = 0.0
        self.speed = 220.0
        self.spawn_timer = 0.0

        root.bind("<space>", self.jump)
        root.bind("<r>", self.restart)
        root.bind("<R>", self.restart)
        root.bind("<q>", self.quit)
        root.bind("<Q>", self.quit)

        self.update()

    def jump(self, _event=None):
        if not self.is_jumping and not self.game_over:
            self.is_jumping = True
            self.velocity_y = JUMP_VELOCITY

    def restart(self, _event=None):
        if not self.game_over:
            return
        for obs in self.obstacles:
            self.canvas.delete(obs["id"])
        self.obstacles = []
        self.velocity_y = 0.0
        self.is_jumping = False
        self.game_over = False
        self.score = 0.0
        self.speed = 220.0
        self.spawn_timer = 0.0
        self.canvas.itemconfig(self.score_text, text="Score: 0")
        self.canvas.delete("game_over")

    def quit(self, _event=None):
        self.root.destroy()

    def spawn_obstacle(self):
        height = random.choice(OBSTACLE_HEIGHTS)
        x1 = CANVAS_WIDTH
        y1 = GROUND_Y - height
        x2 = x1 + OBSTACLE_WIDTH
        y2 = GROUND_Y
        obstacle_id = self.canvas.create_rectangle(x1, y1, x2, y2, fill="red")
        self.obstacles.append({"id": obstacle_id, "x": x1, "w": OBSTACLE_WIDTH, "h": height})

    def update_player(self, dt):
        if self.game_over:
            return
        self.velocity_y += GRAVITY * dt
        dy = self.velocity_y * dt
        self.canvas.move(self.player, 0, dy)
        x1, y1, x2, y2 = self.canvas.coords(self.player)
        if y2 >= GROUND_Y:
            self.canvas.move(self.player, 0, GROUND_Y - y2)
            self.velocity_y = 0.0
            self.is_jumping = False

    def update_obstacles(self, dt):
        if self.game_over:
            return
        move_x = -self.speed * dt
        remaining = []
        for obs in self.obstacles:
            self.canvas.move(obs["id"], move_x, 0)
            obs["x"] += move_x
            if obs["x"] + obs["w"] > 0:
                remaining.append(obs)
            else:
                self.canvas.delete(obs["id"])
        self.obstacles = remaining

    def check_collisions(self):
        if self.game_over:
            return
        px1, py1, px2, py2 = self.canvas.coords(self.player)
        for obs in self.obstacles:
            ox1 = obs["x"]
            ox2 = obs["x"] + obs["w"]
            oy1 = GROUND_Y - obs["h"]
            oy2 = GROUND_Y
            if px1 < ox2 and px2 > ox1 and py1 < oy2 and py2 > oy1:
                self.game_over = True
                self.canvas.create_text(
                    CANVAS_WIDTH / 2,
                    CANVAS_HEIGHT / 2,
                    text="Game Over! Press R to restart.",
                    fill="black",
                    font=("Arial", 14, "bold"),
                    tags="game_over",
                )
                return

    def update_score(self, dt):
        if self.game_over:
            return
        self.score += dt * 10
        self.speed = 220.0 + self.score * 1.2
        self.canvas.itemconfig(self.score_text, text=f"Score: {int(self.score)}")

    def update_spawn(self, dt):
        if self.game_over:
            return
        self.spawn_timer += dt
        interval = max(0.5, SPAWN_BASE - self.score / 120)
        if self.spawn_timer >= interval:
            self.spawn_timer = 0.0
            self.spawn_obstacle()

    def update(self):
        now = time.time()
        dt = now - self.last_time
        self.last_time = now

        self.update_player(dt)
        self.update_obstacles(dt)
        self.check_collisions()
        self.update_score(dt)
        self.update_spawn(dt)

        self.root.after(16, self.update)


def main():
    try:
        root = tk.Tk()
        EndlessRunner(root)
        root.mainloop()
    except Exception:
        error_text = traceback.format_exc()
        try:
            messagebox.showerror("Endless Runner Error", error_text)
        except tk.TclError:
            pass
        print(error_text)
        if sys.platform.startswith("win"):
            input("Press Enter to close...")


if __name__ == "__main__":
    main()
