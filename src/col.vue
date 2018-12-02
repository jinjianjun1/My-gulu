<template>
    <div class="col" :class="colClass" :style="colStyle">
            <slot></slot>
    </div>
</template>

<script>
    let validator = (value) => {
        let keys = Object.keys(value);
        let valid = true;
        // console.log(keys);
        keys.forEach(key => {
            if (!['span','offset'].includes(key)) {
                valid = false
            }
        })
        return valid;
    };
    export default {
        name:"GuluCol",
        props:{
        span:{type:[String,Number]},
        offset:{type:[String,Number]},
        phone: {type: Object, validator},
        narrowPc:{type:Object,validator},
        ipad:{type:Object, validator},
        pc:{type:Object,validator},
        widePc:{type:Object,validator}
        },
        data(){
        return{gutter:0}
        },
        computed:{
            colStyle(){
                return {
                    paddingLeft:this.gutter/2+'px',
                    paddingRight:this.gutter/2+'px'
                }},
            colClass(){
                let {span, offset, phone,ipad,narrowPc,pc,widePc} = this;
                return [
                    span &&`col-${span}`,
                    offset && `offset-${offset}`,
                    ...(phone && [`col-phone-${phone.span}`]),
                    ...(ipad && [`col-iad-${ipad.span}`]),
                    ...(narrowPc && [`col-narrow-pc-${narrowPc.span}`]),
                    ...(pc && [`col-pc-${pc.span}`]),
                    ...(widePc && [`col-wide-pc-${widePc.span}`])
                ];
            }
        }
    }
</script>

<style scoped lang="scss">
    .col{height: 100px;
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
        @media(max-width: 576px){
        $class-prefix: col-phone-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class-offset: offset-;
        @for $n from 1 through 24 {
            &.#{$class-offset}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
        }
        @media (min-width: 577px) and(max-width: 768px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-offset: offset-;
            @for $n from 1 through 24 {
                &.#{$class-offset}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }}
        @media (min-width: 769px) and(max-width: 992px) {
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-offset: offset-;
            @for $n from 1 through 24 {
                &.#{$class-offset}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }}
        @media (min-width: 993px) and(max-width: 1200px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-offset: offset-;
            @for $n from 1 through 24 {
                &.#{$class-offset}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }}
        @media (min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%;
                }
            }
            $class-offset: offset-;
            @for $n from 1 through 24 {
                &.#{$class-offset}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }

}

</style>