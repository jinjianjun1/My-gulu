<template >
    <div class="wrapper" :class="{error}">
            <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
                   @change="$emit('change',$event.target.value)"
                   @input="$emit('input',$event.target.value)"
                   @focus="$emit('focus',$event.target.value)"
                   @blur="$emit('blur',$event.target.value)"/>
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errMsg">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        name:'gulu-input',
        props:{
            value:{
                type:String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default: false
            },
            error:{
                type:String
            }
        },
        components:{
            Icon
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    $height:$input-height;
    .wrapper{font-size: $font-size;display: inline-flex;
        align-items: center;
        >:not(:last-child){margin-right: .5em;}
        >input{height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: inherit;
            &:hover{border-color: $border-color-hover;}
            &:focus{outline: none;box-shadow: inset 0 0 2px $box-shadow-color;}
            &[disabled],&readonly{border-color: #bbb;color: #bbb;cursor: not-allowed;background-color: transparent;}
        }
        &.error{
            >input{border: 1px solid $red;}
        }
        .icon-error{fill:$red;}
        .errMsg{color: $red;}
    }

</style>