// import visualization libraries {
const {
  Tracer,
  Array1DTracer,
  LogTracer,
  Layout,
  VerticalLayout,
} = require("algorithm-visualizer");
// }

const N = 30;
const a = [];
for (let i = 1; i <= N; i++) {
  a.push(i);
}

// define tracer variables {
const tracer = new Array1DTracer("Prime Number");
tracer.set(a);
const logger = new LogTracer();
Layout.setRoot(new VerticalLayout([tracer, logger]));
Tracer.delay();
// }

// visualize {
logger.println("1 is not prime");
tracer.select(0);
Tracer.delay();
// }
for (let i = 2; i <= N; i++) {
  logger.println(`Checking ${i}`);
  tracer.select(i - 1);
  Tracer.delay();
  let flag = true;
  for (let j = 2; j * j < i; j++) {
    if (i % j === 0) {
      flag = false;
    }
  }
  if (flag) {
    logger.println(`Marked Blue, So ${i} is a prime Number`);
    tracer.select(i - 1);
    Tracer.delay();
  } else {
    logger.println(`Marked red, So ${i} is not a prime Number`);
    tracer.patch(i - 1);
    Tracer.delay();
  }
}
// logger {
logger.println(`The Blue marked numbers are the prime numbers from 1 to ${N}`);
// }
