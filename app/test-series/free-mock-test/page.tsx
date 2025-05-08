'use client';

import ImageSection from '@/components/testPage/imagesection';
import MockTestPlatform from '@/components/testPage/mock-test-platform';
import TestCardsSection from '@/components/testPage/TestCards';

export default function Page() {
  return (
    <div>
      <ImageSection />
      <MockTestPlatform />
      <TestCardsSection />
    </div>
  );
}
