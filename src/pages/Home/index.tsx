import React from "react";
import RecentVideos from "../../components/RecentVideos";
import SearchInput from "../../components/SearchInput";
import { VideoThumbnail } from "./type";

const MAX_NUMBER_OF_RECENT_VIDEOS = 8;

const Home = () => {
  function handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }
  const thumbnailImage = "https://via.placeholder.com/250x145";
  const fakeRecentVideos: VideoThumbnail[] = [
    {
      thumbnailImage,
      publicationDate: new Date(),
      videoOwner: "Rafael Willen",
      videoTitle: "Titulo #1",
    },
    {
      thumbnailImage,
      publicationDate: new Date(),
      videoOwner: "Angleu Zua",
      videoTitle: "Titulo #2",
    },
    {
      thumbnailImage,
      publicationDate: new Date(),
      videoOwner: "Helmer Inácio",
      videoTitle: "Titulo #3",
    },
    {
      thumbnailImage,
      publicationDate: new Date(),
      videoOwner: "Knuckles Nation",
      videoTitle: "Titulo #4",
    },
    {
      thumbnailImage,
      publicationDate: new Date(),
      videoOwner: "Rafael Willen",
      videoTitle: "Titulo #1",
    },
    {
      thumbnailImage,
      publicationDate: new Date(),
      videoOwner: "Angleu Zua",
      videoTitle: "Titulo #2",
    },
    {
      thumbnailImage,
      publicationDate: new Date(),
      videoOwner: "Helmer Inácio",
      videoTitle: "Titulo #3",
    },
    {
      thumbnailImage,
      publicationDate: new Date(),
      videoOwner: "Knuckles Nation",
      videoTitle: "Titulo #4",
    },
  ];

  return (
    <main className="flex-1">
      <SearchInput onSearch={handleSearch} />
      <RecentVideos
        videos={fakeRecentVideos.filter(
          (_, index) => index < MAX_NUMBER_OF_RECENT_VIDEOS
        )}
      />
    </main>
  );
};

export default Home;
