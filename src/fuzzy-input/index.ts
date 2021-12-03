import FuzzyInput from './fuzzy-input.m';

export {
    ID,
    MAXLENGTH,
    THROTTLING,
    MINLENGTH,
    events
} from './fuzzy-input.consts';

export {
    load,
    reset,
    focus,
    search,
    isValid,
    isReady,
    setValue,
    getValue,
    findMatch,
    callQuery,
} from './fuzzy-input.fns';

export {
    FuzzyInput
} from './fuzzy-input.m';

export {
    Attrs,
    State,
    Events
} from './fuzzy-input.types';

export default FuzzyInput;