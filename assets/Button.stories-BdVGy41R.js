import{B as u}from"./Text-73_ukKtl.js";import"./assertThisInitialized-CGz1coAQ.js";import"./index-l2PZgWEW.js";import"./index-BtTJd_qj.js";const S={title:"components/Button",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{id:"demo",label:"ボタン表示名",onClick:()=>{}}},r={parameters:{docs:{description:{story:"プライマリーボタン：次の画面へ遷移するアクションを含むボタン"}}},args:{}},e={parameters:{docs:{description:{story:"セカンダリーボタン：プライマリーボタンに比べると重要度が低いアクションを含むボタン"}}},args:{type:"secondary"}},s={parameters:{docs:{description:{story:"非活性ボタン"}}},args:{disabled:!0}};var a,o,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'プライマリーボタン：次の画面へ遷移するアクションを含むボタン'
      }
    }
  },
  args: {}
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var n,c,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'セカンダリーボタン：プライマリーボタンに比べると重要度が低いアクションを含むボタン'
      }
    }
  },
  args: {
    type: \`secondary\`
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,i,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const B=["Primary","Secondary","Disabled"];export{s as Disabled,r as Primary,e as Secondary,B as __namedExportsOrder,S as default};
