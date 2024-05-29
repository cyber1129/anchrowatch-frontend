import { useState } from "react";

import { Box, Button, Dialog, Grid, Modal, Typography } from "@mui/material";
import {
  VisibilityOutlined,
  CurrencyBitcoinOutlined,
} from "@mui/icons-material";
import { LineChart } from "@mui/x-charts";
import { DataGrid } from "@mui/x-data-grid";

import logo from "../assets/logo.svg";
import { AddAddress } from "./AddAddress";

export const Dashboard = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const ROW_DATA = [
    {
      id: 0,
      type: "send",
      date: "05/01/2023",
      txid: "75def208asf0asjfajg0agz0asfasfasgag",
      amount: 0.2352616,
      balance: 1.26124253,
      status: "pending",
    },
    {
      id: 1,
      type: "receive",
      date: "05/02/2023",
      txid: "75def208asf0asjfajg0agz0asfasfasgag",
      amount: 0.2352616,
      balance: 1.26124253,
      status: "completed",
    },
  ];

  const COLUMNS = [
    {
      field: "type",
      headerName: "Type",
      sortable: false,
      width: 100,
    },
    {
      field: "date",
      headerName: "Date",
      sortable: true,
      width: 100,
    },
    {
      field: "txid",
      headerName: "TX ID",
      sortable: false,
      width: 100,
    },
    {
      field: "amount",
      headerName: "Amount (BTC)",
      sortable: true,
      width: 100,
    },
    {
      field: "balance",
      headerName: "Balance (BTC)",
      sortable: false,
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 100,
    },
  ];

  return (
    <Box>
      <Box
        height={80}
        bgcolor="#F0F1F1"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingX={3}
        borderBottom="2px solid black"
      >
        <Box display="flex" alignItems="center" gap={4}>
          <img src={logo} alt="logo" />
          <Typography fontSize={20} textTransform="uppercase">
            Dashboard
          </Typography>
        </Box>
        <VisibilityOutlined />
      </Box>
      <Box
        pl={8}
        height={80}
        display="flex"
        alignItems="center"
        borderBottom="2px solid black"
      >
        <Typography fontSize={32}>BTC address here</Typography>
      </Box>

      <Box display="flex">
        <Box width={320}>
          <Box
            padding="13px 20px"
            bgcolor="#F0F1F1"
            borderBottom="2px solid black"
          >
            <Typography fontSize={20} textTransform="uppercase">
              Quick Actions
            </Typography>
          </Box>
          <Box padding={2}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<CurrencyBitcoinOutlined />}
              sx={{ color: "black", borderColor: "black" }}
              onClick={() => setDialogOpen(true)}
            >
              Add BTC Addrses
            </Button>
          </Box>
        </Box>
        <Box
          width="calc(100% - 320px)"
          padding={2}
          borderLeft="2px solid black"
          height={1000}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Box width="100%" border="1px solid black">
            <Box
              display="flex"
              alignItems="center"
              padding="10px 14px"
              height={30}
              bgcolor="#F0F1F1"
              borderBottom="1px solid black"
            >
              <Typography fontSize={20} textTransform="uppercase">
                Holdings
              </Typography>
            </Box>

            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  area: true,
                },
              ]}
              width={1300}
              height={300}
              grid={{ horizontal: true }}
            />
          </Box>
          <Box width="100%" border="1px solid black">
            <Box
              display="flex"
              alignItems="center"
              padding="10px 14px"
              height={30}
              bgcolor="#F0F1F1"
              borderBottom="1px solid black"
            >
              <Typography fontSize={20} textTransform="uppercase">
                Transactions
              </Typography>
            </Box>
            <DataGrid rows={[]} columns={COLUMNS} />
          </Box>
        </Box>
      </Box>

      <Dialog
        open={dialogOpen}
        PaperProps={{ sx: { width: 1000 } }}
        sx={{
          ".MuiPaper-root": { width: "1500px" },
        }}
      >
        <AddAddress />
      </Dialog>
    </Box>
  );
};
