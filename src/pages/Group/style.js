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
  &:hover {
    cursor: pointer;
    opacity: 85%;
    transition: opacity 0.5s;
  }
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
  &:hover {
    cursor: pointer;
    opacity: 85%;
    transition: opacity 0.5s;
  }
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
    min-width: 50vw;
  }
`;

export const ActivitiesSection = styled.section`
  border: 1px solid var(--black);
  padding: 5px 12px;
  height: 35vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #c4c4c4;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #11995e;
    border-radius: 20px;
    border: 3px solid #11995e;
  }
  margin-bottom: 1rem;
`;

export const ActivitiesCardDisplay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  overflow-x: scroll;
  gap: 0.5rem;
  padding-bottom: 1rem;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #c4c4c4;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #11995e;
    border-radius: 20px;
    border: 3px solid #11995e;
  }

  @media screen and (min-width: 900px) {
    flex-wrap: wrap;
    overflow-x: unset;
    justify-content: center;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 0.5rem;
  h2 {
    flex-grow: 1;
    text-align: left;
    font-size: 1.5rem;
  }
`;

export const GoalCardDisplay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  overflow-x: scroll;
  gap: 0.5rem;
  padding-bottom: 1rem;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #c4c4c4;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #11995e;
    border-radius: 20px;
    border: 3px solid #11995e;
  }

  @media screen and (min-width: 900px) {
    flex-wrap: wrap;
    overflow-x: unset;
    justify-content: center;
  }
`;

export const GoalsSection = styled.section`
  border: 1px solid var(--black);
  padding: 5px 12px;
  height: 35vh;
  overflow-x: scroll;
  margin-bottom: 1rem;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #c4c4c4;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #11995e;
    border-radius: 20px;
    border: 3px solid #11995e;
  }
`;

export const MembersSection = styled.section`
  display: none;

  border: 1px solid var(--black);
  padding: 5px 12px;
  margin-bottom: 1rem;

  overflow-y: scroll;
  align-items: center;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #c4c4c4;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #11995e;
    border-radius: 20px;
    border: 3px solid #11995e;
  }

  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 25vw;
    min-width: 25vw;
    margin-right: 5vw;
    max-height: 72vh;
  }
`;

export const MembersCardDisplay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

export const MetasDisplay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  overflow-y: scroll;
  gap: 0.5rem;
  padding-bottom: 1rem;

  @media screen and (min-width: 900px) {
    flex-wrap: wrap;
    overflow-y: unset;
    justify-content: center;
  }
`;
