import Nav from "../components/nav";
import Image from "next/image";
import Style from '../styles/Campus.module.css'
import blr from '../asserts/BLR.png'

export default function Campus() {
  const clgs = [
    {
      name: 'BENGALURU',
      url: '../components/BLR',
    },
    {
      name: 'HYDRABAD',
      url: '../components/BLR',
    },
    {
      name: 'VIZAG',
      url: '../components/BLR',
    },
    {
      name: 'VIZAG(GIMSR)',
      url: '../components/BLR',
    }
  ];

  return (
    <div className={Style.page}>
      <div className={Style.container}>
        {clgs.map((item, index) => {
          return (
            <div key={index} className={Style.item}>
              <div className={Style.imageContainer}>
                <Image src={blr} alt={item.name} width={70} height={70} className={Style.image} />
              </div>
              <div className={Style.textContainer}>
                <p className={Style.name}>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
