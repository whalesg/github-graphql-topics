import {
  createContext,
  useEffect,
  useState,
  useMemo
} from 'react';

import { useQuery } from '@apollo/client';

// Queries
import { GET_TOPICS } from '../queries/topics';

// Types
import {  
  type Topic,
  ITopicContextProps,
  ITopicsSearchVariables,
  ITopicsSearchResponse
} from '../types/topics';

// Topic context data shape
const TopicContext = createContext({
  loading: false,
  error: null,
  topics: [],
  relatedTopics: [],
  searchText: '',
  setSearchText: (_: string) => {},
  selectedTopic: null,
  setSelectedTopic: (_: Topic) => {}
} as ITopicContextProps);


interface Props {
  children: any;
}

const TopicContextProvider = ({ children }: Props) => {
  const [searchText, setSearchText] = useState<string>('react');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const { loading, error, data } = useQuery<ITopicsSearchResponse, ITopicsSearchVariables>(
    GET_TOPICS,
    { variables: { name: searchText } }
  );

  const topics = useMemo(() => {
    return data?.topics?.relatedTopics || [];
  }, [data]);

  const relatedTopics = useMemo(() => {
    return selectedTopic?.relatedTopics || [];
  }, [selectedTopic]);

  useEffect(() => {
    setSelectedTopic(null);
  }, [searchText]);

  const contextData = {
    loading,
    error,
    topics,
    relatedTopics,
    searchText,
    setSearchText,
    selectedTopic,
    setSelectedTopic
  } as ITopicContextProps;

  return (
    <TopicContext.Provider value={contextData}>
      {children}
    </TopicContext.Provider>
  );
}

export {
  TopicContext,
  TopicContextProvider
};