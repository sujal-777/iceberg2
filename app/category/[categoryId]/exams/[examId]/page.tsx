import TestSeries from "@/components/home/TestSeries";
import ImageSection from "@/components/testPage/imagesection";
import MockTestPlatform from "@/components/testPage/mock-test-platform";
// import TestCard from "@/components/testPage/TestComponent/TestCard";
import TestSeriesList from "@/components/testPage/TestComponent/testSeriesList";
// import TestSeriesList from "@/components/testPage/TestComponent/TestCard";

export default function Page() {
  return (
    <div className="overflow-hidden space-y-4">
      <ImageSection />
      <MockTestPlatform />
      <TestSeriesList />
    </div>
  );
}
