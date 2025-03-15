# Home Media Setup Documentation
## Overview
This document outlines the process of setting up a home media system using a combination of Plex, Kodi, Jellyfin, and various hardware components including an Intel NUC, Raspberry Pi 5, and a Samsung TV. The goal was to achieve a seamless 4K media streaming experience across different devices while overcoming various hardware and software challenges.

## Hardware Components
- **Intel NUC (i3)**: Primary media server.
- **Raspberry Pi 5**: Secondary media player.
- **Samsung TV**: Main display.
- **Denon AVR**: Audio receiver for 5.1 surround sound.
- **4TB Hard Drive**: Storage for media files.
- **4K Libre Blu-ray Drive**: For ripping Blu-ray discs.

## Software Components
- **Plex**: Media server software.
- **Kodi**: Media player software.
- **Jellyfin**: Alternative media server software.
- **Docker**: Containerization platform for running Plex.

## Initial Setup and Issues

### Plex on Intel NUC
1. **Overheating Issues**: The NUC was overheating, reaching temperatures above 90°C.
2. **Samsung TV Plex App**: Encountered strange issues with the Plex app on the Samsung TV.

### Raspberry Pi 5 as a Workaround
1. **Plex via Web Browser**: Used the Pi 5 to run Plex through a full-screen web browser.
2. **Limitations**: Unable to run 4K at 60Hz due to HDMI converter limitations. Mouse control was inconvenient.

### Transition to Kodi
1. **Direct Connection to Samsung TV**: Installed Kodi directly on the NUC.
2. **Control via Kodi App**: Used the Kodi app on a smartphone for control.
3. **Issues**:
   - **HDMI CEC**: Did not play well with the Denon AVR.
   - **Metadata Matching**: Poor for movies, worse for music.
   - **Audio Issues**: Center channel audio was not working, resolved partially by enabling passthrough audio.

### Hardware Troubleshooting on the Marketplace NUC
1. **Initial Inspection**: Found the NUC reeked of goo gone, internal components were in poor condition.
2. **Cleaning and Repairs**:
   - Replaced thermal paste.
   - Cleaned and lubricated the fan with oil since it wasn't spinning.
1. **Result**: Temperature dropped from above 90°C to below 60°C.

## Final Setup

### Factory Reset Samsung TV
1. **Purpose**: To remove bloatware and ensure a clean slate.
2. **Outcome**: Improved performance and stability.

### Plex in Docker on NUC
1. **Installation**: Set up Plex in a Docker container on the NUC.
2. **Benefits**:
   - Stable 4K streaming across the network.
   - Consistent performance with no overheating.

### Content Management
1. **Storage**: Utilized a 4TB hard drive for media storage.
2. **Ripping Blu-rays**: Used a 4K Libre Blu-ray drive to rip movies, which were then encoded using HandBrake.

## Conclusion
The final setup involves running Plex in a Docker container on a refurbished Intel NUC, which is connected directly to a Samsung TV. This configuration provides a stable and high-quality 4K media streaming experience. The Raspberry Pi 5 serves as a backup player, and Jellyfin is available for alternative streaming needs. The NUC has been thoroughly cleaned and repaired, ensuring optimal performance and longevity.

## Tips for Maintenance
- Regularly monitor the NUC's temperature and performance.
- Keep the Plex and Docker installations updated.
- Periodically check the integrity of the media files and metadata.

This setup has proven to be robust and reliable, offering a high-quality home media experience.
