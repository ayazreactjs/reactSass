function App() {
  return (
    <div>
      <div className="card1">
        <h1>Sass and React: A Winning Combination for Beautiful UIs</h1>
        <p>
          This is a React application that uses Sass for styling. The colors
          used in the application are defined in a Sass variable file and are
          looped through to create classes with the specified color. The
          application also uses Sass variables for spacing, border thickness,
          border radius, and font size.
        </p>
        <h1>
          Maximizing Code Reusability:Power of Mixins to Achive Dynamic and
          Consistent Styling
        </h1>
        <p>
          React website is more efficient and consistent by using mixins. I
          created a reusable 'card' styling mixin that accepts arguments for
          width and box-shadow to achieve dynamic and cohesive design across my
          website. By using mixins with arguments, you can save time and effort
          in maintaining a consistent visual style throughout your project.
        </p>
        <h2>Stylish React Buttons Made Easy with Sass</h2>
        <p>
          buttons consist different styles, and each button has a unique color
          defined in the Sass variable file. The buttons have hover and active
          states, and they change their appearance when clicked or hovered over.
        </p>
        <h2>
          Streamlining Styling with Sass for Dynamic result with @import
          Rules,Variables and Loops.
        </h2>
        <p>
          The Sass code defines variables for the colors used in the application
          and loops through them to create classes with the specified color. The
          variables are also used for the button styles and spacing. The @import
          rule is used to import the variable file into the Sass code.
        </p>
        <h1>Creating a Responsive Grid Layout with Sass</h1>
        <p>
          Grid mixin to create a 12-column grid and used media queries to adjust
          the layout for different screen sizes. Also applied flexbox properties
          to certain elements using the myflex mixin.
        </p>
        <h6>Unleash the Full Potential of Sass: Explore My Code on GitHub!</h6>
        <h1>https://github.com/ayazreactjs/reactSass</h1>
      </div>
      <div className="mainCard">
        <div className="card">
          <button className="btn">mybutton</button>
          <button className="btn1">
            my button <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
            <span className="span4"></span>
          </button>
          <button className="btn0">mybutton</button>
          <button className="btn2">mybutton</button>
        </div>
        <div className="card">
          <span className="text-primary">Text Color</span>
          <span className="text-secondary">Text Color</span>
          <span className="text-error">Text Color</span>
          <span className="text-info">Text Color</span>
          <span className="text-black">Text Color</span>
          <span className="text-purple">Text Color</span>
        </div>
        <div className="card">
          <span className="bg-primary text-purple">Background Color</span>
          <span className="bg-secondary text-black">Background Color</span>
          <span className="bg-error text-info">Background Color</span>
          <span className="bg-info">Background Color</span>
          <span className="bg-black text-secondary">Background Color</span>
          <span className="bg-purple text-primary">Background Color</span>
        </div>
      </div>
      <div className="myGrid">
        <nav>Sass Custom Grid-skeleton</nav>
        <div className="lsideBar">sideBar</div>
        <div className="content">Content</div>
        <div className="rsideBar">sideBar</div>
        <div className="footer">footer</div>
      </div>
    </div>
  )
}

export default App
