import React, { useEffect, useRef, useState, useCallback } from "react";
import { View } from "react-native";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Line,
  Circle,
  Text as SvgText,
} from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from "react-native-reanimated";

const Speedometer = React.memo(({
  speed = 0,
  duration = 5000,
  label = 'Total Distance',
  startColor = "#800080",
  endColor = "#4e67dc",
}) => {
  const time = 120;
  const maxValue = 220;
  const radius = 100;
  const startAngle = 120;
  const totalArcAngle = 300;
  const cx = 100;
  const cy = 100;
  console.log("speed at the start of the component", speed);
  const speedRef = useRef(speed);
  const previousSpeed = speedRef.current;
   console.log("speedRef at the start of component", speedRef);
   
  const [distance, setDistance] = useState(0);

  // Store the colors and duration in refs to avoid re-renders
  const startColorRef = useRef(startColor);
  const endColorRef = useRef(endColor);
  const durationRef = useRef(duration);
   console.log("speed", speed);
  const animatedAngle = useSharedValue((previousSpeed / maxValue) * totalArcAngle);
  console.log("previousspeed", previousSpeed);
  console.log("speed that is assigned to animated angle", speed);
  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const AnimatedLine = Animated.createAnimatedComponent(Line);

  // Update animation when speed changes
  const updateAnimation = useCallback(() => {
    console.log("speedRef.current used for calculating animation",speedRef.current);
    animatedAngle.value = withTiming((speedRef.current / maxValue) * totalArcAngle, {
      duration: durationRef.current,
      easing: Easing.inOut(Easing.exp),
    });
  }, [maxValue, totalArcAngle]);

  // Track changes in speed prop
  useEffect(() => {
    console.log("speed", speed);
    console.log("speedRef",speedRef);
    if (speed !== speedRef.current) {
      speedRef.current = speed;
      updateAnimation();
    }
  }, [speed, updateAnimation]);

  // Update distance without triggering re-render
  useEffect(() => {
    setDistance(((time / 60) * speed).toFixed(2));
  }, [speed, time]);

  // Track changes to colors and duration (but not trigger a re-render)
  useEffect(() => {
    startColorRef.current = startColor;
    endColorRef.current = endColor;
    durationRef.current = duration;
  }, [startColor, endColor, duration]);

  const animatedProps = useAnimatedProps(() => {
    const angle = animatedAngle.value;

    console.log("angle", animatedAngle.value)
    const endXcolored = cx + radius * Math.cos((Math.PI * (startAngle + angle)) / 180);
    const endYcolored = cy + radius * Math.sin((Math.PI * (startAngle + angle)) / 180);

    return {
      d: `M${cx + radius * Math.cos((Math.PI * startAngle) / 180)} ${cy + radius * Math.sin((Math.PI * startAngle) / 180)} A ${radius} ${radius} 0 ${angle > 180 ? 1 : 0} 1 ${endXcolored} ${endYcolored}`,
    };
  });

  const pointerProps = useAnimatedProps(() => {

    
    const angle = animatedAngle.value;
    console.log("Animated angle for line", animatedAngle.value);
    const pointerStartX = cx + (radius + 5) * Math.cos((Math.PI * (startAngle + angle)) / 180);
    const pointerStartY = cy + (radius + 5) * Math.sin((Math.PI * (startAngle + angle)) / 180);
    const pointerEndX = pointerStartX - 50 * Math.cos((Math.PI * (startAngle + angle)) / 180);
    const pointerEndY = pointerStartY - 50 * Math.sin((Math.PI * (startAngle + angle)) / 180);

    return {
      x1: pointerStartX,
      y1: pointerStartY,
      x2: pointerEndX,
      y2: pointerEndY,
    };
  });

  const renderLabels = () => {
    const labels = [];
    const stepValue = 20;
    const numberOfLabels = maxValue / stepValue + 1;
    const angleStep = totalArcAngle / (numberOfLabels - 1);

    for (let i = 0; i < numberOfLabels; i++) {
      const labelValue = i * stepValue;
      const labelAngle = startAngle + i * angleStep;
      const labelX = cx + (radius - 20) * Math.cos((Math.PI * labelAngle) / 180);
      const labelY = cy + (radius - 20) * Math.sin((Math.PI * labelAngle) / 180);

      labels.push(
        <SvgText
          key={labelValue}
          x={labelX}
          y={labelY}
          fontSize="8"
          fill="grey"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {labelValue}
        </SvgText>
      );
    }
    return labels;
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg height="350" width="350" viewBox="-20 0 240 170">
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={startColorRef.current} />
            <Stop offset="100%" stopColor={endColorRef.current} />
          </LinearGradient>
        </Defs>
        <Path
          d={`M${cx + radius * Math.cos((Math.PI * startAngle) / 180)} ${cy + radius * Math.sin((Math.PI * startAngle) / 180)} A ${radius} ${radius} 0 1 1 ${cx + radius * Math.cos((Math.PI * (startAngle + totalArcAngle)) / 180)} ${cy + radius * Math.sin((Math.PI * (startAngle + totalArcAngle)) / 180)}`}
          stroke="#ccc"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <AnimatedPath
          animatedProps={animatedProps}
          stroke="url(#grad)"
          strokeWidth="10"
          fill="none"
        />
        <Circle
          cx={cx + radius * Math.cos((Math.PI * startAngle) / 180)}
          cy={cy + radius * Math.sin((Math.PI * startAngle) / 180)}
          r="5"
          fill={"url(#grad)"}
        />
        <AnimatedLine
          animatedProps={pointerProps}
          stroke="url(#grad)"
          strokeWidth="2"
        />
        {renderLabels()}
        <SvgText
          x={cx}
          y={cy}
          fontSize="40"
          fill="black"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {speed}
        </SvgText>
        <SvgText
          x={cx}
          y={cy + 20}
          fontSize="10"
          fill="grey"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          km/h
        </SvgText>
        <SvgText
          x={cx}
          y={cy + 90}
          fontSize="10"
          fill="grey"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {label}
        </SvgText>
        <SvgText
          x={cx - 10}
          y={cy + 100}
          fontSize="10"
          fill="black"
          fontWeight="bold"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {distance} km
        </SvgText>
      </Svg>
    </View>
  );
});

export default Speedometer;
