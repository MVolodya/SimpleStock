import React, { Component } from 'react';
import Header from '../components/Header.jsx';


export default class Collections extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      user: null
    };
  }

  handleSearch(searchText) {
    this.setState({
      searchText
    });
  }

  loginUser(user) {
    this.setState({user});
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          user={this.state.user}
        />
        <div className="text-container">
        “Write to Get Ideas, Not to Express Them”
It’s an interesting perspective. Especially given that most of us don’t write at all, and if we do, we do it to express ourselves or maybe to gain exposure. And usually we only do it in order to do it very well.
Both of these motivations are perfectly reasonable and make perfect sense. Why else would you sit down and write?
But “Write to Get Ideas, Not to Express Them” resonated with me because it’s something I learned myself over the last year writing at one article a week.
Oftentimes I sit down on a Sunday night and have no idea what to write about. To be honest, starting a new article usually sucks the most because I’m a slow starter and procrastinator.
But then once I start writing, it just keeps going. It’s like a constant flow of ideas that just keeps coming. And more often while I’m writing something, I’m getting an idea for something else.
It’s kind of like talking to a friend, bouncing ideas back and forth with each other. Just in this case, I’m talking to myself, or an imaginary friend.
But I remember every time I had a block where I couldn’t write anything for a week, it was also the time I didn’t actually sit down to write.
My point is: I write for many reasons, but one of them is to simply get myself out of whatever shit hole I’m in. I just start writing one word, then the second, the third and boom it’s happening.
And this reminds me of another quote I really like:
“Work will work when nothing else will work.”
It’s the same concept. When I feel down, I just work. When I feel depressed or things aren’t going that well in my life, I just focus on the work and get some shit done.
Work isn’t only a distraction in that case, but it’s also an activity that pushes me forward, at least somewhere in the right direction.
When everything else fails, I just show up to work. I write, I design, I learn something new or whatever it might be.
We’re all miserable at some point in our lives. Especially as a creative, I feel like I’m there at least once a month. Some of us start to complain, and some of us just get to work. I’m certainly guilty of complaining myself, I mean I’m German after all. But I also know that every time I complain, no one wants to help me. I realize the moment you complain, you’ve become a burden not only for yourself, but everyone else around you.
But this is where work comes in. I just show up to work, I start moving, I start doing something and I notice how things get better automatically.
“Action may not always bring happiness, but there is no happiness without action.”
 — Benjamin Disraeli
This really brings it to the point. The result of action might not always get the results I want, but at least it will bring some results while standing still won’t do me any favor.
I try to remind myself of this everyday.
I write to get ideas and to inspire myself. One word after another. Sometimes it just keeps going like this, diary style, kinda like what you are reading right now.
I open Photoshop not to design something specific, but just to start drawing the first line and see what happens next.
PS: On that note, you might enjoy reading this article on 3 reasons why I write.
With that, I wish you a fantastic a productive week.
        </div>
      </div>
    )
  }
}
