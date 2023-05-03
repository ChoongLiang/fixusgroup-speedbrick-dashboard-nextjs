import { useState, useEffect } from "react";
import Head from "next/head";
import ArrowPathIcon from "@heroicons/react/24/solid/ArrowPathIcon";
import { Box, Button, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CustomersTable } from "src/sections/customer/customers-table";
import { CustomersSearch } from "src/sections/customer/customers-search";
import { getDocs, limit, collection, onSnapshot, where, query, orderBy } from "firebase/firestore";
import { db } from "src/firebase/firebase";

const Page = ({ initialData }) => {
  return (
    <>
      <Head>
        <title>Overview | Fixus Group</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">TEST 01</Typography>
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <ArrowPathIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                >
                  Refresh
                </Button>
              </div>
            </Stack>
            <CustomersSearch />

            <CustomersTable projects={initialData} />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// This function runs on the server side and fetches the initial data
export async function getServerSideProps() {
  const COMPANY_LIST = ["fixus", "absb", "ilsb", "prsb", "jmsb"];
  const projectNameFilter = "TEST 01";
  let initialData = [];

  const fetchLatestFinancialSummary = async (financialSummaryRef) => {
    // Your fetchLatestFinancialSummary function with timestamp conversion
    const financialSummaryQuery = query(
      financialSummaryRef,
      orderBy("timestamp", "desc"),
      limit(1)
    );
    const financialSummarySnapshot = await getDocs(financialSummaryQuery);
    let financialData = [];
    financialSummarySnapshot.forEach((financialDoc) => {
      const data = financialDoc.data();
      // Convert the Firestore timestamp to a Unix timestamp
      data.timestamp = data.timestamp.toMillis();
      financialData.push(data);
    });
    return financialData;
  };

  for (const company of COMPANY_LIST) {
    const companyRef = collection(db, company);
    const companyQuery = query(companyRef, where("projectName", "==", projectNameFilter));
    const companySnapshot = await getDocs(companyQuery);

    for (const docSnapshot of companySnapshot.docs) {
      const financialSummaryRef = collection(docSnapshot.ref, "financialSummary");
      const financialData = await fetchLatestFinancialSummary(financialSummaryRef);

      const combinedData = {
        ...docSnapshot.data(),
        companyName: company,
        financialSummary: financialData,
      };

      initialData.push(combinedData);
    }
  }
  console.log(initialData);

  return {
    props: {
      initialData,
    },
  };
}

export default Page;
