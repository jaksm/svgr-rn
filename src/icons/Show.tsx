import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgShow(
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
        d="M8.098 12c0 2.133 1.746 3.87 3.902 3.87 2.146 0 3.893-1.737 3.893-3.87A3.888 3.888 0 0012 8.121c-2.156 0-3.902 1.736-3.902 3.879zm9.639-5.954c1.707 1.319 3.16 3.249 4.205 5.663a.729.729 0 010 .572C19.854 17.111 16.137 20 12 20h-.01c-4.127 0-7.844-2.89-9.931-7.719a.728.728 0 010-.572C4.146 6.88 7.863 4 11.99 4H12c2.068 0 4.03.718 5.737 2.046zM12 14.412a2.428 2.428 0 002.43-2.414A2.43 2.43 0 0012 9.574c-.117 0-.234.01-.341.029a1.997 1.997 0 01-2 1.92h-.05c-.028.155-.048.31-.048.475 0 1.328 1.093 2.414 2.44 2.414z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgShow);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
