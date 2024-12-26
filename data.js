import witflixPic from "./src/media/witflix.png";
import pizzaOrderPic from "./src/media/pizza-order.png";
import portfolioPic from "./src/media/potfolio.png";

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
    // {
    //   id: 4,
    //   title: "MySQL",
    //   description: {
    //     en: "Java is a popular object-oriented programming language used for developing platform-independent applications.",
    //     tr: "Java, platformdan bağımsız uygulamalar geliştirmek için kullanılan popüler bir nesne yönelimli programlama dilidir.",
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
      techs: ["react", "tailwindcss", "vite"],
      github: "",
    },
  ],
  profile: {
    dateOfBirth: "25.05.2001",
    location: "Ankara",
    education: {
      tr: "Kocaeli Üniversitesi, MMM.",
      en: "Kocaeli University, MME.",
    },
    preferredRole: "Frontend, UI",
    about: {
      tr: "Yeni insanlarla tanışmayı, sorumluluklar üstlenmeyi, zorluklarla yüzleşip çözümsüz bırakmayan, yeni deneyimler kazanmayı ve bilhassa öğrenmeyi seven yazılım geliştiricisiyim.",
      en: "Software developer who loves to meet new people, can take responsibility, open to new experiences and challenges.",
    },
  },
};

export { data };
