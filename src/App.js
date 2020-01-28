import React from 'react';

import Header from './elements/Header';
import Footer from './elements/Footer';

function App() {
  return (
    <div className='mx-auto max-w-6xl'>
      <Header />
      <div className='flex'>
        <div className='w-3/4 p-10'>
          <p>
            A warm welcome to Stutton Church of England Primary School. We are a small, but growing, school. We pride ourselves on creating a safe, caring environment in which children flourish both academically and socially. We strongly feel that each child is unique and that our role is to enable each child to reach their full potential in all areas.
          </p>

          <p>
            We have a dedicated, experienced staff group, ably supported by a committed Governing Body. The school benefits from being part of the wider ASSET Education Trust; consequently, we can access the expertise of a wider group of specialist teachers and support services.
          </p>

          <p>
            We are keen to maintain our already strong links with both our parents and the wider community and are constantly seeking exciting opportunities to enrich the lives of our pupils by taking learning beyond the perimeter of the school. We have a Forest school trained teacher among our staff group, which means we are able to provide great outdoor learning experiences for our children.
          </p>

          <p>
            Positive relationships between all adults and children underpin our values of high self-esteem and high expectations for all. A recent parent survey was overwhelmingly positive about the experiences and education of the children at the school. The results of the Ofsted parent view can be found here.
          </p>

          <p>
            We are a Christian school and place the ethos and values of the church at the centre of daily life. We celebrate success through praise and encouragement and develop values based on honesty, care and respect for others.
          </p>

          <p>
            At Stutton, we recognise the importance of creating a seamless pathway for children as they progress through the different phases of their education. To help children achieve this, we work closely with Stutton Young Explorers, who are based within our school grounds, in welcoming their ‘rising 5 children into our Early Years’ class for three mornings a week for the year prior to them starting school and have good links with Holbrook Academy and other local high schools.
          </p>

          <p>
            We warmly welcome prospective parents and children to visit us at any time and look forward to meeting you.
          </p>

          <p>
            In Ofsted’s words, Stutton School is ‘an extremely happy place’.
          </p>

          <p>
            Mr Glenn Parfitt
          </p>
          <p>
            Headteacher
          </p>
        </div>
        <div className='w-1/4'>Right</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
