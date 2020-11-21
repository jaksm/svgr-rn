import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgBuy(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M14.121 11.233h2.768c.42 0 .75-.347.75-.765a.75.75 0 00-.75-.766h-2.768a.75.75 0 00-.75.766c0 .418.33.765.75.765zm6.056-5.306c.61 0 1.009.215 1.409.684.4.47.47 1.143.38 1.754l-.95 6.695c-.18 1.287-1.26 2.235-2.528 2.235H7.586c-1.329 0-2.428-1.04-2.538-2.387L4.13 3.783 2.62 3.518a.767.767 0 01.26-1.51l2.383.367c.34.062.59.347.62.694l.19 2.286c.03.328.29.572.61.572h13.494zm-12.75 12.98c-.84 0-1.52.695-1.52 1.552 0 .847.68 1.541 1.52 1.541.829 0 1.508-.694 1.508-1.541 0-.857-.68-1.551-1.509-1.551zm11.24 0c-.839 0-1.518.695-1.518 1.552 0 .847.68 1.541 1.519 1.541.829 0 1.508-.694 1.508-1.541 0-.857-.68-1.551-1.508-1.551z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBuy);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
