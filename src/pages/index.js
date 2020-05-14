import React from 'react';

import Layout from '../components/Layout';
import { CSSTransition } from 'react-transition-group';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import content from '../../content';
import 'animate.css';
const renderStar = rating => {
  let result = [];
  for (let i = 0; i < 5; i++) {
    if (i <= rating - 1) {
      result.push(<i className="fas fa-star"></i>);
    } else {
      result.push(<i className="far fa-star"></i>);
    }
  }
  return result;
};

const IndexPage = () => {
  const [activeTool, setActiveTool] = React.useState({
    index: 0,
    showDetail: false,
  });
  const [activePLang, setActivePLang] = React.useState({
    index: 0,
    showDetail: false,
  });
  return (
    <Layout>
      <Sidebar />
      <div className="container-fluid p-0">
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="about"
        >
          <div className="w-100">
            <h1 className="mb-0 animate__animated animate__fadeIn">
              {config.firstName}
              <span> </span>
              <span className="text-primary">{config.lastName}</span>
            </h1>
            <div className="subheading mb-5">
              {config.address} · {config.phone} ·
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </div>
            <p className="lead mb-5">{content.summary}</p>
            <div className="social-icons">
              {config.socialLinks.map(social => {
                const { icon, url } = social;
                return (
                  <a key={url} href={url}>
                    <i className={`fab ${icon}`}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex justify-content-center"
          id="experience"
        >
          <div className="w-100">
            <h2 className="mb-5">Experience</h2>
            {content.experience.map(exp => {
              return (
                <div
                  id={exp.id}
                  key={`${exp.company}${exp.title}${exp.start}`}
                  className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
                >
                  <div className="resume-content">
                    <h3 className="mb-0">{exp.title}</h3>
                    <div className="subheading mb-3">{exp.company}</div>
                    <p>{exp.desc.sum || ''}</p>
                    {exp.desc.task.map(d => <p>{`- ${d}`}</p> || '')}
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">{`${exp.start} - ${
                      exp.end !== 'now' ? exp.end : 'present'
                    }`}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="m-0" />

        <section className="resume-section p-3 p-lg-5 d-flex" id="education">
          <div className="w-100">
            <h2 className="mb-5">Education</h2>
            {content.education.map(ed => {
              return (
                <div
                  id={ed.id}
                  key={`${ed.institution}${ed.desc.major}${ed.start}`}
                  className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
                >
                  <div className="resume-content">
                    <h3 className="mb-0">{ed.institution}</h3>
                    <div className="subheading mb-3">{ed.title}</div>
                    <div>{`${ed.desc.major}${
                      ed.desc.minor ? `, minor in ${ed.desc.minor}` : ''
                    }`}</div>
                    <p>
                      {ed.desc.additionalComment ? (
                        <span title={ed.desc.additionalComment}>
                          {ed.desc.comment}
                        </span>
                      ) : (
                        ed.desc.comment
                      )}
                    </p>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">{`${ed.start} - ${
                      ed.end !== 'now' ? ed.end : 'present'
                    }`}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="m-0" />

        <section className="resume-section p-3 p-lg-5 d-flex" id="skills">
          <div className="w-100">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Cores</div>
            <table className="table table-borderless">
              <tbody>
                {content.skills.otherSkills.map(skill => {
                  return (
                    <>
                      <tr
                        data-toggle="collapse"
                        data-target={`#detail${skill.id.trim()}`}
                        className="clickable"
                        aria-expanded="false"
                        aria-controls={`detail${skill.id.trim()}`}
                      >
                        <td scope="row" colSpan="2">
                          <strong>{skill.title}</strong>
                        </td>
                        <td colSpan="1">
                          <ul
                            className="list-group list-group-horizontal-sm"
                            style={{ listStyleType: 'none' }}
                          >
                            {renderStar(skill.expertise).map(i => {
                              return <li>{i}</li>;
                            })}
                          </ul>
                        </td>
                      </tr>

                      <tr>
                        <td colSpan="3">
                          <div
                            id={`detail${skill.id.trim()}`}
                            className="collapse"
                          >
                            <div>{skill.desc}</div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            <div className="subheading mb-3">
              Software and Framework
              <div
                className="list-inline dev-icons"
                style={{
                  display: 'flex',
                  flex: 'row',
                  justifyContent: 'space-evenly',
                  marginBottom: '4%',
                  marginTop: '1%',
                }}
              >
                {content.skills.tools.map((tool, index) => {
                  return (
                    <li className="list-inline-item">
                      <a
                        onClick={() =>
                          setActiveTool(prevState => {
                            return {
                              ...prevState,
                              index,
                              showDetail:
                                index !== prevState.index
                                  ? true
                                  : !prevState.showDetail,
                            };
                          })
                        }
                      >
                        <span
                          style={{
                            color:
                              activeTool.showDetail &&
                              index === activeTool.index
                                ? '#37c9fa'
                                : 'gray',
                          }}
                        >
                          <i title={tool.title} className={tool.icon}></i>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </div>
              <CSSTransition
                in={activeTool.showDetail}
                timeout={300}
                classNames="skills"
                unmountOnExit
              >
                <div
                  className="container"
                  style={{
                    marginLeft: 0,
                    marginRight: 0,
                    paddingRight: 0,
                    backgroundColor: '#dedede',
                    maxWidth: 'inherit',
                  }}
                >
                  <a
                    href={content.skills.tools[activeTool.index].link}
                    target="_blank"
                  >
                    <h3 style={{ color: 'gray' }}>
                      {content.skills.tools[activeTool.index].title}
                    </h3>
                  </a>

                  <ul
                    className="list-group list-group-horizontal-sm"
                    style={{ listStyleType: 'none', fontSize: '10pt' }}
                  >
                    {renderStar(
                      content.skills.tools[activeTool.index].expertise
                    ).map(i => {
                      return <li>{i}</li>;
                    })}
                  </ul>
                  <p
                    style={{
                      textTransform: 'initial',
                      fontSize: '14pt',
                      fontFamily:
                        "'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                    }}
                  >
                    {content.skills.tools[activeTool.index].desc}
                  </p>
                </div>
              </CSSTransition>
            </div>

            <div className="subheading mb-3">
              Programming Language
              <div
                className="list-inline dev-icons"
                style={{
                  display: 'flex',
                  flex: 'row',
                  justifyContent: 'space-evenly',
                  marginBottom: '4%',
                  marginTop: '1%',
                }}
              >
                {content.skills.prLanguage.map((lang, index) => {
                  return (
                    <li className="list-inline-item">
                      <a
                        onClick={() =>
                          setActivePLang(prevState => {
                            return {
                              ...prevState,
                              index,
                              showDetail:
                                index !== prevState.index
                                  ? true
                                  : !prevState.showDetail,
                            };
                          })
                        }
                      >
                        <span
                          style={{
                            color:
                              activePLang.showDetail &&
                              index === activePLang.index
                                ? '#37c9fa'
                                : 'gray',
                          }}
                        >
                          <i title={lang.title} className={lang.icon}></i>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </div>
              <CSSTransition
                in={activePLang.showDetail}
                timeout={300}
                classNames="skills"
                unmountOnExit
              >
                <div
                  className="container"
                  style={{
                    marginLeft: 0,
                    marginRight: 0,
                    paddingRight: 0,
                    maxWidth: 'inherit',
                    backgroundColor: '#dedede',
                  }}
                >
                  <a
                    href={content.skills.prLanguage[activePLang.index].link}
                    target="_blank"
                  >
                    <h3 style={{ color: 'gray' }}>
                      {content.skills.prLanguage[activePLang.index].title}
                    </h3>
                  </a>

                  <ul
                    className="list-group list-group-horizontal-sm"
                    style={{ listStyleType: 'none', fontSize: '10pt' }}
                  >
                    {renderStar(
                      content.skills.prLanguage[activePLang.index].expertise
                    ).map(i => {
                      return <li>{i}</li>;
                    })}
                  </ul>
                  <p
                    style={{
                      textTransform: 'initial',
                      fontSize: '14pt',
                      fontFamily:
                        "'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                    }}
                  >
                    {content.skills.prLanguage[activePLang.index].desc}
                  </p>
                </div>
              </CSSTransition>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section className="resume-section p-3 p-lg-5 d-flex" id="volunteer">
          <div className="w-100">
            <h2 className="mb-5">Volunteer Experience</h2>
            {content.vExperience.map(exp => {
              return (
                <div
                  id={exp.id}
                  key={`${exp.company}${exp.title}${exp.start}`}
                  className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
                >
                  <div className="resume-content">
                    <div
                      classNames="clickable"
                      data-toggle="collapse"
                      data-target={`#detail${exp.id.trim()}`}
                      aria-expanded="false"
                      aria-controls={`detail${exp.id.trim()}`}
                    >
                      <h3 className="mb-0">{exp.title}</h3>
                      <div className="subheading mb-3">{exp.company}</div>
                    </div>

                    <div id={`detail${exp.id.trim()}`} className="collapse">
                      <p>{exp.desc.sum || ''}</p>
                      {exp.desc.task.map(d => <p>{`- ${d}`}</p> || '')}
                    </div>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">{`${exp.start} - ${
                      exp.end !== 'now' ? exp.end : 'present'
                    }`}</span>

                    <div
                      classNames="clickable"
                      data-toggle="collapse"
                      data-target={`#detail${exp.id.trim()}`}
                      aria-expanded="false"
                      aria-controls={`detail${exp.id.trim()}`}
                    >
                      Expand
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <hr className="m-0" />

        <section className="resume-section p-3 p-lg-5 d-flex" id="awards">
          <div className="w-100">
            <h2 className="mb-5">Awards &amp; Certifications</h2>
            {content.awards.map(award => {
              return (
                <div
                  id={award.id}
                  key={`${award.company}${award.title}${award.start}`}
                  className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
                >
                  <div className="resume-content">
                    <div
                      classNames="clickable"
                      data-toggle="collapse"
                      data-target={`#detail${award.id.trim()}`}
                      aria-expanded="false"
                      aria-controls={`detail${award.id.trim()}`}
                    >
                      <h3 className="mb-0">{award.title}</h3>
                      <div className="subheading mb-3">{award.company}</div>
                    </div>

                    <div id={`detail${award.id.trim()}`} className="collapse">
                      <p>{award.desc || ''}</p>
                    </div>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">{`${award.time}`}</span>

                    <div
                      classNames="clickable"
                      data-toggle="collapse"
                      data-target={`#detail${award.id.trim()}`}
                      aria-expanded="false"
                      aria-controls={`detail${award.id.trim()}`}
                    >
                      Expand
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="resume-section p-3 p-lg-5 d-flex" id="interests">
          <div className="w-100">
            <h2 className="mb-5">Interests</h2>
            <div className="d-flex flex-xl-row" style={{ height: '100%' }}>
              {content.interest.map((hobby, index) => {
                if (index % 2 === 0) {
                  return (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        maxWidth: '30%',
                        margin: '20px',
                      }}
                    >
                      <img width="100%" src={hobby.src} />
                      <p style={{ fontSize: '6pt' }}>{hobby.imgsrc}</p>
                      <div dangerouslySetInnerHTML={{ __html: hobby.text }} />
                    </div>
                  );
                }
                return (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      maxWidth: '30%',
                      margin: '20px',
                    }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: hobby.text }} />
                    <p style={{ fontSize: '6pt' }}>{hobby.imgsrc}</p>
                    <img width="100%" src={hobby.src} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
