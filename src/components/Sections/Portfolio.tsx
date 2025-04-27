import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {Card} from '../Card';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-3xl font-bold text-white">Check out some of my work!</h2>
        <div className="self-center center columns-1 md:columns-1 lg:columns-2">
          {portfolioItems.map(item => {
            return (
              <div className="mb-10" key={item.title}>
                <Card description={item.description} imageUrl={item.imageUrl} title={item.title} url={item.url} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
