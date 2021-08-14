import { v4 as uuidv4 } from "uuid";
function chillhop() {
  return [
    {
      name: "Lagoons",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/935da7886600df5eeb2d3b13b12cf27ee8c6c700-1024x1024.jpg",
      artist: "Stehlow & Chris M",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8266",
      color: ["#FED796", "#C77765"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Places",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",
      artist: "Ruck P",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20563",
      color: ["#0C000C", "#0B0009"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "What if i Told you",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg",
      artist: "Juan Rios",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21649",
      color: ["#79346C", "#FDAA97"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Safe Haven",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
      artist: "Oatmello, Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20123",
      color: ["#F1EBD2", "#141911"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Dusk",
      cover:
        "https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/60b4b8806262736151296ccc_Chillhop-E2021-02-Summer-Album-Digital-Cover-v01%201-p-800.jpeg",
      artist: "Toonorth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17925",
      color: ["#C2F2E8", "#010101"],
      id: uuidv4(),
      active: false,
    },
    // {
    //   name: "",
    //   cover: "",
    //   artist: "",
    //   audio: "",
    //   color: ["", ""],
    //   id: uuidv4(),
    //   active: false,
    // },
  ];
}

export default chillhop();
