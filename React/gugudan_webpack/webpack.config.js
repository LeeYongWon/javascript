//여기에 webpack 설정
const path = require('path');
module.exports={
    name:'gugudan',//프로젝트 이름
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.jsx', '.js'] //생략할 형식
    },


    entry:{
        app:['./client'],
    },

    module:{
        rules:[{
            test:/\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env' ,'@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties']
            }
        }]
    },
    output:{
        path:path.join(__dirname,'dist'),//어디 경로로 할지
        filename:'App.js'

    }
}
