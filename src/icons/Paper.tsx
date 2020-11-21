import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgPaper(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>,
) {
  return (
    <Svg width={24} height={24} fill="none" ref={svgRef} {...props}>
      <Path
        fill="#200E32"
        fillRule="evenodd"
        d="M8.926 16.39h5.386c.406 0 .743-.34.743-.75s-.337-.74-.743-.74H8.926a.743.743 0 00-.743.74c0 .41.337.75.743.75zm3.346-6.49H8.926a.752.752 0 00-.743.75c0 .41.337.74.743.74h3.346c.406 0 .743-.33.743-.74s-.337-.75-.743-.75zm7.066-.874c.233-.003.486-.006.716-.006.248 0 .446.2.446.45v8.04c0 2.48-1.99 4.49-4.445 4.49H8.173C5.6 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.5 2 7.965 2h5.287c.258 0 .456.21.456.46v3.22c0 1.83 1.495 3.33 3.307 3.34.423 0 .796.003 1.123.006.254.002.48.004.679.004.14 0 .323-.002.521-.004zm.273-1.46c-.814.003-1.773 0-2.463-.007-1.095 0-1.997-.911-1.997-2.017V2.906c0-.431.518-.645.814-.334l2.005 2.106 1.98 2.081a.477.477 0 01-.339.807z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPaper);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
