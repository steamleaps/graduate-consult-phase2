import { BrowserRouter, Routes, Route } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

// Direct imports instead of lazy loading to avoid CDN dynamic import issues
// Force fresh build - updated 2024
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import BlogPostFirstYear from './pages/BlogPostFirstYear';
import BlogPostTalentPipeline from './pages/BlogPostTalentPipeline';
import BlogPostIntentionalCareer from './pages/BlogPostIntentionalCareer';
import BlogPostInterviewSuccess from './pages/BlogPostInterviewSuccess';
import BlogPostCareerNotNeutral from './pages/BlogPostCareerNotNeutral';
import NewsletterPage from './pages/NewsletterPage';
import UnsubscribePage from './pages/UnsubscribePage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import WebinarRegistrationPage from './pages/WebinarRegistrationPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/navigating-first-year-workplace" element={<BlogPostFirstYear />} />
              <Route path="/blog/sustainable-talent-pipeline-africa" element={<BlogPostTalentPipeline />} />
              <Route path="/blog/intentional-career-planning" element={<BlogPostIntentionalCareer />} />
              <Route path="/blog/interview-success-beyond-basics" element={<BlogPostInterviewSuccess />} />
              <Route path="/blog/career-not-neutral" element={<BlogPostCareerNotNeutral />} />
              <Route path="/newsletter" element={<NewsletterPage />} />
              <Route path="/unsubscribe" element={<UnsubscribePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/webinar-registration" element={<WebinarRegistrationPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}