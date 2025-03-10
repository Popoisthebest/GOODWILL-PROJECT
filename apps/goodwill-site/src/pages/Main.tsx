// src/App.tsx
import React, { useEffect } from 'react';
import DefaultLayout from "../layouts/DefaultLayout";
import HeroSection from '../components/Main/HeroSection';
import AboutSection from '../components/Main/AboutSection';
import HeadText from '../components/Main/HeadText';
// import AboutFooter from '../components/Main/AboutFooter';
// import FeaturedWork from '../components/Main/FeaturedWorkSection';
import InfosSection from '../components/Main/Infos'



// interface Project {
//   id: string;
//   title: string;
//   category: string;
//   imageUrl: string;
//   description?: string;
// }



const App: React.FC = () => {

   // const [projects, setProjects] = useState<Project[]>([]);

  // 예제 데이터 (API 호출이 없을 경우 기본값 설정)
  useEffect(() => {
    // const sampleProjects: Project[] = [
    //   {
    //     id: '1',
    //     title: '프로젝트 A',
    //     category: '웹 개발',
    //     imageUrl: 'assets/img/1.png',
    //     description: 'React 기반 웹 프로젝트',
    //   },
    //   {
    //     id: '2',
    //     title: '프로젝트 B',
    //     category: 'UI/UX 디자인',
    //     imageUrl: '/images/project2.jpg',
    //   },
    //   {
    //     id: '3',
    //     title: '프로젝트 C',
    //     category: '모바일 앱',
    //     imageUrl: '/images/project3.jpg',
    //   },
    //   {
    //     id: '4',
    //     title: '프로젝트 D',
    //     category: '모바일 앱',
    //     imageUrl: '/images/project3.jpg',
    //   },
    //   {
    //     id: '5',
    //     title: '프로젝트 E',
    //     category: '모바일 앱',
    //     imageUrl: '/images/project3.jpg',
    //   },
    //   {
    //     id: '6',
    //     title: '프로젝트 F',
    //     category: '모바일 앱',
    //     imageUrl: '/images/project3.jpg',
    //   },
    // ];

    // 상태 업데이트
    // setProjects(sampleProjects);
  }, []);

  return (
    <>
      <DefaultLayout>
        <HeadText />
        <HeroSection />
        <AboutSection />
        {/*<FeaturedWork projects={projects} />*/}
        <InfosSection />
      </DefaultLayout>
    </>
  );
};

export default App;