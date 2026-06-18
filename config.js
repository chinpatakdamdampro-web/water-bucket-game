// ══════════════════════════════════════════════════════════════════════════
// GAME CONFIGURATION PROFILE
// Change any value here to completely redefine game behaviors and sizes.
// ══════════════════════════════════════════════════════════════════════════
const GAME_CONFIG = {
  // ── BUCKET DIMENSIONS & PLACEMENT ──
  bucket: {
    height: 200,               // Height of the bucket image/box in pixels
    widthRatio: 0.25,         // Width relative to viewport size (0.22 = 22% of screen width)
    bottomOffset: 130,        // Distance from the bottom of the screen
    movementLerp: 0.45,       // Slide responsiveness (0.1 = loose/sluggish, 1.0 = instant tracking)
    touchSpeedScale: 1.65,    // Sensitivity multiplier for mobile drag inputs
    keyboardStepRatio: 0.12   // How far arrow keys move the bucket per click (% of screen width)
  },

  // ── COLLISION & HITBOX TOLERANCES ──
  // These control the exact coordinate triggers for catching drops inside vs hitting the edges
  physics: {
    rimYOffset: 40,           // Pixels to push the collision zone DOWN from the top of the bucket image.
                              // Increase this if drops appear to be caught above the visible bucket rim.
                              // Decrease (or set to 0) if they're caught too late (inside the bucket).
    catchTopThreshold: 12,    // How many pixels down inside the rim a drop must sink to count as "caught"
    catchBottomThreshold: 36, // Maximum vertical range inside the bucket to capture the drop
    edgeWidthPercent: 0.10,   // Outer margins of the rim considered "corners" (0.10 = outer 10% on left and right)
    edgeHeightThreshold: 18   // Vertical boundary height to trigger a corner explosion splash
  },

  // ── PHYSICS & DROPS ──
  drops: {
    baseInterval: 1400,       // Starting delay between spawns in milliseconds (lower is faster)
    minInterval: 600,         // Absolute fastest spawn rate cap allowed
    baseSpeed: 3.5,           // Starting downward velocity of droplets
    maxSpeed: 9.5,            // Absolute top drop speed allowed
    speedDifficultyStep: 0.45,// Speed increase added every difficulty tier increment
    intervalDifficultyStep: 90,// Spawn rate reduction subtracted every difficulty tier increment
    difficultyTimeStep: 8000, // Time in milliseconds between difficulty tier ramps (8000 = 8 seconds)
    radiusMin: 10,            // Smallest pixel radius size variation of a drop
    radiusMax: 15,            // Largest pixel radius size variation of a drop
    scatterVariance: 1.2,     // ANTI-CLUMPING: Horizontal/vertical offset spread variance applied to drops
    bombChance: 0.08          // Probability (0–1) that any given spawn is a 💣 bomb instead of a water drop
  },

  // ── POWERUP BALANCING ──
  powerups: {
    timeStopFreezeDuration: 2000,   // Locked solid freeze time frame window in milliseconds (2000 = 2 seconds)
    maxConsumableStock: 5,          // Maximum powerup charges a player can carry at once
    basePrice: 160,                 // Shop cost to buy a single Chronos Freeze charge
    reinforcedRimPrice: 15,         // Shop cost to buy the permanent health upgrade
    magnetDuration: 20000,          // How long the magnet stays active in ms (20s ≈ 14 drops at base pace)
    magnetRainbowCap: 7             // Max rainbow drops the magnet will attract per activation
  },

  // ── VISUAL EFFECTS & SPARKLE PARTICLES ──
  particles: {
    catchCount: 16,                 // Number of droplet paths spawned when caught cleanly
    edgeExplosionCount: 18,         // Number of intense splash items generated on edge collision
    missCount: 8,                   // Number of blood/error elements generated on a floor drop miss
    catchColor: "rgba(56, 189, 248, ", // Splash base color string prefix (appended with dynamic life alpha)
    missColor: "rgba(239, 68, 68, "    // Floor miss color string prefix
  },

  // ── REBRANDED SHOP PROGRESSION TIERS ──
  // Controls Hydra Cooldown leveling paths. Adjust costs and lingering slomo windows (in ms)
  upgradeTiers: [
    { level: 1, cost: 100, slowDuration: 6000, desc: "Increases lingering slomo window from 5s to 6s" },
    { level: 2, cost: 250, slowDuration: 7000, desc: "Increases lingering slomo window from 6s to 7s" },
    { level: 3, cost: 500, slowDuration: 8000, desc: "Increases lingering slomo window from 7s to 8s" },
    { level: 4, cost: 1000, slowDuration: 9000, desc: "Increases lingering slomo window from 8s to 9s" }
  ]
};
