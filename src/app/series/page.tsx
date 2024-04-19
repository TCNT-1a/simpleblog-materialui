import ListPost from "./ListPost";
import { layout_styles } from "./style";

export default function Series() {
  return (
    <div className="w">
      <h2 style={layout_styles}>
        Series hướng dẫn các dự án tiềm năng Airdrop
      </h2>
      <ListPost></ListPost>
    </div>
  );
}
