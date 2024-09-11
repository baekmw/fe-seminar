import './App.css';

import { useState } from 'react';

import background from './assets/bg2.jpg';

function App() {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [modalM, setModalM] = useState<string>('');
  return (
    <div className="font-sans">
      <img
        src={background}
        className="fixed inset-0 -z-10 h-full w-full overflow-hidden"
        alt="bg image"
      ></img>
      {isModalOpened && (
        <Modal setIsModalOpened={setIsModalOpened} modalM={modalM}></Modal>
      )}

      <div className="flex items-center justify-center h-screen w-screen backdrop-blur-sm">
        <div className="flex flex-col gap-5">
          <p className="w-[10rem] mx-auto text-center text-3xl font-black cursor-default">
            안녕하세요!
          </p>
          <button
            className="w-[10rem] h-[3rem] mx-auto text-white font-semibold bg-black rounded-2xl shadow-xl hover:scale-105 duration-300 ease-in-out"
            onClick={() => {
              setIsModalOpened(true);
              setModalM('who am i');
            }}
          >
            어떤 사람인가요?
          </button>
          <button
            className="w-[10rem] h-[3rem] mx-auto text-white font-semibold bg-black rounded-2xl shadow-xl hover:scale-105 duration-300 ease-in-out"
            onClick={() => {
              setIsModalOpened(true);
              setModalM('what do i study');
            }}
          >
            뭘 공부하나요?
          </button>
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/baekmw?igsh=cmlrMHpsNXliY2xl&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-brands fa-instagram hover:scale-110 duration-300 ease-in-out"
                style={{ color: 'white', fontSize: '30px' }}
              ></i>
            </a>
            <p className="text-3xl text-white font-light cursor-default">|</p>
            <a
              href="https://github.com/baekmw"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-brands fa-github hover:scale-110 duration-300 ease-in-out"
                style={{ color: 'white', fontSize: '30px' }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function Modal({
  setIsModalOpened,
  modalM,
}: {
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  modalM: string;
}): JSX.Element {
  if (modalM === 'who am i') {
    return (
      <div
        id="modal1"
        className="fixed inset-0 w-screen h-screen z-30 backdrop-blur-lg duration-300 animate-fadeIn"
        onClick={() => {
          document.getElementById('modal1')?.classList.remove('animate-fadeIn');
          document.getElementById('modal1')?.classList.add('animate-fadeOut');
          setTimeout(() => {
            setIsModalOpened(false);
          }, 500);
        }}
      >
        <div className="flex justify-center items-center w-full h-full">
          <div
            className="w-[20rem] h-fit p-5 bg-white bg-opacity-50 rounded-3xl shadow-xl"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex justify-between pb-3 border-b-2 border-dashed border-black border-opacity-20">
              <p className="text-lg font-bold">어떤 사람인가요?</p>
              <button
                className="hover:bg-black hover:bg-opacity-10 rounded-lg h-8 w-8 duration-300"
                onClick={() => {
                  document
                    .getElementById('modal1')
                    ?.classList.remove('animate-fadeIn');
                  document
                    .getElementById('modal1')
                    ?.classList.add('animate-fadeOut');
                  setTimeout(() => {
                    setIsModalOpened(false);
                  }, 500);
                }}
              >
                <i
                  className="fa-solid fa-xmark"
                  style={{ color: 'gray', fontSize: '23px' }}
                ></i>
              </button>
            </div>

            <div className="flex flex-col pt-5 gap-3 w-full h-fit">
              <div className="flex justify-start">
                <div className="flex gap-2 items-center w-[5rem]">
                  <i
                    className="fa-regular fa-face-smile w-6"
                    style={{ color: 'black', opacity: '50%', fontSize: '20px' }}
                  ></i>
                  <p className="text-md font-bold text-black text-opacity-50">
                    이름
                  </p>
                </div>
                <p className="text-lg font-bold">백민우</p>
              </div>
              <hr className="border-black border-opacity-10 border-[1px]"></hr>
              <div className="flex justify-start">
                <div className="flex gap-2 items-center w-[5rem]">
                  <i
                    className="fa-solid fa-school w-6"
                    style={{ color: 'black', opacity: '50%', fontSize: '16px' }}
                  ></i>
                  <p className="text-md font-bold text-black text-opacity-50">
                    전공
                  </p>
                </div>
                <p className="text-lg font-bold">생명과학부 24학번</p>
              </div>
              <hr className="border-black border-opacity-10 border-[1px]"></hr>
              <div className="flex justify-start">
                <div className="flex gap-2 items-center w-[5rem]">
                  <i
                    className="fa-solid fa-seedling w-6"
                    style={{ color: 'black', opacity: '50%', fontSize: '20px' }}
                  ></i>
                  <p className="text-md font-bold text-black text-opacity-50">
                    나이
                  </p>
                </div>
                <p className="text-lg font-bold">22살</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="modal2"
        className="fixed inset-0 w-screen h-screen z-30 backdrop-blur-lg duration-300 animate-fadeIn"
        onClick={() => {
          document.getElementById('modal2')?.classList.remove('animate-fadeIn');
          document.getElementById('modal2')?.classList.add('animate-fadeOut');
          setTimeout(() => {
            setIsModalOpened(false);
          }, 500);
        }}
      >
        <div className="flex justify-center items-center w-full h-full">
          <div
            className="w-[20rem] h-fit p-5 bg-white bg-opacity-50 rounded-3xl shadow-xl"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex justify-between pb-3 border-b-2 border-dashed border-black border-opacity-20">
              <p className="text-lg font-bold">뭘 공부하나요?</p>
              <button
                className="hover:bg-black hover:bg-opacity-10 rounded-lg h-8 w-8 duration-300"
                onClick={() => {
                  document
                    .getElementById('modal2')
                    ?.classList.remove('animate-fadeIn');
                  document
                    .getElementById('modal2')
                    ?.classList.add('animate-fadeOut');
                  setTimeout(() => {
                    setIsModalOpened(false);
                  }, 500);
                }}
              >
                <i
                  className="fa-solid fa-xmark"
                  style={{ color: 'gray', fontSize: '23px' }}
                ></i>
              </button>
            </div>

            <div className="flex flex-col pt-5 gap-3 w-full h-fit">
              <div className="flex justify-start">
                <div className="flex gap-2 items-center w-[3rem]">
                  <i
                    className="fa-brands fa-react w-3"
                    style={{
                      color: 'skyblue',
                      opacity: '100%',
                      fontSize: '30px',
                    }}
                  ></i>
                </div>
                <p className="text-lg font-bold">react</p>
              </div>
              <hr className="border-black border-opacity-10 border-[1px]"></hr>
              <div className="flex justify-start">
                <div className="flex gap-2 items-center w-[3rem]">
                  <i
                    className="fa-brands fa-js w-6"
                    style={{
                      color: 'orange',
                      opacity: '100%',
                      fontSize: '30px',
                    }}
                  ></i>
                </div>
                <p className="text-lg font-bold">javascript</p>
              </div>
              <hr className="border-black border-opacity-10 border-[1px]"></hr>
              <div className="flex justify-start">
                <div className="flex gap-2 items-center w-[3rem]">
                  <i
                    className="fa-brands fa-python w-6"
                    style={{
                      color: 'yellow',
                      opacity: '80%',
                      fontSize: '30px',
                    }}
                  ></i>
                </div>
                <p className="text-lg font-bold">python</p>
              </div>
              <hr className="border-black border-opacity-10 border-[1px]"></hr>
              <div className="gap-2 text-black text-opacity-70 font-semibold text-sm">
                <p>그 외 등등... </p>
                <p>배우는 걸 정말 좋아합니다!</p>
                <p>잘 부탁드립니다 ^~^</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
