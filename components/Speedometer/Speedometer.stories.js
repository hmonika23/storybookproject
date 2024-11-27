import React from "react";
import Speedometer from "./Speedometer";

export default {
  title: "Components/Speedometer",
  component: Speedometer,
  argTypes: {
    
    speed: { 
      name: 'speed',
      type: { name: 'number', required: false },
      defaultValue: 23,
      description: 'The current speed value displayed on the speedometer (in km/h).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 23 },
      },
      control: { type: 'number' }
    },

    duration: { 
      name: 'duration',
      type: { name: 'number', required: false },
      defaultValue: 5000,
      description: 'The duration (in milliseconds) for the animation to complete when the speed changes.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5000 },
      },
      control: { type: 'number' }
    },
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      defaultValue: 'Total Distance',
      description: 'The label displayed indicating the distance or value shown on the speedometer.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Total Distance' },
      },
      control: { type: 'text' }
    },
    startColor: { 
      name: 'startColor',
      type: { name: 'color', required: false },
      defaultValue: '#800080',
      description: 'The start color of the gradient for the speedometer gauge.',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#800080' },
      },
      control: { type: 'color' }
    },
    endColor: { 
      name: 'endColor',
      type: { name: 'color', required: false },
      defaultValue: '#4e67dc',
      description: 'The end color of the gradient for the speedometer gauge.',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '#4e67dc' },
      },
      control: { type: 'color' }
    },
  },
};


const Template = (args) => (
    <Speedometer 
      key={`${args.label}-${args.startColor}-${args.endColor}-${args.duration}`} 
      {...args} 
    />
  );
  

export const Default = Template.bind({});
Default.args = {
  
  speed: 23,
  duration: 3000,
  label: 'Total Distance',
  startColor: '#800080',
  endColor: '#4e67dc',
};

export const Fast = Template.bind({});
Fast.args = {
  
  speed: 40,

  duration: 1000,
  label: 'Distance Traveled',
  startColor: '#FF5733',
  endColor: '#C70039',
};

export const Slow = Template.bind({});
Slow.args = {
 
  speed: 10,
  duration: 5000,
  label: 'Distance Covered',
  startColor: '#FFC300',
  endColor: '#FF5733',
};
