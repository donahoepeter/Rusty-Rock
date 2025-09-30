import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Rusty Rock',
  description: 'Terms of Service for Rusty Rock web development services.',
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-lg mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="text-sm text-gray-600 mb-8">
            <p>Effective Date: January 1, 2024</p>
            <p>Last Updated: January 1, 2024</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Rusty Rock&apos;s services, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not
                use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Rusty Rock provides web development and digital marketing services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Website design and development</li>
                <li>E-commerce solutions</li>
                <li>Search engine optimization (SEO)</li>
                <li>Website maintenance and support</li>
                <li>Mobile application development</li>
                <li>Digital marketing and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Project Scope and Deliverables</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Project Proposal</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All projects begin with a detailed proposal outlining scope, deliverables, timeline, and pricing.
                Work commences only after client approval and contract execution.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Changes to Scope</h3>
              <p className="text-gray-700 leading-relaxed">
                Any changes to the agreed-upon project scope must be documented in writing and may result in
                additional charges and timeline adjustments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Payment Schedule</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>50% deposit required before project commencement</li>
                <li>Remaining 50% due upon project completion</li>
                <li>Monthly retainer clients billed in advance</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 Late Payments</h3>
              <p className="text-gray-700 leading-relaxed">
                Invoices are due within 30 days. Late payments may incur a 1.5% monthly service charge and
                may result in suspension of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Client Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide necessary content, images, and materials in a timely manner</li>
                <li>Respond to requests for feedback and approval within agreed timeframes</li>
                <li>Ensure all provided materials comply with copyright and trademark laws</li>
                <li>Maintain backups of important data</li>
                <li>Test and approve deliverables before final implementation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property Rights</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 Client Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clients retain all rights to their content, logos, and proprietary materials provided to us.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Developed Work</h3>
              <p className="text-gray-700 leading-relaxed">
                Upon full payment, clients receive full ownership rights to custom-developed websites and
                applications, excluding third-party components and our proprietary development frameworks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Warranties and Disclaimers</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.1 Service Warranty</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We warrant our services will be performed with professional skill and care. We provide a
                30-day bug fix warranty on completed projects.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.2 Disclaimers</h3>
              <p className="text-gray-700 leading-relaxed">
                We do not guarantee specific search engine rankings, traffic volumes, or conversion rates.
                Results may vary based on factors beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Our liability for any claim arising from our services shall not exceed the total amount paid
                by the client for the specific project. We are not liable for indirect, incidental, or
                consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Website Hosting and Maintenance</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.1 Hosting Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If we provide hosting services, we aim for 99.9% uptime but cannot guarantee uninterrupted
                service due to factors beyond our control.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.2 Backups</h3>
              <p className="text-gray-700 leading-relaxed">
                While we perform regular backups, clients are ultimately responsible for maintaining their
                own data backups.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.1 Termination by Client</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clients may terminate projects with 30 days written notice. Payment is due for all work
                completed up to the termination date.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.2 Termination by Rusty Rock</h3>
              <p className="text-gray-700 leading-relaxed">
                We may terminate agreements for non-payment, breach of terms, or if the client relationship
                becomes unreasonably difficult to maintain.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Privacy and Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed">
                We respect client confidentiality and will not disclose proprietary information without
                permission. Please refer to our Privacy Policy for detailed information about data handling.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Force Majeure</h2>
              <p className="text-gray-700 leading-relaxed">
                Neither party shall be liable for delays or failures in performance resulting from acts
                beyond reasonable control, including natural disasters, acts of government, or other
                unforeseeable circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these terms shall be resolved through binding arbitration in
                accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the United
                States and the state where services are performed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Clients will be notified of
                significant changes, and continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions regarding these terms, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Rusty Rock</strong></p>
                <p className="text-gray-700">Email: legal@rustyrock.dev</p>
                <p className="text-gray-700">Phone: (555) 123-4567</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Acknowledgment</h2>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you acknowledge that you have read, understood, and agree to be
                bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}