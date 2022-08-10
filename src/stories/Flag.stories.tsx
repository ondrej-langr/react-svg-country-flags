import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flag } from '../Flag';

export default {
  title: 'Flag',
  component: Flag,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Flag>;

const Template: ComponentStory<typeof Flag> = (args) => <Flag {...args} />;

export const NormalFlag = Template.bind({});
NormalFlag.args = {
  countryCode: 'gb',
};

export const NormalFlagWithCustomPlaceholder = Template.bind({});
NormalFlagWithCustomPlaceholder.args = {
  countryCode: 'gb',
  placeholder: <>Hello this is placeholder</>,
};
