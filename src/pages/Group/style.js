import styled from "styled-components";

export const Container = styled.div`
  padding: 8px 8px;

  h2 {
    font-size: 2rem;
    margin: 12px 0;
  }

  @media screen and (min-width: 900px) {
    margin-left: 208px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    flex-grow: 1;
    text-align: left;
    padding-left: 8px;

    span {
      font-size: 1.7rem;
      font-weight: bold;
    }
  }
`;

export const ButtonEdit = styled.button`
  padding: 0.5rem;
  width: 70px;
  height: 44px;
  font-size: 1rem;
  margin-right: 5px;
  background-color: var(--color-secundary);
  border-radius: 5px;
  border: none;
  color: var(--white);
`;

export const ButtonExcludeExit = styled.button`
  padding: 0.5rem;
  width: 70px;
  height: 44px;
  font-size: 1rem;
  margin-right: 5px;
  background-color: var(--color-tertiary);
  border-radius: 5px;
  border: none;
  color: var(--white);
`;

export const SectionContainer = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: row;
  }
`;

export const LeftSideContainer = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-right: 1rem;
    margin-left: 5vw;
  }
`;

export const ActivitiesSection = styled.section`
  border: 1px solid var(--black);
  padding: 5px 12px;
  min-height: 200px;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  h2 {
    flex-grow: 1;
    text-align: left;
    font-size: 1.5rem;
  }
`;

export const GoalsSection = styled.section`
  border: 1px solid var(--black);
  padding: 5px 12px;
  min-height: 200px;
  margin-bottom: 1rem;
`;

export const MembersSection = styled.section`
  border: 1px solid var(--black);
  padding: 5px 12px;
  min-height: 200px;
  margin-bottom: 1rem;
  display: none;
  @media screen and (min-width: 900px) {
    display: flex;
    flex-grow: 1;
    max-width: 25vw;
    margin-right: 5vw;
  }
`;
