import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../../src/components';

// metadata
const meta = {
  title: 'components/ui/text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    label: 'テキスト表示名',
  },
} satisfies Meta<typeof Text>;

// template
export default meta;
type Story = StoryObj<typeof meta>;

// story
export const basicText: Story = {
  name: '通常',
  parameters: {
    docs: {
      description: {
        story: '初期値、ヘルパーテキストも併せて設定しています',
      },
    },
  },
  args: {
    defaultValue: 'テキスト初期値',
    helperText: 'テキストヘルパーテキスト'
  },
};

export const requiredText: Story = {
  name: '必須入力',
  parameters: {
    docs: {
      description: {
        story: '必須入力テキスト',
      },
    },
  },
  args: {
    required: true
  },
};

export const readonlyText: Story = {
  name: '読み取り専用',
  parameters: {
    docs: {
      description: {
        story: '読み取り専用テキスト',
      },
    },
  },
  args: {
    readOnly: true,
  },
};

export const passwordText: Story = {
  name: 'パスワード',
  parameters: {
    docs: {
      description: {
        story: 'パスワード入力テキスト',
      },
    },
  },
  args: {
    type: 'password'
  },
};

export const numberText: Story = {
  name: '数値入力',
  parameters: {
    docs: {
      description: {
        story: '数値入力テキスト',
      },
    },
  },
  args: {
    type: 'number'
  },
};

export const searchFieldText: Story = {
  name: '検索キーワード入力',
  parameters: {
    docs: {
      description: {
        story: '検索キーワード入力テキスト',
      },
    },
  },
  args: {
    type: 'search'
  },
};

// export const buttonText: Story = {
//   parameters: {
//     docs: {
//       description: {
//         story: 'ボタンっぽく見せるテキスト',
//       },
//     },
//   },
//   args: {
//     type: 'button',
//     label: '',
//     defaultValue: '登録'
//   },
// };

// export const checkBoxText: Story = {
//   parameters: {
//     docs: {
//       description: {
//         story: 'チェックボックス',
//       },
//     },
//   },
//   args: {
//     type: 'checkbox',
//     label: 'チェックボックス',
//     defaultValue: 'チェックボックス'
//   },
// };

export const colorPicker: Story = {
  name: 'カラーピッカー',
  parameters: {
    docs: {
      description: {
        story: 'カラーピッカー',
      },
    },
  },
  args: {
    type: 'color',
    label: '',
    defaultValue: 'カラーピッカー'
  },
};

export const datePicker: Story = {
  name: '日付入力',
  parameters: {
    docs: {
      description: {
        story: '日付入力テキスト',
      },
    },
  },
  args: {
    type: 'date'
  },
};

export const dateTimePicker: Story = {
  name: '日時入力',
  parameters: {
    docs: {
      description: {
        story: '日時入力テキスト',
      },
    },
  },
  args: {
    type: 'datetime-local',
  },
};

export const eMailText: Story = {
  name: 'メールアドレス',
  parameters: {
    docs: {
      description: {
        story: 'メールアドレス入力テキスト',
      },
    },
  },
  args: {
    type: 'email',
  },
};

export const fileText: Story = {
  name: 'ファイル入力',
  parameters: {
    docs: {
      description: {
        story: 'ファイル入力テキスト',
      },
    },
  },
  args: {
    type: 'file',
    label: ''
  },
};

export const hiddenText: Story = {
  name: '非表示',
  parameters: {
    docs: {
      description: {
        story: '非表示テキスト',
      },
    },
  },
  args: {
    type: 'hidden',
    label: ''
  },
};

export const imageText: Story = {
  name: 'イメージ',
  parameters: {
    docs: {
      description: {
        story: 'image',
      },
    },
  },
  args: {
    type: 'image',
  },
};

export const monthText: Story = {
  name: '月入力',
  parameters: {
    docs: {
      description: {
        story: '月入力テキスト',
      },
    },
  },
  args: {
    type: 'month',
    label: ''
  },
};

// export const radioText: Story = {
//   parameters: {
//     docs: {
//       description: {
//         story: 'ラジオボタン',
//       },
//     },
//   },
//   args: {
//     type: 'radio',
//   },
// };

export const rangeText: Story = {
  name: 'Range',
  parameters: {
    docs: {
      description: {
        story: 'range',
      },
    },
  },
  args: {
    type: 'range',
  },
};

// export const resetText: Story = {
//   parameters: {
//     docs: {
//       description: {
//         story: 'reset',
//       },
//     },
//   },
//   args: {
//     type: 'reset',
//   },
// };

// export const submitText: Story = {
//   parameters: {
//     docs: {
//       description: {
//         story: 'submit',
//       },
//     },
//   },
//   args: {
//     type: 'submit',
//   },
// };

export const telText: Story = {
  name: '電話番号',
  parameters: {
    docs: {
      description: {
        story: '電話番号入力テキスト',
      },
    },
  },
  args: {
    type: 'tel',
  },
};

export const timeText: Story = {
  name: '時間入力',
  parameters: {
    docs: {
      description: {
        story: '時間入力テキスト',
      },
    },
  },
  args: {
    type: 'time',
  },
};

export const urlText: Story = {
  name: 'URL入力',
  parameters: {
    docs: {
      description: {
        story: 'URL入力テキスト',
      },
    },
  },
  args: {
    type: 'url',
  },
};

export const weekText: Story = {
  name: '週入力',
  parameters: {
    docs: {
      description: {
        story: '週入力テキスト',
      },
    },
  },
  args: {
    type: 'week',
  },
};

