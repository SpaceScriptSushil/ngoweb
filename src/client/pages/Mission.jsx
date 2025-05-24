// import Navbar from '../components/Navbar';
import { CheckCircleIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/24/solid';

const timeline = [
  {
    title: "Empowering Communities",
    icon: <GlobeAltIcon className="w-6 h-6 text-white" />,
    description:
      "We empower communities through sustainable development, education, and social welfare projects. Our mission is to create lasting positive change by addressing the root causes of social issues.",
  },
  {
    title: "Education & Training",
    icon: <AcademicCapIcon className="w-6 h-6 text-white" />,
    description:
      "We provide quality education and vocational training to underprivileged communities, opening doors to new opportunities and brighter futures.",
  },
  {
    title: "Sustainable Solutions",
    icon: <CheckCircleIcon className="w-6 h-6 text-white" />,
    description:
      "We believe in sustainable, community-driven solutions that respect local knowledge and traditions, ensuring long-term impact and empowerment.",
  },
];

const Mission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDE8F5] to-white pt-24 px-4">
      <div className="max-w-6xl mx-auto py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#3D52A0] sm:text-5xl mb-3">Our Mission</h1>
          <p className="max-w-2xl mx-auto text-base text-[#8697C4]">
            We are committed to making a positive impact in our community.
          </p>
        </div>

        <div className="relative">
          {/* Center Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#7091E6] to-[#ADBBDA] z-0"></div>

          <div className="space-y-16 relative z-10">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center ${
                  idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } relative`}
              >
                {/* Text Section */}
                <div
                  className={`w-full md:w-5/12 ${
                    idx % 2 === 0 ? 'md:pr-10 text-right' : 'md:pl-10 text-left'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-[#3D52A0] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#5A6A9A] leading-relaxed">{item.description}</p>
                </div>

                {/* Timeline Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:top-1/2 -top-4 md:-translate-y-1/2 z-20">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7091E6] to-[#ADBBDA] flex items-center justify-center shadow-sm border-4 border-white">
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
