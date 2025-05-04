import Layout from '../components/Layout';

export default function Week4() {
  return (
    <Layout>
      <div style={ maxWidth: '800px', margin: '0 auto', padding: '1rem', lineHeight: '1.6' }>
        <h1 style={ textAlign: 'center' }>Week 4: Polar Strength & Breath</h1>
        <p style={ fontStyle: 'italic', textAlign: 'center' }>
          One set to exhaustion. Increase intensity. Mix in cardio, HIIT, and precision strength.
        </p>

        <section>
          <h2>🏃 Cardio</h2>
          <p>40-min cold-environment cycling (or hill sprints)</p>
        </section>

        <section>
          <h2>🔥 HIIT</h2>
          <p>30-min strength HIIT (weighted squats, push-ups, kettlebell snatches)</p>
        </section>

        <section>
          <h2>💪 Strength (To Failure)</h2>
          <ul>
            <li>Deadlifts</li><li>Overhead Press</li><li>Farmer’s Carries</li><li>Reverse Lunges</li><li>Russian Twists</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
