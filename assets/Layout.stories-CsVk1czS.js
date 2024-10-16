import{j as r}from"./jsx-runtime-DWbWqHZ-.js";import{L as n}from"./Layout-m-Ji6Tj3.js";import"./index-l2PZgWEW.js";import"./assertThisInitialized-BSDNMsTW.js";import"./index-BtTJd_qj.js";const i={title:"components/layout",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text",table:{category:"props",description:"メインコンテンツエリアに表示する内容"}}},args:{headerProps:{label:"UI sample system(from Storybook)"},leftPanelProps:{links:[{label:"Top",path:""},{label:"page1",path:""},{label:"page2",path:""}]},footerProps:{copyright:"© 2024 MAU(from Storybook)"}}},o={name:"基本レイアウト",parameters:{docs:{description:{story:"基本レイアウト"}}},args:{children:r.jsx(r.Fragment,{children:"メインコンテンツエリア(from Storybook)"})}};var e,t,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  // storyName: '基本レイアウト', //-CSFv2
  name: '基本レイアウト',
  parameters: {
    docs: {
      description: {
        story: '基本レイアウト'
      }
    }
  },
  args: {
    children: <>
        メインコンテンツエリア(from Storybook)
      </>
  }
  // // storybookでレンダリングする内容
  // render: () => (
  //   <Layout headerProps={{
  //     label: 'UI sample system(from Storybook)'
  //   }}
  //     leftPanelProps={{
  //       links: [
  //         { label: 'Top', path: '' },
  //         { label: 'page1', path: '' },
  //         { label: 'page2', path: '' },
  //       ]
  //     }}
  //     footerProps={{
  //       copyright: '© 2024 MAU(from Storybook)'
  //     }}>
  //     <div>
  //       メインコンテンツエリア2(from Storybook)
  //     </div>
  //   </Layout>
  // )
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const y=["BasicLayout"];export{o as BasicLayout,y as __namedExportsOrder,i as default};
