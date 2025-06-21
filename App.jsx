import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const boosterImages = [
  "99.webp", "112.webp", "170.webp", "60.webp", "130.webp",
  "161.webp", "171.webp", "109.webp", "122.webp", "77.webp"
];

export default function BoosterViewer() {
  const [booster, setBooster] = useState(boosterImages);
  const [collection, setCollection] = useState(new Set(boosterImages));

  const addNewBooster = () => {
    const remaining = Array.from({ length: 180 }, (_, i) => `${i + 1}.webp`).filter(
      img => !collection.has(img)
    );
    const shuffled = remaining.sort(() => 0.5 - Math.random());
    const newBooster = shuffled.slice(0, 10);

    setBooster(newBooster);
    setCollection(new Set([...collection, ...newBooster]));
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2 className="text-xl font-bold mb-2">Booster actuel</h2>
        <div className="grid grid-cols-5 gap-2">
          {booster.map((img, index) => (
            <Card key={index}>
              <CardContent className="p-2">
                <img src={`/${img}`} alt={`Carte ${img}`} className="w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
        <Button className="mt-4" onClick={addNewBooster}>Ouvrir un autre booster</Button>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Ma collection</h2>
        <div className="grid grid-cols-5 gap-2">
          {Array.from(collection).map((img, index) => (
            <Card key={index}>
              <CardContent className="p-2">
                <img src={`/${img}`} alt={`Carte ${img}`} className="w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}