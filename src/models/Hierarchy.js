const { algorithmsDir } = require("../config");
const { listDirectories } = require("../utils/hierarchy");
const { Category } = require("./");
const path = require("path");

class Hierarchy {
  constructor() {
    this.categories = [];
    this.path = algorithmsDir;
    this.refresh();
  }
  refresh() {
    listDirectories(this.path).map((categoryName) => {
      this.categories.push(
        new Category(path.resolve(this.path, categoryName), categoryName)
      );
    });

    const files = [];
    this.categories.forEach((category) =>
      category.algorithms.forEach((algorithm) => {
        files.push(algorithm.file);
      })
    );
  }
  find(categoryKey=String, algorithmKey=String){
    const category = this.categories.find(category => category.key === categoryKey);
    if (!category) return;
    const algorithm = category.algorithms.find(algorithm => algorithm.key === algorithmKey);
    if (!algorithm) return;
    const categoryName = category.name;
    const algorithmName = algorithm.name;
    const files = algorithm.files;

    return {categoryKey, categoryName, algorithmKey, algorithmName, files};
  }
}
module.exports = {
  Hierarchy: Hierarchy,
};
