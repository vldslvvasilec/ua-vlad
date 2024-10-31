import React from 'react';
import { HexGrid, Layout, Hexagon } from 'react-hexgrid';
import './HexagonGrid.scss';

const GlowingObject = () => {
    return <div className="glowing-object"></div>;
  };

const HexagonGrid = () => (
  <div className="hexagon-background">
    <HexGrid width="100vw" height="100vh" viewBox="-30 -30 100 100"> {/* Изменено для лучшего масштабирования */}
      <Layout size={{ x: 12, y: 12 }} spacing={1.03} flat={true}> {/* Уменьшите size для более плотного расположения */}
        {Array.from({ length: 500 }, (_, i) => ( // Увеличьте количество шестиугольников
          <Hexagon key={i} q={i % 15-6} r={Math.floor(i / 15-4)} s={-((i % 15) + Math.floor(i / 15))} />
        ))}
      </Layout>
    </HexGrid>
    <GlowingObject />
  </div>
);

export default HexagonGrid;
