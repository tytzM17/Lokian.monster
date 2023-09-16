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
              <div className="row">
                <div className="column column-50">
                  <div className="logo">
                    <img
                      src={
                        process.env.PUBLIC_URL + '/android-chrome-192x192.png'
                      }
                      className="App-logo"
                      alt="logo"
                      href="#"
                    />
                  </div>
                </div>

                <div className="column column-50">
                  <div className="column column-50">
                    <h1 className="logo-with-name">LOKIAN</h1>
                  </div>
                  <div className="column column-50">
                    <h1 className="logo-with-name">MONSTERS</h1>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="column">
                  <hr style={{ clear: 'both' }} />
                </div>
              </div>

              <div className="row">
                <div className="column column-50">
                  <h2 style={{ fontSize: '1.25em', lineHeight: '1.75em' }}>
                    LokiMons, is a trading card game with NFTs, share, fight and
                    breed monsters in solidity blockchains. Available in
                    Polygon, Moonriver, Astar, Fantom, Avalanche, and BSC
                    networks
                  </h2>
                </div>

                <div className="column column-50">
                  <div className="">
                    <div className="column column-100">
                      <a href="https://app.lokian.monster" target="_blank">
                        <button type="button" className="rpgui-button">
                          <p>Launch App</p>
                        </button>
                      </a>
                    </div>
                    <div className="column column-100">
                      <a href="#tokenomix">
                        <button type="button" className="rpgui-button">
                          <p>Tokenomix</p>
                        </button>
                      </a>
                    </div>
                    <div className="column column-100">
                      <a href="#socials">
                        <button type="button" className="rpgui-button">
                          <p>Socials</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="row">
              <div className="column">
                <hr style={{ clear: 'both' }} />
              </div>
            </div>

             <div className="row">
              <div className="column column-50">
                <h1 className="listings">News and Updates: </h1>
              </div>

              <div className="column column-50">
                <div className="column column-95">
                  <p style={{color:'silver'}}>09/16/2023 - New UI (done) and PvP (work in progress)</p>
                </div>
                <div className="column column-95">
                  <a
                    href="/newUI-1.png"
                    target="_blank"
                  >
                    <img
                      src={process.env.PUBLIC_URL + '/newUI-1.png'}
                    />
                  </a>
                </div>
                <div className="column column-95">
                  <a
                    href="/newUI-2.png"
                    target="_blank"
                  >
                    <img
                      src={process.env.PUBLIC_URL + '/newUI-2.png'}
                    />
                  </a>
                </div>
                <div className="column column-95">
                  <a
                    href="/newUI-3.png"
                    target="_blank"
                  >
                    <img
                      src={process.env.PUBLIC_URL + '/newUI-3.png'}
                    />
                  </a>
                </div>
                <div className="column column-95">
                  <a
                    href="/newUI-4.png"
                    target="_blank"
                  >
                    <img
                      src={process.env.PUBLIC_URL + '/newUI-4.png'}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="column">
                <hr style={{ clear: 'both' }} />
              </div>
            </div>

            <div className="row">
              <div className="column column-50">
                <h1 className="listings">Listings around the web </h1>
              </div>

              <div className="column column-50">
                <div className="column column-50">
                  <a
                    href="https://www.dapp.com/app/lokian-monster"
                    target="_blank"
                  >
                    <img
                      src={process.env.PUBLIC_URL + '/dappComLogo.png'}
                      style={{ maxWidth: '50%', maxHeight: '50%' }}
                    />
                  </a>
                </div>
                <div className="column column-50">
                  <a
                    href="https://dappradar.com/multichain/games/lokian-monsters"
                    target="_blank"
                  >
                    <img
                      src={process.env.PUBLIC_URL + '/dappradar-logo.png'}
                      style={{ maxWidth: '50%', maxHeight: '50%' }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <br />
            <br />
            <div className="row">
              <div className="column column-100">
                <div className="marquee">
                  <p> Plus new monster listings on Polygon, batch 24-34!</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="column">
                <hr style={{ clear: 'both' }} />
              </div>
            </div>

            <div className="row">
              <div className="column column-50">
                <div
                  className="rpgui-container framed-golden-2"
                  style={{ position: 'relative' }}
                >
                  <ul>
                    <li className="overflow-x-auto">
                      {' '}
                      Main Contract on Polygon Mainnet (same addresses with
                      Moonriver, Astar, Avalanche, and Fantom):
                      <a
                        href="https://polygonscan.com/address/0x5148A559cFaaEC1A915ae41e00A8Dd2Fa17ba64f#code"
                        target="_blank"
                      >
                        0x5148A559cFaaEC1A915ae41e00A8Dd2Fa17ba64f
                      </a>{' '}
                    </li>
                    <li className="overflow-x-auto">
                      {' '}
                      ERC20 on Polygon Mainnet:
                      <a
                        href="https://polygonscan.com/address/0x4d8d24968458af521ef02aefD95f161dF3f9Ea01#code"
                        target="_blank"
                      >
                        0x4d8d24968458af521ef02aefD95f161dF3f9Ea01
                      </a>{' '}
                    </li>
                    <li className="overflow-x-auto">
                      NFT on Polygon Mainnet:
                      <a
                        href="https://polygonscan.com/address/0x8227767903Fa90A90060E28a45506318E03997aD#code"
                        target="_blank"
                      >
                        0x8227767903Fa90A90060E28a45506318E03997aD
                      </a>{' '}
                    </li>
                  </ul>
                </div>
              </div>

              <br />
              <br />

              <div className="column column-50">
                <ul>
                  <li className="overflow-x-auto">
                    {' '}
                    Main Contract on BSC Mainnet:
                    <a
                      href=" https://bscscan.com/address/0x6d88cBBD35E19958eFB4500f93D346c126bB7Df2#code"
                      target="_blank"
                    >
                      0x6d88cBBD35E19958eFB4500f93D346c126bB7Df2
                    </a>{' '}
                  </li>
                  <li className="overflow-x-auto">
                    {' '}
                    ERC20 on BSC Mainnet:
                    <a
                      href="https://bscscan.com/address/0x7664e0A3862819C48A01648CE5139Ad25dAC12c0#code"
                      target="_blank"
                    >
                      0x7664e0A3862819C48A01648CE5139Ad25dAC12c0
                    </a>{' '}
                  </li>
                  <li className="overflow-x-auto">
                    NFT on BSC Mainnet:
                    <a
                      href="https://bscscan.com/address/0xD2f9F7C2CD1b8e1C91d89F271EF80eBFf75F183C#code"
                      target="_blank"
                    >
                      0xD2f9F7C2CD1b8e1C91d89F271EF80eBFf75F183C
                    </a>{' '}
                  </li>
                </ul>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href="https://bsc.lokian.monster" target="_blank">
                    <button type="button" className="rpgui-button">
                      <p>Launch BSC App</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>

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
            <h4 className="section-title">more info :)</h4>
            <hr style={{ clear: 'both' }} />

            <div className="img-title">See your monsters</div>

            <img src={process.env.PUBLIC_URL + '/myCreatures.PNG'} />

            <br />
            <br />
            <div className="img-title">Sell monsters at the Shop</div>

            <img src={process.env.PUBLIC_URL + '/myShop-Capture.PNG'} />

            <br />
            <br />
            <div className="img-title">Buy monsters at the Marketplace</div>

            <img src={process.env.PUBLIC_URL + '/marketplace.PNG'} />

            <br />
            <br />
            <div className="img-title">
              Breed monsters at the breeding grounds
            </div>

            <img src={process.env.PUBLIC_URL + '/breed.PNG'} />

            <br />
            <br />
            <div className="img-title">
              Fight with other monsters at the Arena
            </div>

            <img src={process.env.PUBLIC_URL + '/Arena.png'} />

            <br />
            <br />
            <div className="img-title">
              Share with other users at the Sharing Area
            </div>

            <img src={process.env.PUBLIC_URL + '/share.PNG'} />

            <br />
            <br />
            <div className="img-title">And see what others shared to u</div>

            <img src={process.env.PUBLIC_URL + '/sharedToMe.PNG'} />

            <br />
            <br />
            <div className="img-title">
              bonus! Buy NFTs and Give (burn tokens) to the Skeleton people at
              the Token Area
            </div>

            <img
              src={process.env.PUBLIC_URL + '/skelly.png'}
              className="skellies"
            />
            <img
              src={process.env.PUBLIC_URL + '/skelly2.png'}
              className="skellies"
            />

            <div id="tokenomix">
              <h4 className="section-title">tokenomix :)</h4>
              <hr style={{ clear: 'both' }} />
              <br />

              <div className="img-title">
                The token name is Lokians, an ERC20 token
              </div>
              <h2 className="token">
                <input
                  className="rpgui-radio golden"
                  type="radio"
                  value="some val"
                />
                <label style={{ height: '50px', width: '50px' }}></label>
              </h2>

              <div className="token">
                <ul>
                  <li>Supply: Infinite, </li>
                  <li>
                    Circulation: 10,000,000 <i>(as of april 2022)</i>
                  </li>
                  <li>Arena Rewards: Infinite</li>
                  <li>
                    Donation to Skeleton people: Infinite{' '}
                    <i> (will decrease the circulation) </i>{' '}
                  </li>
                  <li>
                    Exchanges:{' '}
                    <ul>
                      <li>
                        <a
                          href="https://app.sushi.com/trident/swap?tokens=0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270&tokens=0x4d8d24968458af521ef02aefD95f161dF3f9Ea01&chainId=137"
                          target="_blank"
                        >
                          SushiSwap <i>(polygon)</i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://pancakeswap.finance/swap"
                          target="_blank"
                        >
                          PancakeSwap <i>(bsc)</i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://spookyswap.finance/swap"
                          target="_blank"
                        >
                          SpookySwap <i>(fantom)</i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x4d8d24968458af521ef02aefD95f161dF3f9Ea01&chainId=250"
                          target="_blank"
                        >
                          SushiSwap <i>(fantom)</i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://app.solarbeam.io/exchange/swap"
                          target="_blank"
                        >
                          Solarbeam <i>(moonriver)</i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x4d8d24968458af521ef02aefD95f161dF3f9Ea01&chainId=43114"
                          target="_blank"
                        >
                          SushiSwap <i>(avalanche)</i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://app.arthswap.org/#/swap"
                          target="_blank"
                        >
                          ArthSwap <i>(astar)</i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Token:{' '}
                    <a
                      href=" https://polygonscan.com/address/0x4d8d24968458af521ef02aefD95f161dF3f9Ea01#code"
                      target="_blank"
                    >
                      Lokians
                    </a>{' '}
                    <i>(Polygon Mainnet)</i>{' '}
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
              <div className="img-title">
                The NFT name is LokianItems, an ERC1155 token
              </div>
              <h2 className="token">
                <div className="rpgui-icon potion-red"></div>
                <div className="rpgui-icon potion-green"></div>
                <div className="rpgui-icon potion-blue"></div>
              </h2>

              <ul className="token">
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
                  NFT Address:{' '}
                  <a
                    href="https://polygonscan.com/address/0x8227767903Fa90A90060E28a45506318E03997aD#code"
                    target="_blank"
                  >
                    LokianItems
                  </a>{' '}
                  <i>(Polygon Mainnet)</i>{' '}
                </li>
                <li>
                  NFT Staking Rewards: <i>soon</i>{' '}
                </li>
              </ul>
            </div>

            <h4 className="section-title">
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
              <ul className="token">
                <li className="overflow-x-auto">
                  Github:{' '}
                  <a
                    href="https://github.com/tytzM17/Lokian.eth"
                    target="_blank"
                  >
                    LokiMons App
                  </a>
                  ,{' '}
                  <a
                    href="https://github.com/tytzM17/Lokian.monster"
                    target="_blank"
                  >
                    LokiMons Website
                  </a>
                </li>
                <li className="overflow-x-auto">
                  Telegram:{' '}
                  <a href="https://t.me/lokiMons" target="_blank">
                    LokiMons Channel
                  </a>{' '}
                </li>
                <li className="overflow-x-auto">
                  Twitter:{' '}
                  <a href="https://twitter.com/LokianMonster" target="_blank">
                    LokiMons Account
                  </a>{' '}
                </li>
                <li className="overflow-x-auto">
                  Dapp.com:{' '}
                  <a
                    href="https://www.dapp.com/app/lokian-monster"
                    target="_blank"
                  >
                    LokiMons Dapp.com Page
                  </a>{' '}
                </li>
                <li className="overflow-x-auto">
                  Dappradar.com:{' '}
                  <a
                    href="https://dappradar.com/multichain/games/lokian-monsters"
                    target="_blank"
                  >
                    LokiMons Dappradar.com Page
                  </a>{' '}
                </li>
              </ul>
            </div>

            <br />
            <hr style={{ clear: 'both' }} />
            <br />

            <div className="token">
              <h2>That's it, for now!</h2>

              <h2>
                <p>Check out Staking and PVP duels in the future!</p>
                <p>all rights reserved @ lokian monsters 2022 </p>
                <br />
                <br />
                <a href="#main">Back to Top</a>
                <br />
                <br />
              </h2>

              <img
                src={process.env.PUBLIC_URL + '/lesh.png'}
                style={{
                  position: 'absolute',
                  display: 'inline-block',
                  width: '70px',
                  right: '0px',
                  bottom: '0px',
                }}
              />
              <img
                src={process.env.PUBLIC_URL + '/lesh.png'}
                style={{
                  position: 'absolute',
                  display: 'inline-block',
                  width: '70px',
                  left: '0px',
                  bottom: '0px',
                  transform: 'scaleX(-1)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
