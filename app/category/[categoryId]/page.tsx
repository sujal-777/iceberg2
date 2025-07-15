import ImageSection from "@/components/testPage/imagesection";
import MockTestPlatform from "@/components/testPage/mock-test-platform";
import ExamsByCategoryPage from "@/components/testPage/TestComponent/ExamCard";
// import ExamCard from "@/components/testPage/TestComponent/ExamCard";

export default function PAGE() {
  return (
    <div className="overflow-hidden">
      <ImageSection />
      <MockTestPlatform />
      <ExamsByCategoryPage />
    </div>
  )
}