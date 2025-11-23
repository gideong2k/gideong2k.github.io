// src/sections/About.jsx
import ScrollFade from "../components/ScrollFade";
import profileImg from "../assets/profile-img.jpg";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 md:px-10 bg-stone-300 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <div className="container mx-auto lg:px-10">
        <ScrollFade>
          <div className="mb-10">
            <h2 className="text-3xl text-blue-600 font-bold">About</h2>
            <p className="text-base sm:text-lg font-light mt-2 text-slate-600 dark:text-slate-300 max-w-5xl">
              I’m a multidisciplinary developer with a strong interest in creating meaningful digital solutions. Whether it’s a 
              website, an app, or hardware-software integration, I enjoy turning ideas into real solutions. 
              I’m always exploring new tools and technologies to become a better and more versatile engineer.
            </p>
          </div>
        </ScrollFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <ScrollFade>
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <img 
                src={profileImg} 
                alt="profile" 
                className="w-60 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-lg shadow-lg" 
              />
            </div>
          </ScrollFade>

          <div className="lg:col-span-2">
            <ScrollFade>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                Web · Mobile · Backend · Embedded Systems
              </h3>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-4 italic">
                I build across software and hardware — mobile and web APIs, databases, and 
                IoT — always focused on speed, reliability, and great user experience.
              </p>
            </ScrollFade>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              <ScrollFade>
                <ul className="space-y-2 text-sm">
                  <li><strong>University:</strong> <span className="text-slate-600 dark:text-slate-300">Heritage Christian University, Ghana</span></li>
                  <li><strong>Portfolio Site:</strong> <span className="text-slate-600 dark:text-slate-300">www.example.com</span></li>
                  <li><strong>Phone:</strong> <span className="text-slate-600 dark:text-slate-300">+233 540 340 066</span></li>
                  <li><strong>City:</strong> <span className="text-slate-600 dark:text-slate-300">Accra</span></li>
                </ul>
              </ScrollFade>

              <ScrollFade>
                <ul className="space-y-2 text-sm">
                  <li><strong>Degree:</strong> <span className="text-slate-600 dark:text-slate-300">BSc Information Technology</span></li>
                  <li><strong>Email:</strong> <span className="text-slate-600 dark:text-slate-300">ggakpetor21@gmail.com</span></li>
                  <li><strong>Freelance:</strong> <span className="text-slate-600 dark:text-slate-300">Available</span></li>
                  <li><strong>Birth month:</strong> <span className="text-slate-600 dark:text-slate-300">December</span></li>
                </ul>
              </ScrollFade>
            </div>

            <ScrollFade>
              <p className="text-base sm:text-lg font-light mt-6 text-slate-600 dark:text-slate-300">
                I’m continually learning, improving, and expanding my skill set. 
                I enjoy working on impactful projects, and I’m always open to freelance work or new collaborations.
              </p>
            </ScrollFade>
          </div>
        </div>

      </div>
    </section>
  );
}
