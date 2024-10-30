import{a as v}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{w as h,e as o}from"./index-DYijk_RU.js";import{B as S}from"./Layout-BexPkw3R.js";import"./v4-CQkTLCs1.js";import"./index-uubelm5h.js";import"./index-DmqEnlmW.js";import"./_baseIsEqual-ClwNoHvH.js";import"./index-DrFu-skq.js";import"./jsx-runtime-QvZ8i92b.js";import"./inheritsLoose-Bp8pAaMb.js";import"./index-Dei0BBcc.js";const j={title:"components/ui/button",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{label:"ボタン表示名",onClick:v("onClick event")}},e={name:"プライマリーボタン",parameters:{docs:{description:{story:"次の画面へ遷移するアクションを含むボタン"}}},args:{},play:async({canvasElement:w,step:x})=>{await x("ボタンにLabelの文字列が表示されている",async()=>{const s=h(w),T=s.getByText("ボタン表示名");await o(s.getByText("ボタン表示名")).toBeInTheDocument(),await o(T.classList.contains("MuiButton-colorPrimary")).toBe(!0)})}},a={name:"セカンダリーボタン",parameters:{docs:{description:{story:"プライマリーボタンに比べると重要度が低いアクションを含むボタン"}}},args:{type:"secondary"}},r={name:"ターシャリーボタン",parameters:{docs:{description:{story:"セカンダリーボタンに比べると重要度が低いアクションを含むボタン"}}},args:{type:"other"}},t={name:"非活性",parameters:{docs:{description:{story:"非活性ボタン"}}},args:{disabled:!0}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'プライマリーボタン',
  parameters: {
    docs: {
      description: {
        story: '次の画面へ遷移するアクションを含むボタン'
      }
    }
  },
  args: {},
  play: async ({
    canvasElement,
    step
  }) => {
    await step("ボタンにLabelの文字列が表示されている", async () => {
      const canvas = within(canvasElement);
      const button = canvas.getByText("ボタン表示名");
      await expect(canvas.getByText("ボタン表示名")).toBeInTheDocument();
      await expect(button.classList.contains("MuiButton-colorPrimary")).toBe(true);
    });
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var y,u,l;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,B,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(B=t.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const q=["Primary","Secondary","Tertiary","Disabled"];export{t as Disabled,e as Primary,a as Secondary,r as Tertiary,q as __namedExportsOrder,j as default};
