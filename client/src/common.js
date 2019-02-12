/**
 * Components and functions commonly used at multiple places.
 *
 * Generating new components with styles from native html
 * elements or existing components using styled-components.
 */

import {
  Jumbotron,
  Card,
  CardColumns,
  ListGroup,
  Alert
} from "react-bootstrap";
import styled from "styled-components";
import colors from "./utils/colors";

export const HeadingSection = styled(Jumbotron)`
  text-align: center;
  background-color: white;
`;

export const SmallHeadingSection = styled(HeadingSection)`
  padding: 2rem 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardSection = styled.div`
  text-align: center;
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
`;

export const CustomCard = styled(Card)`
  width: 18rem;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  border-color: rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  cursor: pointer;
  :hover {
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
  }
`;

export const ParcelCard = styled(CustomCard)`
  cursor: default;
`;

export const ParcelCardBody = styled(CustomCard.Body)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomCardColumns = styled(CardColumns)`
  width: 75%;

  @media (max-width: 768px) {
    column-count: 2;
  }

  @media (max-width: 360px) {
    column-count: 1;
    width: auto;
  }

  @media (min-width: 1600px) {
    column-count: 4;
  }
`;

export const CustomCardTitle = styled(CustomCard.Title)`
  font-size: 1.5rem;
  color: ${colors.primary};
`;

export const CustomCardText = styled(CustomCard.Text)`
  color: ${props => (props.color ? props.color : colors.secondary)};
`;

export const MainHeading = styled.h1`
  color: ${colors.primary};
`;

export const SubHeading = styled.h4`
  color: ${props => (props.color ? props.color : colors.secondary)};
  margin-top: 1.5rem;
`;

export const SmallHeading = styled.h3`
  color: ${colors.primary};
`;

export const HeadingText = styled.h5`
  color: ${colors.primary};
`;

export const ActionCardContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    margin-right: 2rem;
    :last-child {
      margin-right: 0;
    }
    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ParcelContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2.5rem;
`;

export const CustomListGroup = styled(ListGroup)`
  width: 24rem;
  @media (max-width: 360px) {
    width: 14rem;
  }
`;

export const BikerListBody = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  flex-direction: column;
  align-items: center;
`;

export const CustomAlert = styled(Alert)`
  width: ${props => (props.width ? props.width : "100%")};
  display: flex;
  align-items: center;
`;

export const CustomSuccessAlert = styled(CustomAlert)`
  display: flex;
  align-items: center;
  svg {
    padding-right: 10px;
    font-size: 27px;
  }
`;

export const countParcels = (list, status) => {
  let filteredItems = list.filter(parcel => parcel.orderStatus === status);
  return filteredItems.length;
};
