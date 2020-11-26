import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgPaperNegative(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg
      fill="#000"
      viewBox="0 0 24 24"
      width={46}
      height={46}
      ref={svgRef}
      {...props}>
      <Path
        fillRule="evenodd"
        d="M8.629 12.99c0 .41.336.74.742.74h4.891a.745.745 0 000-1.49h-4.89a.745.745 0 00-.743.75zm10.71-3.964c.232-.003.485-.006.716-.006.247 0 .445.2.445.45v8.04c0 2.48-1.99 4.49-4.455 4.49H8.173C5.6 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.5 2 7.965 2h5.287c.258 0 .456.21.456.46v3.22c0 1.83 1.495 3.33 3.307 3.34.423 0 .796.003 1.123.006.254.002.48.004.679.004.14 0 .323-.002.521-.004zm.271-1.46c-.814.003-1.773 0-2.463-.007-1.095 0-1.997-.91-1.997-2.017V2.906c0-.43.517-.645.813-.334L17.97 4.68l1.98 2.08a.477.477 0 01-.339.807z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPaperNegative);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
