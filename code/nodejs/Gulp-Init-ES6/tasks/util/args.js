//引入包 yargs 处理命令行参数
import yargs from 'yargs';

//区分开发环境、线上环境

const args = yargs
//如果options中没有传入production 默认default为false，开发环境
  .option('production',{
    boolean: true,
    default: false,
    describe: 'min all scripts'
  })

//watch，开发环境中修改的 js css要不要自动编译
  .option('watch',{
    boolean: true,
    default: false,
    describe: 'watch all files'
  })

//详细输出命令行执行的日志
  .option('verbose',{
    boolean: true,
    default: false,
    describe: 'logs'
  })

//js资源映射
  .option('sourcemaps',{
    describe: 'force the creation of sourcemaps'
  })

//服务器默认端口
  .option('port',{
    string: true,
    default: 8080,
    describe: 'server port'
  })

//表示对输入的命令行内容以字符串解析
  .argv
export default args;
