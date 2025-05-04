import Layout from '../components/Layout';

export default function Week7() {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem', lineHeight: '1.6' }}>
        <h1 style={ textAlign: 'center' }>Week 7: Endurance Test</h1>
        <p style={ fontStyle: 'italic', textAlign: 'center' }>
          One set to exhaustion. Increase intensity. Mix in cardio, HIIT, and precision strength.
        </p>

        <section>
          <h2>🏃 Cardio</h2>
          <p>12K run or 35K cycling</p>
        </section>

        <section>
          <h2>🔥 HIIT</h2>
          <p>High-rep HIIT finisher (e.g., 10 rounds of 10 burpees, 10 push-ups, 10 squats)</p>
        </section>

        <section>
          <h2>💪 Strength (To Failure)</h2>
          <ul>
            <li>Barbell Complex (Deadlift → Row → Clean → Press → Squat)</li><li>TGU (Turkish Get-Up)</li><li>Wall Ball Throws</li><li>TRX Pistol Squats</li><li>L-Sits</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
