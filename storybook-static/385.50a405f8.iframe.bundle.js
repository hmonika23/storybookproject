(self.webpackChunkcharts=self.webpackChunkcharts||[]).push([[90,385],{"./components/Speedometer/Speedometer.stories.js":(module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Slow=exports.Fast=exports.Default=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Speedometer=_interopRequireDefault(__webpack_require__("./components/Speedometer/Speedometer.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Template=(exports.default={title:"Components/Speedometer",component:_Speedometer.default,argTypes:{speed:{name:"speed",type:{name:"number",required:!1},defaultValue:23,description:"The current speed value displayed on the speedometer (in km/h).",table:{type:{summary:"number"},defaultValue:{summary:23}},control:{type:"number"}},duration:{name:"duration",type:{name:"number",required:!1},defaultValue:5e3,description:"The duration (in milliseconds) for the animation to complete when the speed changes.",table:{type:{summary:"number"},defaultValue:{summary:5e3}},control:{type:"number"}},label:{name:"label",type:{name:"string",required:!1},defaultValue:"Total Distance",description:"The label displayed indicating the distance or value shown on the speedometer.",table:{type:{summary:"string"},defaultValue:{summary:"Total Distance"}},control:{type:"text"}},startColor:{name:"startColor",type:{name:"color",required:!1},defaultValue:"#800080",description:"The start color of the gradient for the speedometer gauge.",table:{type:{summary:"color"},defaultValue:{summary:"#800080"}},control:{type:"color"}},endColor:{name:"endColor",type:{name:"color",required:!1},defaultValue:"#4e67dc",description:"The end color of the gradient for the speedometer gauge.",table:{type:{summary:"color"},defaultValue:{summary:"#4e67dc"}},control:{type:"color"}}}},function Template(args){return(0,_jsxRuntime.jsx)(_Speedometer.default,Object.assign({},args),`${args.label}-${args.startColor}-${args.endColor}-${args.duration}`)});(exports.Default=Template.bind({})).args={speed:23,duration:3e3,label:"Total Distance",startColor:"#800080",endColor:"#4e67dc"},(exports.Fast=Template.bind({})).args={speed:40,duration:1e3,label:"Distance Traveled",startColor:"#FF5733",endColor:"#C70039"},(exports.Slow=Template.bind({})).args={speed:10,duration:5e3,label:"Distance Covered",startColor:"#FFC300",endColor:"#FF5733"},module.exports.__namedExportsOrder=["Slow","Fast","Default"]},"./components/Speedometer/Speedometer.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_react=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativeSvg=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-svg/lib/module/index.js")),_reactNativeReanimated=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-reanimated/lib/module/index.web.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var _worklet_1555884348943_init_data={code:'function anonymous(){const{animatedAngle,cx,radius,startAngle,cy}=this.__closure;const angle=animatedAngle.value;console.log("angle",animatedAngle.value);const endXcolored=cx+radius*Math.cos(Math.PI*(startAngle+angle)/180);const endYcolored=cy+radius*Math.sin(Math.PI*(startAngle+angle)/180);return{d:"M"+(cx+radius*Math.cos(Math.PI*startAngle/180))+" "+(cy+radius*Math.sin(Math.PI*startAngle/180))+" A "+radius+" "+radius+" 0 "+(angle>180?1:0)+" 1 "+endXcolored+" "+endYcolored};}'},_worklet_11677769518418_init_data={code:'function anonymous(){const{animatedAngle,cx,radius,startAngle,cy}=this.__closure;const angle=animatedAngle.value;console.log("Animated angle for line",animatedAngle.value);const pointerStartX=cx+(radius+5)*Math.cos(Math.PI*(startAngle+angle)/180);const pointerStartY=cy+(radius+5)*Math.sin(Math.PI*(startAngle+angle)/180);const pointerEndX=pointerStartX-50*Math.cos(Math.PI*(startAngle+angle)/180);const pointerEndY=pointerStartY-50*Math.sin(Math.PI*(startAngle+angle)/180);return{x1:pointerStartX,y1:pointerStartY,x2:pointerEndX,y2:pointerEndY};}'},Speedometer=_react.default.memo((function(_ref){var _ref$speed=_ref.speed,speed=void 0===_ref$speed?0:_ref$speed,_ref$duration=_ref.duration,duration=void 0===_ref$duration?5e3:_ref$duration,_ref$label=_ref.label,label=void 0===_ref$label?"Total Distance":_ref$label,_ref$startColor=_ref.startColor,startColor=void 0===_ref$startColor?"#800080":_ref$startColor,_ref$endColor=_ref.endColor,endColor=void 0===_ref$endColor?"#4e67dc":_ref$endColor,cx=100,cy=100;console.log("speed at the start of the component",speed);var speedRef=(0,_react.useRef)(speed),previousSpeed=speedRef.current;console.log("speedRef at the start of component",speedRef);var _useState=(0,_react.useState)(0),_useState2=(0,_slicedToArray2.default)(_useState,2),distance=_useState2[0],setDistance=_useState2[1],startColorRef=(0,_react.useRef)(startColor),endColorRef=(0,_react.useRef)(endColor),durationRef=(0,_react.useRef)(duration);console.log("speed",speed);var animatedAngle=(0,_reactNativeReanimated.useSharedValue)(previousSpeed/220*300);console.log("previousspeed",previousSpeed),console.log("speed that is assigned to animated angle",speed);var AnimatedPath=_reactNativeReanimated.default.createAnimatedComponent(_reactNativeSvg.Path),AnimatedLine=_reactNativeReanimated.default.createAnimatedComponent(_reactNativeSvg.Line),updateAnimation=(0,_react.useCallback)((function(){console.log("speedRef.current used for calculating animation",speedRef.current),animatedAngle.value=(0,_reactNativeReanimated.withTiming)(speedRef.current/220*300,{duration:durationRef.current,easing:_reactNativeReanimated.Easing.inOut(_reactNativeReanimated.Easing.exp)})}),[220,300]);(0,_react.useEffect)((function(){console.log("speed",speed),console.log("speedRef",speedRef),speed!==speedRef.current&&(speedRef.current=speed,updateAnimation())}),[speed,updateAnimation]),(0,_react.useEffect)((function(){setDistance((2*speed).toFixed(2))}),[speed,120]),(0,_react.useEffect)((function(){startColorRef.current=startColor,endColorRef.current=endColor,durationRef.current=duration}),[startColor,endColor,duration]);var anonymous,animatedProps=(0,_reactNativeReanimated.useAnimatedProps)(((anonymous=function anonymous(){var angle=animatedAngle.value;console.log("angle",animatedAngle.value);var endXcolored=cx+100*Math.cos(Math.PI*(120+angle)/180),endYcolored=cy+100*Math.sin(Math.PI*(120+angle)/180);return{d:`M${cx+100*Math.cos(120*Math.PI/180)} ${cy+100*Math.sin(120*Math.PI/180)} A 100 100 0 ${angle>180?1:0} 1 ${endXcolored} ${endYcolored}`}}).__closure={animatedAngle,cx,radius:100,startAngle:120,cy},anonymous.__workletHash=1555884348943,anonymous.__initData=_worklet_1555884348943_init_data,anonymous)),pointerProps=(0,_reactNativeReanimated.useAnimatedProps)(function(){var anonymous=function anonymous(){var angle=animatedAngle.value;console.log("Animated angle for line",animatedAngle.value);var pointerStartX=cx+105*Math.cos(Math.PI*(120+angle)/180),pointerStartY=cy+105*Math.sin(Math.PI*(120+angle)/180);return{x1:pointerStartX,y1:pointerStartY,x2:pointerStartX-50*Math.cos(Math.PI*(120+angle)/180),y2:pointerStartY-50*Math.sin(Math.PI*(120+angle)/180)}};return anonymous.__closure={animatedAngle,cx,radius:100,startAngle:120,cy},anonymous.__workletHash=0xa9ef14dcd52,anonymous.__initData=_worklet_11677769518418_init_data,anonymous}());return(0,_jsxRuntime.jsx)(_View.default,{style:{alignItems:"center",justifyContent:"center"},children:(0,_jsxRuntime.jsxs)(_reactNativeSvg.default,{height:"350",width:"350",viewBox:"-20 0 240 170",children:[(0,_jsxRuntime.jsx)(_reactNativeSvg.Defs,{children:(0,_jsxRuntime.jsxs)(_reactNativeSvg.LinearGradient,{id:"grad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,_jsxRuntime.jsx)(_reactNativeSvg.Stop,{offset:"0%",stopColor:startColorRef.current}),(0,_jsxRuntime.jsx)(_reactNativeSvg.Stop,{offset:"100%",stopColor:endColorRef.current})]})}),(0,_jsxRuntime.jsx)(_reactNativeSvg.Path,{d:`M${cx+100*Math.cos(120*Math.PI/180)} ${cy+100*Math.sin(120*Math.PI/180)} A 100 100 0 1 1 ${cx+100*Math.cos(420*Math.PI/180)} ${cy+100*Math.sin(420*Math.PI/180)}`,stroke:"#ccc",strokeWidth:"10",fill:"none",strokeLinecap:"round"}),(0,_jsxRuntime.jsx)(AnimatedPath,{animatedProps,stroke:"url(#grad)",strokeWidth:"10",fill:"none"}),(0,_jsxRuntime.jsx)(_reactNativeSvg.Circle,{cx:cx+100*Math.cos(120*Math.PI/180),cy:cy+100*Math.sin(120*Math.PI/180),r:"5",fill:"url(#grad)"}),(0,_jsxRuntime.jsx)(AnimatedLine,{animatedProps:pointerProps,stroke:"url(#grad)",strokeWidth:"2"}),function renderLabels(){for(var labels=[],i=0;i<12;i++){var labelValue=20*i,labelAngle=120+27.272727272727273*i,labelX=cx+80*Math.cos(Math.PI*labelAngle/180),labelY=cy+80*Math.sin(Math.PI*labelAngle/180);labels.push((0,_jsxRuntime.jsx)(_reactNativeSvg.Text,{x:labelX,y:labelY,fontSize:"8",fill:"grey",textAnchor:"middle",alignmentBaseline:"middle",children:labelValue},labelValue))}return labels}(),(0,_jsxRuntime.jsx)(_reactNativeSvg.Text,{x:cx,y:cy,fontSize:"40",fill:"black",textAnchor:"middle",alignmentBaseline:"middle",children:speed}),(0,_jsxRuntime.jsx)(_reactNativeSvg.Text,{x:cx,y:120,fontSize:"10",fill:"grey",textAnchor:"middle",alignmentBaseline:"middle",children:"km/h"}),(0,_jsxRuntime.jsx)(_reactNativeSvg.Text,{x:cx,y:190,fontSize:"10",fill:"grey",textAnchor:"middle",alignmentBaseline:"middle",children:label}),(0,_jsxRuntime.jsxs)(_reactNativeSvg.Text,{x:90,y:200,fontSize:"10",fill:"black",fontWeight:"bold",textAnchor:"middle",alignmentBaseline:"middle",children:[distance," km"]})]})})}));exports.default=Speedometer;Speedometer.__docgenInfo={description:"",methods:[],displayName:"Speedometer",props:{speed:{defaultValue:{value:"0",computed:!1},required:!1},duration:{defaultValue:{value:"5000",computed:!1},required:!1},label:{defaultValue:{value:"'Total Distance'",computed:!1},required:!1},startColor:{defaultValue:{value:'"#800080"',computed:!1},required:!1},endColor:{defaultValue:{value:'"#4e67dc"',computed:!1},required:!1}}}}}]);