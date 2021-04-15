
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Quotes').insert([
        { id: 1, quote: "They're the police. Hey, your taxes are paying their salaries. We die, they gotta take a pay cut." },
        { id: 2, quote: "HARRY: Well, I'm gonna go home, have some sex. JACK TRAVEN: Harry, you're gonna go home and puke. HARRY: Well that'll be fun too." },
        { id: 3, quote: "I hate talking to negotiators, Jack. They talk to you like they're your best friend and they don't even know you." },
        { id: 4, quote: "HARRY: All right, pop quiz. Airport, gunman with one hostage. He's using her for cover; he's almost to a plane. You're a hundred feet away... Jack? JACK TRAVEN: Shoot the hostage." },
        { id: 5, quote: "JACK TRAVEN: Tell me again Harry, why did I take this job? Harry: Oh come on, thirty more years of this, you get a tiny pension and a cheap gold watch. JACK TRAVEN: Cool." },
        { id: 6, quote: "Thanks for pushing that, Bob. The light's on but you never know, it really might be broken." },
        { id: 7, quote: "Stephens: Did you have any luck with the bomb? Jack Traven: Yeah, it didn't go off." },
        { id: 8, quote: "Pop quiz, hotshot. There's a bomb on a bus. Once the bus goes 50 miles an hour, the bomb is armed. If it drops below 50, it blows up. What do you do? What do you do?" },
        { id: 9, quote: "A bomb is made to explode. That's its meaning. Its purpose. Your life is empty because you spend it trying to stop the bomb from becoming. And for who? For what? You know what a bomb is, Jack, that doesn't explode?" },
        { id: 10, quote: "ANNIE: You didn't leave me. I can't believe it, you didn't leave me. JACK: Didn't have anywhere to be just then. I have to warn you, I've heard relationships based on intense experiences never work. ANNIE: OK. We'll have to base it on sex then." },
      ]);
    });
};
