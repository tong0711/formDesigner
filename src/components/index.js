import './components/style/designer.css'
import './components/style/designer.scss'
import './assets/iconfont/demo.css'
import './assets/iconfont/iconfont.css'

import formDesigner from '@/components/formDesigner'
import designer from '@/components/designer'
import designItem from '@/components/designItem'
import configPanel from '@/components/configPanel'
const plugins = {
  install : function (Vue) {
    Vue.component('formDesigner',formDesigner);
    Vue.component('designer',designer);
    Vue.component('designItem',designItem);
    Vue.component('configPanel',configPanel);
  }
};
// 这一步判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，我们直接引用打包好的js才能正常跑起来。
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugins);
}
export default plugins;