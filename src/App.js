import './App.css'

function App() {
  return (
    <div className="App">
      <div
        className="rpgui-content rpgui-cursor-default"
        style={{ overflowY: 'scroll' }}
      >
        <div id="container">
          <div id="main"></div>
          <div
            className="inner rpgui-container framed-grey"
            style={{ position: 'relative' }}
          >
            <header>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + '/android-chrome-192x192.png'}
                  width="120"
                  height="120"
                  className="App-logo"
                  alt="logo"
                />
                <h1 style={{ fontSize: '2.5em' }}>lokian.monster</h1>
              </div>

              <hr style={{ clear: 'both' }} />
              <h2 style={{ fontSize: '1.25em', lineHeight: '1.75em' }}>
                Welcome to the landing page for Lokian trading card game with
                NFTs, share, fight and breed monsters in solidity blockchains.
              </h2>
            </header>

            <div className="rpgui-center" style={{ marginBottom: '60px' }}>
              <a href="https://app.lokian.monster" target="_blank">
                <button
                  type="button"
                  className="rpgui-button"
                  style={{ width: '32%' }}
                >
                  <p>Launch App</p>
                </button>
              </a>
              <a href="#tokenomix">
                <button
                  type="button"
                  className="rpgui-button"
                  style={{ width: '32%' }}
                >
                  <p>Tokenomix</p>
                </button>
              </a>
              <a href="#socials">
                <button
                  type="button"
                  className="rpgui-button"
                  style={{ width: '32%' }}
                >
                  <p>Socials</p>
                </button>
              </a>
            </div>

            <br />
            <br />
            <br />
            <br />
            <img
              src={process.env.PUBLIC_URL + '/dryad.png'}
              style={{
                display: 'inline-block',
                marginTop: '-80px',
                width: '100px',
                float: 'right',
                right: '0px',
              }}
            />
            <h4 style={{ float: 'right', textDecoration: 'none' }}>
              more info :)
            </h4>
            <hr style={{ clear: 'both' }} />
            <br />
            <br />

            <h2 style={{ fontSize: '1.25em', lineHeight: '1.75em' }}>
              See your monsters
            </h2>

            <img
              src={process.env.PUBLIC_URL + '/myCreatures.png'}
              width="100%"
            />

            <br />
            <br />
            <h2 style={{ fontSize: '1.25em', lineHeight: '1.75em' }}>
              Sell monsters at the Shop
            </h2>

            <img
              src={process.env.PUBLIC_URL + '/myShop-Capture.png'}
              width="100%"
            />

            <br />
            <br />
            <h2 style={{ fontSize: '1.25em', lineHeight: '1.75em' }}>
              Buy monsters at the Marketplace
            </h2>

            <img
              src={process.env.PUBLIC_URL + '/marketplace.png'}
              width="100%"
            />

            <br />
            <br />
            <h2 style={{ fontSize: '1.25em', lineHeight: '1.75em' }}>
              Breed monsters at the breeding grounds
            </h2>

            <img src={process.env.PUBLIC_URL + '/breed.png'} width="100%" />

            <br />
            <br />
            <h2 style={{ fontSize: '1.25em', lineHeight: '1.75em' }}>
              Fight with other monsters at the Arena
            </h2>

            <img src={process.env.PUBLIC_URL + '/Arena.png'} width="100%" />

            <br />
            <br />
            <h2 style={{ fontSize: '1.25em', lineHeight: '1.75em' }}>
              Share with other users at the Sharing Area
            </h2>

            <img src={process.env.PUBLIC_URL + '/share.png'} width="100%" />

            <br />
            <br />
            <h2 style={{ fontSize: '1.25em', lineHeight: '1.75em' }}>
              And see what others shared to u
            </h2>

            <img
              src={process.env.PUBLIC_URL + '/sharedToMe.png'}
              width="100%"
            />

            <br />
            <br />
            <h2 style={{ fontSize: '1.25em', lineHeight: '1.75em' }}>
              bonus! Buy NFTs and Give (burn tokens) to the Skeleton people at
              the Token Area
            </h2>

            <img src={process.env.PUBLIC_URL + '/skelly.png'} width="50%" />
            <img src={process.env.PUBLIC_URL + '/skelly2.png'} width="50%" />

            <div id="tokenomix" style={{ marginBottom: '80px' }}>
              <h4
                style={{
                  float: 'right',
                  textDecoration: 'none',
                  marginTop: '80px',
                }}
              >
                tokenomix :)
              </h4>
              <hr style={{ clear: 'both' }} />
              <br />
              <br />

              <a href="#main">
                {' '}
                <button
                  class="rpgui-button golden"
                  type="button"
                  style={{
                    position: 'fixed',
                    left: '13%',
                    top: '50%',
                    bottom: 'auto',
                  }}
                >
                  <p>go up</p>
                </button>
              </a>

              <br />
              <br />
              <h2 style={{ fontSize: '1.25em', lineHeight: '1.75em' }}>
                The token name is Lokians, an ERC20 token
              </h2>
              <h2>
                <input
                  class="rpgui-radio golden"
                  type="radio"
                  value="some val"
                />
                <label style={{ height: '50px', width: '50px' }}></label>
              </h2>
              <div>
                <ul>
                  <li>Supply: Infinite, </li>
                  <li>
                    Circulation: <i>soon</i>
                  </li>
                  <li>Arena Rewards: Infinite</li>
                  <li>
                    Donation to Skeleton people: Infinite{' '}
                    <i> (will decrease the circulation) </i>{' '}
                  </li>
                  <li>
                    Exchanges: <i>soon</i>{' '}
                  </li>
                  <li>
                    Token Address: 0x2683EbB22FE772dB15C09b99897bD38B2Bf2487E{' '}
                    <i>(mumbai)</i>{' '}
                  </li>
                  <li>
                    {' '}
                    Staking Rewards: <i>soon</i>{' '}
                  </li>
                  <li>
                    {' '}
                    Governance: <i>soon</i>{' '}
                  </li>
                </ul>
              </div>

              <br />
              <br />
              <h2 style={{ fontSize: '1.25em', lineHeight: '1.75em' }}>
                The NFT name is LokianItems, an ERC1155 token
              </h2>
              <h2>
                <div className="rpgui-icon potion-red"></div>
                <div className="rpgui-icon potion-green"></div>
                <div className="rpgui-icon potion-blue"></div>
              </h2>

              <ul>
                <li>
                  All Item Supply (except with the one secret item): 10^27{' '}
                  <i>(not infinite)</i>{' '}
                </li>
                <li>
                  Circulation: <i>soon</i>
                </li>
                <li>
                  NFT Marketplace:{' '}
                  <a
                    href="https://opensea.io/collection/lokian-eth"
                    target="_blank"
                  >
                    OpenSea <i>(polygon)</i>
                  </a>{' '}
                </li>
                <li>
                  NFT Address: 0xC924448D65D0b20629eaAD25eE79bC2911E8690a{' '}
                  <i>(mumbai)</i>{' '}
                </li>
                <li>
                  NFT Staking Rewards: <i>soon</i>{' '}
                </li>
              </ul>
            </div>

            <br />
            <br />
            <br />
            <br />

            <h4
              style={{
                float: 'right',
                textDecoration: 'none',
              }}
            >
              socials
              <img
                src={process.env.PUBLIC_URL + '/socials-Capture.png'}
                style={{
                  display: 'inline-block',
                  marginLeft: '18px',
                  width: '50px',
                  height: '50px',
                  right: '0px',
                }}
              />
            </h4>
            <hr style={{ clear: 'both' }} />
            <br />
            <br />

            <div id="socials">
              <ul>
                <li>
                  Github:{' '}
                  <a
                    href="https://github.com/tytzM17/Lokian.eth"
                    target="_blank"
                  >
                    Lokian App
                  </a>
                  ,{' '}
                  <a
                    href="https://github.com/tytzM17/Lokian.monster"
                    target="_blank"
                  >
                    Lokian Website
                  </a>
                </li>
                <li>
                  Telegram: <i>soon</i>{' '}
                </li>
                <li>
                  Twitter: <i>soon</i>{' '}
                </li>
              </ul>
            </div>

            <br />
            <br />
            <br />
            <br />
            <hr style={{ clear: 'both' }} />
            <br />
            <br />

            <div class="rpgui-center">
				<h1 style={{ fontSize: '1.25em', lineHeight: '1.75em' }}>That's it, for now!</h1>
				<p>Check out DAO and Staking in the future!</p>
				<br /><br />
				<a href="#main">Back to Top</a>
				<br /><br />
				<img src={process.env.PUBLIC_URL + '/lesh.png'} style={{position:'absolute', display:'inline-block', width:'70px', right:'0px', bottom:"0px"}} />
				<img src={process.env.PUBLIC_URL + '/lesh.png'} style={{position:'absolute', display:'inline-block', width:'70px', left:'0px', bottom:"0px", transform: "scaleX(-1)"}} />
			</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
