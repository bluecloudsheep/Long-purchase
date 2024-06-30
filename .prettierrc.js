module.exports = {
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 80,
      },
    },
  ],
  // ...其他配置
  // 可以根据需要添加其他配置项
  // 例如：箭头函数的圆括号
  arrowParens: 'always',
}
