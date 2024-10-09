import { Meta, StoryObj } from '@storybook/react';
import Layout from '../../../src/components/layouts/Layout';

// metadata
const meta = {
  title: 'components/layout',
  component: Layout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      table: {
        category: 'props',
        description: 'メインコンテンツエリアに表示する内容',
      }
    }
  },
  args: {
    headerProps: {
      label: 'UI sample system(from Storybook)'
    },
    leftPanelProps: {
      links: [
        {label: 'Top', path: ''},
        {label: 'page1', path: ''},
        {label: 'page2', path: ''},
      ]
    },
    footerProps: {
      copyright: '© 2024 MAU(from Storybook)'
    }
  },
} satisfies Meta<typeof Layout>;

// template
export default meta;
type Story = StoryObj<typeof meta>;

// story
export const BasicLayout: Story = {
  // storyName: '基本レイアウト', //-CSFv2
  name: '基本レイアウト',
  parameters: {
    docs: {
      description: {
        story: '基本レイアウト',
      },
    },
  },
  args: {
    children: (
      <div>
        メインコンテンツエリア(from Storybook)
      </div>
    ),
  },
};
