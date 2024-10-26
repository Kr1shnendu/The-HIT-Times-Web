import EventSection from "@/components/eventSection/eventSection";
import HeroSection from "@/components/heroSection/heroSection";
import WeeklyPortion from "@/components/weekly-portion/WeeklyPortion";

export default function MDXPage() {
  return (
    <div className="my-4">
      <HeroSection notice="Fill Recruitment Form 2K24" noticeLink="/forms/rec-form/common"/>
      <WeeklyPortion />
    </div>
  );
}
