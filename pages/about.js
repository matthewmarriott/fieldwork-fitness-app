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
          Matthew Marriott is a renowned explorer, bestselling author, and Fellow of the Royal Geographical and Royal Asiatic Societies...
        </p>
      </div>
    </Layout>
  );
}
