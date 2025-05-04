import Layout from '../components/Layout';

export default function Week2() {
  return (
    <Layout>
      <div style={ maxWidth: '800px', margin: '0 auto', padding: '1rem', lineHeight: '1.6' }>
        <h1 style={ textAlign: 'center' }>Week 2: Desert Conditioning</h1>
        <p style={ fontStyle: 'italic', textAlign: 'center' }>
          One set to exhaustion. Increase intensity. Mix in cardio, HIIT, and precision strength.
        </p>

        <section>
          <h2>🏃 Cardio</h2>
          <p>5K run or 30-minute uphill cycling</p>
        </section>

        <section>
          <h2>🔥 HIIT</h2>
          <p>20-min bodyweight HIIT (e.g., pushups, jump squats, mountain climbers, burpees)</p>
        </section>

        <section>
          <h2>💪 Strength (To Failure)</h2>
          <ul>
            <li>Incline Push-Ups</li><li>Front Dumbbell Raises</li><li>Resistance Band Rows</li><li>Weighted Lunges</li><li>Plank Shoulder Taps</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
