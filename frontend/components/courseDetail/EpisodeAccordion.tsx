import { CourseDetailEpisode } from "../static/interface"
import Accordion, { Color } from "../accordion"

export default function EpisodeAccordion({ totalHours, totalEpisodes, episodes }: CourseDetailEpisode) {
  return (
    <div className="background-dark">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="block-type-text text-left col-10">
            <div className="block box-shadow-none">
              <h1 style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ color: "#fbf5e4" }}>
                    ⌛ {totalHours} ชั่วโมง &nbsp;&nbsp;&nbsp; 📚 {totalEpisodes} บทเรียน
                  </span>
                </strong>
              </h1>
            </div>
          </div>
          {episodes.map((value, index) => {
            return (
              <Accordion key={index} title={value.title} description={value.description} col={4} color={Color.dark} />
            )
          })}
        </div>
      </div>
    </div>
  )
}