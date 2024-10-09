import{B as b}from"./Text-HcDEOVdJ.js";import"./Layout-B6MWMv-b.js";import"./jsx-runtime-DWbWqHZ-.js";import"./index-l2PZgWEW.js";import"./assertThisInitialized-BSDNMsTW.js";import"./index-BtTJd_qj.js";const B={title:"components/button",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{id:"demo",label:"ボタン表示名",onClick:()=>{console.log("onClick event")}}},r={name:"プライマリーボタン",parameters:{docs:{description:{story:"次の画面へ遷移するアクションを含むボタン"}}},args:{}},e={name:"セカンダリーボタン",parameters:{docs:{description:{story:"プライマリーボタンに比べると重要度が低いアクションを含むボタン"}}},args:{type:"secondary"}},s={name:"ターシャリーボタン",parameters:{docs:{description:{story:"セカンダリーボタンに比べると重要度が低いアクションを含むボタン"}}},args:{type:"other"}},a={name:"非活性",parameters:{docs:{description:{story:"非活性ボタン"}}},args:{disabled:!0}};var n,o,t;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'プライマリーボタン',
  parameters: {
    docs: {
      description: {
        story: '次の画面へ遷移するアクションを含むボタン'
      }
    }
  },
  args: {}
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var c,p,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'セカンダリーボタン',
  parameters: {
    docs: {
      description: {
        story: 'プライマリーボタンに比べると重要度が低いアクションを含むボタン'
      }
    }
  },
  args: {
    type: \`secondary\`
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,i,y;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'ターシャリーボタン',
  parameters: {
    docs: {
      description: {
        story: 'セカンダリーボタンに比べると重要度が低いアクションを含むボタン'
      }
    }
  },
  args: {
    type: \`other\`
  }
}`,...(y=(i=s.parameters)==null?void 0:i.docs)==null?void 0:y.source}}};var u,l,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '非活性',
  parameters: {
    docs: {
      description: {
        story: '非活性ボタン'
      }
    }
  },
  args: {
    disabled: true
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const C=["Primary","Secondary","Tertiary","Disabled"];export{a as Disabled,r as Primary,e as Secondary,s as Tertiary,C as __namedExportsOrder,B as default};
