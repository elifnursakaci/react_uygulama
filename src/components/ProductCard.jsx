import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${dt?.id}`);
  };

  return (
    <div className="w-[400px] h-[450px] relative m-4 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img src={dt?.url} className="w-full h-full object-cover" alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
      <div className="absolute left-0 bottom-0 w-full p-4 text-white z-10">
        <div className="text-lg text-center font-semibold">{dt?.name}</div>
        <div className="text-center text-sm">{dt?.price} ₺</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-4 right-4 z-20"
      >
        <BsThreeDots
          color="white"
          size={30}
          className="transition hover:scale-125 cursor-pointer"
        />
      </div>
      {openEdit && (
        <div className="bg-black bg-opacity-80 text-white absolute top-10 right-4 p-3 rounded-md text-sm z-20">
          <div
            onClick={() => dispatch(deleteDataFunc(dt?.id))}
            className="cursor-pointer mb-2"
          >
            Sil
          </div>
          <div className="border-b border-gray-500 mb-2"></div>
          <div onClick={updateFunc} className="cursor-pointer">
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
