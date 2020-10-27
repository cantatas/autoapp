/* eslint-disable */
/**
 * 该文件是为了按需加载，剔除掉了一些不需要的框架组件。
 * 减少了编译支持库包大小
 *
 * 当需要更多组件依赖时，在该文件加入即可
 */

import {
  Button,
  Icon,
  Cell,
  CellGroup,
  Image,
  Col,
  Row,
  Popup,
  Toast,
  Calendar,
  Checkbox,
  CheckboxGroup,
  DatetimePicker,
  Field,
  Form,
  Picker,
  RadioGroup,
  Radio,
  Rate,
  Search,
  Slider,
  Switch,
  ActionSheet,
  Dialog,
  DropdownMenu,
  DropdownItem,
  Loading,
  Notify,
  Overlay,
  PullRefresh,
  ShareSheet,
  Swipe,
  SwipeItem,
  SwipeCell,
  Collapse,
  CollapseItem,
  List,
  Tag,
  Tabs,
  Tab,
  wipe
} from "vant";

export function installVant(Vue) {
  Vue.use(Button);
  Vue.use(Icon);
  Vue.use(Cell);
  Vue.use(CellGroup);
  Vue.use(Image);
  Vue.use(Col);
  Vue.use(Row);
  Vue.use(Popup);
  Vue.use(Calendar);
  Vue.use(Checkbox);
  Vue.use(CheckboxGroup);
  Vue.use(DatetimePicker);
  Vue.use(Field);
  Vue.use(Form);
  Vue.use(Picker);
  Vue.use(RadioGroup);
  Vue.use(Radio);
  Vue.use(Rate);
  Vue.use(Search);
  Vue.use(Slider);
  Vue.use(Switch);
  Vue.use(ActionSheet);
  Vue.use(DropdownMenu);
  Vue.use(DropdownItem);
  Vue.use(Loading);
  Vue.use(Overlay);
  Vue.use(PullRefresh);
  Vue.use(ShareSheet);
  Vue.use(Swipe);
  Vue.use(SwipeItem);
  Vue.use(SwipeCell);
  Vue.use(Collapse);
  Vue.use(CollapseItem);
  Vue.use(List);
  Vue.use(Tag);
  Vue.use(Tabs);
  Vue.use(Tab);
  
  
  Vue.prototype.$toast = Toast
  Vue.prototype.$dialog = Dialog
  Vue.prototype.$notify = Notify
}
