import Title from "@/components/Title";
import Reviews from "@/icons/Reviews";

import RecommendationItem from "./components/RecommendationItem";

import { recommendations } from "./data";

export default function Page() {
  return (
    <>
      <Title icon={<Reviews />}>Recommendations</Title>
      {recommendations.map((item, i) => (
        <RecommendationItem key={i} {...item} />
      ))}{" "}
    </>
  );
}
