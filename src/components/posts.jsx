import React from "react";
import Create from "./create";
import Post from "./post";

const posts = [
  {
    data: [
      {
        tweet: "The people have spoken …",
        date: "20h",
        stats: ["8,439", "7,864", "100.3K"],
      },
    ],
  },
  {
    data: [
      {
        tweet: 1,
        date: "Nov 29",
        stats: ["28.7K", "56.3K", "456.2K"],
      },
      {
        tweet: "CommunityNotes FTW!",
        date: "Nov 28",
        stats: ["3,969", "4,141", "91.4K"],
      },
      {
        tweet:
          "If Community Notes can correct me, then obviously they can correct anyone. This is a good example. They were right to add the label.",
        date: "Nov 29",
        stats: ["2,939", "3,955", "66.2K"],
      }, {
        tweet:
          "If Community Notes can correct me, then obviously they can correct anyone. This is a good example. They were right to add the label.",
        date: "Nov 29",
        stats: ["2,939", "3,955", "66.2K"],
      },
    ],
  },
  {
    data: [
      {
        tweet:
          "This is a battle for the future of civilization. If free speech is lost even in America, tyranny is all that lies ahead.",
        date: "Nov 29",
        stats: ["2,939", "3,955", "66.2K"],
      },
    ],
  },
  {
    data: [
      {
        tweet:
          "The Twitter Files on free speech suppression soon to be published on Twitter itself. The public deserves to know what really happened …",
        date: "Nov 29",
        stats: ["36.2K", "136.2K", "666.2K"],
      },
    ],
  },
  {
    data: [
      {
        tweet:
          "Apple has mostly stopped advertising on Twitter. Do they hate free speech in America?",
        date: "Nov 24",
        stats: ["36.2K", "136.2K", "666.2K"],
      },
    ],
  },
  {
    data: [
      {
        tweet: 2,
        date: "Nov 22",
        stats: ["36.2K", "136.2K", "666.2K"],
      },
    ],
  },
];
const Posts = () => {
  return (
    <ul className="posts">
      <Create />
      {[
        ...posts,
        ...posts,
        ...posts,
        ...posts,
        ...posts,
        ...posts,
        ...posts,
        ...posts,
        ...posts,
        ...posts,
        ...posts,
        ...posts,
        ...posts,
        ...posts,
        ...posts,
        ...posts,
      ].map((post, index) => {
        return <Post post={post} />;
      })}
    </ul>
  );
};

export default Posts;
