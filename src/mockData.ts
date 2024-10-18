import { Software, Category, OS } from './types';

export const mockSoftwareData: Software[] = [
  {
    id: 1,
    name: "VLC Media Player",
    description: "VLC is a free and open-source cross-platform multimedia player that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols.",
    category: Category.Multimedia,
    os: OS.CrossPlatform,
    downloadUrl: "https://www.videolan.org/vlc/",
    imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 2,
    name: "7-Zip",
    description: "7-Zip is a file archiver with a high compression ratio. It supports various archive formats and strong AES-256 encryption.",
    category: Category.Utility,
    os: OS.Windows,
    downloadUrl: "https://www.7-zip.org/download.html",
    imageUrl: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    name: "LibreOffice",
    description: "LibreOffice is a free and powerful office suite, and a successor to OpenOffice.org. Its clean interface and feature-rich tools help you unleash your creativity and enhance your productivity.",
    category: Category.Productivity,
    os: OS.CrossPlatform,
    downloadUrl: "https://www.libreoffice.org/download/download/",
    imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    name: "Avira Free Antivirus",
    description: "Avira Free Antivirus provides real-time protection against viruses, malware, and other online threats. It's lightweight and doesn't slow down your system.",
    category: Category.Security,
    os: OS.Windows,
    downloadUrl: "https://www.avira.com/en/free-antivirus-windows",
    imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    name: "Visual Studio Code",
    description: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes.",
    category: Category.Development,
    os: OS.CrossPlatform,
    downloadUrl: "https://code.visualstudio.com/download",
    imageUrl: "https://images.unsplash.com/photo-1627399270231-7d36245355a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 6,
    name: "GIMP",
    description: "GIMP is a free and open-source image editor used for image manipulation and image creation. It supports a wide variety of plugins and scripts.",
    category: Category.Multimedia,
    os: OS.CrossPlatform,
    downloadUrl: "https://www.gimp.org/downloads/",
    imageUrl: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 7,
    name: "Audacity",
    description: "Audacity is a free, easy-to-use, multi-track audio editor and recorder for Windows, macOS, GNU/Linux and other operating systems.",
    category: Category.Multimedia,
    os: OS.CrossPlatform,
    downloadUrl: "https://www.audacityteam.org/download/",
    imageUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 8,
    name: "Blender",
    description: "Blender is the free and open source 3D creation suite. It supports the entire 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing and motion tracking, video editing and 2D animation pipeline.",
    category: Category.Multimedia,
    os: OS.CrossPlatform,
    downloadUrl: "https://www.blender.org/download/",
    imageUrl: "https://images.unsplash.com/photo-1631987622086-13abcc7a7b98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 9,
    name: "OBS Studio",
    description: "OBS (Open Broadcaster Software) is free and open source software for video recording and live streaming. It supports real-time capture, scene composition, encoding, recording, and broadcasting.",
    category: Category.Multimedia,
    os: OS.CrossPlatform,
    downloadUrl: "https://obsproject.com/download",
    imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  },
  {
    id: 10,
    name: "Notepad++",
    description: "Notepad++ is a free source code editor and Notepad replacement that supports several languages. It offers features like syntax highlighting, code folding, and limited autocompletion.",
    category: Category.Development,
    os: OS.Windows,
    downloadUrl: "https://notepad-plus-plus.org/downloads/",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 11,
    name: "FileZilla",
    description: "FileZilla is a free, open source FTP client. It supports FTP, SFTP, and FTPS (FTP over SSL/TLS) and features a site manager with folders, drag & drop support, and more.",
    category: Category.Utility,
    os: OS.CrossPlatform,
    downloadUrl: "https://filezilla-project.org/download.php",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80"
  },
  {
    id: 12,
    name: "Thunderbird",
    description: "Mozilla Thunderbird is a free, open source, cross-platform email, news, RSS, and chat client developed by the Mozilla Foundation.",
    category: Category.Productivity,
    os: OS.CrossPlatform,
    downloadUrl: "https://www.thunderbird.net/en-US/",
    imageUrl: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 13,
    name: "Inkscape",
    description: "Inkscape is a free and open-source vector graphics editor. It can be used to create or edit vector graphics such as illustrations, diagrams, line arts, charts, logos and complex paintings.",
    category: Category.Multimedia,
    os: OS.CrossPlatform,
    downloadUrl: "https://inkscape.org/release/",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: 14,
    name: "Malwarebytes",
    description: "Malwarebytes is an anti-malware software for Microsoft Windows, macOS, Chrome OS, Android, and iOS that finds and removes malware. It's available in a free version which scans for and removes malware when triggered manually.",
    category: Category.Security,
    os: OS.CrossPlatform,
    downloadUrl: "https://www.malwarebytes.com/mwb-download",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 15,
    name: "Krita",
    description: "Krita is a professional FREE and open source painting program. It is made by artists that want to see affordable art tools for everyone.",
    category: Category.Multimedia,
    os: OS.CrossPlatform,
    downloadUrl: "https://krita.org/en/download/krita-desktop/",
    imageUrl: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

// Generate additional software items to reach 100 per category
export const generateMockData = (): Software[] => {
  const result: Software[] = [...mockSoftwareData];
  let id = mockSoftwareData.length + 1;

  for (const category of Object.values(Category)) {
    const categoryCount = result.filter(item => item.category === category).length;
    const remainingCount = 100 - categoryCount;

    for (let i = 0; i < remainingCount; i++) {
      const os = Object.values(OS)[Math.floor(Math.random() * Object.values(OS).length)];
      result.push({
        id: id++,
        name: `${category} Software ${i + 1}`,
        description: `This is a ${category.toLowerCase()} software for ${os}. It provides various features and functionalities to enhance your experience.`,
        category: category,
        os: os,
        downloadUrl: "https://example.com/download",
        imageUrl: `https://source.unsplash.com/random/800x600?${category.toLowerCase()},${os.toLowerCase()}`
      });
    }
  }

  return result;
};

export const extendedMockSoftwareData = generateMockData();