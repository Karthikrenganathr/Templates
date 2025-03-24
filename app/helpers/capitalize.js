import { helper } from '@ember/component/helper';

export function capitalize([text]/*, hash*/) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default helper(capitalize);
