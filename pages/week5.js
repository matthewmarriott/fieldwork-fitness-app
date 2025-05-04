import Layout from '../components/Layout';

export default function Week5() {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem', lineHeight: '1.6' }}>
        <h1 style={{ textAlign: 'center' }}>Week 5: Urban Agility</h1>
        <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
          One set to exhaustion. Increase intensity. Mix in cardio, HIIT, and precision strength.
        </p>

        <section>
          <h2>🏃 Cardio</h2>
          <p>45-minute stair or hill intervals</p>
        </section>

        <section>
          <h2>🔥 HIIT</h2>
          <p>Urban HIIT: stair hops, wall push-ups, fast feet, jump lunges (20 mins)</p>
        </section>

        <section>
          <h2>💪 Strength (To Failure)</h2>
          <ul>
            <li>Box Jumps</li><li>Pull-Ups</li><li>Wall Sits</li><li>Weighted Step-Ups</li><li>Hollow Holds</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
