const path = require('path');
const webpack =require('webpack');
module.exports = {
    name: 'wordchain-settings',//그냥 이름
    mode: 'development',//개발용인지 실서비스를 할때는 production으로 바꿔준다.
    devtool: 'eval',//이건 그냥 빠르게 하겠다라는 뜻이다.
    resolve: {
        extensions: ['.jsx', '.js']//뒤에 확장자를 생략하게 해준다.
    },

    entry: {
        app: ['./client']//어떤 파일을 합쳐서 생성할 것인가.
    },//입력

    module: {//위에 entry에 있는 파일을 읽어서 거기에 module을 적용한 후 output에 빼주는 작업을 한다.
        rules: [{//적용할 규칙
            test: /\.jsx?/, //규칙을 적용할 파일들 정규표현식도 공부하자.
            loader: 'babel-loader',//어떤것을 적용할것인가  js와jsx파일에 babel을 적용해서 옛날 브라우저에서도 돌아가게 해주겠다
            options: {//여기는 적용할 babel의 옵션들을 설정해준다.
                presets: [
                    ['@babel/preset-env', {
                        targets:{
                            browsers:['> 5% in KR'], 
                    },
                    debug: true,
                }],
                    '@babel/preset-react'
                ],
                plugins: ['@babel/plugin-proposal-class-properties',
                        'react-hot-loader/babel',
            ]
            }
        }]
    },
    plugins:[],
    output: {
        path: path.join(__dirname, 'dist'),//dist라는 폴더에 생성될 파일을 만들어준다.
        filename: 'App.js',//합쳐서 생성할 파일의 이름
        publicPath:'/dist/', //

    }//출력
}