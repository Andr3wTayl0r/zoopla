import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ActivityIndicator} from 'react-native';

import {env} from '../../environment/constants';

import {
  ButtonBack,
  ButtonShare,
  ButtonLike,
  BColumn,
  Image,
  Body,
  Row,
  IconRow,
} from './properties.styles';
import CustomText from '../../components/CustomText/CustomText';
import {TABLE} from '../../assets/images';
import {theme} from '../../theme/theme';

const Properties: React.FC = () => {
  const [property, setProperty] = React.useState<Property>();

  React.useEffect(() => {
    fetch(env.apiUrl + 'property/1')
      .then(res => res.json())
      .then(data => setProperty(data))
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!property) {
    return (
      <>
        <CustomText h4 text="Loading..." />
        <ActivityIndicator />
      </>
    );
  }

  const {
    noOfBeds,
    noOfBathrooms,
    noOfLivingSpaces,
    price,
    shortDescr,
    address,
  } = property;

  const {darkGrey, lightGrey} = theme.colors;

  return (
    <>
      <Image
        source={TABLE}
        accessibilityLabel="dining room with table and chairs"
      />
      <SafeAreaView>
        <Row>
          <BColumn>
            <ButtonBack
              accessible={true}
              accessibilityLabel="Go back"
              accessibilityHint="Navigates to the previous screen"
              accessibilityRole="button">
              <MaterialIcons name="chevron-left" size={50} color={'white'} />
            </ButtonBack>
          </BColumn>
          <BColumn right>
            <ButtonShare
              accessible={true}
              accessibilityLabel="Share"
              accessibilityHint="Opens the share menu"
              accessibilityRole="button">
              <MaterialIcons name="ios-share" size={40} color={'white'} />
            </ButtonShare>
            <ButtonLike
              accessible={true}
              accessibilityLabel="Like"
              accessibilityHint="Adds this property to your liked properties"
              accessibilityRole="button">
              <MaterialIcons name="favorite-border" size={40} color={'white'} />
            </ButtonLike>
          </BColumn>
        </Row>
        <Body>
          <CustomText h4 textColor={darkGrey} text="Offers over" />
          <CustomText h3 bold text={price} />
          <CustomText h4 bold text={shortDescr} />
          <CustomText text={address} />
          <IconRow>
            <MaterialIcons name="single-bed" size={40} color={lightGrey} />
            <CustomText h4 textColor={lightGrey} text={String(noOfBeds)} />
            <MaterialIcons name="bathtub" size={30} color={lightGrey} />
            <CustomText h4 textColor={lightGrey} text={String(noOfBathrooms)} />
            <MaterialIcons name="weekend" size={36} color={lightGrey} />
            <CustomText
              h4
              textColor={lightGrey}
              text={String(noOfLivingSpaces)}
            />
          </IconRow>
        </Body>
      </SafeAreaView>
    </>
  );
};

export default Properties;
