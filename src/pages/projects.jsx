import Navbar from "/src/app/components/NavBar.client";
import { Project, Project2, Project3 } from "/src/app/components/Project";

export default function Projects() {
  return (
    <div className="pb-4 flex flex-col items-center justify-center bg-black">
      <Navbar />
      <h1 className="text-5xl text-center font-black text-green-800 mt-16">
        Project Blog
      </h1>
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

      <Project2
        title="PicPurge"
        heading1="Why"
        intro="The driving factor behind this project was the fact that my Mom has at least 5 near duplicate copies of every image and it takes up a huge amoung of extra space. I wanted a way for Near-Duplicate image detection and removal automaticcally."
        heading2="Whats it do"
        mainText="A Python script that facilitates the identification and removal of
        duplicate images within a designated directory, as well as image
        sorting using Machine Learning. This script utilizes image hashing for
        comparison purposes and now incorporates sorting functionality using
        TensorFlow for enhanced efficiency. The script offers both a
        command-line interface and a user-friendly GUI for seamless
        utilization."
        imgSrc="/picpurge.gif"
        linkUrl="https://github.com/Logan-Fouts/PicPurge"
      />

      <Project
        title="Custom Keyboard Endeavour"
        heading1="Intro"
        intro="This all started when I decided I did not like current small keyboards and standard ones were too large. I wanted a medium to small keyboard with a custom layout including all the keys I need and none of the ones I don't"
        heading2="Description"
        mainText="In order to make my idea real I started off working in freecad. I worked for quite a while to come up with a nice 3D model that I could print. While I came up with the model I tried to make sure that the intedned micro control (raspberry pico) would be able to handle the necessary amount of pins. Then, after I printed it all out I got to hand wiring which took quite a while but was a satisfying process. Finally I used kmk to make the keyboard work."
        imgSrc="/streamdeck.jpg"
        linkUrl="https://www.thingiverse.com/thing:6267112"
      />

      <Project3
        title="Linux Transition"
        heading1="Why Switch?"
        intro="When I stared hosting my own services I found I need to become comfortable with the terminal and linux/unix."
        heading2="How It's Going"
        mainText="Its been around 3 years now that I have been mainly using Linux (I only use windows for any gaming despite protons progress). I started like most on ubuntu since I heard it was a just works distro. This was my experience; however, just works does not mean you cant break it. I found this out quickly having to troublshoot my system. In all those hours I learned a lot about managing a linux system. Nowadays I have switch to Arch btw ;). I found it interesting to read the wiki and go through the whole install process. It was a great way to learn how arch works and allowed for easy customization. So far, I really enjoy the AUR and the bleeding edge packages. Also, all this use of the terminal and specifically vim, I decided I wanted to fully commit to swtiching from vscode to neovim. Its not so much for me that its lighter weight or anything, personally I just enjoy ricing and learning new things. As of now I actually think my workflow is already faster then in vscode since I have jammed most of the useful key motions into my brain."
        imgSrc1="/Linux Tree.png"
        imgSrc2="/ubuntu.png"
        imgSrc3="/Arch.png"
        linkUrl="https://www.thingiverse.com/thing:6040912"
      />
    </div>
  );
}
