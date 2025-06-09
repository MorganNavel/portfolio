import "./App.css";
import meImage from "./assets/me.jpg";
import dolovizImage from "./assets/DoloViz.png";
import doloboxImage from "./assets/dolobox.jpg";
import logoDK from "./assets/logo.png";
import dkAppImage from "./assets/dk-app.png";
import { MdEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import {
  FaLinkedin,
  FaFlutter,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa6";
import { IoArrowDownCircle } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Tag } from "./Tag";
import { FaJs } from "react-icons/fa";

import { RiNextjsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiCplusplus,
  SiJetpackcompose,
  SiSymfony,
  SiNeo4J,
  SiDocker,
  SiGit,
  SiUml,
  SiLatex,
} from "react-icons/si";

import { PiFileC } from "react-icons/pi";
import { LanguageSwitcher } from "./LanguageSwitcher";

const SkillCard = ({ title, children }) => (
  <div className='skill-card'>
    <h3>{title}</h3>
    <div className='skill-tags'>{children}</div>
  </div>
);

function App() {
  const { t } = useTranslation();
  const [showScrollIcon, setShowScrollIcon] = useState(true);
  document.title = t("title");

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const bottom = document.body.offsetHeight;
    setShowScrollIcon(scrollPosition < bottom - 10);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='App ' onScroll={handleScroll}>
      <LanguageSwitcher />
      {showScrollIcon && (
        <span
          className={`scroll-down-indicator ${showScrollIcon ? "" : "hide"}`}
        >
          <IoArrowDownCircle size={40} />
        </span>
      )}
      <section className='profile-container '>
        <img src={meImage} alt='Me' className='profile' />
        <div className='profile-text'>
          <h1>{t("profile.headline")}</h1>
          <p>
            <Trans
              i18nKey='profile.intro1'
              components={{ strong: <strong /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey='profile.intro2'
              components={{ strong: <strong /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey='profile.intro3'
              components={{ strong: <strong /> }}
            />
          </p>

          <a href='mailto:navelmorgan34@gmail.com' className='cta-button'>
            <MdEmail />
            {t("profile.contactMe")}
          </a>
        </div>
      </section>
      <section className='skills-section'>
        <h1>{t("skills.title")}</h1>

        <div className='skills-grid'>
          <SkillCard title={t("skills.lng")}>
            <Tag
              text='JavaScript'
              backgroundColor='#F7DF1E'
              textColor='black'
              icon={<FaJs size={20} />}
            />
            <Tag
              text='TypeScript'
              backgroundColor='#007ACC'
              icon={<SiTypescript color='white' size={20} />}
            />
            <Tag
              text='PHP'
              backgroundColor='#777BB4'
              icon={<FaPhp color='white' size={20} />}
            />
            <Tag
              text='C'
              backgroundColor='#00599C'
              textColor='white'
              icon={<PiFileC size={20} />}
            />
            <Tag
              text='C++'
              backgroundColor='#00599C'
              textColor='white'
              icon={<SiCplusplus size={20} />}
            />
            <Tag
              text='Java'
              backgroundColor='#ED8B00'
              icon={<FaJava color='white' size={20} />}
            />
          </SkillCard>

          {/* Bloc Web */}
          <SkillCard title={t("skills.webdev")}>
            <Tag
              text='HTML5'
              backgroundColor='#E34F26'
              icon={<FaHtml5 color='white' size={20} />}
            />
            <Tag
              text='CSS3'
              backgroundColor='#1572B6'
              icon={<FaCss3Alt color='white' size={20} />}
            />
            <Tag
              text='React'
              backgroundColor='#242426'
              icon={<FaReact color='#58C4DC' size={20} />}
            />
            <Tag
              text='Next.js'
              backgroundColor='black'
              icon={<RiNextjsFill color='white' size={20} />}
            />
            <Tag
              text='Tailwind CSS'
              backgroundColor='#38B2AC'
              icon={<SiTailwindcss color='white' size={20} />}
            />
            <Tag
              text='Node.js'
              backgroundColor='#417E38'
              icon={<FaNodeJs color='white' size={20} />}
            />
            <Tag
              text='Express.js'
              backgroundColor='black'
              icon={<SiExpress color='#259DFF' size={20} />}
            />
            <Tag
              text='Symfony'
              backgroundColor='black'
              icon={<SiSymfony color='white' size={20} />}
            />
          </SkillCard>

          {/* Bloc Bases de données */}
          <SkillCard title={t("skills.bdd")}>
            <Tag
              text='Oracle'
              backgroundColor='#F80000'
              icon={<SiOracle color='white' size={20} />}
            />
            <Tag
              text='MySQL'
              backgroundColor='#4479A1'
              icon={<SiMysql color='white' size={20} />}
            />
            <Tag
              text='PostgreSQL'
              backgroundColor='#4169E1'
              icon={<SiPostgresql color='white' size={20} />}
            />
            <Tag
              text='MongoDB'
              backgroundColor='#4EA94B'
              icon={<SiMongodb color='white' size={20} />}
            />
            <Tag
              text='Neo4j'
              backgroundColor='#018BFF'
              icon={<SiNeo4J color='white' size={20} />}
            />
          </SkillCard>

          {/* Bloc Mobile */}
          <SkillCard title={t("skills.mobiledev")}>
            <Tag
              text='Flutter'
              backgroundColor='#0468D7'
              textColor='white'
              icon={<FaFlutter color='white' size={20} />}
            />
            <Tag
              text='Jetpack Compose'
              backgroundColor='#4EA94B'
              textColor='white'
              icon={<SiJetpackcompose color='white' size={20} />}
            />
            <Tag
              text='React Native'
              backgroundColor='#61DAFB'
              textColor='black'
              icon={<FaReact color='black' size={20} />}
            />
          </SkillCard>
          <SkillCard title={t("skills.deploy")}>
            <Tag
              text='Docker'
              backgroundColor='#2496ED'
              textColor='white'
              icon={<SiDocker color='white' size={20} />}
            />
            <Tag
              text='Docker Compose'
              backgroundColor='#2496ED'
              textColor='white'
              icon={<SiDocker color='white' size={20} />}
            />
          </SkillCard>
          <SkillCard title={t("skills.tools")}>
            <Tag
              text='Git'
              backgroundColor='#F05032'
              textColor='white'
              icon={<SiGit color='white' size={20} />}
            />
            <Tag
              text='UML'
              backgroundColor='#000000'
              textColor='white'
              icon={<SiUml color='white' size={20} />}
            />
            <Tag
              text='LaTeX'
              backgroundColor='#008080'
              textColor='white'
              icon={<SiLatex color='white' size={20} />}
            />
          </SkillCard>
        </div>
      </section>

      <section id='projects' className='project-container '>
        <img src={doloboxImage} alt='Project DoloBox' className='dolobox-img' />
        <div>
          <h2>{t("projects.dolobox.title")}</h2>
          <p>{t("projects.dolobox.desc1")}</p>
          <p>
            <Trans
              i18nKey='projects.dolobox.desc2'
              components={{ strong: <strong /> }}
            />
          </p>
          <p>{t("projects.dolobox.desc3")}</p>
          <p>{t("projects.dolobox.desc4")}</p>

          <img
            src={dolovizImage}
            alt='Visualisation DoloViz'
            className='doloviz-img mobile-only'
          />
          <p>{t("projects.dolobox.desc5")}</p>

          <a
            href='https://github.com/MorganNavel/Dolobox.git'
            className='cta-button'
          >
            {t("projects.dolobox.buttonMore")}
          </a>
        </div>
        <img
          src={dolovizImage}
          alt='Visualisation DoloViz'
          className='doloviz-img desktop-only'
        />
      </section>
      <section className='project-container dkapp-container snap-project'>
        <img
          src={dkAppImage}
          alt='application Danbee Korean'
          className='dkapp-img desktop-only'
        />
        <div className='dkapp-text'>
          <h2>
            <span className='dkapp-title'>
              <img
                src={logoDK}
                alt='Danbee Korean Logo'
                className='dkapp-logo'
              />
              {t("projects.dkapp.title")}
            </span>
          </h2>
          <p>
            <Trans
              i18nKey='projects.dkapp.desc1'
              components={{ strong: <strong /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey='projects.dkapp.desc2'
              components={{ strong: <strong /> }}
            />
          </p>
          <p>
            <Trans
              i18nKey='projects.dkapp.desc3'
              components={{ strong: <strong /> }}
            />
          </p>

          <img
            src={dkAppImage}
            alt='application Danbee Korean'
            className='dkapp-img mobile-only'
          />
          <p>
            <Trans
              i18nKey='projects.dkapp.desc4'
              components={{ strong: <strong /> }}
            />
          </p>

          <a
            href='https://github.com/MorganNavel/dk-app.git'
            className='cta-button'
          >
            {t("projects.dkapp.buttonMore")}
          </a>
        </div>
      </section>

      <footer className='footer'>
        <div className='footer-contact'>
          <img src={meImage} alt='Morgan Navel' className='footer-profile' />
          <div>
            <h3>{t("footer.contact.title")}</h3>
            <p>{t("footer.contact.text")}</p>
            <div className='footer-contact-links'>
              <a href='mailto:navelmorgan34@gmail.com'>
                <MdEmail />
                navelmorgan34@gmail.com
              </a>
              <a href='tel:+33663440737'>
                <MdOutlinePhoneAndroid />
                +33 6 63 44 07 37
              </a>
              <a href='https://www.linkedin.com/in/morgan-navel/'>
                <FaLinkedin />
                linkedin.com/in/morgan-navel
              </a>
            </div>
          </div>
        </div>

        <div className='footer-credits'>
          <small>
            <a
              href='https://www.freepik.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              {t("footer.credits")}
            </a>
          </small>
          <p>
            <small>
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
