const checkCode = (code) => {
  try {
    let len;
    eval(code + `len=Tracer.commands.length`);
    return len;
  } catch (err) {
    return err.message;
  }
};

const tracer = (e) => {
  if (e) {
    const fs = require("fs");
    const lines = e
      .split("\n")
      .map((line, i) => line.replace(/(\.\s*delay\s*)\(\s*\)/g, `$1(${i})`));
    // console.log(lines);
    const prefix = `const Temp = ()=>{
      try{
      `;
    const postfix = `return Tracer.commands;
  }
      catch(err){
        return(err.message);
      }
  }
  module.exports = Temp;
    `;
    let code = lines.join("\n");
    let validCode = checkCode(code);
    if (typeof validCode !== "number") {
      return {message:validCode};
    }

    code = prefix + lines.join("\n") + postfix;
    const path = require("path");
    const filepath = path.join(__dirname, "./Tempfile.js");
    fs.writeFileSync(filepath, code, (err) => {
      if (err) throw err;
    });
    const answer = require("./Tempfile");
    let commands = answer();
    commands = commands.splice(0, validCode);
    return commands;
  }
};
module.exports = tracer;
