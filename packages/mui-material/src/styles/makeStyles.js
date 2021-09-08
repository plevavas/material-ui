import MuiError from '@mui/utils/macros/MuiError.macro';

export default function makeStyles() {
  throw new MuiError(
    'Material-UI: makeStyles is not longer exported from @mui/material/styles.\n' +
      'You have to import it from @mui/styles.\n' +
      'See https://material-ui.com/r/migration-v4/#material-ui-core-styles for more details.',
  );
}