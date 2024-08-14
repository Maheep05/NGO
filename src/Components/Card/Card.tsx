import { FC, memo } from "react";

interface CardProps {
  imageLink: string;
  text: string;
  onClickHandler: () => void;
}
const Card: FC<CardProps> = memo(({ imageLink, text, onClickHandler }) => {
  return (
    <>
      <div className="relative cursor-pointer" onClick={onClickHandler}>
        <img src={imageLink} alt="" className="h-80 w-80 rounded-xl" />
        <span className=" font-poppins text-white bottom-0  font-semibold text-xl md:text-3xl absolute right-6">
          {text}
        </span>
      </div>
    </>
  );
});

export default Card;
