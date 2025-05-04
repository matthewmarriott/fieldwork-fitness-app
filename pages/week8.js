import Layout from '../components/Layout';

export default function Week8() {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem', lineHeight: '1.6' }}>
        <h1 style={{ textAlign: 'center' }}>Week 8: Expedition Peak Challenge</h1>
        <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
          One set to exhaustion. Increase intensity. Mix in cardio, HIIT, and precision strength.
        </p>

        <section>
          <h2>🏃 Cardio</h2>
          <p>Half-marathon or 50K cycling challenge</p>
        </section>

        <section>
          <h2>🔥 HIIT</h2>
          <p>Full-body HIIT blast (30 mins) with active rest</p>
        </section>

        <section>
          <h2>💪 Strength (To Failure)</h2>
          <ul>
            <li>1RM Deadlift</li><li>Max Rep Pull-Ups</li><li>Dumbbell Snatches</li><li>Bulgarian Split Squats to failure</li><li>Plank Hold Challenge</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
