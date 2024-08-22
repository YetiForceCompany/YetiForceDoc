/**
 * @copyright YetiForce S.A.
 * @license   YetiForce Public License 5.0 (licenses/LicenseEN.txt or yetiforce.com)
 * @author    Mariusz Krzaczkowski <m.krzaczkowski@yetiforce.com>
 */

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const features = [
  {
    message: 'User guides',
    url: 'user-guides',
    imageUrl: 'img/main/user.svg'
  },
  {
    message: 'Administrator guides',
    url: 'administrator-guides',
    imageUrl: 'img/main/administrator.svg'
  },
  {
    message: 'Developer Guides',
    url: 'developer-guides',
    imageUrl: 'img/main/developer.svg'
  }
];

function Feature({ message, url, imageUrl, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={message} />
          <h3>
            <a href={url}>
              {translate({
                message,
                description: 'The homepage icon alt message'
              })}
            </a>
          </h3>
        </div>
      )}
      <p>{description}</p>
    </div>
  );
}

Feature.propTypes = {
  message: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  description: PropTypes.string
};

Feature.defaultProps = {
  imageUrl: '',
  description: ''
};

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={translate({ message: siteConfig.title })}
      description={translate({ message: 'Official documentation/guide of the YetiForce system' })}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{translate({ message: siteConfig.title })}</h1>
          <p className="hero__subtitle">{translate({ message: siteConfig.tagline })}</p>
          <div className={styles.buttons}>
            <Link className={clsx('button button--outline button--secondary button--lg', styles.getStarted)} to={useBaseUrl('introduction/')}>
              {translate({ message: 'Get Started' })}
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
