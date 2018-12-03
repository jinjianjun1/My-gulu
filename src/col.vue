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
        narrowPc:{type:Object,validator},
        ipad:{type:Object, validator},
        pc:{type:Object,validator},
        widePc:{type:Object,validator}
        },
        data(){
        return{gutter:0}
        },
        methods:{
            createClasses:(obj,string='')=>{
                if(!obj){return []}
                let array=[];
                if (obj.span){
                    array.push([`col-${string}${obj.span}`])
                }
                if (obj.offset){
                    array.push([`offset-${string}${obj.offset}`])
                }
                return array
            }
        },
        computed:{
            colStyle(){
                return {
                    paddingLeft:this.gutter/2+'px',
                    paddingRight:this.gutter/2+'px'
                }},
            colClass(){
                let {span, offset, ipad,narrowPc,pc,widePc} = this;

                return [
                    ...this.createClasses({span,offset}),
                    ...this.createClasses(ipad,'ipad-'),
                    ...this.createClasses(narrowPc ,'narrow-pc-'),
                    ...this.createClasses(pc,'pc-'),
                    ...this.createClasses(widePc,'wide-pc-')
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
        @media (min-width: 577px) {
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
        @media (min-width: 769px) {
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
        @media (min-width: 993px) {
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