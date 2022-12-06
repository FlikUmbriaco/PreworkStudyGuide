var randomTopic = topics[Math.floor(Math.random() * topics.length)];
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics(){
    for (var x = 0; c <topics.length; x++){
        console.log(topics[x]);
    }
}
function selectTopic() {
  if (randomTopics === 'HTML') {
    console.log("Let's Study HTML");
  } else if (randomTopics === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopics === 'Git') {
    console.log("Let's study Git!");
  } else if (randomTopics === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
}

for (var x = 0; x < topics.length; x++) {
 console.log(topics[x]);
}
console.log('Here are the topics we learned through Prework');
listTopics()
console.log('Which topic should we study first?');
selectTopic()
