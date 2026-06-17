import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import Section from './components/ui/Section';

function App() {
  return (
    <div>
      <Navbar />
      
      {/* Add padding to account for fixed navbar */}
      <div style={{ paddingTop: '80px' }}>
        <Section variant="white" id="home">
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              مركز العاليابي
            </h1>
            <p style={{ marginBottom: '2rem' }}>
              Step 2: Navbar Component - Testing Navigation
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
              <Button variant="primary">احجز موعدك</Button>
              <Button variant="secondary">تعرف علينا</Button>
            </div>
            
            <Card hoverable style={{ maxWidth: '400px', margin: '0 auto' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Test Card</h3>
              <p>This card has a hover effect with green accent border.</p>
            </Card>
          </div>
        </Section>
        
        <Section variant="surface" id="services">
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Surface Background Test</h2>
            <p>Alternating section backgrounds for visual breathing room.</p>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default App;
