import React from 'react';
import './App.css';

const plans = [
  {
    title: 'FREE',
    price: '$0/month',
    features: [
      'Single User',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports'
    ]
  },
  {
    title: 'PLUS',
    price: '$9/month',
    features: [
      '5 Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports'
    ]
  },
  {
    title: 'PRO',
    price: '$49/month',
    features: [
      'Unlimited Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports'
    ]
  }
];

const App = () => {
  const getIconClass = (planIndex, featureIndex) => {
    const wrongFeaturesIndex = {
      0: [3, 4, 5, 6, 7],
      1: [7]
    };

    return (wrongFeaturesIndex[planIndex] && wrongFeaturesIndex[planIndex].includes(featureIndex))
      ? 'bi-x text-danger'
      : 'bi-check text-success';
  };

  return (
    <div className="price-card-container">
      {plans.map((plan, planIndex) => (
        <div key={planIndex} className='card'>
          <div className="title-container">
            <p className='title'>{plan.title}</p>
          </div>
          <h1 className='header'>{plan.price}</h1>
          <ul>
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex}><i className={`bi ${getIconClass(planIndex, featureIndex)}`}></i> {feature}</li>
            ))}
          </ul>
          <div className="button-container">
            <button>BUTTON</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
