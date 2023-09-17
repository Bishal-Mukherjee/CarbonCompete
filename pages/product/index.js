import React from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";

import Globe from "../../assets/svg/home/globe.svg";
import Device from "../../assets/svg/product/device.svg";
import CarbonCanvas from "../../assets/svg/product/carboncanvas.svg";
import CarbonConfidence from "../../assets/svg/product/carbonconfidence.svg";
import LCAGeneration from "../../assets/svg/product/lcageneration.svg";

const ProductComponent = () => {
  const mdUp = useResponsive("up", "md");
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box className="container">
        <Box>
          <Box
            sx={{
              //   transform: `translate(0%, ${mdUp ? 40 : 0}%)`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div id="globe">
              <Globe width={mdUp ? 450 : 400} height={mdUp ? 450 : 400} />
            </div>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "45%",
              transform: "translate(-40%, -50%)",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Box>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: 900,
                    fontSize: 40,
                    textAlign: "center",
                  }}
                >
                  Driving behavioral change through <br /> product level carbon
                  accounting
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          transform: "translate(0%, -25%)",
        }}
      >
        <Device
          {...(mdUp
            ? { width: 700, height: 400, viewBox: "0 0 1200 700" }
            : { width: 380, height: 380, viewBox: "0 0 1100 1200" })}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: -10,
        }}
      >
        <section id="carbonscore">
          <Stack
            direction={"column"}
            width={"100%"}
            sx={{ padding: 15, justifyContent: "flex-start" }}
            spacing={3}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: 30,
                color: "#149BA1",
              }}
            >
              Carbon Score
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "light",
                fontSize: 18,
              }}
            >
              Carbon Score is a real-world representation of a product’s
              emissions from cradle-to-shelf, which is audited continuously.
              Carbon Score utilizes verifiable data and a bottom-up approach to
              accurately calculate emissions at the product level. This approach
              allows input data with higher granularity to calculate Carbon
              Score®, enabling ecosystem players to identify key sources of
              emissions in their supply chain processes for a given a product.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "light",
                fontSize: 18,
              }}
            >
              Aligning with ISSB and its resultant frameworks and regulations ,
              CarbonCompete® proposes a new methodology, encapsulating the
              essence of these frameworks, providing a comprehensive and
              versatile carbon accounting methodology which allows
              inter-operability across industries and processes, which aligns
              with PACT framework
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "light",
                fontSize: 18,
              }}
            >
              a metric that enables ecosystem players to display a product’s
              true environmental footprint. Aligned with SBTI and ISSB
              guidelines, the Carbon Score provides comprehensive insights on a
              product’s real environmental footprint, allowing ecosystem players
              to optimize their product environmental footprint and leverage a
              product’s Carbon Score to gain an edge over other market players
            </Typography>
          </Stack>
        </section>

        <Box
          sx={{
            bgcolor: "#F3F3F3",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <section id="carbonconfidencescore">
            <Stack
              direction={"column"}
              width={"100%"}
              sx={{ padding: 15, justifyContent: "flex-start" }}
              spacing={3}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  fontSize: 30,
                  color: "#149BA1",
                }}
              >
                Carbon Confidence Score
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "light",
                  fontSize: 18,
                }}
              >
                Carbon Confidence Score proposes a new solution by quantifying
                the level of confidence in each set emissions data provided for
                calculation, with the aim of ensuring data transparency,
                integrity, and veracity. Carbon Confidence Score enables and
                drives trust amongst the ecosystem players whilst advocating
                data auditability and traceability.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "light",
                  fontSize: 18,
                }}
              >
                Since the inception of the Carbon Confidence Score, we aligned
                it with the PACT framework and take it further to establish an
                industry leading confidence model that may eventually be adopted
                by the ecosystem.
              </Typography>
            </Stack>
          </section>
        </Box>

        <Box sx={{ transform: "translate(0, -20%)" }}>
          <CarbonConfidence
            {...(mdUp
              ? { width: 700, height: 400, viewBox: "0 0 1200 700" }
              : { width: 380, height: 380, viewBox: "0 0 1100 1200" })}
          />
        </Box>

        <section id="carboncanvas">
          <Box>
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item md={6} xs={12} sm={12}>
                <Stack
                  direction={"column"}
                  width={"100%"}
                  sx={{ pl: 15, justifyContent: "flex-start" }}
                  spacing={5}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      fontSize: 30,
                      color: "#149BA1",
                    }}
                  >
                    Carbon Canvas
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: "light",
                      fontSize: 18,
                    }}
                  >
                    The Carbon Canvas is a dynamic traceability engine, allowing
                    ecosystem players to trace their emissions across the
                    product’s supply chain both upstream and downstream.
                    Identify key sources of emission, missing data from value
                    chain participants and supplier constraints to streamline
                    your emissions reduction protocols.
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: "light",
                      fontSize: 18,
                    }}
                  >
                    Using the Carbon Canvas’s Drag and Drop tool, ecosystem
                    players can simulate impacts of different supply chain
                    models, changing value chain participants and the financial
                    cost related to these investments, enabling them to make
                    more judicious sustainability choices and optimize their
                    supply chain emissions.
                  </Typography>
                </Stack>
              </Grid>

              <Grid item md={6} xs={12} sm={12}>
                <CarbonCanvas height={550} viewBox={"0 0 700 700"} />
              </Grid>
            </Grid>
          </Box>
        </section>

        <section id="#carbonadvise">
          <Box sx={{ bgcolor: "#F3F3F3" }}>
            <Stack direction={"column"} spacing={5} sx={{ padding: 15 }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: 30,
                    color: "#149BA1",
                  }}
                >
                  Carbon Advise
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "light",
                    fontSize: 18,
                  }}
                >
                  Paired with Carbon Canvas, we are introducing Carbon Advise,
                  our recommendation engine providing ecosystem players
                  suggestions to make their supply chains much more carbon
                  efficient. Taking financial costs and sustainability as inputs
                  in our proprietary model, we can recommend alternate value
                  chain participants and newer innovative processes to optimize
                  their emissions and improve on their sustainability targets.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </section>

        <section id="automatedlcageneration">
          <Box>
            <Stack
              direction={"column"}
              spacing={10}
              sx={{ padding: 15, justifyContent: "center" }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: 30,
                    color: "#149BA1",
                  }}
                >
                  Automated LCA generation
                </Typography>
              </Box>

              <Box>
                <LCAGeneration
                  width={1150}
                  height={300}
                  viewBox={"0 0 1200 600"}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "light",
                    fontSize: 20,
                  }}
                >
                  When ecosystem players adopt Carbon Intel and its features, we
                  connect to ERP, QA, PIM, and Inventory management systems with
                  industry standard APIs, while using OCR technology to extract
                  data from various sources (QR Codes, Invoices, Bill of
                  Materials etc.), to obtain real-time data for every stage of
                  the product’s supply chain, allowing us to automate the LCA
                  process and generate real-time LCA dashboards. This data
                  driven LCA model allows ecosystem players to generate on-time
                  LCA reports, enabling them to instantly display their
                  sustainability achievements.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </section>
      </Box>
    </Box>
  );
};

export default ProductComponent;
