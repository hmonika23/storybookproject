import React from 'react';
import Radar from './Radar';

export default {
  title: 'Radar Chart',
  component: Radar,
  argTypes: {
    dataSets: {
      name: 'dataSets',
      type: { name: 'array', required: false },
      defaultValue: [
        [100, 100, 20, 100, 80], // Data for first polygon
        [20, 85, 30, 20, 20],    // Data for second polygon
        [88, 20, 100, 58, 80]    // Data for third polygon
      ],
      description: 'An array of datasets for each polygon.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[ [100, 100, 20, 100, 80], [20, 85, 30, 20, 20], [88, 20, 100, 58, 80] ]' },
      },
      control: { type: 'object' }
    },
    labels: {
      name: 'labels',
      type: { name: 'array', required: false },
      defaultValue: ["Math", "R-coding", "Music", "Biology", "English"],
      description: 'The labels corresponding to each axis of the radar chart.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '["Math", "R-coding", "Music", "Biology", "English"]' },
      },
      control: { type: 'array' }
    },
    dataLabels: {
      name: 'dataLabels',
      type: { name: 'array', required: false },
      defaultValue: ["mister-a", "mister-b", "mister-c"],
      description: 'Labels for each dataset in the radar chart.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '["mister-a", "mister-b", "mister-c"]' },
      },
      control: { type: 'array' }
    },
    color1: {
      name: 'color1',
      type: { name: 'color', required: false },
      defaultValue: 'rgba(124,73,156,0.3)',
      description: 'Color for the first dataset polygon.',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: 'rgba(124,73,156,0.3)' },
      },
      control: { type: 'color' }
    },
    color2: {
      name: 'color2',
      type: { name: 'color', required: false },
      defaultValue: 'rgba(141,149,196,0.3)',
      description: 'Color for the second dataset polygon.',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: 'rgba(141,149,196,0.3)' },
      },
      control: { type: 'color' }
    },
    color3: {
      name: 'color3',
      type: { name: 'color', required: false },
      defaultValue: 'rgba(146,179,213,0.3)',
      description: 'Color for the third dataset polygon.',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: 'rgba(146,179,213,0.3)' },
      },
      control: { type: 'color' }
    },
  },
};

const Template = (args) => {
  const { color1, color2, color3, ...restArgs } = args;
  const colors = [color1, color2, color3];
  return <Radar {...restArgs} colors={colors} />;
};

export const Default = Template.bind({});
Default.args = {
  dataSets: [
    [100, 100, 20, 100, 80], // Data for first polygon
    [20, 85, 30, 20, 20],    // Data for second polygon
    [88, 20, 100, 58, 80]    // Data for third polygon
  ],
  labels: ["Math", "R-coding", "Music", "Biology", "English"],
  dataLabels: ["mister-a", "mister-b", "mister-c"],
  color1: 'rgba(124,73,156,0.3)',
  color2: 'rgba(141,149,196,0.3)',
  color3: 'rgba(146,179,213,0.3)',
};
