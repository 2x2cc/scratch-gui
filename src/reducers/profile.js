const SET_USERNAME = 'scratch-gui/profile/SET_USERNAME';
const SET_PROJECTID = 'scratch-gui/profile/SET_PROJECTID';
const SET_PROGRESS_DESCRIPTION = 'scratch-gui/profile/SET_PROGRESS_DESCRIPTION';
const SET_PROGRESS_ERROR = 'scratch-gui/profile/SET_PROGRESS_ERROR';
const SET_PROJECT_LIST = 'scratch-gui/profile/SET_PROJECT_LIST';
const SET_STANDALONE = 'scratch-gui/profile/SET_STANDALONE';

const initialState = {
    username: '',
    projectId: '',
    projects: [],
    isStandalone: false,
    progressDescription: '',
    progressError: '',
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_USERNAME:
        return Object.assign({}, state, {
            username: action.username
        });
    case SET_STANDALONE:
        return Object.assign({}, state, {
            isStandalone: true
        });
    case SET_PROJECT_LIST:
        return Object.assign({}, state, {
            projects: action.projects
        });
    case SET_PROJECTID:
        return Object.assign({}, state, {
            projectId: action.id,
        });
    case SET_PROGRESS_DESCRIPTION:
        return Object.assign({}, state, {
            progressDescription: action.description,
            progressError: '',
        });
    case SET_PROGRESS_ERROR:
        return Object.assign({}, state, {
            progressDescription: '',
            progressError: action.error
        });
    default:
        return state;
    }
};

const setStandalone = function() {
    return {
        type: SET_STANDALONE
    };
};

const setUsername = function (username) {
    return {
        type: SET_USERNAME,
        username: username
    };
};

const setProgressDescription = function (description) {
    return {
        type: SET_PROGRESS_DESCRIPTION,
        description: description
    };
};

const setProgressError = function (error) {
    return {
        type: SET_PROGRESS_ERROR,
        error: error
    };
};

const setProjectList = function (projects) {
    return {
        type: SET_PROJECT_LIST,
        projects: projects
    };
};

const setProjectId = function (id) {
    return {
        type: SET_PROJECTID,
        id: id
    };
};

export {
    reducer as default,
    initialState as profileInitialState,
    setStandalone,
    setUsername,
    setProjectId,
    setProgressDescription,
    setProgressError,
    setProjectList,
};
