import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';
const imagenes = [
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/bower-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/csharp-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/django-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/google-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor"
].flatMap((img) => [`a|${img}`, `b|${img}`]).sort(() => Math.random() - 0.5);

export default function App() {
  const [adivinado, setAdivinado] = useState([]);
  const [Seleccionado, setSeleccionado] = useState([]);

  useEffect(() => {
    if (Seleccionado.length === 2) {
      if (Seleccionado[0].split("|")[1] === Seleccionado[1].split("|")[1]) {
        setAdivinado((adivinado) => adivinado.concat(Seleccionado))
      }
      setTimeout(() => {
        setSeleccionado([])
      }, 1000);
    }
  }, [Seleccionado])

  useEffect(() => {
    if (adivinado.length === imagenes.length) {
      alert("Felicidades haz gando este juego!");
      window.location.reload();
    }
  }, [adivinado])


  return (
    <>
      <h1 style={{textAlign:'center', fontSize:'40px', color:'white', margin:'50px'}}>MEMOTEST</h1>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '20px', marginBottom:'20px' }}>
        {imagenes.map((item) => {
          const [, url] = item.split("|");
          return (
            <li onClick={() => Seleccionado.length < 2 && setSeleccionado(Seleccionado => Seleccionado.concat(item))} key={item} style={{ listStyleType: 'none', padding: '12', border: '1px solid white', cursor: 'pointer' }}>
              {Seleccionado.includes(item) || adivinado.includes(item) ? (
                <img src={url} alt={url} />
              ) : (
                <img src="https://icongr.am/clarity/eye.svg?size=128&color=currentColor" alt="hidden" />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}