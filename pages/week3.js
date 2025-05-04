import Layout from '../components/Layout';

export default function Week3() {
  return (
    <Layout>
   <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem', lineHeight: '1.6' }}>
        <h1 style={ textAlign: 'center' }>Week 3: Jungle Mobility</h1>
        <p style={ fontStyle: 'italic', textAlign: 'center' }>
          One set to exhaustion. Increase intensity. Mix in cardio, HIIT, and precision strength.
        </p>

        <section>
          <h2>🏃 Cardio</h2>
          <p>Trail running (30–45 minutes)</p>
        </section>

        <section>
          <h2>🔥 HIIT</h2>
          <p>25-min agility HIIT (e.g., skater hops, lateral bounds, frog jumps)</p>
        </section>

        <section>
          <h2>💪 Strength (To Failure)</h2>
          <ul>
            <li>Kettlebell Swings</li><li>Single-Leg Romanian Deadlifts</li><li>Bear Crawls</li><li>Bodyweight Pull-Ups</li><li>Dead Bugs</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
