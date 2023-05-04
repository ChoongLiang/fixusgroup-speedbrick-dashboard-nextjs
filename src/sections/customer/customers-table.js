import { Box, Card, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import * as React from "react";

const SECTION_TITLE = [
  "contractValue",
  "limitOfRetentionSum",
  "balanceBudget",
  "revenue",
  "totalCostIncurred",
  "variance(RevenueTotalCostIncurred)",
];

const extractCompanyNames = (data) => {
  let companyNames = [];
  data.forEach((item) => companyNames.push(item.companyName));
  return companyNames;
};

const groupFinancialSummaryBySection = (data) => {
  const groupedData = {};

  data.forEach((item) => {
    item.financialSummary.forEach((summary) => {
      Object.entries(summary).forEach(([sectionKey, section]) => {
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
  });

  return groupedData;
};

const renderSectionHeaders = (projects) => {
  const companyNames = extractCompanyNames(projects);
  return (
    <TableRow>
      <TableCell>Section</TableCell>
      <TableCell>Details</TableCell>
      {companyNames.map((company, index) => (
        <TableCell key={index} align="right">
          {company}
        </TableCell>
      ))}
      <TableCell>Group Status</TableCell>
    </TableRow>
  );
};

const toReadableString = (str) => {
  return str.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
};

const renderSectionNameCell = (sectionName, sectionLabel) => {
  return (
    <>
      <TableRow hover>
        <TableCell sx={{ fontWeight: "bold" }}>{sectionLabel}</TableCell>
        <TableCell sx={{ fontWeight: "bold" }}>{toReadableString(sectionName)}</TableCell>
        <TableCell colSpan="7"></TableCell>
      </TableRow>
    </>
  );
};

const renderSectionValuesRow = (key, value, projects) => {
  const formatter = new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <TableRow key={key} hover>
      <TableCell></TableCell>
      <TableCell>{toReadableString(key)}</TableCell>
      {projects.map((company, index) => (
        <TableCell key={index} align="right">
          {value[company.companyName] !== undefined
            ? formatter.format(value[company.companyName]).replace("RM", "")
            : "-"}
        </TableCell>
      ))}
      <TableCell> {/* Group Status values should be calculated and placed here */}</TableCell>
    </TableRow>
  );
};

const renderFinancialSummary = (projects) => {
  console.debug("Rendering financial summary for projects:", projects);
  const groupedFinancialSummary = groupFinancialSummaryBySection(projects);

  const sortedGroupedFinancialSummary = {};
  SECTION_TITLE.forEach((sectionTitle) => {
    if (groupedFinancialSummary[sectionTitle]) {
      const sortedSection = Object.fromEntries(
        Object.entries(groupedFinancialSummary[sectionTitle]).sort()
      );
      sortedGroupedFinancialSummary[sectionTitle] = sortedSection;
    }
  });

  const result = Object.entries(sortedGroupedFinancialSummary).map(
    ([sectionName, sectionValues], index) => {
      console.debug("Processing section:", sectionName, sectionValues);
      const sectionLabel = String.fromCharCode(65 + index); // Convert index to alphabet, starting from 'A'
      return (
        <React.Fragment key={sectionName}>
          {renderSectionNameCell(sectionName, sectionLabel)}
          {Object.entries(sectionValues).map(([key, value]) =>
            renderSectionValuesRow(key, value, projects)
          )}
        </React.Fragment>
      );
    }
  );
  console.debug("Rendered financial summary:", result);
  return result;
};

export const CustomersTable = ({ projects }) => {
  console.log(projects);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table size="small">
            <TableHead>{renderSectionHeaders(projects)}</TableHead>
            <TableBody>{renderFinancialSummary(projects)}</TableBody>
          </Table>
        </Box>
      </Scrollbar>
    </Card>
  );
};
