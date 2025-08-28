import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
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
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
  parameters: {
    viewport: {
      viewports: {
        small: {
          name: "small",
          styles: {
            width: "375px",
            height: "375px",
          },
        },
        medium: {
          name: "medium",
          styles: {
            width: "768px",
            height: "768px",
          },
        },
      },
    },
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

export const Flaky: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky2: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky3: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky4: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky5: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky6: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky7: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky8: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky9: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky10: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky11: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky12: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky13: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky14: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky15: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky16: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky17: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky18: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky19: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky20: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky21: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky22: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky23: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky24: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky25: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky26: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky27: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky28: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky29: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky30: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky31: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky32: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky33: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky34: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky35: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky36: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky37: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky38: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky39: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};

export const Flaky40: Story = {
  args: {
    primary: true,
    flaky: true,
    label: 'Button',
  },
};
