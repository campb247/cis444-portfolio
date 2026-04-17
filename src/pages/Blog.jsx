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
      "I wanted to start spring break with something that didn't involve a screen, so I threw a leg over the bike and pointed it toward Mt. Soledad. It's one of those San Diego climbs that looks modest on the map and then slowly convinces you otherwise — a steady grind through quiet La Jolla neighborhoods, each switchback opening up a little more of the coastline behind you.",
      "The last stretch to the summit is where the climb earns its reputation. Your legs are already cooked, the grade kicks up, and the wind coming off the ocean stops feeling refreshing and starts feeling rude. But then you round the final turn, the memorial cross comes into view, and the whole Pacific just unrolls in front of you. On a clear morning like this one you can trace the shoreline from Point Loma all the way up toward Torrey Pines.",
      "I stopped at the top longer than I needed to. Partly to catch my breath, partly because it's genuinely one of my favorite views in San Diego, and partly because the descent afterward is so fun that I wanted to delay it. A good reminder that the best part of break isn't always doing something new — sometimes it's revisiting a ride you've done a dozen times and noticing it feels different when your inbox is finally empty.",
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
      "My birthday happened to land right in the middle of spring break, so instead of going out I decided to turn the kitchen into a project and build a cocktail from scratch. I'd been reading about milk punch for a while — the old technique where you curdle milk with acid, strain it, and end up with something silky, stable, and weirdly clear — and I figured my birthday was as good an excuse as any to finally try it.",
      "The base is a strawberry maceration: fresh berries, sugar, and time. Once they give up their juice I combine them with the spirit mix, citrus, and a little coconut cream for body. Then the fun part — the whole thing goes through the milk clarification step, which always feels like you're ruining the drink right up until you strain it and get this clean, softly pink liquid on the other side. It's probably the closest cooking has ever felt to a magic trick.",
      "We poured it over one big ice cube, toasted, and sat around way too long at the kitchen counter talking about nothing. The drink itself came out better than I expected — strawberry forward but balanced, with just enough bitterness from the red aperitif to keep it from tasting like candy. Ten out of ten birthday. Would absolutely make again once I restock strawberries.",
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
      "One of my small break goals was to stop ordering the same latte on autopilot. So I walked into a local spot I'd been meaning to try and ordered a cortado instead. If you haven't had one — it's basically a short espresso drink, roughly equal parts espresso and steamed milk, served in a small glass. The whole thing is maybe four ounces. No foam mountain, no syrup, no hiding.",
      "What I liked about it was how honest it felt. The milk is just enough to take the edge off the espresso, but there's nowhere for a bad shot to go — if the beans are off or the pull is rushed, you taste it immediately. The barista here clearly cared; the shot was sweet and balanced, and they laid a clean little tulip on top even though the drink is small enough that most shops don't bother.",
      "I sat at the window for maybe fifteen minutes and didn't touch my phone once, which is its own small victory. I think the cortado is going to become a regular order for me. It's the kind of drink that rewards slowing down, and that was pretty much the theme of the whole week.",
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
          A short log of three things from the week — a climb, a cocktail,
          and a coffee. Mostly low-key, all worth remembering.
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
