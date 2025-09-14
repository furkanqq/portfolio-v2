export interface IEducationType {
  title: string | "";
  date: string | "";
  name: string | "";
}

const education: IEducationType[] = [
  {
    title: "Bachelor's degree, Atatürk University",
    name: "Management Information Systems",
    date: "2018/10 – 2022/06",
  },
  {
    title: "Associate degree, Atatürk Universıty",
    name: "Computer Programming",
    date: "2022/10 – 2025/06",
  },
  {
    title: "Smartpro Academy",
    name: "Web Programming",
    date: "2022/09 – 2023/02",
  },
];

export default education;
