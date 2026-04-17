# Abacus

Abacus is the first test project for Suaverider / Codex.

## Current status in this repository

I checked the repository snapshot in this environment and only found this `README.md` file (no game source code yet).

Because of that, I cannot perform a line-by-line code review here **yet**.

## Fast upgrade plan for the game (once code is available)

When you add the game code to this repo, I can do a full pass. Here is the exact review checklist I will run to improve quality and player experience:

1. **Gameplay feel**
   - Tune acceleration/deceleration, input buffering, and difficulty curve.
   - Ensure level progression ramps without spikes.
2. **Performance**
   - Profile frame time and reduce expensive update/render loops.
   - Cache repeated calculations and avoid per-frame allocations where possible.
3. **Reliability**
   - Add guardrails for null/undefined state transitions.
   - Prevent soft-locks (menus, pause state, level completion flow).
4. **UX polish**
   - Improve feedback: hit effects, score popups, sound timing, and onboarding prompts.
   - Add accessibility basics (high contrast, scalable text, optional reduced motion).
5. **Game-state integrity**
   - Validate save/load format and backward compatibility.
   - Ensure score progression and unlock logic cannot corrupt state.
6. **Testing and tooling**
   - Add smoke tests for startup/game loop and state transitions.
   - Add lint/type/build/test scripts so regressions are caught automatically.
7. **DevOps and release quality**
   - Add CI for lint + tests + build.
   - Add versioning/release notes flow so updates are safer.

## What to do next

1. Put the full game code into this repository (or point me to the correct repo/path).
2. Tell me your stack (for example: Unity/C#, Godot, JavaScript canvas, Phaser, etc.).
3. I’ll then make concrete improvements directly in code, run checks, and give you a tested upgrade PR.
