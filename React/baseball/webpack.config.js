const path = require('path')
module.exports ={
    name:'baseball',//이름
    mode:'development',//개발용인지 아닌지
    devtool:'eval',//개발의 속도를
    resolve:{//확장자명을 생략
        extensions:['.jsx' ,'.js']
    },

    entry:{//어떠한 파일을 합칠것인지
        app:['./client'],
    },

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

    output:{//합쳐진 파일을 어떻게 할것인지
        path:path.join(__dirname, 'dist'),
        filename:'App.js',
    },

}