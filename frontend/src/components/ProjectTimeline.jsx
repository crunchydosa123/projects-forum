import React from 'react';
import { Paper, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const ProjectTimeline = () => {
  return (
    <Paper style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h5" style={{ display: 'flex', alignItems: 'center' }}>
        <CalendarTodayIcon style={{ marginRight: '10px' }} />
        Project Timeline
      </Typography>
      <Typography variant="body1" style={{ marginTop: '10px' }}>
        Sun Mon Tue Wed Thu Fri Sat 1 2 3 4 5...29...30...31...
      </Typography>
    </Paper>
  );
};

export default ProjectTimeline;
