/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import {
  Camera,
  Layers,
  Zap,
  Hammer,
  Tv,
  Dumbbell,
  Calendar,
  Terminal,
  Eraser,
  Keyboard,
  Server,
  Computer,
  Github,
  Utensils,
} from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python";

const Heading = ({ size, children }) => {
  let content;
  switch (size) {
    case "h1":
      content = <h1 className="text-2xl font-bold mb-4">{children}</h1>;
      break;
    case "h2":
      content = <h2 className="text-xl font-bold mb-4">{children}</h2>;
      break;
    case "h3":
      content = <h3 className="text-lg font-semibold mb-2">{children}</h3>;
      break;
    default:
      content = (
        <h1 className="text-3xl text-red-600">Error invalid heading size!</h1>
      );
  }
  return content;
};

const CodeBlock = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className="p-2 rounded-md overflow-x-auto scrollbar-none">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export const posts = [
  {
    slug: "bonsai-business-website-and-learning-app",
    title: "Bonsai Business Website & Kids Learning App",
    date: "November 10, 2024",
    tagLine: "Building a dynamic website and cross-platform learning app for a local bonsai business",
    imgSrc: "/bonsai-website.png",
    imgDescription: "Screenshot of the bonsai business website homepage",
    summary: "Developed a modern, dynamic website for a local bonsai business, followed by a cross-platform learning app to teach kids about bonsai cultivation.",
    content: (
      <div className="space-y-6 mb-10">
        <Heading size="h1">
          From Website to App: Empowering a Bonsai Business with Tech
        </Heading>
  
        <p className="italic text-gray-600">
          What started as a simple website for a local bonsai business turned into a full-fledged cross-platform learning app for kids. Here is how I brought this project to life.
        </p>
  
        <section className="space-y-4">
          <Heading size="h2">
            <Computer className="inline-block mr-2" /> The Bonsai Business Website
          </Heading>
          <p>
            The project began with the creation of a modern, dynamic website for a local bonsai business. Built with <strong>ReactJS</strong> and deployed on <strong>Vercel</strong>, the website was designed to be both visually appealing and highly functional.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Admin Panel:</strong> Integrated <strong>Clerk</strong> for authentication, allowing the business owner to easily manage and update website content, including bonsai meeting details and blog posts.</li>
            <li><strong>Database:</strong> Used <strong>MongoDB Atlas</strong> for storing dynamic content, ensuring scalability and reliability.</li>
            <li><strong>Media Management:</strong> Leveraged <strong>Cloudinary</strong> for seamless image uploads and management, making it easy for the owner to add visuals to blog posts and event updates.</li>
          </ul>
          <p>
            The website not only showcased the business offerings but also provided a platform for the bonsai community to stay updated on events and learn more about bonsai care.
          </p>
        </section>
  
        <section className="space-y-4">
          <Heading size="h2">
            <Terminal className="inline-block mr-2" /> The Cross-Platform Learning App
          </Heading>
          <p>
            After the success of the website, the client approached me with a new idea: a cross-platform learning app to teach kids about bonsai cultivation. This was an exciting challenge that allowed me to expand my skills further.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Platform:</strong> Developed the app using <strong>React Native</strong> to ensure compatibility across both iOS and Android devices.</li>
            <li><strong>Interactive Learning:</strong> Designed engaging, interactive lessons to teach kids about bonsai care, including watering schedules, pruning techniques, and the history of bonsai.</li>
            <li><strong>Gamification:</strong> Added gamified elements like quizzes and achievement badges to keep kids motivated and engaged.</li>
            <li><strong>Backend Integration:</strong> Connected the app to the existing <strong>MongoDB Atlas</strong> database to sync content updates from the website, ensuring consistency across platforms.</li>
          </ul>
          <p>
            The app was a hit, providing a fun and educational experience for kids while promoting the bonsai business to a new audience.
          </p>
        </section>
  
        <section className="space-y-4">
          <Heading size="h2">
            <Zap className="inline-block mr-2" /> Challenges and Learnings
          </Heading>
          <p>
            This project was a fantastic learning experience, but it was not without its challenges:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Content Management:</strong> Ensuring the admin panel was intuitive enough for the business owner to manage without technical expertise.</li>
            <li><strong>Cross-Platform Compatibility:</strong> Addressing differences in UI/UX between iOS and Android to provide a seamless experience on both platforms.</li>
            <li><strong>Engaging Young Users:</strong> Designing an app that was both educational and entertaining for kids required careful planning and creativity.</li>
          </ul>
          <p>
            Despite these challenges, the project was a success, and I gained valuable experience in full-stack development, cross-platform app development, and client collaboration.
          </p>
        </section>
  
        <p>
          This project was a perfect blend of creativity, technical skill, and client collaboration. It reinforced my passion for building solutions that not only solve problems but also create meaningful experiences for users. Whether it is a website or a learning app, I love bringing ideas to life through code.
        </p>
      </div>
    ),
  },
  {
  slug: "bonsai-business-website-and-learning-app",
  title: "Bonsai Business Website & Kids Learning App",
  date: "November 10, 2024",
  tagLine: "Building a dynamic website and cross-platform learning app for a local bonsai business",
  imgSrc: "/bonsai-website.png",
  imgDescription: "Screenshot of the bonsai business website homepage",
  summary: "Developed a modern, dynamic website for a local bonsai business, followed by a cross-platform learning app to teach kids about bonsai cultivation.",
  content: (
    <div className="space-y-6 mb-10">
      <Heading size="h1">
        From Website to App: Empowering a Bonsai Business with Tech
      </Heading>

      <p className="italic text-gray-600">
        What started as a simple website for a local bonsai business turned into a full-fledged cross-platform learning app for kids. Here's how I brought this project to life.
      </p>

      <section className="space-y-4">
        <Heading size="h2">
          <Computer className="inline-block mr-2" /> The Bonsai Business Website
        </Heading>
        <p>
          The project began with the creation of a modern, dynamic website for a local bonsai business. Built with <strong>ReactJS</strong> and deployed on <strong>Vercel</strong>, the website was designed to be both visually appealing and highly functional.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Admin Panel:</strong> Integrated <strong>Clerk</strong> for authentication, allowing the business owner to easily manage and update website content, including bonsai meeting details and blog posts.</li>
          <li><strong>Database:</strong> Used <strong>MongoDB Atlas</strong> for storing dynamic content, ensuring scalability and reliability.</li>
          <li><strong>Media Management:</strong> Leveraged <strong>Cloudinary</strong> for seamless image uploads and management, making it easy for the owner to add visuals to blog posts and event updates.</li>
        </ul>
        <p>
          The website not only showcased the business's offerings but also provided a platform for the bonsai community to stay updated on events and learn more about bonsai care.
        </p>
      </section>

      <section className="space-y-4">
        <Heading size="h2">
          <Terminal className="inline-block mr-2" /> The Cross-Platform Learning App
        </Heading>
        <p>
          After the success of the website, the client approached me with a new idea: a cross-platform learning app to teach kids about bonsai cultivation. This was an exciting challenge that allowed me to expand my skills further.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Platform:</strong> Developed the app using <strong>React Native</strong> to ensure compatibility across both iOS and Android devices.</li>
          <li><strong>Interactive Learning:</strong> Designed engaging, interactive lessons to teach kids about bonsai care, including watering schedules, pruning techniques, and the history of bonsai.</li>
          <li><strong>Gamification:</strong> Added gamified elements like quizzes and achievement badges to keep kids motivated and engaged.</li>
          <li><strong>Backend Integration:</strong> Connected the app to the existing <strong>MongoDB Atlas</strong> database to sync content updates from the website, ensuring consistency across platforms.</li>
        </ul>
        <p>
          The app was a hit, providing a fun and educational experience for kids while promoting the bonsai business to a new audience.
        </p>
      </section>

      <section className="space-y-4">
        <Heading size="h2">
          <Zap className="inline-block mr-2" /> Challenges and Learnings
        </Heading>
        <p>
          This project was a fantastic learning experience, but it wasn't without its challenges:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Content Management:</strong> Ensuring the admin panel was intuitive enough for the business owner to manage without technical expertise.</li>
          <li><strong>Cross-Platform Compatibility:</strong> Addressing differences in UI/UX between iOS and Android to provide a seamless experience on both platforms.</li>
          <li><strong>Engaging Young Users:</strong> Designing an app that was both educational and entertaining for kids required careful planning and creativity.</li>
        </ul>
        <p>
          Despite these challenges, the project was a success, and I gained valuable experience in full-stack development, cross-platform app development, and client collaboration.
        </p>
      </section>

      <p>
        This project was a perfect blend of creativity, technical skill, and client collaboration. It reinforced my passion for building solutions that not only solve problems but also create meaningful experiences for users. Whether it's a website or a learning app, I love bringing ideas to life through code.
      </p>
    </div>
  ),
},
  {
    slug: "fit-focus",
    title: "FitFocus: A Streamlined Exercise App",
    date: "October 9, 2024",
    tagLine: "Simplifying the complex fitness app world",
    imgSrc: "/fitfocus.png",
    imgDescription: "FitFocus user interface showcasing its streamlined design",
    summary: "Frustrated by unnecessarily complex fitness apps, I embarked on a journey to create FitFocus - a simple, intuitive fullstack application that puts the focus back on your workout, not on navigating the app.",
    content: (
      <div className="space-y-6 mb-10">
        <Heading size="h1">
          Fit Focus: Simplifying Fitness Management for Everyone
        </Heading>

        <p className="italic text-gray-600">
          In a world of complex fitness apps, Fit Focus emerges as a breath of fresh air - because getting fit should not require a PhD in app navigation.
        </p>

        <section className="space-y-4">
          <Heading size="h2">
            <Dumbbell className="inline-block mr-2" /> The Genesis of Fit Focus
          </Heading>
          <p>
            Fit Focus was born out of frustration. As someone who just wanted to track workouts and calories without needing a user manual, I found myself drowning in a sea of overcomplicated fitness apps. So, I did what any reasonable developer would do - I built my own.
          </p>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Layers className="inline-block mr-2" /> Simplicity is the Ultimate Sophistication
          </Heading>
          <p>
            At its core, Fit Focus is about doing a few things really well:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Easy-to-use routine management, because your workout shouldn&apos;t feel like solving a puzzle</li>
            <li>A straightforward exercise library, no PhD in anatomy required</li>
            <li>Simple calorie tracking, math should not be part of your diet</li>
            <li>Weekly planning that does not overcomplicate your life</li>
          </ul>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Terminal className="inline-block mr-2" /> The Tech Behind the Simplicity
          </Heading>
          <p>
            Building Fit Focus was an exercise in restraint. Here&apos;s what&apos;s under the hood:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>React for a snappy, responsive frontend, because waiting for your fitness app to load doesn&apos;t count as cardio</li>
            <li>Django powering our backend, Python: the language of fitness... and everything else</li>
            <li>SQLite for data storage, proving you don&apos;t need a heavyweight database to lift heavy</li>
            <li>Tailwind CSS for styling, making our app look good without the bloat - if only getting in shape was this easy</li>
          </ul>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Zap className="inline-block mr-2" /> Challenges: Keeping It Simple Isn&apos;t Always Simple
          </Heading>
          <p>
            The journey was not without its hurdles:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Resisting the urge to add &quot;just one more feature&quot; (feature creep is the junk food of development)</li>
            <li>Designing an intuitive UI that doesn&apos;t need a tutorial (turns out, simplicity is complicated)</li>
            <li>Balancing simplicity with functionality (because too simple is just a notebook)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Utensils className="inline-block mr-2" /> The Calorie Tracking Conundrum
          </Heading>
          <p>
            Implementing calorie tracking without overwhelming users was like trying to count calories at a buffet - tricky, but not impossible. We opted for a straightforward input system, focusing on total daily intake rather than breaking down every macronutrient. It&apos;s not for competitive bodybuilders, but for the average Joe trying to keep an eye on their diet, it is just right.
          </p>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Calendar className="inline-block mr-2" /> Looking Ahead: The Future of Fit Focus
          </Heading>
          <p>
            As Fit Focus grows, our commitment to simplicity remains. Future plans include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Basic progress tracking (because seeing your gains shouldn&apos;t require a statistics degree)</li>
            <li>Optional reminder notifications (for those who need a gentle nudge, not a drill sergeant)</li>
            <li>A mobile app (because your fitness journey doesn&apos;t stop at your desktop)</li>
          </ul>
        </section>

        <p>
          Fit Focus isn&apos;t just an app, it&apos;s a philosophy. It&apos;s about making fitness accessible, manageable, and maybe even enjoyable. Because at the end of the day, the best fitness app is the one you&apos;ll actually use. And if we can help more people take that first step towards a healthier lifestyle without feeling overwhelmed, well, that&apos;s a workout for the heart we can all benefit from.
        </p>
      </div>
    ),
  },
  {
    slug: "ergo-board-progress",
    title: "Ergo Keyboard Experimentation",
    date: "September 6, 2024",
    tagLine: "Relieving my wrists with a new layout, the process.",
    imgSrc: "/iris.jpg",
    imgDescription:
      "Temp ergo keyboard for testing",
    summary:
      "As I begin my carreer as a developer I would like to take care of my wrists for the forseable future, so I am going ergo!",
    content: (
      <div className="space-y-6 mb-10">
        <Heading size="h1">
          Switching To My Perfect Keyboard Layout
        </Heading>
        <p className="italic text-gray-600">
          Yes, I know that I already have a perfect keyboard post on
          here but I love tinkering too much.
        </p>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">The Journey Begins: Testing the Iris 58</h2>
          <p>
            As I embark on my career as a developer, I&apos;ve become increasingly aware of the importance of ergonomics. With countless hours spent typing, taking care of my wrists has become a top priority. This realization led me down the fascinating rabbit hole of ergonomic keyboards, and I&apos;m excited to share my latest experiment with you.
          </p>
          <p>
            My current project involves testing an Iris 58 layout. For those unfamiliar, the Iris is a split ergonomic keyboard design that&apos;s gained popularity in the mechanical keyboard community. The 58 refers to the number of keys, offering a compact yet functional layout.
          </p>
          <p>
            To simplify the initial build and testing process, I&apos;ve connected the halves of the keyboard. This temporary setup allows me to get a feel for the layout without committing to a full, polished build just yet.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">The Test Build: Function Over Form</h2>
          <p>
            My current test board might not win any beauty contests, but it serves a crucial purpose. By creating this prototype, I can thoroughly evaluate the Iris 58 layout before investing time and resources into a more refined version.
          </p>
          <div className="my-6">
            <img
              src="/handwire.jpg"
              alt="Handwiring of the Iris 58 test board"
              className="w-full rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600 mt-2 italic">
              A peek at the handwiring of my Iris 58 test board. It&apos;s not pretty, but it gets the job done!
            </p>
          </div>
          <p>
            As you can see from the image above, I&apos;ve done some basic handwiring to get this test board functional. It&apos;s a bit messy, but it allows me to:
          </p>
          <ul className="list-disc pl-6">
            <li>Assess the comfort and ergonomics of the split design</li>
            <li>Experiment with different key mappings and layers</li>
            <li>Determine if the 58-key layout meets all my needs as a developer</li>
            <li>Make informed decisions about potential modifications for the final build</li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Looking Ahead: The Dream Build</h2>
          <p>
            Assuming the test goes well, my next step will be to create a sleek, low-profile version of this keyboard. Here&apos;s what I have in mind:
          </p>
          <ul className="list-disc pl-6">
            <li>A custom PCB for a clean, professional look</li>
            <li>Full split design for maximum ergonomic benefit</li>
            <li>Choc switches for a super-low profile</li>
            <li>Wireless connectivity for a clutter-free desk setup</li>
          </ul>
          <p>
            Stay tuned for updates as I progress through this ergonomic keyboard journey.
          </p>
        </section>
      </div>
    ),
  },
  {
    slug: "multi-method-ndi-detection-framework",
    title: "Multi-Method NDI Detection Framework",
    date: "March 24, 2024",
    tagLine: "Enhancing near-duplicate image detection with a layered approach",
    imgSrc: "/thesis.png",
    imgDescription:
      "Component Diagram of the Multi-Method NDI Detection Framework",
    summary:
      "This thesis project addresses the challenge of near-duplicate image (NDI) detection by proposing a layered architecture framework that combines multiple algorithms for enhanced flexibility and simplicity.",
    content: (
      <div className="space-y-6 mb-10">
        <Heading size="h1">
          Revolutionizing Image Management: A Multi-Method NDI Detection
          Framework
        </Heading>

        <p className="italic text-gray-600">
          This project formed as part of my bachelor&apos;s thesis, marking the
          completion of my software technology degree.
        </p>

        <section className="space-y-4">
          <Heading size="h2">
            <Camera className="inline-block mr-2" /> The Digital Dilemma
          </Heading>
          <p>
            In our increasingly digital world, we&apos;re drowning in a sea of
            images. From social media to professional archives, the sheer volume
            of visual content is staggering. But within this lies a hidden
            challenge: near-duplicate images (NDIs). These
            similar-but-not-identical pictures clutter our storage, confuse our
            searches, and complicate our content management. How do we tackle
            this dilemma?
          </p>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Layers className="inline-block mr-2" /> A Layered Solution to a
            Complex Problem
          </Heading>
          <p>
            Enter the Multi-Method NDI Detection Framework. This approach
            doesn&apos;t just use one algorithm—it harnesses the power of
            multiple detection methods in a layered architecture. Think of it as
            a team of experts, each bringing their unique strengths to the
            table, working in harmony to spot those elusive NDIs. Some are
            faster but less accurate and other the opposite.
          </p>
          <img src="/thesis_model.png" alt="Thesis model" className="w-2/3" />
          <ul className="list-disc list-inside space-y-2">
            <li>Combines multiple algorithms for enhanced flexibility</li>
            <li>
              Retains the benefits of each method while simplifying the overall
              process
            </li>
            <li>Adaptable to various image datasets and use cases</li>
          </ul>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Zap className="inline-block mr-2" /> From Theory to Practice
          </Heading>
          <p>
            But a framework is only as good as its results. That&apos;s why we
            put our Multi-Method approach through its paces:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Extensive testing across diverse image datasets</li>
            <li>
              Fine-tuning of algorithm combinations for optimal performance
            </li>
            <li>Rigorous accuracy and adaptability assessments</li>
          </ul>
          <p>
            The verdict? Impressive accuracy, remarkable adaptability, and a
            system that&apos;s both more efficient and easier to customize.
            We&apos;ve turned a complex problem into a streamlined solution,
            proving that sometimes, the best way to solve a puzzle is to look at
            it from multiple angles.
          </p>
          <Heading size="h3">
            This is how simple it is to build using this system
          </Heading>
          <CodeBlock
            code={`# Import modules
from Layers.layers import Layers
from Phash.phash import Phash
from SURF.surf import SURF
from SIFT.sift import SIFT

image_paths = get_image_paths(path)

layers = [Phash(), SURF(), SIFT()]
layered_architecture = Layers(raw_layers=layers, accuracy_calculator=None)

layered_architecture.run(test_paths)`}
            language="python"
          />
        </section>
        <section className="space-y-4">
          <Heading size={"h2"}>
            <Hammer className="inline-block mr-2" /> Areas of improvement
          </Heading>
          <p>
            While this framework tends to lead to less resource heavy detection
            models, still for a large amount of images a lot of RAM at least and
            maybe much time aswell are needed since image hashes are stored in
            RAM.
          </p>
        </section>
      </div>
    ),
  },
  {
    slug: "bot-dvr-ai-powered-series-recording",
    title: "Bot_DVR: Automated Series Recording with AI",
    date: "July 7, 2024",
    tagLine: "Revolutionizing TV series recording with AI and automation",
    imgSrc: "/bot-dvr-screenshot.png",
    imgDescription: "Bot_DVR interface showing automated recording schedule",
    summary:
      "Bot_DVR is an intelligent, autonomous system that identifies, captures, and organizes TV content without human intervention, combining audio processing, machine learning, and automation.",
    content: (
      <div className="space-y-6 mb-10">
        <Heading size="h1">
          Bot_DVR: The AI-Powered TV Series Recording Revolution
        </Heading>

        <p className="italic text-gray-600">
          Imagine a world where your favorite shows are always recorded,
          perfectly organized, and waiting for you - without you lifting a
          finger. Welcome to the future of TV watching with Bot_DVR.
        </p>

        <section className="space-y-4">
          <Heading size="h2">
            <Tv className="inline-block mr-2" /> The Vision: Beyond Traditional
            DVR
          </Heading>
          <p>
            Bot_DVR was born from a simple yet ambitious idea: What if we could
            create a DVR system that thinks for itself? No more missed episodes,
            no more cluttered recordings, just pure, effortless TV enjoyment.
          </p>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Zap className="inline-block mr-2" /> The Tech Behind the Magic
          </Heading>
          <p>
            At its core, Bot_DVR is a symphony of cutting-edge technologies:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Machine Learning for image-to-text conversion (OCR on steroids!)
            </li>
            <li>Audio processing to detect show intros and outros</li>
            <li>Integration with OBS for flawless recording</li>
            <li>A custom Discord bot for real-time updates</li>
          </ul>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Hammer className="inline-block mr-2" /> Overcoming Challenges
          </Heading>
          <p>
            Building Bot_DVR was like teaching a robot to watch TV - fun, but
            not without its hurdles:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Fine-tuning audio detection across various TV formats</li>
            <li>Training our OCR model to read on-screen text like a pro</li>
            <li>
              Orchestrating all components into a seamless, autonomous system
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Terminal className="inline-block mr-2" /> The Learning Curve
          </Heading>
          <p>This project was a deep dive into the world of:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>API integrations (making different technologies play nice)</li>
            <li>Building systems that run 24/7 without human intervention</li>
          </ul>
        </section>
      </div>
    ),
  },
  {
    slug: "py-deck-linux-stream-deck-gui",
    title: "Py-Deck: Linux GUI for Stream Deck",
    date: "October 15, 2023",
    tagLine: "Extending Stream Deck support to Linux with a custom GUI",
    imgSrc: "/gui.png",
    imgDescription: "Py-Deck GUI interface for Stream Deck configuration",
    summary:
      "Py-Deck is a custom GUI application developed to manage Stream Deck on Linux, enabling easy configuration and powerful command execution capabilities.",
    content: (
      <div className="space-y-6 mb-10">
        <Heading size="h1">
          Py-Deck: Bringing Stream Deck Magic to Linux
        </Heading>

        <p className="italic text-gray-600">
          When Linux love meets Stream Deck dreams, Py-Deck is born - a GUI that
          bridges the gap between open-source passion and productivity
          powerhouse.
        </p>

        <section className="space-y-4">
          <Heading size="h2">
            <Terminal className="inline-block mr-2" /> The Linux Dilemma
          </Heading>
          <p>
            As a die-hard Linux user, I faced a common problem: my beloved
            Elgato Stream Deck sat unused, unsupported by my OS of choice. But
            in the true spirit of open-source, I wasn&apos;t about to let that
            stop me.
          </p>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Zap className="inline-block mr-2" /> From CLI to GUI: A Journey
          </Heading>
          <p>
            I discovered an open-source project that brought basic Stream Deck
            functionality to Linux. It was a start, but I craved more - a
            user-friendly interface to unlock the full potential of this
            button-laden beast.
          </p>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Layers className="inline-block mr-2" /> Crafting the Solution
          </Heading>
          <p>
            Enter Py-Deck: a GUI built with tkinter, interfacing seamlessly with
            the underlying Stream Deck code through JSON files. But it became so
            much more than just pretty buttons:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Easy configuration for Stream Deck newbies and veterans alike
            </li>
            <li>
              The power to execute terminal commands at the push of a button
            </li>
            <li>
              A bridge between the tactile world of hardware and the flexibility
              of Linux
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Server className="inline-block mr-2" /> Unexpected Power
          </Heading>
          <p>
            The true &quot;aha!&quot; moment? Setting up a button to wake my old
            Dell PowerEdge server from its closet slumber. Suddenly, Py-Deck
            wasn&apos;t just a Stream Deck interface - it was a control center
            for my entire home tech ecosystem.
          </p>
        </section>

        <p>
          Py-Deck is more than just a project - it&apos;s a testament to the
          Linux community&apos;s ingenuity and the unexpected joy of making
          hardware dance to the Linux tune. Who knew that a few lines of Python
          could bridge worlds and bring a smile every time I press that
          custom-configured button?
        </p>
      </div>
    ),
  },
  {
    slug: "gitrekt-react-electron-app",
    title: "GitRekt: A React-Electron Git Management Tool",
    date: "August 18, 2024",
    tagLine:
      "Exploring React and Electron integration for desktop app development",
    imgSrc: "/gitrekt-react-components.png",
    imgDescription: "GitRekt application interface showing React components",
    summary:
      "GitRekt, a Git management tool, was developed to deepen understanding of React and modern web development practices. This project combines React, Electron, and D3.js to create a powerful desktop application for Git visualization and management.",
    content: (
      <div className="space-y-6 mb-10">
        <Heading size="h1">
          GitRekt: Where React Meets Electron for Git Mastery
        </Heading>

        <p className="italic text-gray-600">
          Dive into the fusion of web technologies and desktop power with
          GitRekt - a journey through React, Electron, and the art of Git
          visualization.
        </p>

        <section className="space-y-4">
          <Heading size="h2">
            <Github className="inline-block mr-2" /> The Genesis of GitRekt
          </Heading>
          <p>
            GitRekt was a challenge. A test for myself to combine React&apos;s
            flexibility with Electron&apos;s desktop capabilities. The mission?
            Create a Git management tool.
          </p>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Layers className="inline-block mr-2" /> Building Blocks of
            Innovation
          </Heading>
          <p>Our toolkit was a web developer&apos;s dream:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>React and Next.js for a robust, responsive UI</li>
            <li>Electron for bridging the web-desktop divide</li>
            <li>D3.js for bringing Git graphs to life</li>
            <li>
              Electron&apos;s IPC for seamless frontend-system communication
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Zap className="inline-block mr-2" /> Overcoming the Challenges
          </Heading>
          <p>
            Building GitRekt was like solving a complex puzzle, with each piece
            presenting its own unique challenge:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Mastering state management in a desktop environment</li>
            <li>
              Crafting a seamless user experience across different operating
              systems
            </li>
            <li>Optimizing performance for large Git repositories</li>
            <li>Integrating D3.js visualizations with React components</li>
          </ul>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Terminal className="inline-block mr-2" /> The Power of IPC
          </Heading>
          <p>
            One of the most exciting breakthroughs was harnessing
            Electron&apos;s Inter-Process Communication (IPC). This opened up a
            world of possibilities:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Reading local Git repositories directly from the filesystem</li>
            <li>
              Saving user configurations to disk for a persistent experience
            </li>
            <li>
              Executing Git commands with the power of a native application
            </li>
          </ul>
        </section>

        <p>
          GitRekt isn&apos;t just an application; it&apos;s a testament to the
          power of modern web technologies in desktop development. It stands as
          proof that with the right tools and a bit of creativity, we can create
          powerful, cross-platform applications that bring the best of both
          worlds - web and desktop - together.
        </p>
      </div>
    ),
  },
  {
    slug: "picpurge-duplicate-image-detection",
    title: "PicPurge: Intelligent Duplicate Image Detection and Sorting",
    date: "June 4, 2023",
    tagLine:
      "Automating image organization with ML-powered duplicate detection",
    imgSrc: "/picpurge.gif",
    imgDescription:
      "PicPurge interface demonstrating duplicate image detection",
    summary:
      "PicPurge is a Python script that facilitates the identification and removal of duplicate images within a designated directory, as well as image sorting using Machine Learning.",
    content: (
      <div className="space-y-6 mb-10">
        <Heading size="h1">
          PicPurge: Taming the Wild West of Digital Photo Libraries
        </Heading>

        <p className="italic text-gray-600">
          Born from my wish to help and a programmer&apos;s frustration,
          PicPurge is the answer to the age-old question: &quot;Why do I have 5
          copies of the same photo?&quot;
        </p>

        <section className="space-y-4">
          <Heading size="h2">
            <Eraser className="inline-block mr-2" /> The Digital Clutter
            Conundrum
          </Heading>
          <p>
            It all started with my mom&apos;s photo collection - a digital
            hoarder&apos;s dream (or nightmare). Duplicates upon duplicates,
            eating up precious storage space and making finding that one perfect
            shot like searching for a needle in a haystack... made of more
            needles.
          </p>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Zap className="inline-block mr-2" /> Enter PicPurge: The Duplicate
            Destroyer
          </Heading>
          <p>
            PicPurge isn&apos;t just a script; it&apos;s a one-stop shop for
            bringing order to chaos:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Intelligent duplicate detection using advanced image hashing
            </li>
            <li>
              Machine Learning-powered image sorting (because why stop at just
              finding duplicates?)
            </li>
            <li>A user-friendly GUI for those who fear the command line</li>
          </ul>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Layers className="inline-block mr-2" /> The Tech Behind the Magic
          </Heading>
          <p>
            Building PicPurge was like creating a Swiss Army knife for photo
            management:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Python: The backbone of our duplicate-busting operation</li>
            <li>TensorFlow: Bringing AI smarts to image sorting</li>
            <li>
              Image hashing algorithms: For finding those sneaky near-duplicates
            </li>
            <li>Tkinter: Making it all accessible with a sleek GUI</li>
          </ul>
        </section>

        <p>
          PicPurge isn&apos;t just about clearing space; it&apos;s about
          rediscovering lost memories, bringing order to digital chaos, and
          maybe, just maybe, saving a few family relationships along the way.
          Because let&apos;s face it, nobody needs 5 copies of that blurry
          holiday photo - but the one perfect shot? That&apos;s worth keeping.
        </p>
      </div>
    ),
  },
  {
    slug: "custom-keyboard-endeavour",
    title: "Custom Keyboard Endeavour",
    date: "August 31, 2024",
    tagLine: "Designing and building a personalized keyboard from scratch",
    imgSrc: "/streamdeck.jpg",
    imgDescription: "Custom-designed and 3D-printed keyboard",
    summary:
      "This project involved designing, 3D printing, and programming a custom keyboard to create a medium to small keyboard with a personalized layout.",
    content: (
      <div className="space-y-6 mb-10">
        <Heading size="h1">
          The Custom Keyboard Chronicles: A Tale of Keys and 3D Printing
        </Heading>

        <p className="italic text-gray-600">
          When off-the-shelf just won&apos;t cut it, sometimes you have to take
          matters into your own hands... or should I say, under your own
          fingertips?
        </p>

        <section className="space-y-4">
          <Heading size="h2">
            <Keyboard className="inline-block mr-2" /> The Quest for the Perfect
            Keyboard
          </Heading>
          <p>
            It began with a simple realization: small keyboards lacked keys I
            needed, and standard ones were too bulky. Thus began my quest for
            the Goldilocks of keyboards - not too big, not too small, but just
            right.
          </p>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Layers className="inline-block mr-2" /> From Digital to Physical:
            The Design Process
          </Heading>
          <p>
            Armed with FreeCAD and a dream, I set out to design my perfect
            keyboard:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Crafting the ideal layout for maximum efficiency</li>
            <li>Ensuring compatibility with the mighty Raspberry Pi Pico</li>
            <li>
              Designing for 3D printability (because who doesn&apos;t love the
              smell of melted plastic in the morning?)
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Hammer className="inline-block mr-2" /> Bringing It to Life: The
            Build Process
          </Heading>
          <p>
            With the design complete, it was time to bring this keyboard into
            the real world:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              3D printing the chassis (and learning the true meaning of
              patience)
            </li>
            <li>
              Hand-wiring each key (a meditative process, if you ignore the
              occasional burnt finger)
            </li>
            <li>Programming with KMK, because even keyboards need a brain</li>
          </ul>
        </section>

        <p>
          The result? A keyboard that&apos;s more than just a input device -
          it&apos;s a reflection of my workflow, a testament to DIY spirit, and
          a conversation starter all rolled into one. Plus, it&apos;s the only
          keyboard in the world that&apos;s exactly &apos;my type&apos;.
        </p>
      </div>
    ),
  },
  {
    slug: "self-hosting-journey",
    title: "My Self-Hosting Journey",
    date: "September 17, 2022",
    tagLine:
      "Building a personal cloud infrastructure for independence from commercial services",
    imgSrc: "/heimdall.png",
    imgDescription: "Heimdall dashboard showing self-hosted services",
    summary:
      "This post chronicles a three-year journey of self-hosting various services, from file syncing and media streaming to experimenting with virtualization and VPN setups.",
    content: (
      <div className="space-y-6 mb-10">
        <Heading size="h1">
          The Self-Hosting Saga: Breaking Free from the Cloud
        </Heading>

        <p className="italic text-gray-600">
          Three years ago, I embarked on a journey to liberate myself from the
          shackles of commercial cloud services. Little did I know, I was about
          to become a part-time sys-admin, full-time tech enthusiast.
        </p>

        <section className="space-y-4">
          <Heading size="h2">
            <Server className="inline-block mr-2" /> From Novice to Know-How
          </Heading>
          <p>
            Starting with more enthusiasm than expertise, I dove headfirst into
            the world of self-hosting. It was a baptism by fire, filled with
            late nights, configuration files, and the occasional accidental
            server crash.
          </p>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Layers className="inline-block mr-2" /> Building My Digital Empire
          </Heading>
          <p>
            Over time, my self-hosted setup grew into a veritable smorgasbord of
            services:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>TrueNAS: The foundation of my digital fortress</li>
            <li>
              Nextcloud: Because why use Dropbox when you can drop it on your
              own box?
            </li>
            <li>Plex: Turning my media collection into my personal Netflix</li>
            <li>
              Proxmox on an old Dell server: Because who needs peace and quiet
              when you can have a mini data center in your closet?
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Zap className="inline-block mr-2" /> The Challenges and Triumphs
          </Heading>
          <p>
            Self-hosting isn&apos;t always smooth sailing. There were
            challenges:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Battling with port forwarding (and winning, mostly)</li>
            <li>
              Learning the art of quiet cooling for servers in small spaces
            </li>
            <li>
              Explaining to my girlfriend why the closet sounds like a jet
              engine
            </li>
            <li>
              Setting up a VPN for secure access, because paranoia is just good
              sense in IT
            </li>
          </ul>
        </section>

        <p>
          Today, my self-hosted setup is more than just services - it&apos;s a
          testament to digital independence, a playground for continuous
          learning, and yes, sometimes still a source of unexpected 3 AM wake-up
          calls. But would I trade it for the simplicity of commercial cloud
          services? Not a chance.
        </p>
      </div>
    ),
  },
  {
    slug: "linux-transition-journey",
    title: "My Linux Transition Journey",
    date: "October 20, 2022",
    tagLine: "From Windows to Ubuntu to Arch: A personal Linux evolution",
    imgSrc: "/Arch.png",
    imgDescription: "Customized Arch Linux desktop environment",
    summary:
      "This post details a three-year journey of transitioning to Linux, starting with Ubuntu and eventually settling on Arch, along with a switch to Neovim for development.",
    content: (
      <div className="space-y-6 mb-10">
        <Heading size="h1">
          The Linux Chronicles: From Windows Exile to Arch Enlightenment
        </Heading>

        <p className="italic text-gray-600">
          Three years ago, I took my first step into the world of Linux. Little
          did I know, I was embarking on a journey that would transform not just
          my operating system, but my entire approach to computing.
        </p>

        <section className="space-y-4">
          <Heading size="h2">
            <Computer className="inline-block mr-2" /> The Ubuntu Initiation
          </Heading>
          <p>
            Like many Linux newcomers, I started with Ubuntu. &quot;It just
            works,&quot; they said. And it did... until I broke it. But in
            breaking it, I learned more about Linux than any tutorial could
            teach me.
          </p>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Layers className="inline-block mr-2" /> The Arch Ascension
          </Heading>
          <p>
            As my skills grew, so did my curiosity. Enter Arch Linux - a distro
            that doesn&apos;t hold your hand; it practically dares you to make
            it work. The installation process was less like following a recipe
            and more like conducting a symphony of command-line instructions.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Embracing the AUR (Arch User Repository) - a treasure trove of
              packages
            </li>
            <li>Living on the bleeding edge with rolling releases</li>
            <li>Customizing every aspect of my system (because why not?)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <Heading size="h2">
            <Terminal className="inline-block mr-2" /> The Neovim Nirvana
          </Heading>
          <p>
            But why stop at the operating system? I decided to go all-in and
            switch from VSCode to Neovim. It wasn&apos;t about being a
            minimalist; it was about pushing my limits:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Mastering Vim motions
            </li>
            <li>
              Customizing my Neovim setup
            </li>
            <li>
              Realizing that, somehow, typing :wq feels more satisfying than
              clicking a save button
            </li>
          </ul>
        </section>

        <p>
          Today, my Arch Linux system, with its meticulously crafted Neovim
          setup, isn&apos;t just a development environment - it&apos;s a
          reflection of my journey, a testament to the power of open-source, and
          a daily reminder that in the world of tech, learning never stops. And
          yes, I do use Arch, btw.
        </p>
      </div>
    ),
  },
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts() {
  return posts;
}
