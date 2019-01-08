const adaptProxy = function (proxy) {
    return {
      pageview: proxy.pageview,
      event: proxy.event
    };
};

const defaultMock = {
    pageview: () => {},
    event: () => {},
};

const analyticsProxy = function (proxy) {
    return {
        ['default']: adaptProxy(proxy),
        ...adaptProxy(proxy)
    };
};

export {
    analyticsProxy,
    defaultMock,
};
