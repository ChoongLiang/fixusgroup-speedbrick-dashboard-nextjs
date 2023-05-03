import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { getInitials } from "src/utils/get-initials";
import * as React from "react";

const data = [
  {
    projectName: "TEST 01",
    companyName: "fixus",
    financialSummary: [
      {
        balanceBudget: {
          section: "balanceBudget",
          totalCostIncurred: 100,
          constructionBudget: 80,
        },
        revenue: {
          unpaidCerts: 9,
          "certs(undue)": 0,
          paymentReceived: 0,
          section: "revenue",
        },
        timestamp: {
          seconds: 1683101600,
          nanoseconds: 706000000,
        },
        "variance(RevenueTotalCostIncurred)": {
          section: "variance(RevenueTotalCostIncurred)",
        },
        totalCostIncurred: {
          "(b)SubcontractorsNsc": 0,
          "(a)MaterialDelivered": 0,
          "(e)SubcontractorsMaterialOnly": 0,
          section: "totalCostIncurred",
          "(g)SiteTransfer": 0,
          "(d)SubcontractorsMachinery": 0,
          "(c)SubcontractorsDscTotalSub": 100,
          "(f)SubcontractorsLabour": 0,
          "(h)MaterialPendingDelivery": 0,
        },
        limitOfRetentionSum: {
          retainedByClient: 1,
          section: "limitOfRetentionSum",
          retainedForSubcon: 0,
        },
        contractValue: {
          mainContractVo: 0,
          subcontractsAwardedBq: 1,
          mainContractBq: 100,
          subcontractsAwardedVo: 0,
          section: "contractValue",
        },
      },
    ],
  },
  {
    projectName: "TEST 01",
    companyName: "absb",
    financialSummary: [
      {
        "variance(RevenueTotalCostIncurred)": {
          section: "variance(RevenueTotalCostIncurred)",
        },
        contractValue: {
          mainContractBq: 1,
          mainContractVo: 0,
          subcontractsAwardedBq: 1,
          subcontractsAwardedVo: 0,
          section: "contractValue",
        },
        limitOfRetentionSum: {
          retainedForSubcon: 0,
          section: "limitOfRetentionSum",
          retainedByClient: 0,
        },
        revenue: {
          paymentReceived: 0,
          unpaidCerts: 0,
          section: "revenue",
          "certs(undue)": 0,
        },
        balanceBudget: {
          constructionBudget: 1,
          totalCostIncurred: 200,
          section: "balanceBudget",
        },
        timestamp: {
          seconds: 1683101604,
          nanoseconds: 487000000,
        },
        totalCostIncurred: {
          "(g)SiteTransfer": 0,
          "(h)MaterialPendingDelivery": 0,
          "(e)SubcontractorsMaterialOnly": 0,
          "(b)SubcontractorsNsc": 0,
          "(a)MaterialDelivered": 0,
          section: "totalCostIncurred",
          "(c)SubcontractorsDscTotalSub": 200,
          "(f)SubcontractorsLabour": 0,
          "(d)SubcontractorsMachinery": 0,
        },
      },
    ],
  },
  {
    projectName: "TEST 01",
    companyName: "ilsb",
    financialSummary: [
      {
        limitOfRetentionSum: {
          section: "limitOfRetentionSum",
          retainedForSubcon: 0,
          retainedByClient: 0,
        },
        revenue: {
          "certs(undue)": 0,
          section: "revenue",
          unpaidCerts: 0,
          paymentReceived: 0,
        },
        "variance(RevenueTotalCostIncurred)": {
          section: "variance(RevenueTotalCostIncurred)",
        },
        contractValue: {
          subcontractsAwardedVo: 0,
          section: "contractValue",
          mainContractBq: 1000000,
          subcontractsAwardedBq: 1,
          mainContractVo: 0,
        },
        totalCostIncurred: {
          "(c)SubcontractorsDscTotalSub": 500,
          "(d)SubcontractorsMachinery": 0,
          "(a)MaterialDelivered": 0,
          section: "totalCostIncurred",
          "(g)SiteTransfer": 0,
          "(b)SubcontractorsNsc": 0,
          "(e)SubcontractorsMaterialOnly": 0,
          "(f)SubcontractorsLabour": 0,
          "(h)MaterialPendingDelivery": 0,
        },
        balanceBudget: {
          section: "balanceBudget",
          constructionBudget: 0,
          totalCostIncurred: 500,
        },
        timestamp: {
          seconds: 1683101607,
          nanoseconds: 872000000,
        },
      },
    ],
  },
  {
    projectName: "TEST 01",
    companyName: "prsb",
    financialSummary: [
      {
        contractValue: {
          mainContractBq: 1,
          subcontractsAwardedVo: 0,
          mainContractVo: 0,
          subcontractsAwardedBq: 1,
          section: "contractValue",
        },
        limitOfRetentionSum: {
          retainedByClient: 0,
          retainedForSubcon: 0,
          section: "limitOfRetentionSum",
        },
        totalCostIncurred: {
          "(e)SubcontractorsMaterialOnly": 0,
          "(c)SubcontractorsDscTotalSub": 0,
          "(h)MaterialPendingDelivery": 0,
          section: "totalCostIncurred",
          "(b)SubcontractorsNsc": 0,
          "(d)SubcontractorsMachinery": 0,
          "(a)MaterialDelivered": 0,
          "(g)SiteTransfer": 0,
          "(f)SubcontractorsLabour": 300,
        },
        timestamp: {
          seconds: 1683101610,
          nanoseconds: 511000000,
        },
        "variance(RevenueTotalCostIncurred)": {
          section: "variance(RevenueTotalCostIncurred)",
        },
        balanceBudget: {
          section: "balanceBudget",
          totalCostIncurred: 300,
          constructionBudget: 1,
        },
        revenue: {
          paymentReceived: 0,
          "certs(undue)": 0,
          unpaidCerts: 0,
          section: "revenue",
        },
      },
    ],
  },
  {
    projectName: "TEST 01",
    companyName: "jmsb",
    financialSummary: [
      {
        revenue: {
          section: "revenue",
          unpaidCerts: 0,
          paymentReceived: 0,
          "certs(undue)": 0,
        },
        contractValue: {
          subcontractsAwardedVo: 0,
          mainContractVo: 0,
          mainContractBq: 1,
          section: "contractValue",
          subcontractsAwardedBq: 1,
        },
        "variance(RevenueTotalCostIncurred)": {
          section: "variance(RevenueTotalCostIncurred)",
        },
        totalCostIncurred: {
          "(h)MaterialPendingDelivery": 0,
          "(a)MaterialDelivered": 0,
          "(c)SubcontractorsDscTotalSub": 400,
          section: "totalCostIncurred",
          "(b)SubcontractorsNsc": 0,
          "(d)SubcontractorsMachinery": 0,
          "(f)SubcontractorsLabour": 0,
          "(e)SubcontractorsMaterialOnly": 0,
          "(g)SiteTransfer": 0,
        },
        balanceBudget: {
          constructionBudget: 1,
          totalCostIncurred: 400,
          section: "balanceBudget",
        },
        limitOfRetentionSum: {
          retainedByClient: 0,
          section: "limitOfRetentionSum",
          retainedForSubcon: 0,
        },
        timestamp: {
          seconds: 1683101613,
          nanoseconds: 449000000,
        },
      },
    ],
  },
];

const extractCompanyNames = (data) => {
  const companyNames = new Set();
  data.forEach((item) => companyNames.add(item.companyName));
  return Array.from(companyNames);
};

const groupFinancialSummaryBySection = (data) => {
  const groupedData = {};

  data.forEach((item) => {
    item.financialSummary.forEach((section) => {
      const sectionName = section.section;
      if (!groupedData[sectionName]) {
        groupedData[sectionName] = {};
      }
      Object.entries(section)
        .filter(([key]) => key !== "section")
        .forEach(([key, value]) => {
          if (!groupedData[sectionName][key]) {
            groupedData[sectionName][key] = {};
          }
          groupedData[sectionName][key][item.companyName] = value;
        });
    });
  });

  return groupedData;
};

const companyNames = extractCompanyNames(data);
const groupedFinancialSummary = groupFinancialSummaryBySection(data);

const renderSectionHeaders = () => {
  return (
    <TableRow>
      <TableCell>Section</TableCell>
      <TableCell>Details</TableCell>
      {companyNames.map((company, index) => (
        <TableCell key={index}>{company}</TableCell>
      ))}
      <TableCell>Group Status</TableCell>
    </TableRow>
  );
};

const renderFinancialSummary = () => {
  return Object.entries(groupedFinancialSummary).map(([sectionName, sectionValues]) => (
    <React.Fragment key={sectionName}>
      <TableRow>
        <TableCell rowSpan={Object.keys(sectionValues).length + 1}>{sectionName}</TableCell>
      </TableRow>
      {Object.entries(sectionValues).map(([key, value]) => (
        <TableRow key={key}>
          <TableCell>{key}</TableCell>
          {companyNames.map((company, index) => (
            <TableCell key={index}>{value[company] || "-"}</TableCell>
          ))}
          <TableCell> {/* Group Status values should be calculated and placed here */}</TableCell>
        </TableRow>
      ))}
    </React.Fragment>
  ));
};

export const CustomersTable = ({ projects }) => {
  // return <h1>hi</h1>;

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>{renderSectionHeaders()}</TableHead>
            <TableBody>{renderFinancialSummary()}</TableBody>
          </Table>
        </Box>
      </Scrollbar>
    </Card>
  );
};
