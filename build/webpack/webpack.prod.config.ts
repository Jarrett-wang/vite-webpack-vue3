import {merge} from 'webpack-merge';
import common  from './webpack.base.config';
export default merge(common,{
    mode: 'production',
    devtool: 'nosources-source-map',
   
})