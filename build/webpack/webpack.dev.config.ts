import { merge }  from 'webpack-merge';
import common  from './webpack.base.config';

export default merge(common,{
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 9091, // 本地服务器端口号
        hot: true, // 热重载
        open: true,
        
    }
})