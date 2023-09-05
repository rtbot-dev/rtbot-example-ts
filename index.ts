import { Program, MovingAverage, Input } from "@rtbot-dev/rtbot";

console.log("Hello from RtBot!");

const program = new Program(
  // all these are optional, but can be useful later to understand your program
  // when you return back to it a few months after!
  "my awesome program",
  "this description is not mandatory!"
);
const input = new Input("in");
const movingAverage = new MovingAverage("ma", 2);
program.addOperator(input);
program.addOperator(movingAverage);
program.addConnection(input, movingAverage);

console.log("Show my program");
console.log(program);
console.log("---");
program.start().then(async () => {
  console.log("Program started");
  // now let's send some data!
  const response1 = await program.processMessageDebug(10, 1);
  const response2 = await program.processMessageDebug(20, 2);
  const response3 = await program.processMessageDebug(30, 3);
  const response4 = await program.processMessageDebug(40, 4);
  console.log("ma output iter1", response1.ma);
  console.log("ma output iter2", response2.ma);
  console.log("ma output iter3", response3.ma);
  console.log("ma output iter4", response4.ma);
  await program.stop();
  console.log("Program stopped");
});
