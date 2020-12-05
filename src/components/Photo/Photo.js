import Avatar from 'avataaars';
import {
  clothes,
  clothesColours,
  eyes,
  eyeColours,
  mouths,
  skins,
  tops,
} from 'data/photoParts';
import { useEffect, useRef, useState } from 'react';

const Photo = ({ hcl, ecl, name }) => {
  const avatarRef = useRef(null);
  const [top, setTop] = useState(tops[Math.floor(Math.random() * tops.length)]);
  const [eye, setEye] = useState(eyes[Math.floor(Math.random() * eyes.length)]);
  const [skin, setSkin] = useState(
    skins[Math.floor(Math.random() * skins.length)],
  );
  const [mouth, setMouth] = useState(
    mouths[Math.floor(Math.random() * mouths.length)],
  );
  const [outfit, setOutfit] = useState(
    clothes[Math.floor(Math.random() * clothes.length)],
  );
  const [clothesColour, setClothesColour] = useState(
    clothesColours[Math.floor(Math.random() * clothesColours.length)],
  );

  useEffect(() => {
    console.log('Name Change', name);
    setTop(tops[Math.floor(Math.random() * tops.length)]);
    setEye(eyes[Math.floor(Math.random() * eyes.length)]);
    setSkin(skins[Math.floor(Math.random() * skins.length)]);
    setMouth(mouths[Math.floor(Math.random() * mouths.length)]);
    setOutfit(clothes[Math.floor(Math.random() * clothes.length)]);
    setClothesColour(
      clothesColours[Math.floor(Math.random() * clothesColours.length)],
    );
  }, [name]);

  useEffect(() => {
    if (hcl.match('^#[a-z0-9]{6}$')) {
      setTimeout(() => {
        const hair = avatarRef.current.querySelector('[fill="#4A312C"]');
        hair?.setAttribute('fill', hcl);
      }, 0);
    }
  }, [hcl, name, top, eye, skin, mouth, outfit, clothesColour]);

  useEffect(() => {
    if (['amb', 'blu', 'brn', 'gry', 'grn', 'hzl'].includes(ecl)) {
      setTimeout(() => {
        const eyeBalls = [
          ...avatarRef.current.querySelectorAll(
            'g[id*="Eyes"] [fill-opacity="0.699999988"]',
          ),
        ];
        eyeBalls.forEach((eyeball) => {
          eyeball.setAttribute('fill', eyeColours[ecl]);
        });
      }, 0);
    }
  }, [ecl, name, top, eye, skin, mouth, outfit, clothesColour]);

  return (
    <div
      className="w-full h-full flex items-end justify-center"
      ref={avatarRef}
    >
      <Avatar
        style={{ width: '160px', height: '160px', position: 'absolute' }}
        topType={top}
        eyeType={eye}
        skinColor={skin}
        mouthType={mouth}
        clotheType={outfit}
        clotheColor={clothesColour}
      />
    </div>
  );
};

export default Photo;
