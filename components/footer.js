class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
        .footer_container {
            width: 100%;
            background: black;
            background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
            height: 200px;
        }

        .footer {
            position: relative;
            width: 400px;
            margin: auto;
            text-align: center;
            top: 70px;
        }
    </style>
      <footer>
        <div class="footer_container">
            <div class="footer">
                © 2022-2023 MNSTR Shark<br>
                Last updated March 18th 2023<br><br>
                <p>This website was built by <a href="https://twitter.com/nidoshark">NIDO</a>. If something is broken, please contact me :]</p>
            </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);