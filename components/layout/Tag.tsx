import { useRecoilState } from "recoil";
import { tagState } from "../../recoil/TagState";
import { MouseEvent } from "react";
interface ITags {
  tag: string;
}
const Tag = ({ tag }: ITags) => {
  const [clickedTag, setClickedTag] = useRecoilState(tagState);
  // 태그 클릭 -> 상태 변경
  const handleClickedTagName = (event: EventTarget & HTMLButtonElement) => {
    console.log(event.value);
  };
  return (
    <div className="w-10">
      <button
        className="font-semibold rounded-md"
        onClick={(e) => handleClickedTagName(e.currentTarget)}
        value={tag}
      >
        {tag}
      </button>
    </div>
  );
};

export default Tag;
