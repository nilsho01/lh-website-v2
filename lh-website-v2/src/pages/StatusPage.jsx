// src/pages/StatusPage.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import PageWrapper from "../components/common/PageWrapper";

// Config importieren
import {
  STATUS_FIELDS,
  PAGES_STATUS,
  RELEASE_NOTES,
} from "../configs/status.configs";

const MotionPaper = motion.create ? motion.create(Paper) : motion(Paper);

const StatusPage = () => {
  const theme = useTheme();

  const renderStatusChip = (value) => {
    if (value === true) {
      return (
        <Chip
          label="Done"
          size="small"
          color="success"
          sx={{ fontSize: "0.7rem" }}
        />
      );
    }
    if (value === false) {
      return (
        <Chip
          label="Open"
          size="small"
          variant="outlined"
          sx={{ fontSize: "0.7rem" }}
        />
      );
    }
    return (
      <Chip
        label="–"
        size="small"
        variant="outlined"
        sx={{ fontSize: "0.7rem", opacity: 0.5 }}
      />
    );
  };

  return (
      <Box sx={{ bgcolor: "background.default", color: "text.primary", pt: 12, pb: 6 }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Stack spacing={1.5} mb={3} alignItems="flex-start">
            <Typography variant="h5" fontWeight={700}>
              Project status overview
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Internal debug view: per page you can see which steps are already
              done and what is still on the to-do list.
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.6 }}>
              Edit <code>STATUS_FIELDS</code>, <code>PAGES_STATUS</code> and{" "}
              <code>RELEASE_NOTES</code> in{" "}
              <code>src/config/status.config.js</code>.
            </Typography>
          </Stack>

          {/* STATUS TABLE */}
          <MotionPaper
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              border: `1px solid ${
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.06)"
              }`,
            }}
          >
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow
                    sx={{
                      background:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.02)"
                          : "rgba(0,0,0,0.02)",
                    }}
                  >
                    {/* Neue Spalte: Link/Icon */}
                    <TableCell
                      align="center"
                      sx={{ fontWeight: 700, width: 40 }}
                    >
                      {/* optional kleines Label oder Icon */}
                    </TableCell>

                    <TableCell sx={{ fontWeight: 700 }}>Page</TableCell>

                    {STATUS_FIELDS.map((field) => (
                      <TableCell
                        key={field.key}
                        align="center"
                        sx={{ fontWeight: 700, whiteSpace: "nowrap" }}
                      >
                        {field.label}
                      </TableCell>
                    ))}

                    <TableCell sx={{ fontWeight: 700, minWidth: 220 }}>
                      ToDos
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {PAGES_STATUS.map((page) => {
                    const isReachable = page.reachable === true;
                    const targetUrl = `/${page.id}`;

                    return (
                      <TableRow key={page.id} hover>
                        {/* Link-Icon-Spalte */}
                        <TableCell align="center">
                          {isReachable ? (
                            <IconButton
                              component={RouterLink}
                              to={targetUrl}
                              size="small"
                              color="primary"
                            >
                              <OpenInNewIcon fontSize="small" />
                            </IconButton>
                          ) : (
                            <IconButton size="small" disabled>
                              <OpenInNewIcon
                                fontSize="small"
                                sx={{ opacity: 0.3 }}
                              />
                            </IconButton>
                          )}
                        </TableCell>

                        {/* Page Name */}
                        <TableCell
                          sx={{
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {page.label}
                        </TableCell>

                        {/* Status Felder */}
                        {STATUS_FIELDS.map((field) => (
                          <TableCell key={field.key} align="center">
                            {renderStatusChip(page[field.key])}
                          </TableCell>
                        ))}

                        {/* ToDos */}
                        <TableCell>
                          <Typography
                            variant="body2"
                            sx={{ opacity: 0.9, fontSize: "0.8rem" }}
                          >
                            {page.todos || "—"}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </MotionPaper>

          {/* RELEASE NOTES SECTION */}
          <Box
            sx={{
              mt: 5,
              pt: 4,
              borderTop: "1px dashed",
              borderColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.16)"
                  : "rgba(0,0,0,0.12)",
            }}
          >
            <Stack spacing={1.5} mb={3} alignItems="flex-start">
              <Typography variant="h6" fontWeight={700}>
                Release notes
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Overview of important changes across pages.
              </Typography>
            </Stack>

            <Stack spacing={2.5}>
              {RELEASE_NOTES.map((note, index) => (
                <MotionPaper
                  key={note.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  sx={{
                    borderRadius: 3,
                    p: 2.5,
                    border: `1px solid ${
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.06)"
                    }`,
                    background:
                      theme.palette.mode === "dark"
                        ? "rgba(10,12,20,0.9)"
                        : "rgba(255,255,255,0.9)",
                  }}
                >
                  <Stack spacing={1}>
                    {/* Title + Version + Date */}
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={1}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="subtitle1" fontWeight={700}>
                          {note.title}
                        </Typography>
                        {note.version && (
                          <Chip
                            label={`v${note.version}`}
                            size="small"
                            sx={{
                              height: 20,
                              fontSize: "0.7rem",
                              borderRadius: "999px",
                            }}
                          />
                        )}
                      </Stack>

                      {note.date && (
                        <Typography
                          variant="caption"
                          sx={{ opacity: 0.7, whiteSpace: "nowrap" }}
                        >
                          {note.date}
                        </Typography>
                      )}
                    </Stack>

                    {/* Description */}
                    {note.description && (
                      <Typography
                        variant="body2"
                        sx={{ opacity: 0.9, mb: note.items?.length ? 1 : 0 }}
                      >
                        {note.description}
                      </Typography>
                    )}

                    {/* Items / bullet list */}
                    {note.items && note.items.length > 0 && (
                      <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                        {note.items.map((item, idx) => (
                          <Typography
                            key={idx}
                            component="li"
                            variant="body2"
                            sx={{ opacity: 0.9 }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Stack>
                </MotionPaper>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
  );
};

export default StatusPage;
