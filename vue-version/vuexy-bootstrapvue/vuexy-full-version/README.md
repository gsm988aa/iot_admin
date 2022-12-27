# Vuexy - Vuejs, React, HTML & Laravel Admin Dashboard Template
无锡新一代
**Vuexy – Vuejs, React, HTML & Laravel Admin Dashboard Template** – is the most developer friendly & highly customizable Admin Dashboard Template based on Bootstrap 4, Bootstrap Vue & Reactstrap.

# Vuexy - Vuejs, React, HTML & Laravel Admin Dashboard Template
无锡新一代
**Vuexy – Vuejs, React, HTML & Laravel Admin Dashboard Template** – is the most developer friendly & highly customizable Admin Dashboard Template based on Bootstrap 4, Bootstrap Vue & Reactstrap.
import { useUtils as useI18nUtils } from '@core/libs/i18n'

setup(props) {
const { t } = useI18nUtils()
return {

      // i18n
      t,
    }
      }


props: {
item: {
type: Object,
required: true,
},
},


备注：
//无锡新一代
更新说明：
这个项目是基于vue3.0的，所以需要安装vue3.0的脚手架
npm install -g @vue/cli
npm install -g @vue/cli-service-global
npm install -g @vue/cli-service
npm install -g @vue/cli-plugin-babel
npm install -g @vue/cli-plugin-eslint
npm install -g @vue/cli-plugin-router
npm install -g @vue/cli-plugin-vuex
npm install -g @vue/cli-plugin-typescript
npm install -g @vue/cli-plugin-unit-jest
npm install -g @vue/cli-plugin-e2e-cypress
npm install -g @vue/cli-plugin-pwa


特别说明：
如果你 npm install 遇到奇葩问题，那么可以试试下面两种方式：
1.切换成淘宝镜像或华为镜像（很多人的选择）。
2.npm资源库切换成本有的（registry.npmjs.org），然后 yarn install，一般就解决问题了。
3.推荐第二种方案
PS：TNND，最近的工程 npm install 总是各种奇葩问题，跟同事同样的配置，本人 install 就报错

再说明：
npm install 时，经常性的会遇到插件版本问题，比如 swiper。
此时可以先将 package.json 文件里面关于swiper的先删掉，然后 npm install。
当 npm install 成功后，再用安装指定版本的方式，安装swiper（例：npm install --save swiper@4.5.1），再不行加上 --force

"swiper": "8.4.3",

npm i --save @vue/composition-api@1.3.0

npm install --save swiper@5.2.0

[//]: # (i18n)

{{ t("FreeShipping") }}


{{ t(product.etwassssss) }}

import { useUtils as useI18nUtils } from '@core/libs/i18n'

setup() {
//i18n
const { t } = useI18nUtils()

    return {
      // i18n
      t,
     }
}


Error Hash:
export NODE_OPTIONS=--openssl-legacy-provider


