import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <Image
            src="/me.png"
            alt="Matthew Marriott"
            width={200}
            height={200}
            style={{ borderRadius: '8px' }}
          />
        </div>

        <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>
          About Fieldwork Fitness
        </h1>

        <p style={{ textAlign: 'justify', fontSize: '1.1rem' }}>
          Matthew Marriott is a renowned explorer, bestselling author, and Fellow of the Royal Geographical and Royal Asiatic Societies. Ranked among the world’s top 15,000 most well-travelled individuals by Nomad Mania, he has led expeditions across deserts, jungles, polar regions, and the Himalayas.
        </p>
        <p style={{ textAlign: 'justify', fontSize: '1.1rem' }}>
          A scientist and data analyst, he founded World Exploration Data Science to enhance expedition planning. A published photographer, polyglot, cryptographer, and martial artist, Matthew designed Fieldwork Fitness to optimize physical conditioning for fieldwork in extreme environments—bridging endurance, intellect, and discovery in a world still rich with mysteries.
        </p>
      </div>
    </Layout>
  );
}
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <h1>About Fieldwork Fitness</h1>
      <p>Matthew Marriott is a renowned explorer, bestselling author, and Fellow of the Royal Geographical and Royal Asiatic Societies. Ranked among the world’s top 15,000 most well-travelled individuals by Nomad Mania, he has led expeditions across deserts, jungles, polar regions, and the Himalayas. A scientist and data analyst, he founded World Exploration Data Science to enhance expedition planning. A published photographer, polyglot, cryptographer, and martial artist, Matthew designed Fieldwork Fitness to optimize physical conditioning for fieldwork in extreme environments—bridging endurance, intellect, and discovery in a world still rich with mysteries.</p>
    </Layout>
  );
}
