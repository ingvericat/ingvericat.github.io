import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> January 22, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using our website and services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, you are 
              prohibited from using or accessing this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials on Ingvericat&apos;s website 
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
              transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on Ingvericat&apos;s website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Services Description</h2>
            <p className="text-gray-700 mb-4">
              Ingvericat provides game development services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Game design and development</li>
              <li>3D art and animation</li>
              <li>Unity development</li>
              <li>Technical consulting</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or discontinue any service at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. User Obligations</h2>
            <p className="text-gray-700 mb-4">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use our services in any way that violates any applicable national or international law or regulation</li>
              <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of our services</li>
              <li>Impersonate or attempt to impersonate Ingvericat, an Ingvericat employee, another user, or any other person or entity</li>
              <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The content on our website, including but not limited to text, graphics, logos, images, and software, 
              is the property of Ingvericat and is protected by copyright, trademark, and other intellectual property laws. 
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, 
              republish, download, store, or transmit any of the material on our website without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The materials on Ingvericat&apos;s website are provided on an &apos;as is&apos; basis. Ingvericat makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
              of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Limitations of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Ingvericat or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
              to use the materials on Ingvericat&apos;s website, even if Ingvericat or an authorized representative has been 
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably 
              submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes 
              by posting the new Terms of Service on this page. Your continued use of our services after any such 
              changes constitutes your acceptance of the new Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: <a href="mailto:legal@ingvericat.com" className="text-blue-600 hover:underline">legal@ingvericat.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
