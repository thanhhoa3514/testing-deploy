$(document).ready(function() {
    $('#addTodo').on('click', function() {
      var newTodo = $('#newTodo').val();
      if (newTodo !== '') {
        var listItem = '<li>' + newTodo + '</li>';
        $('#todoList').append(listItem);
        $('#newTodo').val(''); 
      }
    });

    $('#todoList').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  