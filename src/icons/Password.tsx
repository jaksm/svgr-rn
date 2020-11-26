import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgPassword(
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
        d="M17.01 14.601a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H11.32A2.596 2.596 0 008.84 9.4a2.604 2.604 0 00-2.601 2.6 2.604 2.604 0 002.6 2.602 2.596 2.596 0 002.479-1.852h2.112v1.102a.75.75 0 001.5 0V12.75h1.33v1.102c0 .414.336.75.75.75zM7.667 2h8.669C19.723 2 22 4.377 22 7.916v8.167C22 19.623 19.723 22 16.334 22H7.666C4.276 22 2 19.622 2 16.083V7.916C2 4.377 4.277 2 7.666 2zM7.739 12c0-.608.495-1.102 1.102-1.102.607 0 1.102.494 1.102 1.102a1.103 1.103 0 01-2.204 0z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgPassword);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
