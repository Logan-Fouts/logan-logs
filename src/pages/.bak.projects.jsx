import React from "react";
import { motion } from "framer-motion";
import Navbar from "/src/app/components/NavBar.client";
import {
  Project,
  Project2,
  Project3,
  Project4,
} from "/src/app/components/Project";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProjectWrapper = ({ children }) => (
  <motion.div className="flex items-center" variants={fadeInUp}>
    {children}
  </motion.div>
);

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white mt-10">
      <Navbar />
      <motion.div
        className="container mx-auto px-4 py-12"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1
          className="p-2 text-6xl text-center font-black bg-clip-text text-green-500 mb-12"
          variants={fadeInUp}
        >
          Project Blog
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={staggerChildren}
        >
          <ProjectWrapper>
            <Project2
              title="GitRekt"
              heading1="Learning Goal"
              intro="GitRekt was primarily conceived as a project to deepen my understanding of React and modern web development practices. By creating a Git management tool, I aimed to challenge myself with complex state management and real-time updates."
              heading2="Implementation"
              mainText="This project served as a practical playground for exploring React's ecosystem within an Electron environment. I leveraged Next.js for its powerful rendering capabilities and routing system, building the UI with React components and utilizing hooks for state management. One of the most exciting aspects was using Electron's Inter-Process Communication (IPC) to access the filesystem. This allowed me to create a seamless interface between the React frontend and native system capabilities, enabling operations like reading local repositories and saving configurations directly to disk. I integrated D3.js to create an interactive Git graph, which provided valuable experience in combining React with data visualization libraries. The project also involved working with the Octokit REST API for GitHub integration. Throughout the development process, I focused on React best practices, component reusability, and optimizing performance in the context of a desktop application. The combination of React, Electron, and IPC opened up exciting possibilities for creating powerful, cross-platform desktop apps with web technologies."
              imgSrc="/gitrekt-react-components.png"
              linkUrl="https://github.com/Logan-Fouts/GitRekt"
            />
          </ProjectWrapper>

          <ProjectWrapper>
            <Project
              title="Multi-Method NDI Detection Framework"
              heading1="Intro"
              intro="In an increasingly digital world, managing the immense volume of image content is crucial. This thesis addresses the challenge of near-duplicate image (NDI) detection by proposing a layered architecture framework that combines multiple algorithms for enhanced flexibility and simplicity."
              heading2="Description"
              mainText="Complex problems often require complex solutions, but they don't always have to. By integrating multiple NDI detection algorithms in a layered approach, this framework aims to retain the benefits of each method while simplifying the overall process. The research involved extensive testing and tuning of various algorithm combinations to find the best performance across different image datasets. The results indicate that this approach maintains impressive accuracy and adaptability, making NDI detection systems more efficient and easier to customize."
              imgSrc="/thesis.png"
              linkUrl="https://github.com/Logan-Fouts/Thesis"
            />
          </ProjectWrapper>

          <ProjectWrapper>
            <Project4
              title="Bot_DVR: Automated Series Recording with AI"
              heading1="Project Concept"
              content1="Bot_DVR emerged from a vision to revolutionize how we record and catalog TV series. The goal was to create an intelligent, autonomous system that could identify, capture, and organize content without human intervention. This project combines audio processing, machine learning, and automation to transform the traditional DVR experience into something more advanced and hands-off."
              heading2="Technical Implementation"
              content2="At its core, Bot_DVR leverages several cutting-edge technologies. The system uses machine learning for image-to-text conversion, allowing it to 'read' what's on the screen. It listens for specific sound cues to identify the start and end of programs, utilizing audio processing techniques. The recording process is handled through integration with OBS (Open Broadcaster Software), which Bot_DVR controls programmatically. To keep users informed, the system sends updates and notifications through a custom Discord bot. The project required diving deep into audio analysis libraries, machine learning frameworks for optical character recognition (OCR), OBS's API for recording automation, and Discord's bot development kit."
              heading3="Challenges and Learnings"
              content3="Developing Bot_DVR presented several unique challenges. Accurately detecting sound cues in various audio environments required extensive testing and refinement of the audio processing algorithms. Training the machine learning model to reliably convert on-screen text to machine-readable format across different TV formats and resolutions was another significant hurdle. Integrating all these components - audio detection, OCR, OBS control, and Discord notifications - into a seamless, autonomous system demanded careful architecture design and robust error handling. Throughout the development process, I gained valuable experience in working with asynchronous programming, API integrations, and the intricacies of building a system that operates continuously and autonomously. This project not only enhanced my technical skills but also deepened my understanding of how AI and automation can be applied to solve real-world problems in innovative ways."
              linkUrl="https://github.com/Logan-Fouts/BOT_DVR"
            />
          </ProjectWrapper>

          <ProjectWrapper>
            <Project2
              title="Py-Deck"
              heading1="Why"
              intro="I enjoy running linux on my computers but my elgato stream deck was not supported."
              heading2="Whats it do"
              mainText="I found an open source project that is working on support for the stream decks. This worked for me out the box but I wanted a gui to manage it more easily. So I wrote a quick gui using tkinter that interfaces with the code through json files. This turned out to be more powerful then I had previosuly expected because it enabled me to run terminal commands with the press of a button. My favorite command I set up was a command to start up an old dell poweredge server I have in my closet."
              imgSrc="/gui.png"
              linkUrl="https://github.com/Logan-Fouts/Py-Deck"
            />
          </ProjectWrapper>

          <ProjectWrapper>
            <Project2
              title="PicPurge"
              heading1="Why"
              intro="The driving factor behind this project was the fact that my Mom has at least 5 near duplicate copies of every image and it takes up a huge amoung of extra space. I wanted a way for Near-Duplicate image detection and removal automaticcally."
              heading2="Whats it do"
              mainText="A Python script that facilitates the identification and removal of duplicate images within a designated directory, as well as image sorting using Machine Learning. This script utilizes image hashing for comparison purposes and now incorporates sorting functionality using TensorFlow for enhanced efficiency. The script offers both a command-line interface and a user-friendly GUI for seamless utilization."
              imgSrc="/picpurge.gif"
              linkUrl="https://github.com/Logan-Fouts/PicPurge"
            />
          </ProjectWrapper>

          <ProjectWrapper>
            <Project
              title="Custom Keyboard Endeavour"
              heading1="Intro"
              intro="This all started when I decided I did not like current small keyboards and standard ones were too large. I wanted a medium to small keyboard with a custom layout including all the keys I need and none of the ones I don't"
              heading2="Description"
              mainText="In order to make my idea real I started off working in freecad. I worked for quite a while to come up with a nice 3D model that I could print. While I came up with the model I tried to make sure that the intedned micro control (raspberry pico) would be able to handle the necessary amount of pins. Then, after I printed it all out I got to hand wiring which took quite a while but was a satisfying process. Finally I used kmk to make the keyboard work."
              imgSrc="/streamdeck.jpg"
              linkUrl="https://www.thingiverse.com/thing:6267112"
            />
          </ProjectWrapper>

          <ProjectWrapper>
            <Project3
              title="Self Hosting"
              heading1="How'd it start"
              intro="It all started because I wanted to move away from relying on and paying for cloud services. However, when I started all this I definetly did not have the technical skill in order to do it easily. After the past 3 years of cosplaying as a sys-admin I can say that I have a decent bit of experience managing and hosting servers."
              heading2="What Am I Hosting"
              mainText="I have some old pc parts hosting Truenas which has nextcloud, plex, and collabra. I use nextcloud mainly for syncing up my machine but the web interface is also nice to access my files. Plex has my media collection, and collabra works with nextcloud for document editing. I also was gifted an old dell server. Since it is so loud and just inside my closet it is off most of the time. But, when my girlfriend is away I spin it up to do any number of testing with proxmox as the hyper visor. It does a nice job of warming up our apartment ;). Finally, in order to access all of my resources when I am away I have a mini rack I designed and printed that holds a mini switch, hard drive, and a raspberry pi. The pi is running wire guard so I can vpn into my network from anywhere."
              imgSrc1="/heimdall.png"
              imgSrc2="/servers.png"
              imgSrc3="/pi.png"
              linkUrl="https://www.thingiverse.com/thing:6040912"
            />
          </ProjectWrapper>

          <ProjectWrapper>
            <Project3
              title="Linux Transition"
              heading1="Why Switch?"
              intro="When I stared hosting my own services I found I need to become comfortable with the terminal and linux/unix."
              heading2="How It's Going"
              mainText="Its been around 3 years now that I have been mainly using Linux (I only use windows for any gaming despite protons progress). I started like most on ubuntu since I heard it was a just works distro. This was my experience; however, just works does not mean you cant break it. I found this out quickly having to troublshoot my system. In all those hours I learned a lot about managing a linux system. Nowadays I have switch to Arch btw ;). I found it interesting to read the wiki and go through the whole install process. It was a great way to learn how arch works and allowed for easy customization. So far, I really enjoy the AUR and the bleeding edge packages. Also, all this use of the terminal and specifically vim, I decided I wanted to fully commit to swtiching from vscode to neovim. Its not so much for me that its lighter weight or anything, personally I just enjoy ricing and learning new things. As of now I actually think my workflow is already faster then in vscode since I have jammed most of the useful key motions into my brain."
              imgSrc1="/Linux Tree.png"
              imgSrc2="/ubuntu.png"
              imgSrc3="/Arch.png"
              linkUrl="https://www.lpi.org/pt-br/blog/2021/10/05/eleven-reasons-switch-windows-linux/"
            />
          </ProjectWrapper>
        </motion.div>
      </motion.div>
    </div>
  );
}
