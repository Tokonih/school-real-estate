const AccommodationCard = ({ image, title, subtitle }) => {
  return (
    <div className="relative w-[350px]  flex items-center justify-between">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded object-cover mr-4 absolute"
      />

      <div className="bg-white shadow-lg rounded-lg ml-[50px] p-5 w-[300px] flex float-right h-[100px]">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;
