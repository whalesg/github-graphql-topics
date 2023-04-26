export type Stargazers = {
  totalCount: number
};

export type Topic = {
  id: string,
  name: string,
  stargazers: Stargazers,
  relatedTopics: Topic[]
};

export type RelatedTopics = {
  relatedTopics: Topic[]
};

export interface ITopicsSearchVariables {
  name: string  
};

export interface ITopicsSearchResponse {
  topics: RelatedTopics | null
};

export interface ITopicContextProps {
  loading: boolean,
  error: object | null,
  topics: Topic[],
  relatedTopics: Topic[],
  searchText: string,
  setSearchText: (_: string) => void,
  selectedTopic: Topic | null,
  setSelectedTopic: (_: Topic) => void,
};

