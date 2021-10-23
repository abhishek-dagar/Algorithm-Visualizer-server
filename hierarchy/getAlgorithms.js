function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}
const AlgoMenu = () => {
  const fs = require("fs");
  const path = require("path");
  const files = fs.readdirSync(path.join(__dirname, "../Algorithms"));
  const Menu = [];
  files.forEach((element) => {
    const file = fs.readdirSync(
      path.join(__dirname, "../Algorithms/" + element)
    );
    const algorithms = [];
    file.forEach((ele) => {
      if (!ele.includes(".")) {
        const filecode = fs.readdirSync(
          path.join(__dirname, "../Algorithms/" + element + "/" + ele)
        );
        let files = [];
        filecode.forEach((codefile) => {
          if (!codefile.includes('py')) {
            let data = fs.readFileSync(
              path.join(
                __dirname,
                "../Algorithms/" + element + "/" + ele + "/" + codefile,
              ),'utf-8'
            );
            const subobjalgo = {
              name: codefile,
              content: data,
            };
            files.push(subobjalgo);
          }
        });
        const key = replaceAll(ele.toLowerCase(), " ", "-");
        const subobj = {
          key: key,
          name: ele,
          files:files,
        };
        algorithms.push(subobj)
      }
    });
    const key = replaceAll(element.toLowerCase(), " ", "-");
    const obj = {
      key: key,
      name: element,
      algorithms: algorithms,
    };
    Menu.push(obj);
  });
  return Menu;
};
module.exports = AlgoMenu;