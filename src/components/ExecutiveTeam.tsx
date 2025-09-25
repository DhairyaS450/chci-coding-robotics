import Image from 'next/image'

export default function ExecutiveTeam() {
  const executives = [
    {
      name: 'Jeevithan Munhattan',
      role: 'Co-President',
      email: 'muhuj2794@wrdsb.ca',
      image: '/team/jeevithan.jpg', // Placeholder - replace with actual images
    },
    {
      name: 'Kevin Chang',
      role: 'Co-President', 
      email: 'chank1816@wrdsb.ca',
      image: '/team/kevin.jpg', // Placeholder - replace with actual images
    },
    {
      name: 'Sai Amartya Balamurugan Lakshmipraba',
      role: 'Executive Member',
      email: 'balas3057@wrdsb.ca',
      image: '/team/sai.jpg', // Placeholder - replace with actual images
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#111111] mb-4">Meet the Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The dedicated students leading CHCI's coding and robotics initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {executives.map((exec, index) => (
            <div 
              key={exec.name} 
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Profile Image */}
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-[#1F7A3A] to-[#2d8a4a] flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">
                    {exec.name.charAt(0)}
                  </span>
                </div>
                {/* Uncomment when real images are available */}
                {/* <Image
                  src={exec.image}
                  alt={exec.name}
                  fill
                  className="object-cover"
                /> */}
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold text-[#111111] mb-2">{exec.name}</h3>
              <p className="text-[#1F7A3A] font-semibold text-lg mb-4">{exec.role}</p>
              
              {/* Contact */}
              <a
                href={`mailto:${exec.email}`}
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-[#1F7A3A] hover:text-white transition-all duration-300 font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contact
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}