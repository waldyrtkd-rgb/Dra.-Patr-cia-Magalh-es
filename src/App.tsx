/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { BeforeAfter } from './components/BeforeAfter';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <div className="font-sans antialiased text-navy-900 bg-surface-50 overflow-x-hidden min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <PainPoints />
          <Solution />
          <Benefits />
          <BeforeAfter />
          <SocialProof />
          <FAQ />
          <Location />
        </main>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </>
  );
}
