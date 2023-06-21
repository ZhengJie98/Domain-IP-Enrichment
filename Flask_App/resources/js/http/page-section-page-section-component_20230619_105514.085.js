angular.module('pageSection').component('pageSection', {
  templateUrl: 'page-section/page-section.template.html',
  controller: ['$scope','$attrs',function PageSectionController($scope, $attrs) {
    this.name = $attrs.name;
    this.count = $attrs.count;
    if($attrs.count === "1") {
      this.id = "About";
      this.paragraphs = [
        "I am a motivated Software Engineer with experience in technologies all across the Full Stack range. I got my first taste of programming back in college where I got the chance to use CSS, HTML, and C++. After graduation, I began working as a Technical Troubleshooter for a renowned company in EHR Software, Epic Systems. That's where I developed a strong enjoyment for software and its capability to solve real life problems.",
        "Outside of software, I find it very fulfilling to share what I can with others. One of my most valuable moments was when I got the chance to share my life and play with kids in an orphanage in Myanmar. Also, I enjoy spending time with family and friends, playing soccer, and playing the guitar."
      ];
    };
    if($attrs.count === "2") {
      this.id = "Work"
      this.paragraphs = ["My work has a strong focus on user friendly workflows and system efficiency. I have a passion for building applications that help users perform tasks in a faster and more organized manner, while also maintaining a high degree of integrity for the information available to the users. You can see some of my work and projects below."];
    };
    if($attrs.count === "3") {
      this.id = "Technologies";
      this.paragraphs = ["At the moment, I have experience with the following technologies across the Full Stack."];
    };
    if($attrs.count === "4") {
      this.id = "Contact";
      this.paragraphs = ["Thank you for taking the time to check out my website!", "Email: jvc5546@gmail.com"];
    };
  }]
});
