import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import testApi from 'api/postApi';
import { Post, ListResponse } from "@/models/index";

function App() {
  const [dataPosts, setdataPosts] = useState<Array<Post>>([])
  const [dataItem, setdataItem] = useState<Partial<Post>>({})
  console.log("🚀 ~ file: App.tsx ~ line 10 ~ App ~ dataItem", dataItem)
  console.log("🚀 ~ file: App.tsx ~ line 9 ~ App ~ dataPost", dataPosts)

  useEffect(() => {
    const LoadApi = async () => {
      let res: ListResponse<Post> = await testApi.getAll({ _limit: 10, _page: 1 });
      let res1: Post = await testApi.getById(10);
      setdataPosts(res.data)
      setdataItem(res1)
    }
    LoadApi()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
