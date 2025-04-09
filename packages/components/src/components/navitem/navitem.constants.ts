import utils from '../../utils/tag-name';
import { BUTTON_SIZES } from '../buttonsimple/buttonsimple.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { TYPE as BADGE_TYPE } from '../badge/badge.constants';

const TAG_NAME = utils.constructTagName('navitem');

const ALLOWED_BADGE_TYPES = {
  DOT: BADGE_TYPE.DOT,
  COUNTER: BADGE_TYPE.COUNTER,
} as const;

const DEFAULTS = {
  ROLE: 'tab',
  MAX_COUNTER: 99,
  TEXT_TYPE: TYPE.BODY_MIDSIZE_REGULAR,
  TAG_NAME: VALID_TEXT_TAGS.SPAN,
  SIZE: BUTTON_SIZES[24],
} as const;

export { DEFAULTS, TAG_NAME, ALLOWED_BADGE_TYPES };
