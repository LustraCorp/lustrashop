import { exec } from 'child_process';

exec('pg_isready', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error checking database status: ${stderr}`);
    startDatabase();
  } else if (stdout.includes('accepting connections')) {
    console.log('Database is already running.');
  } else {
    startDatabase();
  }
});

function startDatabase() {
  exec('pg_ctl start -D /path/to/your/database', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting database: ${stderr}`);
    } else {
      console.log('Database started successfully.');
    }
  });
}
