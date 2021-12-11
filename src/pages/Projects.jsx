import React from "react";
import ProjectContent from "../components/ProjectContent";
import Layouts from "../Layouts";
import menus from "../contents/projectContent";

export default function Projects() {
  return (
    <Layouts>
      <div
        className="overflow text-white scroll"
        style={{ maxHeight: "70vh"}}
      >
        <div className="mb-5">
          <div className="fs-1 fw-bold mb-3">Something i've working with</div>
          <div className="fw-bold" style={{ color: "rgba(255, 255, 255, 0.80)" }}>
            Here plenty of works i contributed on recent years
          </div>
        </div>
        {menus.map((e) => (
          <ProjectContent
            title={e.title}
            content={e.content.toString()}
            tools={e.tools.join(" ")}
            img={e.image}
            key={e.id}
            demo={e.demo}
          />
        ))}
      </div>
    </Layouts>
  );
}
