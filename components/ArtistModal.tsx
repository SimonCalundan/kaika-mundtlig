import React from "react";

interface ArtistModalProps {
  name: string;
  image: string;
  description: string;
  spotify: string;
  pressekit: string;
  link: string;
  onClick: () => void;
}

const ArtistModal: React.FC<ArtistModalProps> = ({
  name,
  image,
  description,
  spotify,
  pressekit,
  link,
  onClick,
}) => {
  return (
    <div className=" animate-in w-screen h-[101vh] bg-black bg-opacity-50 absolute left-0 top-[100%] flex justify-center items-center z-[999999999]">
      <div className=" relative w-[60rem] h-[30rem] bg-space-cadet bg-opacity-100 flex flex-col items-center py-12 px-8 gap-y-4">
        <svg
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 text-sunglow absolute top-8 right-8 cursor-pointer hover:scale-105 active:scale-95 transition-all "
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

ArtistModal.defaultProps = {
  name: "Artist Name",
  image: "https://source.unsplash.com/random",
  description: "Artist Description",
  spotify:
    "https://open.spotify.com/artist/2hazSY4Ef3aB9ATXW7F5w3?si=8e9e9e9e9e9e9e9e",
  pressekit: "https://www.google.com",
  link: "https://www.google.com",
};

export default ArtistModal;
