import React from 'react';
import DashboardIcon from '../assets/Dashboard';
import Skill from '../assets/Skill';
import Internship from '../assets/Internship';

const Sidebar = ({ openNav }: { openNav: boolean }) => {
  const links = [
    {
      name: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      name: 'Skill Test',
      icon: <Skill />,
      active: true,
    },
    {
      name: 'Internship',
      icon: <Internship />,
    },
  ];

  return (
    <aside className='border-r-2 border-r-gray-300 pt-20 pr-3 pl-1 flex flex-col gap-2'>
      {links.map(({ name, icon, active }) => (
        <div
          className={`w-full rounded-e-full flex-row ${
            openNav ? 'flex' : 'hidden'
          } md:flex items-center gap-3 p-3 font-semibold ${
            active ? 'bg-[#eff0f0] text-[#4250be]' : 'bg-none text-black'
          }`}
          key={name}
        >
          {icon}
          <h3>{name}</h3>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
