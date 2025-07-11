import React from 'react';

import { Header } from './Header';
import './page.css';

type User = {
  name: string;
};

export const Page: React.FC = ({ broken = false }: { broken?: boolean }) => {
  const [user, setUser] = React.useState<User>();

  return (
    <article className="storybook-page-wrapper">
      {broken && <div style={{ width: '100px', height: '200px' }} />}
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a{' '}
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </p>
        <ul>
          <li>
            Use component composition to build complex UIs. Storybook allows you to nest component
            stories within each other for hierarchical designs.
          </li>
          <li>
            Implement responsive design patterns with Storybook's viewport addon to test across
            different screen sizes and devices.
          </li>
          <li>
            Create state management examples to showcase different UI states without needing to
            trigger them manually in your app.
          </li>
          <li>
            Document accessibility features directly in your stories to ensure components meet
            WCAG guidelines and best practices.
          </li>
          <li>
            Utilize Storybook's actions addon to verify event handlers are working correctly
            without implementing the full business logic.
          </li>
          <li>
            Showcase loading states and error handling in your components to ensure a robust user
            experience in all scenarios.
          </li>
          <li>
            Implement dark mode and theming variations to demonstrate how your components adapt to
            different visual styles.
          </li>
          <li>
            Create interactive documentation with MDX to combine markdown explanations with live
            component examples.
          </li>
          <li>
            Test edge cases like extremely long text, missing data, or boundary conditions to ensure
            your components are resilient.
          </li>
          <li>
            Develop a consistent design language by showcasing your component library's core elements
            and how they work together.
          </li>
          <li>
            Integrate internationalization examples to demonstrate how your components handle
            different languages and text directions.
          </li>
          <li>
            Use Storybook's knobs addon to create interactive controls that let stakeholders
            experiment with component properties.
          </li>
          <li>
            Document component API with prop tables generated automatically from your TypeScript
            interfaces or PropTypes.
          </li>
          <li>
            Showcase animation and transition states to ensure smooth user experiences during
            interactive moments.
          </li>
          <li>
            Create visual regression tests with Storybook's snapshot capabilities to catch
            unintended UI changes during development.
          </li>
        </ul>
        <p>
          Get a guided tutorial on component-driven development at{' '}
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
            docs
          </a>
          .
        </p>
        <div className="tip-wrapper">
          <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
          <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  );
};
