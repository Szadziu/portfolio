import * as P from './parts';

const BUNCH_OF_BADGES = [
  {
    id: 0,
    name: 'codewars',
    link: 'https://www.codewars.com/users/Szadziu/badges/micro',
  },
  {
    id: 1,
    name: 'github',
    link: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
  },
];
const Badges = () => {
  const renderBadges = () => {
    return (
      <P.BadgesList>
        {BUNCH_OF_BADGES.map((badge) => (
          <P.Badge key={badge.id} link={badge.link} />
        ))}
      </P.BadgesList>
    );
  };

  return <>{renderBadges()}</>;
};

export default Badges;