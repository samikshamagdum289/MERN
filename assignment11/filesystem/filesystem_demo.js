// filesystem_demo.js

// Step 1: Import the 'fs' module
const fs = require('fs');

// Step 2: Write data to a new file
fs.writeFile('example.txt', 'Hello, this is my first Node.js file!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('✅ File created and data written successfully!');

    // Step 3: Read the file
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('📖 File content:');
        console.log(data);

        // Step 4: Append more data to the file
        fs.appendFile('example.txt', '\nAppended text using fs.appendFile!', (err) => {
          if (err) {
            console.error('Error appending file:', err);
          } else {
            console.log('📝 Data appended successfully!');

            // Step 5: Delete the file
            // fs.unlink('example.txt', (err) => {
            //   if (err) {
            //     console.error('Error deleting file:', err);
            //   } else {
            //     console.log('🗑️ File deleted successfully!');
            //   }
            // });
          }
        });
      }
    });
  }
});
