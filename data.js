import witflixPic from "./src/media/witflix.png";
import pizzaOrderPic from "./src/media/pizza-order.png";
import portfolioPic from "./src/media/potfolio.png";
import pixelGamePic from "./src/media/pixelgame.png";

const data = {
  skills: [
    {
      id: 1,
      title: "JavaScript",
      description: {
        en: "JavaScript is a versatile programming language commonly used for web development.",
        tr: "JavaScript, genellikle web geliştirme için kullanılan çok yönlü bir programlama dilidir.",
      },
    },
    {
      id: 2,
      title: "React.JS",
      description: {
        en: "React is a JavaScript library for building user interfaces efficiently.",
        tr: "React, kullanıcı arayüzlerini verimli bir şekilde oluşturmak için kullanılan bir JavaScript kütüphanesidir.",
      },
    },
    {
      id: 3,
      title: "Java",
      description: {
        en: "Java is a popular object-oriented programming language used for developing platform-independent applications.",
        tr: "Java, platformdan bağımsız uygulamalar geliştirmek için kullanılan popüler bir nesne yönelimli programlama dilidir.",
      },
    },
    {
      id: 4,
      title: "Java Spring",
      description: {
        en: "Java Spring is a powerful, flexible, and modular Java framework used for developing modern web and microservice applications.",
        tr: "Java Spring, güçlü, esnek ve modüler yapısıyla modern web ve mikro hizmet uygulamaları geliştirmek için kullanılan bir Java framework'üdür.",
      },
    },
    {
      id: 5,
      title: "PostgreSQL",
      description: {
        en: "PostgreSQL is a powerful, open-source, and extensible relational database management system.",
        tr: "PostgreSQL, güçlü, açık kaynaklı ve genişletilebilir bir ilişkisel veritabanı yönetim sistemidir.",
      },
    },
    {
      id: 6,
      title: "Git",
      description: {
        en: "Git is a popular distributed version control system that simplifies code management.",
        tr: "Git, dağıtık versiyon kontrolü sağlayan ve kod yönetimini kolaylaştıran popüler bir sistemdir.",
      },
    },
    // {
    //   id: 7,
    //   title: "REST API",
    //   description: {
    //     en: "REST API is a web service architecture that standardizes communication between clients and servers using the HTTP protocol.",
    //     tr: "REST API, istemci ve sunucu arasındaki iletişimi HTTP protokolü üzerinden standart hale getiren bir web servis mimarisidir.",
    //   },
    // },
    // {
    //   id: 8,
    //   title: "Microservice",
    //   description: {
    //     en: "Microservice architecture is a software design approach that simplifies the development of large and complex applications by dividing them into independent and scalable small services.",
    //     tr: "Mikro hizmet mimarisi, büyük ve karmaşık uygulamaları bağımsız ve ölçeklenebilir küçük hizmetlere bölerek geliştirmeyi kolaylaştıran bir yazılım mimarisidir.",
    //   },
    // },
  ],
  projects: [
    {
      id: 1,
      cover: pizzaOrderPic,
      title: {
        tr: "Pizza Sipariş Sistemi",
        en: "Pizza Order System",
      },
      description: {
        tr: "Kullanıcıların çevrimiçi olarak kolayca kendi isteklerine göre özelleştirdikleri pizzaları sipariş edebildiği, responsive uygun web uygulaması.",
        en: "A responsive web application where users can easily order pizzas customized to their preferences online.",
      },
      techs: ["react", "redux", "axios"],
      github: "https://github.com/ceusahin/fsweb-s8-challenge-pizza",
      view: "https://fsweb-s8-challenge-pizza-zeta.vercel.app/",
    },
    {
      id: 2,
      cover: witflixPic,
      title: {
        tr: "Witflix",
        en: "Witflix",
      },
      description: {
        tr: "Netflix kopyası bu proje, kullanıcıların kolay bir şekilde girip, istedikleri diziyi filmi seçip izleyebilme olanağı sağlamaktadır.",
        en: "This project is a Netflix clone that allows users to easily browse, select, and watch their favorite movies and shows.",
      },
      techs: ["html", "css", "javascript"],
      github: "https://github.com/ceusahin/wit1024-witflix",
      view: "https://wit1024-witflix.vercel.app/",
    },
    {
      id: 3,
      cover: portfolioPic,
      title: {
        tr: "Kişisel Web Sitem",
        en: "Personal Website",
      },
      description: {
        tr: "Bu proje, benim hakkımda bilgiler içeren kişisel web sitemdir ve aynı zamanda geliştirme becerilerimi sergilemeyi amaçlamaktadır.",
        en: "This project is my personal website that contains information about me and aims to showcase my development skills.",
      },
      techs: ["react", "javascript", "tailwindcss", "vite", "responsive"],
      github: "",
    },
    {
      id: 4,
      cover: pixelGamePic,
      title: {
        tr: "Çok Oyunculu Piksel Oyunu",
        en: "Multiplayer Pixel Game",
      },
      description: {
        tr: "Bu proje, oyuncuların aynı tuval üzerinde gerçek zamanlı olarak pixel art çalışmaları yapabildiği çok oyunculu bir web oyunudur.",
        en: "This project is a multiplayer web game where players can create pixel art together on the same canvas in real-time.",
      },
      techs: ["typescript", "react", "vite", "socket.io", "tailwindcss", "ai"],
      github: "https://github.com/ceusahin/multiplayer-pixel-game",
      view: "https://multiplayer-pixel-game.vercel.app/",
    },
  ],
  profile: {
    dateOfBirth: "25.05.2001",
    location: "Ankara",
    education: {
      tr: "Kocaeli Üniversitesi",
      en: "Kocaeli University",
    },
    preferredRole: "Full-Stack Development",
    about: {
      tr: "Yeni insanlarla tanışmayı, sorumluluklar üstlenmeyi, zorluklarla yüzleşip çözümsüz bırakmayan, yeni deneyimler kazanmayı ve bilhassa öğrenmeyi seven yazılım geliştiricisiyim.",
      en: "Software developer who loves to meet new people, can take responsibility, open to new experiences and challenges.",
    },
  },
};

export { data };
