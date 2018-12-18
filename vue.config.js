const path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                includePaths:[path.join(__dirname),'styles']
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                // data: `@import "@/variables.scss";`
            }
        }
    }
}