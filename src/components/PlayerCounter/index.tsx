import { useContext, useState } from 'react';
import type { FC } from 'react';
import { PlayerID, GameSetupContext } from '../../context/GameSetupContext';

import * as S from './style';
import HeartIcon from '../../assets/HeartIcon';
import MinusIcon from '../../assets/MinusIcon';
import PlusIcon from '../../assets/PlusIcon';
import Button from '../button';

interface PlayerCounterProps {
  rotate?: string | 'rotate(90deg)' | 'rotate(-90deg)' | 'rotate(180deg)'
  width: string
  height: string
  life: number
  id: PlayerID
  marginBottom?: string
  position?: 'relative' | 'fixed' | 'absolute'
}

const PlayerCounter: FC<PlayerCounterProps> = (props) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { handleLifePlayer } = useContext(GameSetupContext);
  const { rotate = 'unset', width, height, life, id, marginBottom = 'unset', position = 'relative' } = props;
  const handleDrawer = (value: boolean): void => {
    if (!value) {
      setOpenDrawer(true);
    } else {
      setOpenDrawer(false);
    }
  };

  return (
    <S.WrapperPlayer rotate={rotate} width={width} height={height} marginBottom={marginBottom} position={position}>
      <S.Wrapper>
        <Button onClick={() => handleLifePlayer(id, true)} height="45%" width="100%" border={false} background="transparent">
          <></>
        </Button>
        <Button onClick={() => handleLifePlayer(id, false)} height="45%" width="100%" border={false} background="transparent">
          <></>
        </Button>
      </S.Wrapper>
      <S.WrapperText>
        <PlusIcon width={40} height={40} />
        <>
          <S.TextHud fontSize="3.5em">{life}</S.TextHud>
          <HeartIcon width={25} height={25} />
        </>
        <MinusIcon width={40} height={40} />
        <S.Drawer handleDrawer={openDrawer}>
          <S.Hr onClick={() => handleDrawer(openDrawer)} handleDrawer={openDrawer} />
        </S.Drawer>
      </S.WrapperText>
    </S.WrapperPlayer>
  );
};

export default PlayerCounter;
