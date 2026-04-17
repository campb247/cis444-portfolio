const BASE = import.meta.env.BASE_URL;

const posts = [
  {
    slug: 'mt-soledad',
    title: 'Climbing Mt. Soledad',
    date: 'Spring Break 2026',
    location: 'La Jolla, San Diego',
    cover: {
      src: `${BASE}images/mt-soledad-bike.jpeg`,
      alt: 'At the top of Mt. Soledad with my Canyon road bike.',
    },
    body: [
      "I wanted to start spring break with something that didn't involve staring at my computer (I do that enough already), and a friend of mine had recommended a fun challenge on a bicycle: Mt. Soledad. It's a climb that looks not too bad on the map, and then you actually attempt it and realize just how steep it is in person. It makes you work hard through some neighborhoods in La Jolla, and with each switchback, you can see a hint of the coastline behind you.",
      "Finally, after a grueling 15 minutes of a 15-20% grade, the memorial cross comes into view, and the whole ocean just appears in front of you. On a clear day (I went the day after the rain), I could see all the way north to San Marcos, all of UCSD, downtown San Diego, Coronado, and Tijuana at the same time.",
      "I stopped at the top longer than I needed to. Partly to catch my breath, and partly because the view really surprised me. I thought Double Peak was the best view in San Diego county, but I think Soledad beats it. Finally, the descent afterward was thrilling, and I hit speeds of nearly 50 MPH on a bicycle.",
    ],
  },
  {
    slug: 'strawberry-milk-punch',
    title: 'A Strawberry Milk Punch for My Birthday',
    date: 'Spring Break 2026',
    location: 'Home kitchen',
    cover: {
      src: `${BASE}images/cocktail-finished.jpeg`,
      alt: 'Three finished strawberry milk punch cocktails poured over ice.',
    },
    gallery: [
      {
        src: `${BASE}images/cocktail-ingredients.jpeg`,
        alt: 'Cocktail ingredients laid out on a cutting board with fresh strawberries.',
      },
      {
        src: `${BASE}images/cocktail-macerating.jpeg`,
        alt: 'Strawberries macerating in sugar.',
      },
      {
        src: `${BASE}images/cocktail-infusion.jpeg`,
        alt: 'Strawberries infusing in a sealed bag.',
      },
    ],
    body: [
      "My birthday happened to land right in the middle of spring break, so instead of going out I decided to put my cocktail mixing skills to good use, and started an ambitious project where I would create a complicated cocktail from scratch. The idea came to me from a Michelin Star restaurant I had been to that served something similar, and I'd been reading about milk punch and how to make it myself. It's a technique where you curdle milk with acid, strain it, and end up with a drink that is silky, stable, and weirdly clear (the fat traps any cloudy contaminants from the drink). I figured my birthday was as good an excuse as any to finally try it.",
      "The base is a strawberry oleo saccharum: fresh sliced strawberries, sugar, and 1 hour of time. I went with coconut cream over regular coconut milk for a richer flavor. Once the strawberries give up their juice, I combine everything with a rum blend, Campari, and citrus — the acid is what curdles the cream and kicks off the clarification. Then, the most complicated and time consuming part: the whole thing goes through the milk clarification step, which always feels like you're ruining the drink right up until you strain it (many, many times) and get this clear, pink liquid. I think it feels like a magic trick.",
      "I poured it over one big ice cube at my birthday party. The drink itself came out better than I expected, strawberry forward but balanced, with just enough bitterness from the red aperitif to keep it from tasting like candy. Ten out of ten recipe. Would absolutely make again once I decide I'm willing to spend 48 hours making a cocktail again.",
    ],
  },
  {
    slug: 'cortado',
    title: 'Trying a Cortado at a Local Spot',
    date: 'Spring Break 2026',
    location: 'Neighborhood coffee shop',
    cover: {
      src: `${BASE}images/cortado.jpeg`,
      alt: 'A cortado with a tulip poured on top, sitting on the espresso bar mat.',
    },
    body: [
      "One of my small break goals was to try some new coffee shops. I decided on a local spot I'd been meaning to try and ordered a cortado. If you haven't had one, it's basically a short espresso drink, but unlike a latte, it has equal parts espresso and steamed milk, served in a small glass, with the whole thing being about four ounces. It's not overly foamy, and there's no sugar or sweetener. Just an espresso forward classic.",
      "What I like about this drink is how honest it is. If the coffee shop isn't serving well roasted espresso, you'll be able to taste it with a cortado, without having to be so hardcore as to order a plain espresso shot. The milk is just enough to take the edge off, but there's nowhere for a bad shot to hide. If the beans are off or the pull is rushed, you taste it immediately. The barista here clearly cared and knew what they were doing. The shot was sweet and balanced, and they laid a clean little tulip on top even though the drink is small enough that most shops don't bother — especially not a Starbucks.",
      "I sat at the window for maybe fifteen minutes and didn't touch my phone once, which is its own small victory. I brought Nietzsche's \"The Gay Science\" to read, and I think the cortado is going to become a regular order for me. It's the kind of drink that rewards slowing down, and that was pretty much what I did for my spring break.",
    ],
  },
];

function BlogPost({ post }) {
  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <p className="blog-meta">
          <span>{post.date}</span>
          <span className="blog-meta-sep">·</span>
          <span>{post.location}</span>
        </p>
        <h3>{post.title}</h3>
      </header>

      <figure className="blog-cover">
        <img src={post.cover.src} alt={post.cover.alt} loading="lazy" />
      </figure>

      {post.body.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      {post.gallery && (
        <div className="blog-gallery">
          {post.gallery.map((img) => (
            <figure key={img.src}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      )}
    </article>
  );
}

function Blog() {
  return (
    <main>
      <section className="section blog-intro">
        <p className="hero-eyebrow">Blog</p>
        <h1>Spring Break 2026</h1>
        <p className="lead">
          A short log of three things from the week: a climb, a cocktail,
          and a coffee.
        </p>
      </section>

      <section className="section blog-posts">
        {posts.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}

export default Blog;
