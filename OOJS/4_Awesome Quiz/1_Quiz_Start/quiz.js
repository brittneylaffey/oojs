function Quiz() {
    this.questions = [];
    this.questionIndex = 0;
  }

  
    Quiz.prototype.next = function() {
   
    this.questionIndex++;
    if(this.questionIndex === this.questions.length) {
      this.questionIndex = 0;
    }
  };
  
    Quiz.prototype.renderInElement = function(list) {
    list.innerHTML = "";
    for(var i = 0; i < this.questions.length; i++) {
      list.innerHTML += this.questions[i].toHTML();
    }
  };
  