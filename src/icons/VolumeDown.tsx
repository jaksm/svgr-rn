import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgVolumeDown(
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
        d="M15.14 4.956c.129.504.181 1.008.232 1.495l.047.442c.18 1.476.18 8.728 0 10.215l-.047.459-.001.008c-.045.46-.092.936-.224 1.444-.352 1.202-1.29 1.981-2.354 1.981l-.105-.001c-.588 0-1.227-.36-1.59-.675l-3.53-2.941H5.755c-1.4 0-2.424-1.012-2.61-2.579-.214-1.566-.172-4.253 0-5.677.203-1.483 1.276-2.51 2.61-2.51h1.813l3.464-2.898c.417-.363 1.154-.721 1.737-.719 1.045 0 2.019.752 2.37 1.956zm3.008 1.302a.91.91 0 011.278.237C20.44 7.988 21 9.943 21 12s-.56 4.012-1.574 5.505a.915.915 0 01-.754.404.902.902 0 01-.524-.167.955.955 0 01-.23-1.308c.803-1.183 1.245-2.758 1.245-4.434 0-1.677-.442-3.25-1.245-4.434a.955.955 0 01.23-1.308z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgVolumeDown);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
