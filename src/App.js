import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Homepage,
  Navbar,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";



const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        {/* footer */}
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptopedia <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
          
          <a href="https://mohitkrsuman.vercel.app/" target="_blank" style={{textDecoration : "none", marginTop: "10px"}}><Typography.Title level={5} style={{ color: "grey", textAlign: "center" }} type="secondary">&lt;/&gt; and Crafted by MohitKrSuman</Typography.Title></a>
        </div>
      </div>
    </div>
  );
};

export default App;
