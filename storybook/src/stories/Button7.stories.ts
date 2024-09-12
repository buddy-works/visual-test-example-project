import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button7',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Primary1: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary1: Story = {
  args: {
    label: 'Button',
  },
};

export const Large1: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small1: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Primary2: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary2: Story = {
  args: {
    label: 'Button',
  },
};

export const Large2: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small2: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Primary3: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary3: Story = {
  args: {
    label: 'Button',
  },
};

export const Large3: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small3: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Primary4: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary4: Story = {
  args: {
    label: 'Button',
  },
};

export const Large4: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small4: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
export const Primary5: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary5: Story = {
  args: {
    label: 'Button',
  },
};

export const Large5: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small5: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
export const Primary6: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary6: Story = {
  args: {
    label: 'Button',
  },
};

export const Large6: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small6: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
export const Primary7: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary7: Story = {
  args: {
    label: 'Button',
  },
};

export const Large7: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};
