webpackJsonp([0,2],[,function(t,a,e){e(26);var n=e(0)(e(34),e(17),"data-v-550ff862",null);t.exports=n.exports},function(t,a,e){e(25);var n=e(0)(e(35),e(16),"data-v-509ab501",null);t.exports=n.exports},function(t,a,e){e(21);var n=e(0)(e(32),e(12),"data-v-0f0752d8",null);t.exports=n.exports},function(t,a,e){e(22);var n=e(0)(e(31),e(13),null,null);t.exports=n.exports},function(t,a){},function(t,a){},,function(t,a,e){e(28);var n=e(0)(e(33),e(19),"data-v-9ce8e38c",null);t.exports=n.exports},function(t,a,e){e(27);var n=e(0)(e(36),e(18),"data-v-7c25344e",null);t.exports=n.exports},function(t,a,e){e(24);var n=e(0)(e(37),e(15),"data-v-49c9c16e",null);t.exports=n.exports},function(t,a,e){e(23);var n=e(0)(e(38),e(14),"data-v-20f92268",null);t.exports=n.exports},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return"span"===t.tag?e("span",{staticClass:"dropdown"},[t._t("default"),t._v(" "),t.show?t._t("dropdown"):t._e()],2):"li"===t.tag?e("li",{staticClass:"dropdown"},[t._t("default"),t._v(" "),t.show?t._t("dropdown"):t._e()],2):e("div",{staticClass:"dropdown"},[t._t("default"),t._v(" "),t.show?t._t("dropdown"):t._e()],2)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"container",staticClass:"container"},[e("dropdown-doc"),t._v(" "),e("modal-doc"),t._v(" "),e("tabs-doc"),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"https://github.com/wxsms/uiv"}},[e("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0"},attrs:{src:"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"}})])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("p",[e("button",{staticClass:"btn btn-default",attrs:{type:"button",id:"tabs-btn-1"},on:{click:function(a){t.selectTab(0)}}},[t._v("Active Tab 1")]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button",id:"tabs-btn-2"},on:{click:function(a){t.selectTab(1)}}},[t._v("Active Tab 2")]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button",id:"tabs-btn-3"},on:{click:function(a){t.thirdTabDisabled=!t.thirdTabDisabled}}},[t._v("\n          Enable / Disable Tab 3\n        ")])]),t._v(" "),e("p",[e("button",{staticClass:"btn btn-default",attrs:{type:"button",id:"tabs-btn-4"},on:{click:function(a){t.justified=!t.justified}}},[t._v("\n          Enable / Disable Justified Style\n        ")])]),t._v(" "),e("tabs",{ref:"tabComponent",attrs:{justified:t.justified}},[e("tab",{attrs:{title:"Tab 1"}},[e("p",[t._v("This is tab 1.")])]),t._v(" "),e("tab",{attrs:{title:"Tab 2"}},[e("p",[t._v("Tab 2 goes here.")])]),t._v(" "),e("tab",{attrs:{title:t.thirdTabDisabled?"Tab 3 (Disabled)":"Tab 3 (Enabled)",disabled:t.thirdTabDisabled}},[e("p",[t._v("This tab can be enable / disable.")])])],1),t._v(" "),e("br"),t._v(" "),e("tabs",{on:{"after-active":t.afterTabActive}},[e("tab",{attrs:{title:"<i class='glyphicon glyphicon-heart'></i> HTML Title","html-title":!0}},[e("p",[t._v("This tab has a HTML title.")])]),t._v(" "),e("tab",{attrs:{title:"Tab with callback"}},[e("p",[t._v("This tab has a callback function after selected.")])]),t._v(" "),e("tab",{attrs:{title:"Tab in group 1",group:"Tab Group"}},[e("p",[t._v("This is Tab in group 1.")])]),t._v(" "),e("tab",{attrs:{title:"Tab in group 2",group:"Tab Group"}},[e("p",[t._v("This is Tab in group 2.")])])],1)],1),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("tabs",{staticClass:"tab-docs"},[e("tab",{attrs:{title:"HTML"}},[e("pre",[e("code",[t._v('\n<p>\n  <button type="button" id="tabs-btn-1" class="btn btn-default" @click="selectTab(0)">Active Tab 1</button>\n  <button type="button" id="tabs-btn-2" class="btn btn-default" @click="selectTab(1)">Active Tab 2</button>\n  <button type="button" id="tabs-btn-3" class="btn btn-default" @click="thirdTabDisabled=!thirdTabDisabled">\n    Enable / Disable Tab 3\n  </button>\n</p>\n<p>\n  <button type="button" id="tabs-btn-4" class="btn btn-default" @click="justified=!justified">\n    Enable / Disable Justified Style\n  </button>\n</p>\n<tabs ref="tabComponent" :justified="justified">\n  <tab title="Tab 1">\n    <p>This is tab 1.</p>\n  </tab>\n  <tab title="Tab 2">\n    <p>Tab 2 goes here.</p>\n  </tab>\n  <tab :title="thirdTabDisabled?\'Tab 3 (Disabled)\':\'Tab 3 (Enabled)\'" :disabled="thirdTabDisabled">\n    <p>This tab can be enable / disable.</p>\n  </tab>\n</tabs>\n<br/>\n<tabs @after-active="afterTabActive">\n  <tab title="<i class=\'glyphicon glyphicon-heart\'></i> HTML Title" :html-title="true">\n    <p>This tab has a HTML title.</p>\n  </tab>\n  <tab title="Tab with callback">\n    <p>This tab has a callback function after selected.</p>\n  </tab>\n  <tab title="Tab in group 1" group="Tab Group">\n    <p>This is Tab in group 1.</p>\n  </tab>\n  <tab title="Tab in group 2" group="Tab Group">\n    <p>This is Tab in group 2.</p>\n  </tab>\n</tabs>\n          ')])])]),t._v(" "),e("tab",{attrs:{title:"JavaScript"}},[e("pre",[e("code",[t._v("\nexport default {\n  components: {\n    Tabs, Tab\n  },\n  data () {\n    return {\n      activeTab: {index: 0},\n      thirdTabDisabled: true,\n      justified: false\n    }\n  },\n  methods: {\n    selectTab (index) {\n      this.$refs.tabComponent.select(index)\n    },\n    afterTabActive (index) {\n      if (index === 1) {\n        window.alert('You clicked on a tab that has callback function!')\n      }\n    }\n  }\n          ")])])])],1)],1)])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("h2",{staticClass:"page-header"},[e("a",{attrs:{name:"tabs"}},[t._v("Tabs")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-6"},[e("h4",[t._v("Props (Tabs)")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("justified:Boolean")]),t._v(" Use justified style. Default: false.")])])]),t._v(" "),e("h4",[t._v("Methods (Tabs)")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("select (index:Number)")]),t._v(" Select tab by index.")])])]),t._v(" "),e("h4",[t._v("Props (Tab)")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("title:String")]),t._v(" The tab title")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("htmlTitle:Boolean")]),t._v(" Use HTML title. Default: false.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("disabled:Boolean")]),t._v(" Disable the tab. Default: false.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("group:String")]),t._v(" Tabs nav with same group will in a dropdown list.")])])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("h3",[t._v("Simple Modal with Callback")]),t._v(" "),e("div",{staticClass:"well"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){t.$refs.modal1.toggle()}}},[t._v("Show Modal 1")]),t._v(" "),e("span",{attrs:{id:"modal1-msg"}},[t._v(t._s(t.msg||"A simple modal example."))])]),t._v(" "),e("h3",[t._v("Different Sizes")]),t._v(" "),e("div",{staticClass:"well"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){t.$refs.modal2.toggle()}}},[t._v("Large Modal")]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){t.$refs.modal3.toggle()}}},[t._v("Small Modal")])]),t._v(" "),e("h3",[t._v("Customize Header / Footer")]),t._v(" "),e("div",{staticClass:"well"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){t.$refs.modal4.toggle()}}},[t._v("Modal with HTML Title")]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){t.$refs.modal5.toggle()}}},[t._v("Modal with No Footer")]),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){t.$refs.modal6.toggle()}}},[t._v("\n            Modal with Customize Footer\n          ")])]),t._v(" "),e("h3",[t._v("Disable Backdrop Function")]),t._v(" "),e("div",{staticClass:"well"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){t.$refs.modal7.toggle()}}},[t._v("\n            I will Not Close on Backdrop Clicked\n          ")])]),t._v(" "),e("modal",{ref:"modal1",attrs:{title:"Modal 1"},on:{"modal-show":t.showCallback,"modal-dismiss":t.dismissCallback}},[e("p",[t._v("This is a simple modal.")])]),t._v(" "),e("modal",{ref:"modal2",attrs:{title:"Modal 2",size:"lg"}},[e("p",[t._v("This is a large modal.")])]),t._v(" "),e("modal",{ref:"modal3",attrs:{title:"Modal 3",size:"sm"}},[e("p",[t._v("This is a small modal.")])]),t._v(" "),e("modal",{ref:"modal4"},[e("span",{slot:"title"},[e("span",[e("i",{staticClass:"glyphicon glyphicon-heart"}),t._v(" Modal 4")])]),t._v(" "),e("p",[t._v("This is a modal with HTML title.")])]),t._v(" "),e("modal",{ref:"modal5",attrs:{title:"Modal 5",footer:!1}},[e("p",[t._v("This is a modal with no footer.")])]),t._v(" "),e("modal",{ref:"modal6",attrs:{title:"Modal 6"}},[e("p",[t._v("This is a modal with customize footer.")]),t._v(" "),e("div",{slot:"footer"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.closeModal6}},[t._v("Close")]),t._v(" "),e("button",{staticClass:"btn btn-warning",attrs:{type:"button"}},[t._v("Warning Action")]),t._v(" "),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("Danger Action")])])]),t._v(" "),e("modal",{ref:"modal7",attrs:{title:"Modal 7",backdrop:!1}},[e("p",[t._v("This is a modal that can not close by backdrop click.")])])],1),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("tabs",{staticClass:"tab-docs"},[e("tab",{attrs:{title:"HTML"}},[e("pre",[e("code",[t._v('\n<h3>Simple Modal with Callback</h3>\n<div class="well">\n  <button type="button" class="btn btn-default" @click="$refs.modal1.toggle()">Show Modal 1</button>\n  <span id="modal1-msg">'+t._s(t.msg||"A simple modal example.")+'</span>\n</div>\n<h3>Different Sizes</h3>\n<div class="well">\n  <button type="button" class="btn btn-default" @click="$refs.modal2.toggle()">Large Modal</button>\n  <button type="button" class="btn btn-default" @click="$refs.modal3.toggle()">Small Modal</button>\n</div>\n<h3>Customize Header / Footer</h3>\n<div class="well">\n  <button type="button" class="btn btn-default" @click="$refs.modal4.toggle()">Modal with HTML Title</button>\n  <button type="button" class="btn btn-default" @click="$refs.modal5.toggle()">Modal with No Footer</button>\n  <button type="button" class="btn btn-default" @click="$refs.modal6.toggle()">\n    Modal with Customize Footer\n  </button>\n</div>\n<h3>Disable Backdrop Function</h3>\n<div class="well">\n  <button type="button" class="btn btn-default" @click="$refs.modal7.toggle()">\n    I will Not Close on Backdrop Clicked\n  </button>\n</div>\n          <!--Modal 1-->\n<modal ref="modal1" title="Modal 1" @modal-show="showCallback" @modal-dismiss="dismissCallback">\n  <p>This is a simple modal.</p>\n</modal>\n          <!--Modal 2-->\n<modal ref="modal2" title="Modal 2" size="lg">\n  <p>This is a large modal.</p>\n</modal>\n          <!--Modal 3-->\n<modal ref="modal3" title="Modal 3" size="sm">\n  <p>This is a small modal.</p>\n</modal>\n          <!--Modal 4-->\n<modal ref="modal4">\n      <span slot="title">\n        <span><i class="glyphicon glyphicon-heart"></i> Modal 4</span>\n      </span>\n  <p>This is a modal with HTML title.</p>\n</modal>\n          <!--Modal 5-->\n<modal ref="modal5" title="Modal 5" :footer="false">\n  <p>This is a modal with no footer.</p>\n</modal>\n          <!--Modal 6-->\n<modal ref="modal6" title="Modal 6">\n  <p>This is a modal with customize footer.</p>\n  <div slot="footer">\n    <button type="button" class="btn btn-default" @click="closeModal6">Close</button>\n    <button type="button" class="btn btn-warning">Warning Action</button>\n    <button type="button" class="btn btn-danger">Danger Action</button>\n  </div>\n</modal>\n          <!--Modal 7-->\n<modal ref="modal7" title="Modal 7" :backdrop="false">\n  <p>This is a modal that can not close by backdrop click.</p>\n</modal>\n        ')])])]),t._v(" "),e("tab",{attrs:{title:"JavaScript"}},[e("pre",[e("code",[t._v("\n  export default {\n    components: {Modal},\n    data () {\n      return {\n        msg: ''\n      }\n    },\n    methods: {\n      showCallback () {\n        // console.log('show')\n      },\n      dismissCallback (msg) {\n        this.msg = `Modal 1 dismiss with msg '${msg}'`\n      },\n      closeModal6 () {\n        this.$refs.modal6.toggle(false)\n      }\n    }\n  }\n            ")])])])],1)],1)])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("h2",{staticClass:"page-header"},[e("a",{attrs:{name:"modal"}},[t._v("Modal")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-6"},[e("h4",[t._v("Props")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("title:String")]),t._v(" The modal title (will be override if title slot exist).")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("size:String")]),t._v(" The modal size. Support 'lg' / 'sm', default normal size.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("backdrop:Boolean")]),t._v(" The modal can close by backdrop click. Default true.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("footer:Boolean")]),t._v(" The modal shows footer. Default true.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("cancelText:String")]),t._v(" The text of cancel button.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("okText:String")]),t._v(" The text of ok button.")])])]),t._v(" "),e("h4",[t._v("Slots")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("title")]),t._v(" Replace as the modal title.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("default")]),t._v(" Replace as the modal body.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("footer")]),t._v(" Replace as the modal footer.")])])]),t._v(" "),e("h4",[t._v("Methods")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("toggle(show:Boolean)")]),t._v(" Toggle or show / hide the modal.")])])]),t._v(" "),e("h4",[t._v("Events")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("modal-show")]),t._v(" Called after modal shown.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("modal-dismiss")]),t._v(" Called after modal dismissed.")])])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("ul",{staticClass:"nav nav-tabs",class:{"nav-justified":t.justified}},[t._l(t.groupedTabs,function(a,n){return[a.tabs?e("dropdown",{class:{active:a.active,disabled:a.disabled},attrs:{tag:"li"}},[e("a",{attrs:{"data-role":"trigger",href:"javascript:void(0)"}},[e("span",[t._v(t._s(a.group))]),t._v(" "),e("span",{staticClass:"caret"})]),t._v(" "),e("ul",{staticClass:"dropdown-menu",slot:"dropdown"},t._l(a.tabs,function(a){return e("li",[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.select(a)}}},[t._v("\n              "+t._s(a.title)+"\n            ")])])}))]):e("li",{class:{active:a.active,disabled:a.disabled}},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.select(a)}}},[a.htmlTitle?e("span",{domProps:{innerHTML:t._s(a.title)}}):e("span",{domProps:{textContent:t._s(a.title)}})])])]})],2),t._v(" "),e("div",{staticClass:"tab-content"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"tab-pane active"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("dropdown",{ref:"dropdown1",attrs:{id:"dropdown-1"}},[e("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{"data-role":"trigger",type:"button"}},[e("span",[t._v("Dropdown 1")]),t._v(" "),e("span",{staticClass:"caret"})]),t._v(" "),e("ul",{staticClass:"dropdown-menu",slot:"dropdown"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("Action")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Another action")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Something else here")])]),t._v(" "),e("li",{staticClass:"divider",attrs:{role:"separator"}}),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Separated link")])])])]),t._v(" "),e("dropdown",{attrs:{id:"dropdown-2"}},[e("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{"data-role":"trigger",type:"button"}},[e("span",[t._v("Dropdown 2")]),t._v(" "),e("span",{staticClass:"caret"})]),t._v(" "),e("ul",{staticClass:"dropdown-menu",slot:"dropdown"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("Action")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Another action")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Something else here")])]),t._v(" "),e("li",{staticClass:"divider",attrs:{role:"separator"}}),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Separated link")])])])]),t._v(" "),e("dropdown",{staticClass:"btn-group",attrs:{id:"dropdown-3"}},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("Split Button")]),t._v(" "),e("button",{staticClass:"btn btn-danger dropdown-toggle",attrs:{type:"button","data-role":"trigger"}},[e("span",{staticClass:"caret"}),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Toggle Dropdown")])]),t._v(" "),e("ul",{staticClass:"dropdown-menu",slot:"dropdown"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("Action")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Another action")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Something else here")])]),t._v(" "),e("li",{staticClass:"divider",attrs:{role:"separator"}}),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Separated link")])])])])],1),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("tabs",{staticClass:"tab-docs"},[e("tab",{attrs:{title:"HTML"}},[e("pre",[e("code",[t._v('\n<dropdown id="dropdown-1" ref="dropdown1">\n  <button data-role="trigger" class="btn btn-default dropdown-toggle" type="button">\n    <span>Dropdown 1</span>\n    <span class="caret"></span>\n  </button>\n  <ul slot="dropdown" class="dropdown-menu">\n    <li><a href="#">Action</a></li>\n    <li><a href="#">Another action</a></li>\n    <li><a href="#">Something else here</a></li>\n    <li role="separator" class="divider"></li>\n    <li><a href="#">Separated link</a></li>\n  </ul>\n</dropdown>\n<dropdown id="dropdown-2">\n  <button data-role="trigger" class="btn btn-primary dropdown-toggle" type="button">\n    <span>Dropdown 2</span>\n    <span class="caret"></span>\n  </button>\n  <ul slot="dropdown" class="dropdown-menu">\n    <li><a href="#">Action</a></li>\n    <li><a href="#">Another action</a></li>\n    <li><a href="#">Something else here</a></li>\n    <li role="separator" class="divider"></li>\n    <li><a href="#">Separated link</a></li>\n  </ul>\n</dropdown>\n<!-- Split button -->\n<dropdown id="dropdown-3" class="btn-group">\n  <button type="button" class="btn btn-danger">Split Button</button>\n  <button type="button" class="btn btn-danger dropdown-toggle" data-role="trigger">\n    <span class="caret"></span>\n    <span class="sr-only">Toggle Dropdown</span>\n  </button>\n  <ul slot="dropdown" class="dropdown-menu">\n    <li><a href="#">Action</a></li>\n    <li><a href="#">Another action</a></li>\n    <li><a href="#">Something else here</a></li>\n    <li role="separator" class="divider"></li>\n    <li><a href="#">Separated link</a></li>\n  </ul>\n</dropdown>\n        ')])])])],1)],1)])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("h2",{staticClass:"page-header"},[e("a",{attrs:{name:"dropdown"}},[t._v("Dropdown")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-6"},[e("h4",[t._v("Note")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Use as the original Bootstrap style.")])]),t._v(" "),e("li",[e("p",[t._v("The element attached with "),e("code",[t._v('data-role="trigger"')]),t._v(" will be the dropdown trigger.")])])]),t._v(" "),e("h4",[t._v("Props")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("tag:String")]),t._v(" "),e("span",[t._v("The HTML tag that render the dropdown component. Default: 'span'. Support: 'div' / 'li' / 'span'")])])])]),t._v(" "),e("h4",[t._v("Slots")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("dropdown")]),t._v(" "),e("span",[t._v("Replace as the dropdown body")])])])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("transition",{attrs:{name:"backdrop"}},[t.show?e("div",{staticClass:"modal-backdrop"}):t._e()]),t._v(" "),e("transition",{attrs:{name:"modal"}},[t.show?e("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog"},on:{click:t.backdropClicked}},[e("div",{ref:"modal",staticClass:"modal-dialog",class:t.modalSizeClass,attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){t.toggle(!1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),e("h4",{staticClass:"modal-title"},[t._t("title",[t._v(t._s(t.title))])],2)]),t._v(" "),e("div",{staticClass:"modal-body"},[t._t("default")],2),t._v(" "),t.footer?e("div",{staticClass:"modal-footer"},[t._t("footer",[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){t.toggle(!1,"cancel")}}},[t._v(t._s(t.cancelText))]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){t.toggle(!1,"ok")}}},[t._v(t._s(t.okText))])])],2):t._e()])])]):t._e()])],1)},staticRenderFns:[]}},,function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},,function(t,a,e){"use strict";var n=e(39),s=e.n(n);s.a.registerLanguage("xml",e(42)),s.a.registerLanguage("css",e(40)),s.a.registerLanguage("javascript",e(41)),a.a=s.a},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(30),s=e(11),o=e.n(s),l=e(9),i=e.n(l),r=e(10),d=e.n(r);a.default={name:"app",components:{TabsDoc:o.a,DropdownDoc:i.a,ModalDoc:d.a},mounted:function(){for(var t=this.$refs.container.querySelectorAll("pre code"),a=0;a<t.length;a++)n.a.highlightBlock(t[a])}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:{tag:{type:String,default:"span"}},data:function(){return{show:!1,triggerEl:void 0}},mounted:function(){this.triggerEl=this.$el.querySelector('[data-role="trigger"]'),this.triggerEl&&this.triggerEl.addEventListener("click",this.toggle),window.addEventListener("click",this.windowClicked)},beforeDestroy:function(){this.triggerEl&&this.triggerEl.removeEventListener("click",this.toggle),window.removeEventListener("click",this.windowClicked)},methods:{toggle:function(){this.show=!this.show},windowClicked:function(t){this.triggerEl&&this.triggerEl.contains(t.target)||(this.show=!1)}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:{title:{type:String},size:{type:String},backdrop:{type:Boolean,default:!0},footer:{type:Boolean,default:!0},cancelText:{type:String,default:"Cancel"},okText:{type:String,default:"OK"}},data:function(){return{show:!1}},computed:{modalSizeClass:function(){return{"modal-lg":"lg"===this.size,"modal-sm":"sm"===this.size}}},methods:{toggle:function(t,a){this.show=void 0!==t?!!t:!this.show,this.$emit("modal-"+(this.show?"show":"dismiss"),a||"dismiss")},backdropClicked:function(t){this.backdrop&&this.$refs.modal&&!this.$refs.modal.contains(t.target)&&this.toggle(!1)}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:{title:{type:String,default:"Tab Title"},htmlTitle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},group:{type:String}},data:function(){return{active:!1}},created:function(){var t=this;t.$parent&&t.$parent.tabs&&"function"==typeof t.$parent.tabs.push?t.$parent.tabs.push(t):console.error(new Error("Tab parent must be Tabs."))}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(3),s=e.n(n);a.default={components:{Dropdown:s.a},props:{justified:{type:Boolean,default:!1}},data:function(){return{tabs:[],groupedTabs:[]}},mounted:function(){this.tabs&&this.tabs.length>0&&this.select(0)},methods:{computeGroupedTabs:function(){var t=[],a={};this.tabs.forEach(function(e){e.group?(a.hasOwnProperty(e.group)?t[a[e.group]].tabs.push(e):(t.push({tabs:[e],group:e.group}),a[e.group]=t.length-1),e.active&&(t[a[e.group]].active=!0)):t.push(e)}),this.groupedTabs=t},select:function(t){var a=t;"number"==typeof t&&t>=0&&t<this.tabs.length?a=this.tabs[t]:t=this.tabs.indexOf(a),a.disabled||a.active||(this.tabs.forEach(function(t){t.active=!1}),a.active=!0,this.computeGroupedTabs(),this.$emit("after-active",t))}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(3),s=e.n(n),o=e(2),l=e.n(o),i=e(1),r=e.n(i);a.default={components:{Dropdown:s.a,Tab:r.a,Tabs:l.a}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(8),s=e.n(n),o=e(2),l=e.n(o),i=e(1),r=e.n(i);a.default={components:{Modal:s.a,Tabs:l.a,Tab:r.a},data:function(){return{msg:""}},methods:{showCallback:function(){},dismissCallback:function(t){this.msg="Modal 1 dismiss with msg '"+t+"'"},closeModal6:function(){this.$refs.modal6.toggle(!1)}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(2),s=e.n(n),o=e(1),l=e.n(o);a.default={components:{Tabs:s.a,Tab:l.a},data:function(){return{activeTab:{index:0},thirdTabDisabled:!0,justified:!1}},methods:{selectTab:function(t){this.$refs.tabComponent.select(t)},afterTabActive:function(t){1===t&&window.alert("You clicked on a tab that has callback function!")}}}},,,,,function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(7),s=e(4),o=e.n(s),l=e(5),i=(e.n(l),e(6));e.n(i);n.a.config.productionTip=!1,new n.a({el:"#app",template:"<App/>",components:{App:o.a}})}],[43]);
//# sourceMappingURL=app.99d43b61b85c03f7a421.js.map