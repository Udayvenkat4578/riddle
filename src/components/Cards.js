import React from 'react';

const StatsCards = () => {
  const stats = [
    {
      id: 1,
      number: "200+",
      title: "Projects Delivered",
      subtitle: "Across web development, design & digital solutions",
      bgColor: "bg-pink-300",
      textColor: "text-gray-900"
    },
    {
      id: 2,
      number: "100+",
      title: "Satisfied Clients",
      subtitle: "Building lasting relationships through quality work",
      bgColor: "bg-cyan-300",
      textColor: "text-gray-900"
    },
    {
      id: 3,
      number: "3+",
      title: "Years of Experience",
      subtitle: "Mastering technologies and delivering excellence",
      bgColor: "bg-yellow-300",
      textColor: "text-gray-900"
    },
    {
      id: 4,
      number: "95%",
      title: "Customer Retention",
      subtitle: "Clients choose us again for their next projects",
      bgColor: "bg-orange-300",
      textColor: "text-gray-900"
    }
  ];

  return (
    <div className="p-8 bg-[#FFFFF4] ">

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`${stat.bgColor} border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer relative overflow-hidden`}
          >
            
            <div className="p-6 flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className={`text-6xl font-black ${stat.textColor} leading-none`}>
                  {stat.number}
                </div>
                <h3 className={`text-xl font-black ${stat.textColor} mb-2 leading-tight`}>
                  {stat.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;