import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from './';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<any> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
};
