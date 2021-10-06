<template>
    <form>
        
    </form>
</template>
<script>
import { required } from "@vuelidate/validators"
export default {
    data() {
        return {
            userData:{
                nama:""
            }
        }
    },
    validations:{
        userData:{
            nama:{
                required
            }
        }
    }
}
</script>