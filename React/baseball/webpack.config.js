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

    module:{//파일을 합칠때 어떠한 모듈을 사용할것인지

    },

    output:{//합쳐진 파일을 어떻게 할것인지
        path:path.join(__dirname, 'dist'),
        filename:'App.js',
    },

}