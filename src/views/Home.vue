<template>
    <div>这是home页面</div>
    <div>{{ helloConst }}</div>
</template>
<script>
import { hello, sayHello, miao} from './aa'
export default {
    name: 'hello',
    data () {
        return {
            helloConst: hello
        }
    },
}

</script>