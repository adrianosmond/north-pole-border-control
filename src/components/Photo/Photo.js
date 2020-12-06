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
import { getRandom } from 'utils/utils';

const Photo = ({ hcl, ecl, name }) => {
  const avatarRef = useRef(null);
  const [top, setTop] = useState(getRandom(tops));
  const [eye, setEye] = useState(getRandom(eyes));
  const [skin, setSkin] = useState(getRandom(skins));
  const [mouth, setMouth] = useState(getRandom(mouths));
  const [outfit, setOutfit] = useState(getRandom(clothes));
  const [clothesColour, setClothesColour] = useState(getRandom(clothesColours));

  useEffect(() => {
    setTop(getRandom(tops));
    setEye(getRandom(eyes));
    setSkin(getRandom(skins));
    setMouth(getRandom(mouths));
    setOutfit(getRandom(clothes));
    setClothesColour(getRandom(clothesColours));
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
