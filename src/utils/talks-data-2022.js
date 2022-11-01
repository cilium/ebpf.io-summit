const talksData = [
  {
    speaker: 'Alexei Starovoitov',
    topic: 'The future of eBPF in the Linux Kernel',
    youtubeLink: 'https://youtu.be/71z8u1QNc5I',
  },
  {
    speaker: 'Adelina Simion',
    topic: 'Multi-cluster networking with Cilium at Form3',
    youtubeLink: 'https://youtu.be/vKgRf4OzTIE',
  },
  {
    speaker: 'Arthur @Arthurchiao (Yanan Zhao)',
    topic:
      'Large scale cloud native networking & security with Cilium/eBPF: 4 years experiences from Trip.com',
    youtubeLink: 'https://youtu.be/NIsU4I950l4',
    pdfLink:
      'https://sessionize.com/download/iokvamo~LDvBZBkRzu6podCcJdUtQF.pdf~Arthur-Session-trip-com.pdf',
  },
  {
    speaker: 'Alex Mackenzie',
    topic: `eBPF - The Capital Market's Perspective`,
    youtubeLink: 'https://youtu.be/2jNCQwgy0fI',
  },
  {
    speaker: 'Ondrej Blazek',
    topic: 'Cilium Standalone XDP L4 Load Balancer',
    youtubeLink: 'https://youtu.be/xwjZF3alO7g',
  },
  {
    speaker: 'Guruprasad Ramamoorthy',
    topic: `eBPF, a road to invisible network: S&P Global's Network Transformation Journey`,
    youtubeLink: 'https://youtu.be/6CZ_SSTqb4g',
  },
  {
    speaker: 'Dave Thaler',
    topic: 'Signed eBPF Programs: A Cross-Platform Analysis',
    youtubeLink: 'https://youtu.be/-hjKkP2I0cU',
    pdfLink:
      'https://sessionize.com/download/ijoudja~NNdP4ty8UFLgJH1C1jCDhA.pdf~Thaler-session.pdf',
  },
  {
    speaker: 'Niek Temme',
    topic: 'When you need to overcome your fear and build your own data-driven eBPF firewall',
    youtubeLink: 'https://youtu.be/b7zEnP9W-Cw',
  },
  {
    speaker: 'Martynas Pumputis',
    topic: 'Troubleshooting and healing networks with eBPF',
    youtubeLink: 'https://youtu.be/po31bE0N7qk',
  },
  {
    speaker: 'Jan Glauber',
    topic: 'eBPF for IO latency monitoring',
    youtubeLink: 'https://youtu.be/MwPNjr46UBk',
    pdfLink:
      'https://sessionize.com/download/wqaysef~n7jAqQcgAVDigcEqJTKVGk.pdf~Glauber%20-%20eBPF%20for%20IO%20latency%20monitoring.pdf',
  },
  {
    speaker: 'Jiang Wang .',
    topic: `Improving Cilium's eBPF-based DSR performance by adding support for IP-in-IP`,
    youtubeLink: 'https://youtu.be/zoxQPI91KWk',
    pdfLink:
      'https://sessionize.com/download/irpanceu~JLBcGbfbYH9gB5cfbw7GiS.pdf~JiangWangCilium-IPIP.pdf',
  },
  {
    speaker: 'Toke Høiland-Jørgensen',
    topic: 'The Promise of eBPF For The Edge',
    youtubeLink: 'https://youtu.be/2jspohlakUE',
  },
  {
    speaker: 'Daniel Borkmann',
    topic: 'eBPF: innovations in cloud native',
    youtubeLink: 'https://youtu.be/wdD22mC8TjE',
    pdfLink:
      'https://sessionize.com/download/syahfej~KQRCkDB3zgNUj5nhrujno9.pdf~Borkmann%20-%20eBPF%20innovations%20in%20cloud%20native.pdf',
  },
  {
    speaker: 'Purvi Desai',
    topic: 'eBPF and Cilium at Google',
    youtubeLink: 'https://youtu.be/26KbW5-BeNA',
  },
  {
    speaker: 'Marga Manterola',
    topic: 'Buzzing across the eBPF Landscape and into the Hive',
    youtubeLink: 'https://youtu.be/BXnoCrwSF5g',
  },
  {
    speaker: 'Laurent Bernaille',
    topic: 'All Your Queues Are Belong to Us: Debugging and Mitigating a Kernel Bug with eBPF',
    youtubeLink: 'https://youtu.be/7Rat98r7B3U',
    pdfLink:
      'https://sessionize.com/download/iwxaowne~MrxvAnPSQVRLHx8GBHZXeB.pdf~All%20Your%20Queues%20Are%20Belong%20to%20Us.pdf',
  },
  {
    speaker: 'Frederick Lawler',
    topic: 'Securing systems with eBPF Linux Security Module',
    youtubeLink: 'https://youtu.be/XlqfTX9xV_4',
  },
  {
    speaker: 'Giovanni Alberto Falcione',
    topic: 'Securing the IoT with eBPF and Rust',
    youtubeLink: 'https://youtu.be/vmRQXRit-sY',
  },
  {
    speaker: 'Djalal Harouni',
    topic: 'Container Security and Runtime Enforcement with Tetragon',
    youtubeLink: 'https://youtu.be/fw40ROmswbM',
    pdfLink:
      'https://sessionize.com/download/ionyawse~VfsoLquJAT7YTqPtwyz7F.pdf~Harouni-Container-Security-and-Runtime-Enforcement-with-Tetragon.pdf',
  },
  {
    speaker: `Li Qiang, Xufeng Zhang`,
    topic: 'Using eBPF in system security',
    youtubeLink: 'https://youtu.be/TXlxgDvxcoY',
    pdfLink:
      'https://sessionize.com/download/iwpaplep~NjmZ2kbAzUy76YtchSrnVe.pdf~Li%20Qiang%20&%20Xufeng%20Zhang-using%20eBPF%20in%20system%20security.pdf',
  },
  {
    speaker: 'Dinesh Venkatesan',
    topic: 'Applied eBPF for cross platform security research',
    youtubeLink: 'https://youtu.be/FCuqMg3_4aY',
  },
  {
    speaker: 'Marcos Bajo, Juan Tapiador',
    topic: 'Analysis of offensive capabilities of eBPF and implementation of a rootkit',
    youtubeLink: 'https://youtu.be/TAruRXEwNj8',
    pdfLink:
      'https://sessionize.com/download/iyoqzaz~3og9HVouKVec8BCfXyjhzG.pdf~Bajo%20&%20Tapiador%20-%20Analysis%20of%20offensive%20eBPF%20and%20implementation%20of%20a%20rootkit.pdf',
  },
  {
    speaker: 'Andrea Terzolo, Jason Dellaluce',
    topic: `Falco's Discovery of the Modern eBPF World`,
    youtubeLink: 'https://youtu.be/BxoKztfHnYY',
    pdfLink:
      'https://sessionize.com/download/ighaxmef~hvzKR4pwBLbqeoJBqtX9Cw.pdf~Terzolo_Dellaluce_-_Falcos_Discovery_of_the_Modern_eBPF_World.pdf',
  },
  {
    speaker: 'Nikita Baksalyar',
    topic: 'Metalens: Live Programming and Visualizing eBPF',
    youtubeLink: 'https://youtu.be/YJa5c5IlBpo',
    pdfLink:
      'https://sessionize.com/download/cbacgehha~9ranNN3CWxrHyqqWRSH3WE.pdf~baksalyzr-metalens.pdf',
  },
  {
    speaker: 'Shung-Hsi Yu',
    topic: 'Peeking into the eBPF verifierv',
    youtubeLink: 'https://youtu.be/axzmURikZjY',
    pdfLink:
      'https://sessionize.com/download/zlapyen~VAFQCWBowbZNG66EAS71qo.pdf~Yu-Peeking%20into%20the%20eBPF%20verifier.pdf',
  },
  {
    speaker: 'Daniel Xu',
    topic: 'Fighting and overcoming the complexity limit',
    youtubeLink: 'https://youtu.be/JgYJ98f1z3Y',
    pdfLink:
      'https://sessionize.com/download/ptagqez~K4cVirWokyzbvzcjCXVpd.pdf~Daniel%20Xu-Fighting%20and%20overcoming%20the%20complexity%20limit.pdf',
  },
  {
    speaker: 'Krisztian Fekete',
    topic: 'Building an oomkill-exporter powered by eBPF',
    youtubeLink: 'https://youtu.be/9vLi3bBYD_Q',
  },
  {
    speaker: 'Francis Laniel',
    topic: 'Porting eBPF CO-RE to arm64 Leads to Fix the Kernel',
    youtubeLink: 'https://youtu.be/7jCSygXhHws',
    pdfLink:
      'https://sessionize.com/download/iwisdaw~9ysA1vyfNAkwY19avUaPY1.pdf~francis-laniel.pdf',
  },
  {
    speaker: 'Alan Maguire, Stephen Brennan',
    topic: 'The power of a self-describing kernel - How BTF can benefit applications',
    youtubeLink: 'https://youtu.be/yOQ6mose7u4',
    pdfLink:
      'https://sessionize.com/download/lcawteu~nSyD3ghKVQcJTkkTLTzmrS.pdf~BrennanMaguire-Session.pdf',
  },
  {
    speaker: 'Mauricio Vásquez Bernal, Rafael David Tinoco',
    topic: 'BTFGen: one Step Closer to Truly Portable eBPF Programs',
    youtubeLink: 'https://youtu.be/ugzZpP4y25o',
  },
  {
    speaker: 'Hao Luo',
    topic: 'Cgroup Iter: A step toward container-oriented observability',
    youtubeLink: 'https://youtu.be/i-a9a6cZm20',
  },
  {
    speaker: 'Yuhong Zhong',
    topic: 'XRP: In-Kernel Storage Functions with eBPF',
    youtubeLink: 'https://youtu.be/LN4jTI1Bbas',
    pdfLink:
      'https://sessionize.com/download/ibsanvez~EjR9wRNvZ1z9SSmhpXMpBj.pdf~Zhong-XRP%20In-Kernel%20Storage%20Functions%20with%20eBPF.pdf',
  },
];

export default talksData;
