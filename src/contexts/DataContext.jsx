/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

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
  projects: [{}, {}, {}],
};

export const DataContext = createContext(data);

export function DataContextProvider({ children }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
