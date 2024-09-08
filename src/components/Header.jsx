import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { sortingDataFunc, searchDataFunc } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 shadow-md">
      <div className="text-4xl font-bold tracking-wide">REACT UYGULAMA</div>
      <div className="flex items-center gap-6">
        <div className="text-black">
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-12 px-4 rounded-full bg-white shadow-sm"
            id=""
          >
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>
        <input
          onChange={(e) => dispatch(searchDataFunc(e.target.value))}
          className="h-12 px-4 rounded-full text-black shadow-sm bg-gray-100"
          type="text"
          placeholder="Arama yapınız.."
        />
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-purple-800 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-600 transition-all"
        >
          <MdPostAdd size={28} />
        </div>
      </div>
    </div>
  );
};

export default Header;
