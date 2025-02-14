
import './App.css'
import { LikeButton } from './components/LikeButton'

function App() {


  return (
    <>
      <LikeButton />

    </>
  )
}
import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
    const showContent = true;

    return (
        <div>
            <h1>Пример использования компонента</h1>
            <MyComponent isVisible={showContent}>
                <p>Это содержимое будет отображаться или скрываться в зависимости от условия.</p>
            </MyComponent>
        </div>
    );
};

export default App;

