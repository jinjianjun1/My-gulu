---
title:Menu
---
# Menu
<ClientOnly>
<menu-demo></menu-demo>
<menu-demo1></menu-demo1>

</ClientOnly>



```
<div style="margin-top:40px">
        <j-menu  :selected.sync="selected"  vertical >
            <j-menu-item name="dota">dota</j-menu-item>
            <j-sub-menu name="lol">
                <template slot="title">lol</template>
                <j-menu-item name="company">拳头</j-menu-item>
                <j-menu-item name="team">开发团队</j-menu-item>
                <j-menu-item name="awesome">IG牛逼</j-menu-item>
            </j-sub-menu>
            <j-sub-menu name="construct">
                    <template slot="title">王者荣耀</template>
                    <j-menu-item name="wechat">微信登录</j-menu-item>
                    <j-menu-item name="qq">QQ登录</j-menu-item>
                </j-sub-menu>
        </j-menu>


    </div>
```
