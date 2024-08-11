interface ItemSelectorProps {
  selectCallback: React.MouseEventHandler<HTMLButtonElement>;
  img: string;
}

const ItemSelector: React.FC<ItemSelectorProps> = ({ selectCallback, img }) => {
  return (
    <button
      className="rounded-sm w-20 h-20 p-0 bg-transparent border-none outline-none shadow-md"
      onClick={selectCallback}
    >
      <img
        src={img}
        className="rounded-sm h-[-webkit-fill-available] w-[-webkit-fill-available] bg-[#DBE2EF]"
      />
    </button>
  );
};

export default ItemSelector;
