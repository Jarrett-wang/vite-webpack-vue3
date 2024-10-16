import Vue from 'vue';

export class MountToBodyHelper {

    constructor( component ){
        this.component = component;
        this.instance = null;
    }

    mount(data) {
            let _this = this;
            const mountToBodyMixin = Vue.extend({
                data() {
                    return {
                        isActive: false,
                        callResolve: null,
                        callReject: null,
                    };
                },
                methods: {
                    active(data) {
                        Object.assign(this, data);
                        // 返回promise 对象 方便在调用的地方用async await
                        const promise = new Promise((resolve, reject) => {
                            this.isActive = true;
    
                            this.callResolve = resolve;
                            this.callReject = reject;
                        });
    
                        promise.close = this.close;
    
                        // 触发afterActive伪生命周期钩子（如果存在）
                        this.$nextTick(() => {
                            this?.afterActive?.();
                        });
    
                        return promise;
                    },
                    close() {
                        this.isActive = false;
                        try {
                            document.body.removeChild(this.$el);
                            this.$destroy();
                            _this.instance = null;
                        }
                        catch (e) { console.error(e); }
                    },
                  
                  
                },
            });
            const MyConstructor = Vue.extend({
                ...this.component,
                mixins: [mountToBodyMixin],
            });
    
            // 如果是单例模式，且实例已经存在，则返回原来的实例
            if (!_this.instance) {
                _this.instance = new MyConstructor({
                    ...data,
                });
    
                _this.instance.$mount(document.createElement('div')) ;
    
                const el = _this.instance?.$el;
                el && document.body.appendChild(el);
            }
    
            return _this.instance.active(data);
    }

    
   

    
    
}