import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import useCart from '../hooks/useCart';

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1';

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const { addOrUpdateItem, removeItem } = useCart();

  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });

  const handleDeleteClick = () => setModalOpen(true);

  const handleDeleteConfirm = () => {
    removeItem.mutate(id);
    setModalOpen(false);
  };

  return (
    <>
      <li className="flex justify-between my-2 items-center">
        <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
        <div className="flex-1 flex justify-between ml-4">
          <div className="basis-3/5">
            <p className="text-lg">{title}</p>
            <p className="text-xl font-bold text-brand">{option}</p>
            <p>₩{price}</p>
          </div>
          <div className="text-base flex items-center gap-2">
            <div className="flex items-center border border-gray-300 p-2 px-3 gap-4">
              <AiOutlineMinus className={ICON_CLASS} onClick={handleMinus} />
              <span className="text-xl">{quantity}</span>
              <AiOutlinePlus className={ICON_CLASS} onClick={handlePlus} />
            </div>
            <IoMdClose className={ICON_CLASS} onClick={handleDeleteClick} />
          </div>
        </div>
      </li>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3>삭제 하시겠습니까?</h3>
              </div>
              <div className="bg-gray-lightest p-y2 px-x2 flex justify-end gap-x2 border-t border-gray-lighter">
                <button onClick={handleDeleteConfirm}>확인</button>
                <button onClick={() => setModalOpen(false)}>취소</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
