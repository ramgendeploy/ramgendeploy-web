import * as React from 'react'

const Project = ({ title, description, img_src, link, tags }) => {
  return (
    <div className="project_outer_container">
      <a href={link}>
        <div
          className="project"
          id="prjc"
          style={{ background: `url(${img_src})` }}
        >
          <span className="hidden_text">
            <span className="title">{title}</span>
            <div className="description">{description}</div>
            <div className="tags">
              {tags?.map((tag) => (
                <span className="tag" style={{ backgroundColor: tag[1] }}>
                  {tag[0]}
                </span>
              ))}
            </div>
          </span>
          {/* <i className="fas fa-external-link-alt"></i> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z" /></svg> */}
        </div>
      </a>
    </div>
  )
}
export default Project