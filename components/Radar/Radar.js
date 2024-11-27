import React from 'react';
import { View } from 'react-native';
import Svg, { Polygon, Line, Text, Circle, G } from 'react-native-svg';

const Radar = ({ dataSets, labels, dataLabels, colors, onChartClick }) => {
  const numAxes = labels.length;
  const centerX = 100;
  const centerY = 100;
  const radius = 100;
  const maxValue = 100;
  const rotationAngle = -18; // Adjust the angle to align the pentagon side horizontally

  // Calculate points for a regular polygon
  const calculatePoint = (value, index) => {
    const angle = (2 * Math.PI * index) / numAxes;
    const x = centerX + (radius * (value / maxValue)) * Math.cos(angle);
    const y = centerY + (radius * (value / maxValue)) * Math.sin(angle);
    return { x, y };
  };

  // Grid circles
  const gridCircles = Array.from({ length: 5 }, (_, i) => {
    const levelRadius = radius * ((i + 1) / 5);
    const points = Array.from({ length: numAxes }, (_, j) =>
      `${calculatePoint(levelRadius, j).x},${calculatePoint(levelRadius, j).y}`
    ).join(' ');
    return <Polygon key={i} points={points} stroke="#ddd" fill="none" />;
  });

  // Axis lines
  const axisLines = labels.map((label, i) => {
    const levelRadius = radius * (1 / 5);
    const { x, y } = calculatePoint(radius, i);
    return (
      <Line
        key={i}
        x1={calculatePoint(levelRadius, i).x}
        y1={calculatePoint(levelRadius, i).y}
        x2={x}
        y2={y}
        stroke="#ddd"
      />
    );
  });

  const Legends = ({ labelX, labelY, index }) => {
    return (
      <G transform={`rotate(${Math.abs(rotationAngle)}, ${centerX}, ${centerY})`}>
        {/* Position Circle and Text horizontally */}
        <Circle cx={labelX} cy={labelY} r="2" fill={colors[index].replace('0.3', '1')} />
        <Text
          x={labelX + 8} // Offset Text slightly to the right of Circle
          y={labelY + 3} // Adjust Y to vertically align with the Circle center
          fontSize="10"
          textAnchor="start"
          fill={colors[index].replace('0.3', '1')}
        >
          {dataLabels[index]}
        </Text>
      </G>
    );
  };

  // Data polygons with circles on each vertex and side captions
  const dataPolygons = dataSets.map((data, index) => {
    const dataPoints = data.map((value, i) => calculatePoint(value, i));
    const pointsString = dataPoints.map(point => `${point.x},${point.y}`).join(' ');

    // Position for the label next to each polygon
    const labelX = centerX + radius + 50;
    const labelY = centerY - radius + index * 20;

    return (
      <React.Fragment key={index}>
        <Polygon
          points={pointsString}
          fill={colors[index]}
          stroke={colors[index].replace('0.3', '1')}
          strokeWidth="2"
        />
        {dataPoints.map((point, i) => (
          <Circle
            key={`${index}-${i}`}
            cx={point.x}
            cy={point.y}
            r="2"
            fill={colors[index].replace('0.3', '1')}
          />
        ))}
        {/* Label for each dataset */}
        <Legends labelX={labelX} labelY={labelY} index={index} />
      </React.Fragment>
    );
  });

  // Labels around the chart
  const axisLabels = labels.map((label, i) => {
    const { x, y } = calculatePoint(radius + 20, i);
    return (
      <Text
        key={i}
        x={x}
        y={y}
        fontSize="10"
        textAnchor="middle"
        fill="black"
        // Apply inverse rotation to keep text horizontal
        transform={`rotate(${Math.abs(rotationAngle)}, ${x}, ${y})`}
      >
        {label}
      </Text>
    );
  });

  // Handle chart click
  const handleChartClick = (event) => {
    if (onChartClick) {
      console.log("Inside Handle click")
      onChartClick(console.log("Clicked on chart"));
    }
  };

  return (
    <View>
      {/* Apply -18 degree rotation to align one side horizontally */}
      <Svg
        width="400"
        height="400"
        viewBox="-80 -50 400 400"
        transform={`rotate(${rotationAngle}, ${centerX}, ${centerY})`}
        onPress={handleChartClick} // Attach the click event handler
      >
        {gridCircles}
        {axisLines}
        {dataPolygons}
        {axisLabels}
      </Svg>
    </View>
  );
};

export default Radar;
