import { Meta, StoryObj } from '@storybook/react';
import { ConfirmDialog } from '../../../src/components';

// metadata
const meta = {
  title: 'components/ui/dialog',
  component: ConfirmDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    title: 'ダイアログタイトル',
    contentText: 'ダイアログコンテンツテキスト',
    executeKey: {id: '1', version: 0},
    onClickExecute: () => console.log('onClick execution button'),
    onClickCancel: () => console.log('onClick cancel button'),
    openDialogCondition: true,
    onCloseDialog: () => console.log('close dialog'),
  },
} satisfies Meta<typeof ConfirmDialog>;

// template
export default meta;
type Story = StoryObj<typeof meta>;

// story
export const Basic: Story = {
  name: '基本',
  parameters: {
    docs: {
      description: {
        story: '基本',
      },
    },
  },
  args: {
  },
};
