import GoogleAnalytics from 'react-ga';
import {defaultMock, analyticsProxy} from './fake-analytics';

let analytics = analyticsProxy(GoogleAnalytics);

GoogleAnalytics.initialize(process.env.GA_ID || window.GA_ID, {
    debug: (process.env.NODE_ENV !== 'production'),
    titleCase: true,
    sampleRate: (process.env.NODE_ENV === 'production') ? 100 : 0,
    forceSSL: true
});

function disableAnalytics() {
    analytics = analyticsProxy(defaultMock);
}

export {
    analytics as default,
    disableAnalytics,
};
