import React from "react";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

interface PropsTitleCard {
  titleCard: string;
}

const TitleCard: React.FC<PropsTitleCard> = ({ titleCard }) => {
  return (
    <h3 className={`text-xl text-slate-600 capitalize ${russoOne.className}`}>
      {titleCard}
    </h3>
  );
};

export default TitleCard;
