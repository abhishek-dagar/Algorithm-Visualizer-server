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
        const key = replaceAll(ele.toLowerCase(), " ", "-");
        const subobj = {
          key: key,
          name: ele,
        };
        algorithms.push(subobj);
      }
    });
    const key = replaceAll(element.toLowerCase(), " ", "-");
    const obj = {
      key: key,
      name: element,
      algorithms: algorithms
    };
    Menu.push(obj);
  });
  return Menu;
};
module.exports = AlgoMenu;
