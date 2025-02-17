import type { Meta, StoryObj } from '@storybook/react';

import { Long } from './Long';

const meta = {
  title: 'Example/Long',
  component: Long,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Long>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
