import React from 'react';

function Featured() {
  return (
    <div className="w-full py-20">
      {/* Header Section */}
      <div className="w-full px-20 border-b-2 pb-20 border-zinc-700">
        <h1 style={{ fontFamily: 'NeueMontreal, sans-serif' }} className="text-7xl tracking-tight">
          Featured Projects
        </h1>
      </div>

      {/* Cards Section */}
      <div className="px-20">
        <div className="cards relative w-full flex gap-20">
          <div className="cardcontainer  w-1/2 h-[75vh] mt-10 overflow-hidden">            
            {/* Card Image */}
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt="Screenshot of FYDE project showcasing a modern website design."
              />
            </div>
          </div>

          {/* Second Card */}
          <div className="cardcontainer w-1/2 h-[75vh] rounded-2xl mt-10 overflow-hidden">
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt="Screenshot of another featured project with a sleek interface."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;