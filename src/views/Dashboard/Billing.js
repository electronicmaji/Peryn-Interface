// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
  Image,
  Portal,
  Progress,
  SimpleGrid,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import IconBox from "components/Icons/IconBox";
import { MastercardIcon, VisaIcon, CreativeTimLogo } from "components/Icons/Icons";
import BillingRow from "components/Tables/BillingRow";
import InvoicesRow from "components/Tables/InvoicesRow";
import { BsArrowRight } from "react-icons/bs";
import logoP from "assets/svg/logo-p.svg";
import TransactionRow from "components/Tables/TransactionRow";
import { Separator } from "components/Separator/Separator";
import React from "react";
import {
  FaPaypal,
  FaPencilAlt,
  FaRegCalendarAlt,
  FaWallet,
} from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "variables/general";

function Billing() {
  // Chakra color mode
  const iconTeal = useColorModeValue("teal.400", "teal.400");
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "gray.500");
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.5fr" }} templateRows="1fr">
        <Box>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
            templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
            gap="26px"
          >
 

            <Card
              backgroundImage={BackgroundCard1}
              backgroundRepeat="no-repeat"
              background="cover"
              bgPosition="10%"
              p="16px"
              h={{ sm: "220px", xl: "100%" }}
              gridArea={{ md: "1 / 1 / 2 / 3", xl: "1 / 1 / 2 / 3" }}
            >
              <CardBody  h="100%" w="100%">
                <Flex
                  direction="column"
                  color="white"
                  h="100%"
                  p="0px 10px 20px 10px"
                  w="100%"
                >
                  <Flex justify="space-between" align="center">
                    <Text fontSize="lg" fontWeight="bold">
                    Per<span>y</span>n
                    </Text>
                    <Icon
                      as={CreativeTimLogo}
                      w="48px"
                      h="auto"
                      color="gray.400"
                    />
                  </Flex>
                  <Spacer />
                  <Flex direction="column">
                    <Box>
                     
                    </Box>
                    <Flex mt="14px">
                      <Flex direction="column" me="34px">
                        <Text fontSize="lg">Tokens</Text>
                        <Text fontSize="lg" fontWeight="bold">
                          5
                        </Text>
                      </Flex>
                      
                    </Flex>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
            <Card
              p="16px"
              display="flex"
              align="center"
              justify="center"
            >
              <CardBody>
                <Flex direction="column" align="center" w="100%" py="14px">
                  <IconBox as="box" h={"60px"} w={"60px"} bg={iconTeal}>
                    <Icon h={"24px"} w={"24px"} color="white" as={FaWallet} />
                  </IconBox>
                  <Flex
                    direction="column"
                    m="14px"
                    justify="center"
                    textAlign="center"
                    align="center"
                    w="100%"
                  >
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                      Salary
                    </Text>
                    <Text
                      mb="24px"
                      fontSize="xs"
                      color="gray.400"
                      fontWeight="semibold"
                    >
                      Belong Interactive
                    </Text>
                    <Separator />
                  </Flex>
                  <Text fontSize="lg" color={textColor} fontWeight="bold">
                    +$2000
                  </Text>
                </Flex>
              </CardBody>
            </Card>
            <Card
              p="16px"
              display="flex"
              align="center"
              justify="center"
            >
              <CardBody>
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  w="100%"
                  py="14px"
                >
                  <IconBox as="box" h={"60px"} w={"60px"} bg={iconTeal}>
                    <Icon h={"24px"} w={"24px"} color="white" as={FaPaypal} />
                  </IconBox>
                  <Flex
                    direction="column"
                    m="14px"
                    justify="center"
                    textAlign="center"
                    align="center"
                    w="100%"
                  >
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                      Paypal
                    </Text>
                    <Text
                      mb="24px"
                      fontSize="xs"
                      color="gray.400"
                      fontWeight="semibold"
                    >
                      Freelance Payment
                    </Text>
                    <Separator />
                  </Flex>
                  <Text fontSize="lg" color={textColor} fontWeight="bold">
                    $455.00
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </Grid>

          <Card maxHeight="290px" minHeight="290.5px" p="1.2rem" flexDirection="column" p="16px" mt="24px" >
          <CardBody w="100%" height="60%">
            <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
              <Flex
                flexDirection="column"
                h="100%"
                lineHeight="1.6"
                width={{ lg: "45%" }}
              >
                <Text fontSize="sm" color="gray.400" fontWeight="bold">
                  Monthly Wage Report
                </Text>
                <Text
                  fontSize="lg"
                  color={textColor}
                  fontWeight="bold"
                  pb=".5rem"
                >
                  Fill out this monthly wage report to earn more tokens.
                </Text>
    
                <Spacer />
                <Flex align="center">
                  <Button
                    p="0px"
                    variant="no-hover"
                    bg="transparent"
                    my={{ sm: "1.5rem", lg: "0px" }}
                  >
                    <Icon
                      as={BsArrowRight}
                      w="20px"
                      h="20px"
                      fontSize="2xl"
                      transition="all .5s ease"
                      mx=".3rem"
                      cursor="pointer"
                      pt="4px"
                      _hover={{ transform: "translateX(20%)" }}
                    />
                  </Button>
                </Flex>
              </Flex>
              <Spacer />
              <Flex
                bg="teal.300"
                align="center"
                justify="center"
                borderRadius="15px"
                width={{ lg: "40%" }}
                height={"66%"}
              >
                <Image
                  src={logoP}
                  alt="chakra image"
                  minWidth={{ md: "300px", lg: "auto" }}
                  height={"80%"}
                />
              </Flex>
            </Flex>
          </CardBody>
        </Card>
          <Card p="16px" mt="24px">
            <CardHeader>
              <Flex justify="space-between" align="center" minHeight="60px" w="100%">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  Payment Method
                </Text>
                <Button
                  bg={bgButton}
                  color="white"
                  fontSize="xs"
                  variant="no-hover"
                >
                  ADD NEW CARD
                </Button>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex
                direction={{ sm: "column", md: "row" }}
                align="center"
                w="100%"
                justify="center"
                py="1rem"
              >
                <Flex
                  p="1rem"
                  bg="transparent"
                  borderRadius="15px"
                  width="100%"
                  border="1px solid"
                  borderColor={borderColor}
                  align="center"
                  mb={{ sm: "24px", md: "0px" }}
                  me={{ sm: "0px", md: "24px" }}
                >
                  <IconBox me="10px" w="25px" h="22px">
                    <MastercardIcon w="100%" h="100%" />
                  </IconBox>
                  <Text color="gray.400" fontSize="md" fontWeight="semibold">
                    7812 2139 0823 XXXX
                  </Text>
                  <Spacer />
                  <Button
                    p="0px"
                    bg="transparent"
                    w="16px"
                    h="16px"
                    variant="no-hover"
                  >
                    <Icon as={FaPencilAlt} />
                  </Button>
                </Flex>
                <Flex
                  p="16px"
                  bg="transparent"
                  borderRadius="15px"
                  width="100%"
                  border="1px solid"
                  borderColor={borderColor}
                  align="center"
                >
                  <IconBox me="10px" w="25px" h="25px">
                    <VisaIcon w="100%" h="100%" />
                  </IconBox>
                  <Text color="gray.400" fontSize="md" fontWeight="semibold">
                    7812 2139 0823 XXXX
                  </Text>
                  <Spacer />
                  <Button
                    p="0px"
                    bg="transparent"
                    w="16px"
                    h="16px"
                    variant="no-hover"
                  >
                    <Icon as={FaPencilAlt} />
                  </Button>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </Box>
        <Card
          p="22px"
          my={{ sm: "24px", lg: "0px" }}
          ms={{ sm: "0px", lg: "24px" }}
        >
          <CardHeader>
            <Flex justify="space-between" align="center" mb="1rem" w="100%">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Invoices
              </Text>
              <Button
                colorScheme="teal"
                borderColor="teal.400"
                color="teal.400"
                variant="outline"
                fontSize="xs"
                p="8px 32px"
              >
                VIEW ALL
              </Button>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction="column" w="100%">
              {invoicesData.map((row) => {
                return (
                  <InvoicesRow
                    date={row.date}
                    code={row.code}
                    price={row.price}
                    logo={row.logo}
                    format={row.format}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card>
      </Grid>
      <Grid templateColumns={{ sm: "1fr", lg: "1.6fr 1.2fr" }}>
        <Card my={{ lg: "24px" }} me={{ lg: "24px" }}>
          <Flex direction="column">
            <CardHeader py="12px">
              <Text color={textColor} fontSize="lg" fontWeight="bold">
                Billing Information
              </Text>
            </CardHeader>
            <CardBody>
              <Flex direction="column" w="100%">
                {billingData.map((row) => {
                  return (
                    <BillingRow
                      name={row.name}
                      company={row.company}
                      email={row.email}
                      number={row.number}
                    />
                  );
                })}
              </Flex>
            </CardBody>
          </Flex>
        </Card>
        <Card  my="24px" ms={{ lg: "24px" }}>
          <CardHeader mb="12px">
            <Flex direction="column" w="100%">
              <Flex
                direction={{ sm: "column", lg: "row" }}
                justify={{ sm: "center", lg: "space-between" }}
                align={{ sm: "center" }}
                w="100%"
                my={{ md: "12px" }}
              >
                <Text
                  color={textColor}
                  fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                  fontWeight="bold"
                >
                  Your Transactions
                </Text>
                <Flex align="center">
                  <Icon
                    as={FaRegCalendarAlt}
                    color="gray.400"
                    fontSize="md"
                    me="6px"
                  ></Icon>
                  <Text color="gray.400" fontSize="sm" fontWeight="semibold">
                    23 - 30 March 2021
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction="column" w="100%">
                <Text
                  color="gray.400"
                  fontSize={{ sm: "sm", md: "md" }}
                  fontWeight="semibold"
                  my="12px"
                >
                  NEWEST
                </Text>
                {newestTransactions.map((row) => {
                  return (
                    <TransactionRow
                      name={row.name}
                      logo={row.logo}
                      date={row.date}
                      price={row.price}
                    />
                  );
                })}
                <Text
                  color="gray.400"
                  fontSize={{ sm: "sm", md: "md" }}
                  fontWeight="semibold"
                  my="12px"
                >
                  OLDER
                </Text>
                {olderTransactions.map((row) => {
                  return (
                    <TransactionRow
                      name={row.name}
                      logo={row.logo}
                      date={row.date}
                      price={row.price}
                    />
                  );
                })}
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Billing;
