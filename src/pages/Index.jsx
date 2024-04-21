import { Box, Flex, Input, Button, Text, VStack, HStack, Avatar, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUserAlt, FaEllipsisH, FaFeatherAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Flex height="100vh">
      {/* Sidebar */}
      <VStack width="15%" borderRight="1px" borderColor="gray.200" spacing={4} alignItems="flex-start" p={4}>
        <IconButton icon={<FaTwitter />} fontSize="2xl" variant="ghost" aria-label="Twitter" />
        <VStack alignItems="flex-start" spacing={1} width="full">
          <Button leftIcon={<FaHome />} justifyContent="flex-start" width="full">
            Home
          </Button>
          <Button leftIcon={<FaHashtag />} justifyContent="flex-start" width="full">
            Explore
          </Button>
          <Button leftIcon={<FaBell />} justifyContent="flex-start" width="full">
            Notifications
          </Button>
          <Button leftIcon={<FaEnvelope />} justifyContent="flex-start" width="full">
            Messages
          </Button>
          <Button leftIcon={<FaBookmark />} justifyContent="flex-start" width="full">
            Bookmarks
          </Button>
          <Button leftIcon={<FaListAlt />} justifyContent="flex-start" width="full">
            Lists
          </Button>
          <Button leftIcon={<FaUserAlt />} justifyContent="flex-start" width="full">
            Profile
          </Button>
          <Button leftIcon={<FaEllipsisH />} justifyContent="flex-start" width="full">
            More
          </Button>
        </VStack>
        <Button colorScheme="twitter" leftIcon={<FaFeatherAlt />} width="full">
          Tweet
        </Button>
      </VStack>

      {/* Feed */}
      <VStack width="50%" borderRight="1px" borderColor="gray.200" spacing={0} overflowY="auto">
        <Box width="full" padding={4} borderBottom="1px" borderColor="gray.200">
          <Text fontSize="2xl" fontWeight="bold">
            Home
          </Text>
        </Box>
        <VStack spacing={4} width="full" p={4}>
          {/* Tweet input */}
          <HStack width="full">
            <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMzcxNTYxNHww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Input placeholder="What's happening?" />
          </HStack>
          {/* Tweets */}
          <VStack spacing={4} width="full">
            <Tweet avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMzcxNTYxNHww&ixlib=rb-4.0.3&q=80&w=1080" username="johndoe" content="Just setting up my twttr #first" />
            <Tweet avatar="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMzcxNTYxNHww&ixlib=rb-4.0.3&q=80&w=1080" username="janedoe" content="Loving the new Twitter clone! #react" />
          </VStack>
        </VStack>
      </VStack>

      {/* Trends */}
      <VStack width="35%" spacing={4} p={4}>
        <Text fontSize="lg" fontWeight="bold">
          Trends for you
        </Text>
        <VStack spacing={2} width="full">
          <Trend hashtag="#React" tweets="8.4K Tweets" />
          <Trend hashtag="#ChakraUI" tweets="4.1K Tweets" />
          <Trend hashtag="#JavaScript" tweets="12.9K Tweets" />
        </VStack>
      </VStack>
    </Flex>
  );
};

const Tweet = ({ avatar, username, content }) => (
  <HStack spacing={3} width="full" p={3} borderWidth="1px" borderRadius="lg">
    <Avatar src={avatar} />
    <VStack align="start">
      <Text fontWeight="bold">{username}</Text>
      <Text>{content}</Text>
    </VStack>
  </HStack>
);

const Trend = ({ hashtag, tweets }) => (
  <Box borderWidth="1px" borderRadius="lg" p={3} width="full">
    <Text fontWeight="bold">{hashtag}</Text>
    <Text fontSize="sm" color="gray.500">
      {tweets}
    </Text>
  </Box>
);

export default Index;
