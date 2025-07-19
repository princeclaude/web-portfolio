import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const GithubProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch("https://api.github.com/users/princeclaude/repos");
      const data = await res.json();

      const newestThree = data
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 3);

      const withReadmes = await Promise.all(
        newestThree.map(async (repo) => {
          try {
            const res = await fetch(
              `https://api.github.com/repos/princeclaude/${repo.name}/contents/README.md`
            );
            const readme = await res.json();
            const decoded = atob(readme.content);
            return {
              ...repo,
              codeSnippet: decoded.split("\n").slice(0, 10).join("\n"),
            };
          } catch (error) {
            return {
              ...repo,
              codeSnippet: "// No README.md found in this repo.",
            };
          }
        })
      );

      setProjects(withReadmes);
    };

    fetchRepos();
  }, []);

  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto" id="github">
      <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Some of My Code on GitHub
            
        
        
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((repo) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border p-4 rounded shadow-md bg-white dark:bg-zinc-900 dark:text-white"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-2 truncate">
              {repo.name}
            </h3>

            <pre className="bg-black text-green-400 text-xs p-3 rounded overflow-x-auto max-h-60 whitespace-pre-wrap">
              <code>{repo.codeSnippet}</code>
            </pre>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-blue-500 hover:underline text-sm"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GithubProjects;