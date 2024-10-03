import{B as S}from"./Text-_EPEx9Tz.js";import"./jsx-runtime-DWbWqHZ-.js";import"./index-l2PZgWEW.js";import"./assertThisInitialized-BSDNMsTW.js";import"./index-BtTJd_qj.js";const k={title:"components/Button",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{id:"demo",label:"ボタン表示名",onClick:()=>{console.log("onClick event")}}},r={parameters:{docs:{description:{story:"プライマリーボタン：次の画面へ遷移するアクションを含むボタン"}}},args:{}},e={parameters:{docs:{description:{story:"セカンダリーボタン：プライマリーボタンに比べると重要度が低いアクションを含むボタン"}}},args:{type:"secondary"}},s={parameters:{docs:{description:{story:"ターティアリーボタン：セカンダリーボタンに比べると重要度が低いアクションを含むボタン"}}},args:{type:"other"}},o={parameters:{docs:{description:{story:"非活性ボタン"}}},args:{disabled:!0}};var a,t,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'プライマリーボタン：次の画面へ遷移するアクションを含むボタン'
      }
    }
  },
  args: {}
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,p,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,m,y;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'ターティアリーボタン：セカンダリーボタンに比べると重要度が低いアクションを含むボタン'
      }
    }
  },
  args: {
    type: \`other\`
  }
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const x=["Primary","Secondary","Tertiary","Disabled"];export{o as Disabled,r as Primary,e as Secondary,s as Tertiary,x as __namedExportsOrder,k as default};
