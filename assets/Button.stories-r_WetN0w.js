import{a as b}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{B}from"./Layout-BmxhAnDm.js";import"./v4-CQkTLCs1.js";import"./jsx-runtime-DWbWqHZ-.js";import"./index-l2PZgWEW.js";import"./assertThisInitialized-BSDNMsTW.js";import"./index-Ct2Sj-xx.js";const D={title:"components/ui/button",component:B,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{label:"ボタン表示名",onClick:b("onClick event")}},e={name:"プライマリーボタン",parameters:{docs:{description:{story:"次の画面へ遷移するアクションを含むボタン"}}},args:{}},r={name:"セカンダリーボタン",parameters:{docs:{description:{story:"プライマリーボタンに比べると重要度が低いアクションを含むボタン"}}},args:{type:"secondary"}},a={name:"ターシャリーボタン",parameters:{docs:{description:{story:"セカンダリーボタンに比べると重要度が低いアクションを含むボタン"}}},args:{type:"other"}},s={name:"非活性",parameters:{docs:{description:{story:"非活性ボタン"}}},args:{disabled:!0}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'プライマリーボタン',
  parameters: {
    docs: {
      description: {
        story: '次の画面へ遷移するアクションを含むボタン'
      }
    }
  },
  args: {}
  // play: async ({ canvasElement, step }) => {
  //   await step("ボタンにLabelの文字列が表示されている", async () => {
  //     const canvas = within(canvasElement);
  //     await expect(canvas.getByText("ボタン表示名")).toBeInTheDocument();

  //     const button = canvas.getByText("ボタン表示名");
  //     await expect(button.classList.contains("MuiButton-colorPrimary")).toBe(true);
  //   });
  // },
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var c,p,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,d,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(d=a.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,l,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const E=["Primary","Secondary","Tertiary","Disabled"];export{s as Disabled,e as Primary,r as Secondary,a as Tertiary,E as __namedExportsOrder,D as default};
