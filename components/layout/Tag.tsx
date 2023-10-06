import { useRecoilState } from "recoil";
import { tagState } from "../../recoil/tagState";
import Link from "next/link";
interface ITags {
  tag: string;
}
const Tag = ({ tag }: ITags) => {
  const [clickedTag, setClickedTag] = useRecoilState(tagState);
  // 태그 클릭 -> 상태 변경
  const handleClickedTagName = (event: EventTarget & HTMLButtonElement) => {
    setClickedTag(() => event.value);
    // 딜레이있음 -> useEffect ? useCallback?
  };
  return (
    <div className="w-10">
      <Link
        href={{
          pathname: "/[tag]",
          query: { tag: tag },
        }}
      >
        <button
          className="font-semibold rounded-md"
          onClick={(e) => handleClickedTagName(e.currentTarget)}
          value={tag}
        >
          {tag}
        </button>
      </Link>
    </div>
  );
};
export default Tag;
