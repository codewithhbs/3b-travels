import Sparkles from "./Sparkles";
import QueryForm from "./QueryForm";
import { ChatIllustration } from "./Icons";

const stars = [
  { x: "14.7%", y: "15%", s: 14 }, { x: "7.8%", y: "24.5%", s: 36 }, { x: "2.4%", y: "34%", s: 36 },
  { x: "58.7%", y: "27%", s: 36 }, { x: "95.7%", y: "36%", s: 36 }, { x: "87.6%", y: "44%", s: 18 },
];

export default function QuerySection({ full = false, title = "Have a query?", destination = "" }) {
  return (
    <section className="query grad-bg" id="query">
      <Sparkles items={stars} />
      <div className="container query-inner">
        <div className="query-left">
          <h2>{title}</h2>
          <span className="pill pill-teal">Get in touch with our travel experts</span>
          <QueryForm full={full} destination={destination} />
        </div>
        <ChatIllustration className="query-art" />
      </div>
    </section>
  );
}
