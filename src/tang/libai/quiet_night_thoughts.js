// Quiet Night Thoughts
// Before my bed, the moonlight glows like frost upon the ground.
// I raise my head to gaze at the bright moon,
// I lower my head and think of home.

function quietNightThoughts() {
    const moonlight = window.bedside.light;   // 床前明月光
    if(moonlight.reflects === "frost") {     // 疑是地上霜
        return false;
    }
    head.tilt("up");                         // 举头
    eyes.focus(moon);                        // 望明月
    head.tilt("down");                       // 低头
    console.log("思故乡");                    // 低头思故乡
}