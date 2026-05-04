// Slow, Slow Tune
// Seeking, seeking, cold and dreary, miserable and grieving.

// 声声慢 · 李清照

const scene = {};

// 寻寻觅觅
scene.seeking = true;
for(let i = 0; i < 2; i++) { seek(); }

// 冷冷清清
scene.empty = true;
for(let i = 0; i < 2; i++) { chill(); }

// 凄凄惨惨戚戚
scene.grief = true;
["grief", "grief", "woe", "woe", "sorrow", "sorrow"].forEach(mood => heart.feel(mood));

// 乍暖还寒时候，最难将息
scene.climate = true;
let stable = false;
while(!stable) {
    const now = Math.random() > 0.5 ? "warm" : "cold";
    const next = Math.random() > 0.5 ? "warm" : "cold";
    if(now !== next) {
        rest.possible = false; // 最难将息
    } else {
        stable = true;
    }
}

// 三杯两盏淡酒，怎敌他、晚来风急
scene.drinking = true;
let wine = 3;
const wind = { time: "evening", force: "gale" };
while(wine >= 2) {
    wine -= 0.5; // 三杯两盏
    if(wind.force === "gale") {
        break; // 怎敌他
    }
}

// 雁过也，正伤心，却是旧时相识
scene.wildGoose = true;
const goose = sky.flyovers.find(b => b.type === "wild_goose");
if(goose && goose.passing) {
    heart.break(); // 正伤心
    if(goose.acquaintance) {
        console.log("却是旧时相识");
    }
}

// 满地黄花堆积。憔悴损，如今有谁堪摘？
scene.flowers = true;
const ground = Array.from({length: 100}, () => new Flower("yellow")); // 堆积
ground.forEach(f => f.wither()); // 憔悴损
const who = world.inhabitants.find(p => p.canPick);
if(!who) {
    ground.forEach(f => f.unpicked = true); // 有谁堪摘
}

// 守着窗儿，独自怎生得黑？
scene.guarding = true;
const win = new Window();
self.guard(win);
self.alone = true;
await sky.until("dark"); // 独自怎生得黑

// 梧桐更兼细雨，到黄昏、点点滴滴
scene.drizzle = true;
const wutong = new Tree("wutong");
const rain = new Rain("fine");
if(sky.phase === "dusk") {
    wutong.leaves.forEach(() => {
        console.log("点点滴滴"); // 点点滴滴
    });
}

// 这次第，怎一个愁字了得！
if(Object.values(scene).every(Boolean)) {
    console.log("怎一个愁字了得");
}
