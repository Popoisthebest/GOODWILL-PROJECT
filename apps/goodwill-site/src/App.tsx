import React from "react";
import FirstTest from "./article_page/first_test";
import EverythingClub from "./article_page/everythig_club";
import Hardware from "./article_page/hardware";
import DeepSeekShock1 from "./article_page/deepseek_shock1";
import DeepSeekShock2 from "./article_page/deepseek_shock2";
import FrontEndGrowth from "./article_page/frontend_growth";
import ProductDesigner from "./article_page/product_designer";
import ProductOwner from "./article_page/product_owner";
import DeveloperAdvice from "./article_page/developer_advice";
import FrequentQuetionFE from "./article_page/frequent_question_fe";
import BlogMainTextSection from "./blog_main/blog_main_page";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import EverythingDaeshin from "./article_page/everythig_daeshin";
import TalkPlanner from "./article_page/talk_plaaner";
import IndoEnterprise from "./article_page/indo_enterprise";
import BlogMainPage from "./blog_main/blog_main_page";
import WhatisWork from "./article_page/what_is_work";
import SeriousNotSerious from "./article_page/serious_not_serious";
import MartialLawEconomy from "./article_page/martial_law_economy";
import Pycoin from "./article_page/pycoin";
import Marketing3 from "./article_page/marketing_3";
import HolidayEconomy from "./article_page/holiday_economy";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogMainPage />} />
        <Route path="/article/1" element={<EverythingClub />} />
        <Route path="/article/2" element={<EverythingDaeshin />} />
        <Route path="/article/3" element={<FirstTest />} />
        <Route path="/article/4" element={<FrontEndGrowth />} />
        <Route path="/article/5" element={<ProductOwner />} />
        <Route path="article/6" element={<ProductDesigner />} />
        <Route path="/article/7" element={<Hardware />} />
        <Route path="/article/8" element={<DeveloperAdvice />} />
        <Route path="/article/9" element={<DeepSeekShock1 />} />
        <Route path="/article/10" element={<DeepSeekShock2 />} />
        <Route path="/article/11" element={<FrequentQuetionFE />} />
        <Route path="/article/12" element={<TalkPlanner/>} />
        <Route path="/article/13" element={<IndoEnterprise/>} />
        <Route path="/article/14" element={<WhatisWork/>} />
        <Route path="/article/15" element={<SeriousNotSerious/>} />
        <Route path="/article/16" element={<MartialLawEconomy/>} />
        <Route path="/article/17" element={<Pycoin/>} />
        <Route path="/article/18" element={<Marketing3/>} />
        <Route path="/article/19" element={<HolidayEconomy/>} />


        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;