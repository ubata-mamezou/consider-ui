import{w as Ue,e as Ie,u as f}from"./index-DYijk_RU.js";import{T as Oe}from"./Layout-BexPkw3R.js";import"./index-uubelm5h.js";import"./index-DmqEnlmW.js";import"./_baseIsEqual-ClwNoHvH.js";import"./index-DrFu-skq.js";import"./jsx-runtime-QvZ8i92b.js";import"./inheritsLoose-Bp8pAaMb.js";import"./index-Dei0BBcc.js";const Fe="テキスト表示名",Pe="テキスト初期値",Le="テキストヘルパーテキスト",Ne={title:"components/ui/text",component:Oe,parameters:{layout:"centered",docs:{subtitle:"テキストコンポーネント"}},tags:["autodocs"],argTypes:{},args:{label:Fe}},e={tags:["!autodocs"],name:"インタラクションテスト試行",args:{defaultValue:Pe,helperText:Le},play:async({canvasElement:qe,step:S})=>{const b=await Ue(qe).getByRole("textbox"),De="テキスト値";await S("初期状態をアサーション",async()=>{await Ie(b).toBeInTheDocument()}),await S("値を設定",async()=>{await f.clear(b),await f.type(b,De)})}},r={name:"通常",parameters:{docs:{description:{story:"初期値、ヘルパーテキストも併せて設定しています"}}},args:{defaultValue:Pe,helperText:Le}},a={name:"必須入力",parameters:{docs:{description:{story:"必須入力テキスト"}}},args:{required:!0}},s={name:"読み取り専用",parameters:{docs:{description:{story:"読み取り専用テキスト"}}},args:{readOnly:!0}},n={name:"パスワード",parameters:{docs:{description:{story:"パスワード入力テキスト"}}},args:{type:"password"}},t={name:"数値入力",parameters:{docs:{description:{story:"数値入力テキスト"}}},args:{type:"number"}},o={name:"検索キーワード入力",parameters:{docs:{description:{story:"検索キーワード入力テキスト"}}},args:{type:"search"}},c={name:"カラーピッカー",parameters:{docs:{description:{story:"カラーピッカー"}}},args:{type:"color",label:"",defaultValue:"カラーピッカー"}},p={name:"日付入力",parameters:{docs:{description:{story:"日付入力テキスト"}}},args:{type:"date"}},m={name:"日時入力",parameters:{docs:{description:{story:"日時入力テキスト"}}},args:{type:"datetime-local"}},i={name:"メールアドレス",parameters:{docs:{description:{story:"メールアドレス入力テキスト"}}},args:{type:"email"}},d={name:"ファイル入力",parameters:{docs:{description:{story:"ファイル入力テキスト"}}},args:{type:"file",label:""}},l={name:"非表示",parameters:{docs:{description:{story:"非表示テキスト"}}},args:{type:"hidden",label:""}},u={name:"イメージ",parameters:{docs:{description:{story:"image"}}},args:{type:"image"}},y={name:"月入力",parameters:{docs:{description:{story:"月入力テキスト"}}},args:{type:"month",label:""}},g={name:"Range",parameters:{docs:{description:{story:"range"}}},args:{type:"range"}},x={name:"電話番号",parameters:{docs:{description:{story:"電話番号入力テキスト"}}},args:{type:"tel"}},T={name:"時間入力",parameters:{docs:{description:{story:"時間入力テキスト"}}},args:{type:"time"}},w={name:"URL入力",parameters:{docs:{description:{story:"URL入力テキスト"}}},args:{type:"url"}},h={name:"週入力",parameters:{docs:{description:{story:"週入力テキスト"}}},args:{type:"week"}};var V,v,k;e.parameters={...e.parameters,docs:{...(V=e.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  //autodocsから除外
  name: 'インタラクションテスト試行',
  args: {
    defaultValue: defaultTextValue,
    helperText: helperText
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByRole(\`textbox\`);
    // const text = canvas.findByLabelText(labelText);
    const textValue = 'テキスト値';
    await step('初期状態をアサーション', async () => {
      await expect(text).toBeInTheDocument();
    });
    await step('値を設定', async () => {
      await userEvent.clear(text);
      await userEvent.type(text, textValue);
    });

    // await expect(canvas.findByDisplayValue(textValue)).toBeInTheDocument();
  }
}`,...(k=(v=e.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var R,B,E;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '通常',
  parameters: {
    docs: {
      description: {
        story: '初期値、ヘルパーテキストも併せて設定しています'
      }
    }
  },
  args: {
    defaultValue: defaultTextValue,
    helperText: helperText
  }
}`,...(E=(B=r.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var P,L,q;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '必須入力',
  parameters: {
    docs: {
      description: {
        story: '必須入力テキスト'
      }
    }
  },
  args: {
    required: true
  }
}`,...(q=(L=a.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var D,U,I;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '読み取り専用',
  parameters: {
    docs: {
      description: {
        story: '読み取り専用テキスト'
      }
    }
  },
  args: {
    readOnly: true
  }
}`,...(I=(U=s.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var O,F,M;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'パスワード',
  parameters: {
    docs: {
      description: {
        story: 'パスワード入力テキスト'
      }
    }
  },
  args: {
    type: 'password'
  }
}`,...(M=(F=n.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var _,j,z;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '数値入力',
  parameters: {
    docs: {
      description: {
        story: '数値入力テキスト'
      }
    }
  },
  args: {
    type: 'number'
  }
}`,...(z=(j=t.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var A,C,G;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '検索キーワード入力',
  parameters: {
    docs: {
      description: {
        story: '検索キーワード入力テキスト'
      }
    }
  },
  args: {
    type: 'search'
  }
}`,...(G=(C=o.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var H,J,K;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'カラーピッカー',
  parameters: {
    docs: {
      description: {
        story: 'カラーピッカー'
      }
    }
  },
  args: {
    type: 'color',
    label: '',
    defaultValue: 'カラーピッカー'
  }
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,W;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '日付入力',
  parameters: {
    docs: {
      description: {
        story: '日付入力テキスト'
      }
    }
  },
  args: {
    type: 'date'
  }
}`,...(W=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '日時入力',
  parameters: {
    docs: {
      description: {
        story: '日時入力テキスト'
      }
    }
  },
  args: {
    type: 'datetime-local'
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'メールアドレス',
  parameters: {
    docs: {
      description: {
        story: 'メールアドレス入力テキスト'
      }
    }
  },
  args: {
    type: 'email'
  }
}`,...(re=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,ne;d.parameters={...d.parameters,docs:{...(ae=d.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'ファイル入力',
  parameters: {
    docs: {
      description: {
        story: 'ファイル入力テキスト'
      }
    }
  },
  args: {
    type: 'file',
    label: ''
  }
}`,...(ne=(se=d.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var te,oe,ce;l.parameters={...l.parameters,docs:{...(te=l.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '非表示',
  parameters: {
    docs: {
      description: {
        story: '非表示テキスト'
      }
    }
  },
  args: {
    type: 'hidden',
    label: ''
  }
}`,...(ce=(oe=l.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var pe,me,ie;u.parameters={...u.parameters,docs:{...(pe=u.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'イメージ',
  parameters: {
    docs: {
      description: {
        story: 'image'
      }
    }
  },
  args: {
    type: 'image'
  }
}`,...(ie=(me=u.parameters)==null?void 0:me.docs)==null?void 0:ie.source}}};var de,le,ue;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: '月入力',
  parameters: {
    docs: {
      description: {
        story: '月入力テキスト'
      }
    }
  },
  args: {
    type: 'month',
    label: ''
  }
}`,...(ue=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var ye,ge,xe;g.parameters={...g.parameters,docs:{...(ye=g.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Range',
  parameters: {
    docs: {
      description: {
        story: 'range'
      }
    }
  },
  args: {
    type: 'range'
  }
}`,...(xe=(ge=g.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var Te,we,he;x.parameters={...x.parameters,docs:{...(Te=x.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: '電話番号',
  parameters: {
    docs: {
      description: {
        story: '電話番号入力テキスト'
      }
    }
  },
  args: {
    type: 'tel'
  }
}`,...(he=(we=x.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var be,Se,fe;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: '時間入力',
  parameters: {
    docs: {
      description: {
        story: '時間入力テキスト'
      }
    }
  },
  args: {
    type: 'time'
  }
}`,...(fe=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var Ve,ve,ke;w.parameters={...w.parameters,docs:{...(Ve=w.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'URL入力',
  parameters: {
    docs: {
      description: {
        story: 'URL入力テキスト'
      }
    }
  },
  args: {
    type: 'url'
  }
}`,...(ke=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var Re,Be,Ee;h.parameters={...h.parameters,docs:{...(Re=h.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: '週入力',
  parameters: {
    docs: {
      description: {
        story: '週入力テキスト'
      }
    }
  },
  args: {
    type: 'week'
  }
}`,...(Ee=(Be=h.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};const Qe=["it","basicText","requiredText","readonlyText","passwordText","numberText","searchFieldText","colorPicker","datePicker","dateTimePicker","eMailText","fileText","hiddenText","imageText","monthText","rangeText","telText","timeText","urlText","weekText"];export{Qe as __namedExportsOrder,r as basicText,c as colorPicker,p as datePicker,m as dateTimePicker,Ne as default,i as eMailText,d as fileText,l as hiddenText,u as imageText,e as it,y as monthText,t as numberText,n as passwordText,g as rangeText,s as readonlyText,a as requiredText,o as searchFieldText,x as telText,T as timeText,w as urlText,h as weekText};
