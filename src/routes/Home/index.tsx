import React from "react";
import RecentMusics from "../../components/RecentMusics";
import RecentVideos from "../../components/RecentVideos";
import SearchInput from "../../components/SearchInput";
import { MusicThumbnail, VideoThumbnail } from "./type";

const MAX_NUMBER_OF_RECENT_VIDEOS = 8;
const MAX_NUMBER_OF_RECENT_MUSICS = 6;

const Home = () => {
  function handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }
  const thumbnailImageVideo = "https://via.placeholder.com/250x145";
  const thumbnailImage = "https://via.placeholder.com/150";

  const fakeRecentVideos: VideoThumbnail[] = [
    {
      thumbnailImage: thumbnailImageVideo,
      publicationDate: new Date(),
      author: "Rafael Willen",
      videoTitle: "Titulo #1",
    },
    {
      thumbnailImage: thumbnailImageVideo,
      publicationDate: new Date(),
      author: "Angleu Zua",
      videoTitle: "Titulo #2",
    },
    {
      thumbnailImage: thumbnailImageVideo,
      publicationDate: new Date(),
      author: "Helmer Inácio",
      videoTitle: "Titulo #3",
    },
    {
      thumbnailImage: thumbnailImageVideo,
      publicationDate: new Date(),
      author: "Knuckles Nation",
      videoTitle: "Titulo #4",
    },
    {
      thumbnailImage: thumbnailImageVideo,
      publicationDate: new Date(),
      author: "Rafael Willen",
      videoTitle: "Titulo #1",
    },
    {
      thumbnailImage: thumbnailImageVideo,
      publicationDate: new Date(),
      author: "Angleu Zua",
      videoTitle: "Titulo #2",
    },
    {
      thumbnailImage: thumbnailImageVideo,
      publicationDate: new Date(),
      author: "Helmer Inácio",
      videoTitle: "Titulo #3",
    },
    {
      thumbnailImage: thumbnailImageVideo,
      publicationDate: new Date(),
      author: "Knuckles Nation",
      videoTitle: "Titulo #4",
    },
  ];

  const fakeRecentMusic: MusicThumbnail[] = [
    {
      thumbnailImage,
      author: "Rafael Willen",
      musicTitle: "Titulo #1",
    },
    {
      thumbnailImage,
      author: "Rafael Willen",
      musicTitle: "Titulo #1",
    },
    {
      thumbnailImage,
      author: "Rafael Willen",
      musicTitle: "Titulo #1",
    },
    {
      thumbnailImage,
      author: "Rafael Willen",
      musicTitle: "Titulo #1",
    },
    {
      thumbnailImage,
      author: "Rafael Willen",
      musicTitle: "Titulo #1",
    },
    {
      thumbnailImage,
      author: "Rafael Willen",
      musicTitle: "Titulo #1",
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
      <hr className="mx-5 border-grey-900 " />
      <RecentMusics
        musics={fakeRecentMusic.filter(
          (_, index) => index < MAX_NUMBER_OF_RECENT_MUSICS
        )}
      />
    </main>
  );
};

export default Home;
