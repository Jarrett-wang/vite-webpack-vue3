<!-- 弹窗内容 -->
<template>
    <el-dialog
        title="导入数据预览"
        custom-class="upload-perview"
        :visible="isActive"
        @close="handleClose"
    >
        <span class="tips">{{ message }}</span>
        <el-button @click="handleConfirm">确定</el-button>
        
    </el-dialog>
</template>
<script lang="ts">

export default {
    data(){
        return{
        message: '',
        }
    },
    methods: {

        handleClose() {
            this.callResolve('失败');
            this.close();
        },
        // 代替mounted 生命周期
        afterActive(){
            console.log('可有可无： 自定义的生命钩子，每次打开弹窗都会执行，调用接口等可以在这里调用')
        },
        handleConfirm() {
            this.callResolve('成功');
            this.close();
        }
    }
}
</script>
<style lang="less" scoped>
</style>
