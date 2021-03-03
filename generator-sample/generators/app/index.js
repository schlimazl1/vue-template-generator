// 此文件作为 Generator 的核心入口
// 需要导出一个继承自 Yeoman Generator 的类型
// Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
//  我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'your file name',
        default: ''
      },
      {
        type: 'input',
        name: 'path',
        message: 'your file path',
        default: ''
      }
    ]).then(answers => {
      // answers => {name: 'user input}
      this.answers = answers
    })
  }
  writing () {
    /* yeoman 自动在生成文件阶段调用此方法
    在项目目录中写入文件
    this.fs.write(
      this.destinationPath('temp.txt'),
      Math.random().toString()
    ) */
    // 模板文件路径
    const tmpl = this.templatePath('vue-template.vue')
    // 模板输出路径
    const output = this.destinationPath(this.answers.path + '/' + this.answers.name + '.vue')
    // 模板数据上下文
    const context = { title: 'Hello CHZ~', success: true }

    this.fs.copyTpl(tmpl, output, context)
  }
}