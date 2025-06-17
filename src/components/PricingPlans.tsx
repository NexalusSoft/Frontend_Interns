import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/PricingPlans.css';

interface Plan {
  price: string;
  duration: string;
  title: string;
  features: { text: string; included: boolean }[];
}

const plans: Plan[] = [
  {
    price: '$10',
    duration: '/ Month',
    title: 'Basic',
    features: [
      { text: 'Eu augue ut lectus', included: true },
      { text: 'Lectus nulla at volutpat', included: true },
      { text: 'Phasellus egestas tellus', included: true },
      { text: 'Sapien faucibus et', included: false },
      { text: 'Dui id ornare arcu', included: false },
      { text: 'Mattis vulputate enim', included: false },
    ],
  },
  {
    price: '$10',
    duration: '/ Month',
    title: 'Basic',
    features: [
      { text: 'Blandit volutpat maecenas', included: true },
      { text: 'Fringilla ut morbi tincidunt', included: true },
      { text: 'Senectus et netus et', included: true },
      { text: 'Proin gravida hendrerit', included: false },
      { text: 'Risus pretium quam', included: false },
      { text: 'Morbi non arcu risus', included: false },
    ],
  },
  {
    price: '$10',
    duration: '/ Month',
    title: 'Basic',
    features: [
      { text: 'Aliquet lectus proin nibh', included: true },
      { text: 'Tellus orci ac auctor augue', included: true },
      { text: 'Ornare massa eget egestas', included: true },
      { text: 'Gravida arcu ac tortor', included: false },
      { text: 'Pellentesque elit eget', included: false },
      { text: 'Velit ut tortor pretium', included: false },
    ],
  },
  {
    price: '$10',
    duration: '/ Month',
    title: 'Basic',
    features: [
      { text: 'Magna sit amet purus', included: true },
      { text: 'Tincidunt praesent semper', included: true },
      { text: 'Congue eu consequat', included: true },
      { text: 'Vitae suscipit tellus', included: false },
      { text: 'Donec ac odio tempor', included: false },
      { text: 'Lectus arcu bibendum at', included: false },
    ],
  },
];

function PricingPlans() {
  const handleChoosePlan = (title: string, price: string) => {
    alert(`You have selected the ${price} ${title} plan!`);
  };

  return (
    <div className="container-fluid py-5">
      <p
        className="text-center"
        style={{ color: '#ffaa4a', fontSize: '1.5rem', letterSpacing: '4px', fontWeight: 'lighter' }}
      >
        Our Plans
      </p>
      <h2 className="text-center fw-bold mb-5">Budget Friendly Packages</h2>
      <div className="row g-4">
        {plans.map((plan, index) => (
          <div className="col-lg-6" key={index}>
            <div className="pricing-card">
              <div className="pricing-content d-flex flex-column flex-md-row">
                {/* Price Section */}
                <div className="price-section text-white p-4">
                  <h3 className="fs-1">
                    {plan.price} <span className="fs-6">{plan.duration}</span>
                  </h3>
                  <h4 className="fw-light">{plan.title}</h4>
                  <button
                    className="btn mt-3 budget-btn"
                    onClick={() => handleChoosePlan(plan.title, plan.price)}
                  >
                    Choose Plan <span className="arrow-icon"><i className="bi bi-arrow-right"></i></span>
                  </button>
                </div>
                {/* Features Section */}
                <div className="feature-section p-4">
                  <ul className="list-unstyled mb-0">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className={feature.included ? 'text-success' : 'text-danger'}>
                          <i className={`bi ${feature.included ? 'bi-check-circle' : 'bi-x-circle'}`}></i>
                        </span>{' '}
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
