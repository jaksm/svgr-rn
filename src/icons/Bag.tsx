import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgBag(
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
        d="M16.93 7a.502.502 0 00.044-.226H17A4.992 4.992 0 0012.005 2 4.992 4.992 0 007.01 6.774a.649.649 0 000 .226h-.078c-1.282 0-2.652.846-3.05 3.12l-.777 6.195C2.469 20.863 4.81 22 7.869 22h8.29c3.049 0 5.32-1.646 4.754-5.685l-.769-6.195C19.676 7.91 18.35 7 17.087 7h-.157zm-1.437 0a.648.648 0 01-.043-.226 3.478 3.478 0 00-3.484-3.472 3.478 3.478 0 00-3.484 3.472.649.649 0 010 .226h7.011zm-6.396 5.149a.897.897 0 01-.884-.91c0-.502.396-.91.884-.91s.884.408.884.91-.396.91-.884.91zm4.905-.91c0 .502.396.91.884.91a.897.897 0 00.884-.91.897.897 0 00-.884-.91.897.897 0 00-.884.91z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgBag);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
