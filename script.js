
    const alltasks = ['Read book', 'Play A Game', 'Write Notes'];


    OP();

    function addtask() {
      const textbox = document.getElementById('task-t');
      const title = textbox.value;
      alltasks.push(title);

      OP();
    }




    //Output On Screen    
    function OP() {

      document.getElementById('task-list').innerHTML = '';

      alltasks.forEach(function(tasktitle)
      {
        const element = document.createElement('div');
        element.innerText = tasktitle;
        const tasklist = document.getElementById('task-list')
        tasklist.appendChild(element);

        //to Reset the Text Box        
        document.getElementById('task-t').value = '';

      });
    }
