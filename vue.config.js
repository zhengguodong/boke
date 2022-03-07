let url='http://localhost:4000'
module.exports = {
    devServer: {
        // host: 'localhost',
        // port: 8080,
        proxy: {
            '/getmsg': {
                target: url,// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
            },
            '/writebk':{
                target: url,// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
            },
            '/getpart1':{
                target: url,// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
            },
            '/getpart2':{
                target: url,// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
            },
            '/editbk':{
                target: url,// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
            }
        }}
    }