import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import ButtonBase from "@/components/Basic/ButtonBase/ButtonBase";

export default {
    title: 'Base/ButtonBase',
    component: ButtonBase,
} as ComponentMeta<typeof ButtonBase>

const Template: ComponentStory<typeof ButtonBase> = (args) => <ButtonBase {...args}/>

export const Primary = Template.bind({});

Primary.args = {
    label: 'Button',
    primary: true
}
export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};
export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
