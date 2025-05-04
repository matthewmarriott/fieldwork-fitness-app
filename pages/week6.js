import Layout from '../components/Layout';

export default function Week6() {
  return (
    <Layout>
     <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem', lineHeight: '1.6' }}>
        <h1 style={{ textAlign: 'center' }}>Week 6: Mixed Terrain</h1>
        <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
          One set to exhaustion. Increase intensity. Mix in cardio, HIIT, and precision strength.
        </p>

        <section>
          <h2>🏃 Cardio</h2>
          <p>60-minute terrain combo: hills, road, trail</p>
        </section>

        <section>
          <h2>🔥 HIIT</h2>
          <p>Trail HIIT: high knees, jump squats, crawl sprints (25 mins)</p>
        </section>

        <section>
          <h2>💪 Strength (To Failure)</h2>
          <ul>
            <li>Clean and Press</li><li>Plyo Push-Ups</li><li>Lunges with Rotation</li><li>Tire Flips or Sandbag Carries</li><li>Chin-Ups</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
