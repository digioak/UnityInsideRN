import { foo } from "./dep";

import { format, compareAsc } from "date-fns";

const sleep = (sec: number) =>
  new Promise((resolve) => setTimeout(resolve, sec * 1_000));

// on document ready
document.addEventListener("DOMContentLoaded", () => {
  (async () => {
    await sleep(3);
    console.log(foo());
    const gameInstance = (window as any).GameInstance;
    if (gameInstance) {
      gameInstance.SendMessage("hh-logo", "Rotate", -90);
    }
    format(new Date(2014, 1, 11), "MM/dd/yyyy");
    //=> '02/11/2014'
    const dates = [
      new Date(1995, 6, 2),
      new Date(1987, 1, 11),
      new Date(1989, 6, 10),
    ];
    dates.sort(compareAsc);
    console.log(dates);
    console.log("end!!!");
  })();
});
