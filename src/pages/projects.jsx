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
      />
      <Project
        title="Custom Keyboard Endeavour"
        heading1="Intro"
        intro="This all started when I decided I did not like current small keyboards and standard ones were too large. I wanted a medium to small keyboard with a custom layout including all the keys I need and none of the ones I don't"
        heading2="Description"
        mainText="Crafting the ideal keyboard setup was a more challenging process then expected,
              particularly when tailored for compatibility with the Ender 3 3D
              printer. This envisioned configuration prioritizes adaptability,
              featuring a Stream Deck mount designed for effortless removal. M3
              screws and heated inserts provide structural stability, while the
              integration of a Raspberry Pi Pico adds a smart dimension,
              enabling customization and automation. The synergy between 3D
              printing technology and thoughtful design not only ensures
              practicality but also infuses a creative touch, allowing users to
              personalize their workspace with precision and innovation.
              Assembling this keyboard becomes a dynamic journey, where each
              component contributes to a seamlessly integrated and
              technologically advanced solution for an enriched user experience."
        imgSrc="/streamdeck.jpg"
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
      /> 
    </div>
  );
}
