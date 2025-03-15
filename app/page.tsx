import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <Image
            src="/profile.jpg"
            alt="Oliver Bullock"
            width={150}
            height={150}
            className="rounded-full"
            priority
          />
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-4">Oliver Bullock</h1>
            <h2 className="text-xl text-gray-600 mb-4">Engineering Team Leader</h2>
            <p className="max-w-md text-gray-700">
              Experienced SoftwareEngineering Team Leader specializing in agile software delivery.
              Leading cross-functional teams to deliver
              high-quality software solutions on time.
            </p>
          </div>
        </div>

        <section className="w-full max-w-3xl">
          <h3 className="text-2xl font-semibold mb-4">Leadership & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-3">Agile Leadership</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Scrum framework implementation</li>
                <li>Sprint planning and retrospectives</li>
                <li>Team capacity planning</li>
                <li>Continuous improvement focus</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-3">Technical Excellence</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>CI/CD pipeline optimization</li>
                <li>Code quality standards</li>
                <li>Technical architecture design</li>
                <li>Performance monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full max-w-3xl">
          <h3 className="text-2xl font-semibold mb-4">Technical Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium mb-2">Development</h4>
              <div className="flex flex-wrap gap-2">
                {['C#', '.NET', 'Python', 'Node.js']
                  .map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {skill}
                    </span>
                  ))
                }
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium mb-2">Infrastructure</h4>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker', 'Kubernetes', 'CI/CD']
                  .map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {skill}
                    </span>
                  ))
                }
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium mb-2">Tools & Processes</h4>
              <div className="flex flex-wrap gap-2">
                {['Jira', 'Git', 'Azure DevOps', 'Scrum']
                  .map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {skill}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
        <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">Email</a>
      </footer>
    </div>
  );
}