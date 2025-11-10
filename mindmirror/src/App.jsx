import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// --- Data ---
const strengths = [
  { icon: '🧠', label: 'Good Conceptual Understanding' },
  { icon: '📊', label: 'Analytical Thinking' },
  { icon: '🔢', label: 'Strong in Math' }
];
const weaknesses = [
  { icon: '⏰', label: 'Needs Improvement in Time Management' },
  { icon: '🔢', label: 'Needs logical maths improvements' }
];
const improvements = [
  {
    category: 'Logical Math',
    icon: '●',
    color: '#4ade80',
    suggestion: 'Break problems into smaller steps and practice daily with logic puzzles to strengthen reasoning.'
  },
  {
    category: 'Time Management',
    icon: '⏰',
    color: '#f87171',
    suggestion: 'Use short timed study sessions and set clear daily goals to stay focused and consistent.'
  }
];

// --- Analytics Graph Component ---
function AnalyticsGraph() {
  const data = [
    { label: 'Week 1', value: 65 },
    { label: 'Week 2', value: 72 },
    { label: 'Week 3', value: 68 },
    { label: 'Week 4', value: 80 },
    { label: 'Week 5', value: 75 },
    { label: 'Week 6', value: 85 }
  ];
  
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <motion.div
      className="analytics-graph-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <h2 className="graph-title">Progress Analytics</h2>
      <div className="graph-wrapper">
        <div className="graph-bars">
          {data.map((item, i) => (
            <motion.div
              key={i}
              className="graph-bar-item"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="graph-bar"
                style={{ height: `${(item.value / maxValue) * 100}%` }}
                initial={{ height: 0 }}
                animate={{ height: `${(item.value / maxValue) * 100}%` }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
              />
              <span className="graph-value">{item.value}%</span>
              <span className="graph-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// --- Landing Page ---
function LandingPage({ onStart, onHome }) {
  return (
    <motion.div 
      className="landing-page futuristic-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="landing-content-wrapper">
        <motion.div
          className="landing-text"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="brand-logo">MindMirror</h1>
          <motion.h2
            className="main-headline"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Prep Your Future.
          </motion.h2>
          <motion.p
            className="subheading"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Educational Platform to help<br />
            with your studies.<br />
            -by Mockello
          </motion.p>
        </motion.div>
        
        <motion.button
          className="login-now-btn"
          onClick={onStart}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LOGIN NOW
        </motion.button>
      </div>
      
      {onHome && (
        <motion.button
          className="home-btn"
          onClick={onHome}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          🏠 Home
        </motion.button>
      )}
    </motion.div>
  );
}

// --- Login Page ---
function LoginPage({ onLogin, onBack, onHome }) {
  const [userName, setUserName] = useState('Ishita');
  const [email, setEmail] = useState('ishitagupta1119@gmail.com');
  const [password, setPassword] = useState('ishita_cats');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onLogin();
    }, 1000);
  };

  return (
    <motion.div 
      className="login-page glassmorphism-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="login-card-glass"
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2
          className="login-title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Login Details
        </motion.h2>
        
        <form onSubmit={handleSubmit}>
          <motion.div
            className="form-field"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label>User Name</label>
            <input
              type="text"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            className="form-field"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.div
            className="form-field"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="submit-btn"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit
          </motion.button>
        </form>

        {submitted && (
          <motion.p
            className="response-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Response saved
          </motion.p>
        )}

        <motion.a
          href="#"
          className="privacy-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Learn how we handle your data
        </motion.a>

        <div className="login-action-buttons">
          <motion.button
            className="back-btn"
            onClick={onBack}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            ← Back
          </motion.button>
          
          <motion.button
            className="guest-btn"
            onClick={onLogin}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
          Continue as Guest →
        </motion.button>
        </div>
      </motion.div>
      
      {onHome && (
        <motion.button
          className="home-btn"
          onClick={onHome}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          🏠 Home
        </motion.button>
      )}
    </motion.div>
  );
}

// --- Strengths Page ---
function StrengthsPage({ onNext, onHome }) {
  return (
    <motion.div
      className="strengths-page futuristic-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="two-column-layout">
        <motion.div
          className="left-column"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="page-title">YOUR STRENGTHS</h1>
          <div className="strengths-list">
            <h3>Strengths:</h3>
            <ul>
              {strengths.map((strength, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  {strength.icon} {strength.label}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="right-column"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="chart-placeholder">
            <div className="chart-legend">
              <span>Series 1</span>
              <span>Series 2</span>
              <span>Series 3</span>
            </div>
            <div className="chart-bars">
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
              <div className="bar bar-4"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="next-btn"
        onClick={onNext}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        Learn about your weakness →
      </motion.button>
      
      {onHome && (
        <motion.button
          className="home-btn"
          onClick={onHome}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          🏠 Home
        </motion.button>
      )}
    </motion.div>
  );
}

// --- Weaknesses Page ---
function WeaknessesPage({ onBack, onHome }) {
  return (
    <motion.div
      className="weaknesses-page futuristic-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="two-column-layout">
        <motion.div
          className="left-column"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="page-title">Your Weakness</h1>
          <ul className="weaknesses-list">
            {weaknesses.map((weakness, i) => (
              <motion.li
                key={i}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                {weakness.icon} {weakness.label}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="right-column"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="page-title">How to improve</h1>
          <div className="improvements-list">
            {improvements.map((improvement, i) => (
              <motion.div
                key={i}
                className="improvement-item"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.2 }}
              >
                <div className="improvement-header">
                  <span className="improvement-icon" style={{ color: improvement.color }}>
                    {improvement.icon}
                  </span>
                  <strong>{improvement.category}:</strong>
                </div>
                <p>{improvement.suggestion}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        className="back-to-strengths-btn"
        onClick={onBack}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Strengths
      </motion.button>
      
      <AnalyticsGraph />
      
      {onHome && (
        <motion.button
          className="home-btn"
          onClick={onHome}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
        >
          🏠 Home
        </motion.button>
      )}
    </motion.div>
  );
}

// --- Main App ---
export default function App() {
  const [page, setPage] = useState('landing');
  const goHome = () => setPage('landing');
  
  return (
    <div className="app-container">
      {page === 'landing' && (
        <LandingPage 
          onStart={() => setPage('login')} 
        />
      )}
      {page === 'login' && (
        <LoginPage 
          onLogin={() => setPage('strengths')} 
          onBack={() => setPage('landing')}
          onHome={goHome}
        />
      )}
      {page === 'strengths' && (
        <StrengthsPage 
          onNext={() => setPage('weaknesses')}
          onHome={goHome}
        />
      )}
      {page === 'weaknesses' && (
        <WeaknessesPage 
          onBack={() => setPage('strengths')}
          onHome={goHome}
        />
      )}
    </div>
  );
}
