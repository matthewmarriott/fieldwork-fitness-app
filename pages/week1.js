import Layout from '../components/Layout';

export default function Week1() {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem', lineHeight: '1.6' }}>
        <h1 style={{ textAlign: 'center' }}>Week 1: General Conditioning</h1>
        <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
          One set to exhaustion. Focus on form, breath, and endurance.
        </p>

        <section>
          <h2>💪 Strength & Resistance</h2>
          <ul>
            <li>
              <strong>Bicep Curls</strong> – Stand tall and curl dumbbells or resistance bands to your shoulders, elbows fixed. Stop when form breaks.
            </li>
            <li>
              <strong>Lateral Shoulder Raises</strong> – Raise arms to shoulder level and lower slowly. Avoid shrugging.
            </li>
            <li>
              <strong>Bulgarian Split Squats</strong> – Rear foot on chair, lower into lunge. Repeat to failure on both legs.
            </li>
            <li>
              <strong>TRX or Bodyweight Rows</strong> – Pull body toward anchor point, keeping core tight and chest up.
            </li>
          </ul>
        </section>

        <section>
          <h2>🌀 Core & Stability</h2>
          <ul>
            <li>
              <strong>Russian Twists</strong> – Sit with heels raised, rotate torso side to side. Use weight for added challenge.
            </li>
          </ul>
        </section>

        <section>
          <h2>🥋 Martial Arts & Shadow Boxing</h2>
          <ul>
            <li>
              <strong>Shadow Boxing</strong> – 2–3 min rounds of combos, footwork, and head movement. Stay light, hands up.
            </li>
            <li>
              <strong>Kata / Flow</strong> – Perform a Wado Kai kata or Tai Chi form slowly with intent and control.
            </li>
          </ul>
        </section>

        <section>
          <h2>🧘 Yoga & Recovery</h2>
          <ul>
            <li>
              <strong>Downward Dog to Cobra Flow</strong> – 10 slow reps moving fluidly with your breath.
            </li>
            <li>
              <strong>Pigeon Pose</strong> – Hold 1–2 min per side for deep hip release.
            </li>
            <li>
              <strong>Child’s Pose with Shoulder Reaches</strong> – Gently stretch and breathe into your upper back.
            </li>
          </ul>
        </section>

        <section>
          <h2>🗓️ Weekly Schedule</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr>
                <th style={{ borderBottom: '1px solid #ccc' }}>Day</th>
                <th style={{ borderBottom: '1px solid #ccc' }}>Focus</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Day 1</td><td>Full Routine (All Exercises)</td></tr>
              <tr><td>Day 2</td><td>Light Yoga + Shadow Boxing</td></tr>
              <tr><td>Day 3</td><td>Repeat Full Routine</td></tr>
              <tr><td>Day 4</td><td>Active Recovery (Walk, Stretch)</td></tr>
              <tr><td>Day 5</td><td>Martial Flow + Strength Focus</td></tr>
              <tr><td>Day 6</td><td>Repeat Full Routine</td></tr>
              <tr><td>Day 7</td><td>Rest or Tai Chi / Kata Practice</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </Layout>
  );
}
