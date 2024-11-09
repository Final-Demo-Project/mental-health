import React from 'react'
import { Link } from 'react-router-dom';

const CommunitySupport = () => {
  return (
    <div className="community-support-container px-8 py-12 bg-gray-100">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Community Support</h1>
        <p className="text-gray-700 mt-2">Connect, Share, and Grow Together</p>
      </header>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Discussion Boards */}
        <section className="discussion-board bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Discussion Boards</h2>
          <ul>
            <li><Link to="/community/general-support" className="text-blue-600">General Support</Link></li>
            <li><Link to="/community/anxiety" className="text-blue-600">Anxiety and Stress</Link></li>
            <li><Link to="/community/depression" className="text-blue-600">Depression</Link></li>
            <li><Link to="/community/self-care" className="text-blue-600">Self-Care Tips</Link></li>
            <li><Link to="/community/motivation" className="text-blue-600">Motivational Stories</Link></li>
          </ul>
        </section>

        {/* Resource Library */}
        <section className="resource-library bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Resource Library</h2>
          <ul>
            <li><Link to="/resources/articles" className="text-blue-600">Articles and Guides</Link></li>
            <li><Link to="/resources/helplines" className="text-blue-600">Helplines and Support</Link></li>
            <li><Link to="/resources/online-therapy" className="text-blue-600">Online Therapy Options</Link></li>
          </ul>
        </section>

        {/* Live Support Chats */}
        <section className="live-support bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Live Support Chats</h2>
          <p>Join real-time discussions and group chats.</p>
          <Link to="/livechat" className="text-blue-600">Join a Chat Room</Link>
        </section>
      </div>

      {/* Community Guidelines */}
      <section className="community-guidelines bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Community Guidelines</h2>
        <p>Our community guidelines are designed to keep this a safe, supportive space.</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Be respectful and kind.</li>
          <li>Maintain confidentiality.</li>
          <li>Support others positively.</li>
        </ul>
        <button className="mt-4 text-white bg-red-600 px-4 py-2 rounded">Report a Concern</button>
      </section>

      {/* Motivational and Inspirational Content */}
      <section className="motivation bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Daily Affirmations</h2>
        <p>“You are stronger than you think. Believe in yourself!”</p>
        <p className="text-gray-500 mt-2">- Daily Motivation</p>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-12 text-gray-600">
        <p>Need immediate help? <Link to="/emergency" className="text-blue-600">Crisis Support Contacts</Link></p>
        <p className="mt-2">Feedback? <Link to="/feedback" className="text-blue-600">Send Feedback</Link></p>
        <p className="mt-4">&copy; 2024 Your App Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CommunitySupport