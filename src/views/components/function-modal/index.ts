import Page from './index.vue';

import { MountToBodyHelper } from '../mount-to-body';

const mounteToBody = new MountToBodyHelper(Page);

/**
 * 上传数据预览
 *
 */
export default function invoke_xx_Modal() {
    return mounteToBody.mount({ message: '我是传过来的数据' });
}
//  别的页面使用时

// import invoke_xx_Modal from './components/modal'
// async handleClick() {
//     await ErrorResultFModal();
// }