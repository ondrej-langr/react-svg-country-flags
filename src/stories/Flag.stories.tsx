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

const Template: ComponentStory<typeof Flag> = (args) => (
  <div style={{ padding: 10 }}>
    <Flag {...args} />
  </div>
);

const defaultArgs = {
  countryCode: 'gb',
  width: 300,
  height: 200,
};

export const NormalFlag = Template.bind({});
export const NormalFlagWithCustomPlaceholder = Template.bind({});

NormalFlag.args = defaultArgs;
NormalFlagWithCustomPlaceholder.args = {
  ...defaultArgs,
  placeholder: ({ type }) => <>Hello this is placeholder of type {type}</>,
};
