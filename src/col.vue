<template>
    <div class="col" :class="[span &&`col-${span}`,offset &&`offset-${offset}`]"
    :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
        <div style="border: 1px solid red">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
    name:"GuluCol",
        props:{
        span:[String,Number],
        offset:[String,Number],
        },
        data(){
        return{gutter:0}
        }
    }
</script>

<style scoped lang="scss">
    .col{height: 100px;width: 50%;
    $class-prefix:col-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
          width: ($n/24)*100%;
        }
      }
    $class-offset:offset-;
    @for $n from 1 through 24{
        &.#{$class-offset}#{$n}{
            margin-left: ($n/24)*100%;
        }
    }


    }
</style>