import "./App.css";
import meImage from "./assets/me.jpg";
import dolovizImage from "./assets/DoloViz.png";
import doloboxImage from "./assets/dolobox.jpg";
import logoDK from "./assets/logo.png";
import dkAppImage from "./assets/dk-app.png";
import { MdEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { IoArrowDownCircle } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";

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
          <a href='#projects' className='cta-button'>
            {t("profile.buttonProjects")}
          </a>
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
