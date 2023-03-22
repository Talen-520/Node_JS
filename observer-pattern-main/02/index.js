/* Example 02B: index.js */

const DayEmitter = require("./modules/DayEmitter");
const day_emitter = new DayEmitter();
day_emitter.on("newday", function({mm_dd}){//{mm_dd} sleep duration is 240ms
    process.stdout.cursorTo(0, 0);
    process.stdout.clearLine();
    process.stdout.write(mm_dd);
    process.stdout.cursorTo(0, 1);
});
//each entites is indenpendent of each other
day_emitter.on("newday", function({mm_dd}){
    process.stdout.cursorTo(5, 10);
    process.stdout.clearLine();
    process.stdout.write(mm_dd);
    process.stdout.cursorTo(5, 11);
});


console.clear();
day_emitter.start();