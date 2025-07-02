import React, { useState } from 'react';
import {
  Home,
  Heart,
  Info,
  Clock,
  Star,
  CreditCard,
  Gift,
  HelpCircle,
  FileText,
  Shield,
  Bell,
  LogOut,
  Filter,
  Menu as MenuIcon,
  Calendar
} from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { key: 'dashboard', icon: Home, label: 'Dashboard', count: 12, active: true },
    { key: 'waitlist', icon: Heart, label: 'Waitlist', count: 4 },
    { key: 'info', icon: Info, label: 'My Info' },
    { key: 'history', icon: Clock, label: 'Booking History' },
    { key: 'reviews', icon: Star, label: 'My Reviews' },
    { key: 'payments', icon: CreditCard, label: 'My Payments' },
    { key: 'promotions', icon: Gift, label: 'My Promotions', count: 1 },
    { key: 'help', icon: HelpCircle, label: 'Help Centre' },
    { key: 'terms', icon: FileText, label: 'Terms & Policies' },
    { key: 'privacy', icon: Shield, label: 'Privacy Policy' },
    { key: 'updates', icon: Bell, label: 'Lirque Updates', count: 1 }
  ];

  const bookingData = [
    {
      id: '21549',
      date: '10/02/25',
      name: 'Asdqameel',
      time: 'Happening Now',
      guests: 8,
      promo: 'N/A',
      note: 'None',
      status: 'contact',
      complete: true,
      isHappening: true
    },
    {
      id: '21549',
      date: '10/02/25',
      name: 'Asdqameel',
      time: 'Happening Now',
      guests: 8,
      promo: 'N/A',
      note: 'None',
      status: 'contact',
      complete: true,
      isHappening: true
    },
    {
      id: '21549',
      date: '10/02/25',
      name: 'Asdqameel',
      time: '8:00 PM',
      guests: 8,
      promo: 'N/A',
      note: 'None',
      status: 'reminder',
      complete: false
    },
    {
      id: '21549',
      date: '10/02/25',
      name: 'Asdqameel',
      time: '8:30 PM',
      guests: 8,
      promo: 'N/A',
      note: 'None',
      status: 'edit',
      complete: false
    },
    {
      id: '21549',
      date: '10/02/25',
      name: 'Asdqameel',
      time: '6:30 PM',
      guests: 8,
      promo: 'N/A',
      note: 'None',
      status: 'edit',
      complete: false
    }
  ];

  const timeSlots = [
    { day: 'Mon:', time: '12pm to 11pm' },
    { day: 'Tue:', time: '12pm to 11pm' },
    { day: 'Wed:', time: '12pm to 11pm' },
    { day: 'Thu:', time: '12pm to 11pm' },
    { day: 'Fri:', time: '12pm to 11pm' },
    { day: 'Sat:', time: '12pm to 12am' },
    { day: 'Sun:', time: '12pm to 12am' }
  ];

  const Badge = ({ count, className = "" }) => (
    <span className={`inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-purple-600 rounded-full ${className}`}>
      {count < 10 ? `0${count}` : count}
    </span>
  );

  const Switch = ({ checked = false, onChange }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? 'bg-green-500' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="min-h-screen flex bg-gray-300">
      {/* Sidebar */}
      <div className="w-72 2xl:w-[406px] flex-shrink-0 bg-gradient-to-b from-[#A259FF] via-[#6B21A8] to-[#3B0764] text-white flex flex-col">
        <div className="p-6 pb-2">
          <div className="text-[30px] 2xl:text-[38px] font-bold mb-6 tracking-wide">Menu</div>
          {/* Profile */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-[106px] h-[106px] rounded-full overflow-hidden border-2 border-white">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&h=100&fit=crop&crop=center"
                alt="Aylanto Restaurant"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-[29px] leading-tight poppins">Aylanto</h3>
              <p className="text-white text-sm 2xl:text-[19px] font-semiboldpoppins">Restaurant</p>
              <p className="text-white text-xs 2xl:text-[19px] font-semibold poppins ">(Italian) Karachi</p>
            </div>
          </div>
        </div>
        {/* Menu Items */}
        <div className="flex-1 px-2 space-y-1">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = item.active;
            return (
              <div
                key={item.key}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors font-semibold text-base ${
                  isActive
                    ? 'bg-white text-[#A259FF] shadow font-bold' 
                    : 'hover:bg-purple-500/60 text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComponent size={20} />
                  <span>{item.label}</span>
                </div>
                {item.count && (
                  <span className={`inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full ${isActive ? 'bg-[#A259FF] text-white' : 'bg-white text-[#A259FF]'}`}>{item.count < 10 ? `0${item.count}` : item.count}</span>
                )}
              </div>
            );
          })}
        </div>
        {/* Logout Button */}
        <div className="p-6 mt-auto">
          <button className="flex items-center gap-3 w-full p-3 bg-white text-black hover:bg-gray-200 rounded-lg transition-colors font-semibold">
            <LogOut size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#313131]  px-8 py-4 h-[82px] flex items-center justify-between shadow-sm">
          <div className="text-[30px] font-bold text-white tracking-tight 2xl:text-[40px]">Dashboard</div>
          <div className="flex-1 flex justify-center">
            <span className="bg-gray-800 text-white px-6 py-2 rounded-full font-semibold text-lg tracking-wider shadow">8:05 PM</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-base text-white font-medium 2xl:text-[23px]">Open for Reservations</span>
            <Switch checked={true} />
          </div>
        </header>

        {/* Tabs/Filters */}
        <main className="flex-1 p-8">
          <div className="mb-6">
            <div className="flex gap-4 mb-4 flex-wrap items-center">
              <button className="text-[#A259FF] font-bold border-b-4 border-[#A259FF] bg-white px-6 py-2 rounded-t-lg shadow-sm flex items-center gap-2">Available Seats</button>
              <button className="text-[#A259FF] font-bold border-b-4 border-[#A259FF] bg-white px-6 py-2 rounded-t-lg shadow-sm flex items-center gap-2 relative">
                Today <span className="ml-1 bg-[#A259FF] text-white rounded-full px-2 py-0.5 text-xs font-bold">05</span>
              </button>
              <button className="text-gray-700 font-semibold px-4 py-2 flex items-center gap-2">This Week <span className="ml-1 bg-gray-300 text-gray-700 rounded-full px-2 py-0.5 text-xs font-bold">08</span></button>
              <button className="text-gray-700 font-semibold px-4 py-2 flex items-center gap-2">This Month <span className="ml-1 bg-gray-300 text-gray-700 rounded-full px-2 py-0.5 text-xs font-bold">15</span></button>
              <button className="text-gray-700 font-semibold px-4 py-2 flex items-center gap-2">All <span className="ml-1 bg-gray-300 text-gray-700 rounded-full px-2 py-0.5 text-xs font-bold">16</span></button>
            </div>
            <div className="flex justify-between items-center">
              <div className="bg-[#184C43] text-white px-8 py-3 rounded-full font-semibold text-lg shadow">Monday, February 10, 2025</div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter size={18} />
                <span className="font-medium">Filters</span>
              </button>
            </div>
          </div>

          {/* Booking Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {bookingData.map((booking, index) => (
              <div key={index} className="rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-[#A259FF] via-[#6B21A8] to-[#3B0764]">
                {/* Card Header */}
                <div className="px-5 py-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">Booking ID: {booking.id}</span>
                    <span className="text-sm text-white font-semibold">{booking.date}</span>
                  </div>
                </div>
                {/* Card Content */}
                <div className="bg-white p-5 space-y-3 rounded-b-2xl">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Name:</span>
                    <span className="font-bold text-gray-800">{booking.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Time:</span>
                    <span className={`font-bold ${booking.isHappening ? 'text-green-600' : 'text-gray-800'}`}>{booking.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Total Guests:</span>
                    <span className="font-bold text-gray-800">{booking.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Promo Code:</span>
                    <span className="font-bold text-gray-800">{booking.promo}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-semibold">Note:</span>
                    <textarea 
                      className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-sm resize-none h-12 bg-white"
                      placeholder={booking.note}
                    />
                  </div>
                  <div className="flex gap-2 pt-2 flex-wrap">
                    <button className="bg-white text-[#A259FF] border border-[#A259FF] px-3 py-1 rounded-full text-sm font-bold hover:bg-purple-50">Contact Customer</button>
                    {booking.complete ? (
                      <button className="bg-[#A259FF] text-white px-3 py-1 rounded-full text-sm font-bold">Reservation Complete</button>
                    ) : booking.status === 'reminder' ? (
                      <button className="bg-[#A259FF] text-white px-3 py-1 rounded-full text-sm font-bold">Reminder Sent</button>
                    ) : (
                      <button className="bg-[#A259FF] text-white px-3 py-1 rounded-full text-sm font-bold">Edit Reservation</button>
                    )}
                  </div>
                  {booking.complete && (
                    <p className="text-xs text-gray-400 italic mt-2">*You can only send a reminder once.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 2xl:w-[434px] bg-[#184C43] text-white flex-shrink-0 flex flex-col">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-6">App View</h3>
          {/* Restaurant Home View */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Restaurant Home View</h4>
            <div className="bg-[#225C53] rounded-xl p-3 mb-3">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop&crop=center"
                alt="Restaurant"
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <p className="text-sm font-bold">Restaurant 1</p>
              <p className="text-xs text-gray-200">Pan-Asian</p>
            </div>
          </div>
          {/* My Home */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">My Home</h4>
            <div className="bg-[#225C53] rounded-xl p-3 mb-3">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop&crop=center"
                alt="Food"
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <div className="flex gap-1 mb-2 overflow-hidden">
                {[1,2,3,4,5,6,7].map(i => (
                  <img 
                    key={i}
                    src={`https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=40&h=40&fit=crop&crop=center`}
                    alt={`Food ${i}`}
                    className="w-8 h-8 object-cover rounded-full flex-shrink-0 border-2 border-white"
                  />
                ))}
              </div>
            </div>
            <div className="bg-[#225C53] rounded-xl p-3">
              <h5 className="font-bold mb-2">Restaurant 1</h5>
              <p className="text-xs text-gray-200 mb-3 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed dignissim risus quis feugiat bibendum. Mauris sit amet 
                nunc consectetur risus do vehicula risus.
              </p>
              <p className="text-xs text-gray-300 mb-3">
                <span className="font-bold">Address:</span> Ground floor, Abdul Sattar Edhi Ave, D.H.A, Phase 8 
                Zone B Phase 8 Karachi, Sindh 75600
              </p>
              <div className="flex gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={14} className="text-green-400" />
                    <span className="text-sm font-medium">Timings</span>
                  </div>
                  <div className="text-xs space-y-1">
                    {timeSlots.map((slot, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-gray-300">{slot.day}</span>
                        <span className="text-gray-100">{slot.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <MenuIcon size={14} className="text-green-400" />
                    <span className="text-sm font-medium">Menu</span>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=100&h=120&fit=crop&crop=center"
                    alt="Menu"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;