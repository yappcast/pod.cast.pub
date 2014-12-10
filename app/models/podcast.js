import DS from 'ember-data';
import faker from 'faker';

function createFakePodcasts(numberOfPodcasts){
  var podcasts = [];

  for (var i = 0; i < numberOfPodcasts; i++) {
    var podcast = {
      id: i, 
      title: faker.company.companyName(), 
      link: faker.internet.ip(), 
      copyright: "2014", 
      author: faker.name.firstName(),
      block: false,
      imageUrl: faker.image.imageUrl(),
      explicit: true,
      complete: false,
      subtitle: faker.lorem.words(5),
      summary: faker.lorem.sentences(5)
    };

    podcasts.push(podcast);
  }
  return podcasts;
}

export default DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string'),
  copyright: DS.attr('string'),
  author: DS.attr('string'),
  block: DS.attr('boolean'),
  imageUrl: DS.attr('string'),
  explicit: DS.attr('boolean'),
  complete: DS.attr('boolean'),
  subtitle: DS.attr('string'),
  summary: DS.attr('string')
}).reopenClass({
   FIXTURES: createFakePodcasts(10) 
});
