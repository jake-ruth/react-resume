import React, {FC, memo} from 'react';

interface ICardProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

export const Card: FC<ICardProps> = memo(props => {
  const {title, description, url} = props;

  return (
    <div className="max-w-sm h-[450px] flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg relative bg-black">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg scale-110"
        style={{
          //   backgroundImage: `url(${imageUrl})`,
          backgroundSize: '450px 450px',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9, // further softens it
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative p-6 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
        <button
          className="mt-6 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => window.open(url)}>
          Check it out!
        </button>
      </div>
    </div>
  );
});
