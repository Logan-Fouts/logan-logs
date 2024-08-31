export const posts = [
  {
    slug: "multi-method-ndi-detection-framework",
    title: "Multi-Method NDI Detection Framework",
    date: "March 24, 2024",
    tagLine: "Enhancing near-duplicate image detection with a layered approach",
    imgSrc: "/thesis.png",
    imgDescription: "Diagram of the Multi-Method NDI Detection Framework",
    summary: "This thesis project addresses the challenge of near-duplicate image (NDI) detection by proposing a layered architecture framework that combines multiple algorithms for enhanced flexibility and simplicity.",
    content: "In an increasingly digital world, managing the immense volume of image content is crucial. This thesis addresses the challenge of near-duplicate image (NDI) detection by proposing a layered architecture framework that combines multiple algorithms for enhanced flexibility and simplicity. Complex problems often require complex solutions, but they don't always have to. By integrating multiple NDI detection algorithms in a layered approach, this framework aims to retain the benefits of each method while simplifying the overall process. The research involved extensive testing and tuning of various algorithm combinations to find the best performance across different image datasets. The results indicate that this approach maintains impressive accuracy and adaptability, making NDI detection systems more efficient and easier to customize."
  },
  {
    slug: "bot-dvr-ai-powered-series-recording",
    title: "Bot_DVR: Automated Series Recording with AI",
    date: "July 7, 2024",
    tagLine: "Revolutionizing TV series recording with AI and automation",
    imgSrc: "/bot-dvr-screenshot.png",
    imgDescription: "Bot_DVR interface showing automated recording schedule",
    summary: "Bot_DVR is an intelligent, autonomous system that identifies, captures, and organizes TV content without human intervention, combining audio processing, machine learning, and automation.",
    content: "Bot_DVR emerged from a vision to revolutionize how we record and catalog TV series. The goal was to create an intelligent, autonomous system that could identify, capture, and organize content without human intervention. This project combines audio processing, machine learning, and automation to transform the traditional DVR experience into something more advanced and hands-off. At its core, Bot_DVR leverages several cutting-edge technologies. The system uses machine learning for image-to-text conversion, allowing it to 'read' what's on the screen. It listens for specific sound cues to identify the start and end of programs, utilizing audio processing techniques. The recording process is handled through integration with OBS (Open Broadcaster Software), which Bot_DVR controls programmatically. To keep users informed, the system sends updates and notifications through a custom Discord bot. The project required diving deep into audio analysis libraries, machine learning frameworks for optical character recognition (OCR), OBS's API for recording automation, and Discord's bot development kit. Developing Bot_DVR presented several unique challenges. Accurately detecting sound cues in various audio environments required extensive testing and refinement of the audio processing algorithms. Training the machine learning model to reliably convert on-screen text to machine-readable format across different TV formats and resolutions was another significant hurdle. Integrating all these components - audio detection, OCR, OBS control, and Discord notifications - into a seamless, autonomous system demanded careful architecture design and robust error handling. Throughout the development process, I gained valuable experience in working with asynchronous programming, API integrations, and the intricacies of building a system that operates continuously and autonomously. This project not only enhanced my technical skills but also deepened my understanding of how AI and automation can be applied to solve real-world problems in innovative ways."
  },
  {
    slug: "py-deck-linux-stream-deck-gui",
    title: "Py-Deck: Linux GUI for Stream Deck",
    date: "October 15, 2023",
    tagLine: "Extending Stream Deck support to Linux with a custom GUI",
    imgSrc: "/gui.png",
    imgDescription: "Py-Deck GUI interface for Stream Deck configuration",
    summary: "Py-Deck is a custom GUI application developed to manage Stream Deck on Linux, enabling easy configuration and powerful command execution capabilities.",
    content: "I enjoy running Linux on my computers but my Elgato Stream Deck was not supported. I found an open source project that is working on support for the stream decks. This worked for me out of the box, but I wanted a GUI to manage it more easily. So I wrote a quick GUI using tkinter that interfaces with the code through JSON files. This turned out to be more powerful than I had previously expected because it enabled me to run terminal commands with the press of a button. My favorite command I set up was a command to start up an old Dell PowerEdge server I have in my closet."
  },
  {
    slug: "gitrekt-react-electron-app",
    title: "GitRekt: A React-Electron Git Management Tool",
    date: "August 18, 2024",
    tagLine: "Exploring React and Electron integration for desktop app development",
    imgSrc: "/gitrekt-react-components.png",
    imgDescription: "GitRekt application interface showing React components",
    summary: "GitRekt, a Git management tool, was developed to deepen understanding of React and modern web development practices. This project combines React, Electron, and D3.js to create a powerful desktop application for Git visualization and management.",
    content: "GitRekt was primarily conceived as a project to deepen my understanding of React and modern web development practices. By creating a Git management tool, I aimed to challenge myself with complex state management and real-time updates. This project served as a practical playground for exploring React's ecosystem within an Electron environment. I leveraged Next.js for its powerful rendering capabilities and routing system, building the UI with React components and utilizing hooks for state management. One of the most exciting aspects was using Electron's Inter-Process Communication (IPC) to access the filesystem. This allowed me to create a seamless interface between the React frontend and native system capabilities, enabling operations like reading local repositories and saving configurations directly to disk. I integrated D3.js to create an interactive Git graph, which provided valuable experience in combining React with data visualization libraries. The project also involved working with the Octokit REST API for GitHub integration. Throughout the development process, I focused on React best practices, component reusability, and optimizing performance in the context of a desktop application. The combination of React, Electron, and IPC opened up exciting possibilities for creating powerful, cross-platform desktop apps with web technologies."
  },
  {
    slug: "picpurge-duplicate-image-detection",
    title: "PicPurge: Intelligent Duplicate Image Detection and Sorting",
    date: "June 4, 2023",
    tagLine: "Automating image organization with ML-powered duplicate detection",
    imgSrc: "/picpurge.gif",
    imgDescription: "PicPurge interface demonstrating duplicate image detection",
    summary: "PicPurge is a Python script that facilitates the identification and removal of duplicate images within a designated directory, as well as image sorting using Machine Learning.",
    content: "The driving factor behind this project was the fact that my Mom has at least 5 near duplicate copies of every image and it takes up a huge amount of extra space. I wanted a way for Near-Duplicate image detection and removal automatically. PicPurge is a Python script that facilitates the identification and removal of duplicate images within a designated directory, as well as image sorting using Machine Learning. This script utilizes image hashing for comparison purposes and now incorporates sorting functionality using TensorFlow for enhanced efficiency. The script offers both a command-line interface and a user-friendly GUI for seamless utilization."
  },
  {
    slug: "custom-keyboard-endeavour",
    title: "Custom Keyboard Endeavour",
    date: "August 31, 2024",
    tagLine: "Designing and building a personalized keyboard from scratch",
    imgSrc: "/streamdeck.jpg",
    imgDescription: "Custom-designed and 3D-printed keyboard",
    summary: "This project involved designing, 3D printing, and programming a custom keyboard to create a medium to small keyboard with a personalized layout.",
    content: "This all started when I decided I did not like current small keyboards and standard ones were too large. I wanted a medium to small keyboard with a custom layout including all the keys I need and none of the ones I don't. In order to make my idea real I started off working in FreeCAD. I worked for quite a while to come up with a nice 3D model that I could print. While I came up with the model I tried to make sure that the intended microcontroller (Raspberry Pi Pico) would be able to handle the necessary amount of pins. Then, after I printed it all out I got to hand wiring which took quite a while but was a satisfying process. Finally I used KMK to make the keyboard work."
  },
  {
    slug: "self-hosting-journey",
    title: "My Self-Hosting Journey",
    date: "September 17, 2022",
    tagLine: "Building a personal cloud infrastructure for independence from commercial services",
    imgSrc: "/heimdall.png",
    imgDescription: "Heimdall dashboard showing self-hosted services",
    summary: "This post chronicles a three-year journey of self-hosting various services, from file syncing and media streaming to experimenting with virtualization and VPN setups.",
    content: "It all started because I wanted to move away from relying on and paying for cloud services. However, when I started all this I definitely did not have the technical skill in order to do it easily. After the past 3 years of cosplaying as a sys-admin I can say that I have a decent bit of experience managing and hosting servers. I have some old PC parts hosting TrueNAS which has Nextcloud, Plex, and Collabora. I use Nextcloud mainly for syncing up my machine but the web interface is also nice to access my files. Plex has my media collection, and Collabora works with Nextcloud for document editing. I also was gifted an old Dell server. Since it is so loud and just inside my closet it is off most of the time. But, when my girlfriend is away I spin it up to do any number of testing with Proxmox as the hypervisor. It does a nice job of warming up our apartment ;). Finally, in order to access all of my resources when I am away I have a mini rack I designed and printed that holds a mini switch, hard drive, and a Raspberry Pi. The Pi is running WireGuard so I can VPN into my network from anywhere."
  },
  {
    slug: "linux-transition-journey",
    title: "My Linux Transition Journey",
    date: "October 20, 2022",
    tagLine: "From Windows to Ubuntu to Arch: A personal Linux evolution",
    imgSrc: "/Arch.png",
    imgDescription: "Customized Arch Linux desktop environment",
    summary: "This post details a three-year journey of transitioning to Linux, starting with Ubuntu and eventually settling on Arch, along with a switch to Neovim for development.",
    content: "When I started hosting my own services I found I needed to become comfortable with the terminal and Linux/Unix. It's been around 3 years now that I have been mainly using Linux (I only use Windows for any gaming despite Proton's progress). I started like most on Ubuntu since I heard it was a 'just works' distro. This was my experience; however, 'just works' does not mean you can't break it. I found this out quickly having to troubleshoot my system. In all those hours I learned a lot about managing a Linux system. Nowadays I have switched to Arch btw ;). I found it interesting to read the wiki and go through the whole install process. It was a great way to learn how Arch works and allowed for easy customization. So far, I really enjoy the AUR and the bleeding edge packages. Also, with all this use of the terminal and specifically vim, I decided I wanted to fully commit to switching from VSCode to Neovim. It's not so much for me that it's lighter weight or anything, personally I just enjoy ricing and learning new things. As of now I actually think my workflow is already faster than in VSCode since I have jammed most of the useful key motions into my brain."
  }
];

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug);
}

export function getAllPosts() {
  return posts;
}