import Image from 'next/image';

function index() {
  return (
    <main>
      <header className="header">
        <div className="hero container flex ">
          <div className="hero-text">City repiratory society</div>
          <div className="hero-image">
            <Image src="/lung.png" alt="lung" width="250" height="250" />
          </div>
        </div>
      </header>
      <section className="section">
        <div className="news-section flex">
          <div className="news-item">
            <h2 className="news-item__title">Lorem, ipsum dolor.</h2>
            <p className="news-item__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              vero aliquam exercitationem eius eligendi ratione assumenda
              dolorem omnis, veritatis facere accusantium, nostrum iure sequi
              sapiente!
            </p>
          </div>
          <div className="news-item">
            <h2 className="news-item__title">Exercitationem, atque tenetur.</h2>
            <p className="news-item__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              vero aliquam exercitationem eius eligendi ratione assumenda
              dolorem omnis, veritatis facere accusantium, nostrum iure sequi
              sapiente!
            </p>
          </div>
          <div className="news-item">
            <h2 className="news-item__title">Cum, fugit. Alias!</h2>
            <p className="news-item__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              vero aliquam exercitationem eius eligendi ratione assumenda
              dolorem omnis, veritatis facere accusantium, nostrum iure sequi
              sapiente!
            </p>
          </div>
          <div className="news-item">
            <h2 className="news-item__title">Eos, quisquam praesentium.</h2>
            <p className="news-item__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              vero aliquam exercitationem eius eligendi ratione assumenda
              dolorem omnis, veritatis facere accusantium, nostrum iure sequi
              sapiente!
            </p>
          </div>
        </div>
        <div className="webinar-section flex container">
          <div className="webinar-item">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              error, est laboriosam omnis tenetur doloremque.
            </p>
          </div>
          <div className="webinar-item">
            <p>
              Ad aliquid, repellat hic, quisquam inventore dignissimos libero
              recusandae necessitatibus doloribus nam quam asperiores nulla!
            </p>
          </div>
          <div className="webinar-item">
            <p>
              Dolorum dolores sint aperiam itaque dolorem perferendis earum
              ullam quisquam accusamus. At dolor officiis cum.
            </p>
          </div>
          <div className="webinar-item">
            <p>
              Enim consequatur facere incidunt voluptatem sequi rerum magnam
              odio. Aliquam dolorum unde repellat perspiciatis laudantium.
            </p>
          </div>
          <div className="webinar-item">
            <p>
              Quos earum fugiat aliquid, dolorum architecto minima vel
              consequuntur. Iste, quo saepe! Distinctio, sequi adipisci!
            </p>
          </div>
          <div className="webinar-item">
            <p>
              Aut atque obcaecati quo repellendus facere cupiditate tempore
              laborum fugiat sapiente est. Laborum, optio reiciendis!
            </p>
          </div>
        </div>
        <div className="feedback-section container flex">
          <form>
            <input type="text" name="name" placeholder="имя" />
            <input
              type="text"
              name="email"
              placeholder="адрес электронной почты"
            />
            <input type="text" name="company" placeholder="компания" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      <footer>
        <div className="left-section">
          <ul>
            <li>
              <a href="#">O nas</a>
            </li>
            <li>
              <a href="#">lorem dva</a>
            </li>
            <li>
              <a href="#">fave one two</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}

export default index;
