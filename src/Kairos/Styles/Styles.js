import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";



export const theme = createTheme({
  typography: {
    allVariants: {
      fontSize: 12,
    },
    h5: {
      fontSize: 18,
      fontWeight:600,
    },
    h6: {
      fontSize: 14,
      fontWeight:600,
    },
    bold: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
       
        body: {
          
          // Side Menu
          "& .sidemenuCus": {
            "& .MuiDrawer-paper": {
              backgroundColor: "#ffffff",
              color: "#37474f",
              zIndex: "1100",
              boxShadow: "0 0 10px 0 rgb(9 110 182 / 25%)",
              border: 0,
              "& .css-cveggr-MuiListItemIcon-root": {
                minWidth: "40px",
              },
              "& svg": {
                color: "#90a4ae",
                fontSize: "1.3rem",
              },
            },
            "& a": {
              color: "#406887",
            },
            "& a.active": {
              color: "#fff",
              "& .css-1gjdz3h-MuiTypography-root": {
                fontSize: "14px",
              },
              "& .MuiListItem-button": {
                background: "#096eb6",
              },
              "& svg": {
                color: "#fff",
              },
            },
            "& hr": {
              borderColor: "rgb(255 255 255 / 12%)",
            },
            "& .css-1u2mxbp": {
              minHeight: "48px",
            },
          },
          // Side Menu End

          //Header 
          "& .headerCus": {
            backgroundColor: "#f6f6f6",
            width: "100%",
            boxShadow: "none",
            "& .css-1t29gy6-MuiToolbar-root": {
              minHeight: "48px",
              backgroundColor: "#f6f6f6",
              color: "#096eb6",
              borderRadius: "0px",
              boxShadow: "none",


              "& .css-azeo8y-MuiAvatar-root": {
                color: "#207398",
                backgroundColor: "#ffffff",
              },
            },
            "& .MuiButtonBase-root": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          },
          //Header End

          //svg icon css
          "& .MuiSvgIcon-root": {
            fontSize: "inherit",
          },
          //Accordion 
          "& .MuiAccordion-root": {
            backgroundColor: "#f3fbff",
          },

          "& .createBtn": {
            float: "right",
            padding: "8px 0",
           
"& .MuiToolbar-root":{
  backgroundColor:"transparent",
  padding:0,
},
           
            '& .MuiIconButton-root':{
              borderRadius:'4px',
              backgroundColor:"#fff",
              color:"#808b9a",
              border:"1px solid #808b9a",
              marginLeft: "4px",
              '&:hover':{
                color:"#296df5",
              }
            }
          },
          "& .refreshBtn": {
            float: "left",
            padding: "8px 0",
            "& .MuiButtonBase-root": {
              border: '1px solid #bdbdbd',
              borderRadius: '4px',
            }
          },
          "& .ag-theme-balham": {
            height: "100%", width: "100%",
            '& .ag-root-wrapper-body': {
              height: 'auto !important',
            },
            '& .ag-overlay': {
              position: 'static',
            },
            "& .ag-ltr": {
              "& .ag-cell": {
                borderRight: "1px solid #b6b6b6",
              }
            },
            "& .ag-header": {
              backgroundColor: "#e0f3ff",
            },
            "& .rowsDisplay": {
              position: "absolute", bottom: "4px", width: "80px", left: "14px",
              "& .MuiSelect-select": {
                padding: "3.5px 14px",
              },
            }
          },
          "& .logoSec": {
            display: "flex",
            alignItems: "center",
            "& .menuBtn": {
              marginLeft: "0px",
            },
            "& .MuiBox-root": {
              marginRight: "8px",
            },
          },
          "& .MuiToolbar-root": {
            padding: "0px 16px",
          },
          "& .innerHeader": {
            backgroundColor: "#fff",
            color: "#90a4ae",
            padding: "8px 16px",
            marginLeft: "-24px",
            marginRight: "-24px",
            marginBottom: "16px",
            boxShadow: "0 0 10px 0 rgb(9 110 182 / 25%)",
            "& .MuiTypography-h6": {
              color: "#096fb7",
              fontSize: 16,
            }
          },
          "& .selectVal": {
            marginTop: 16,
            "& .selValBody": {
              padding: "8px 8px",
              "& .MuiGrid-grid-md-6": {
                padding: "0px 8px",
                "&:first-child , &:nth-of-type(2)": {
                  border: 0,
                }
              }
            }
          },
          "& .selColVal": {
            backgroundColor: "#f6f6f6",
            padding: "4px 8px",
            borderRadius: "4px",
          },

          //Table UI
          "& table.MuiTable-root": {
            border: "1px solid #eee",
            "& tr": {
              "& th": {
                padding: "4px 10px",
                borderLeft: "1px solid #eee",
                backgroundColor: "#e0f3ff",
              },
              "& td": {
                padding: "4px 10px",
                borderLeft: "1px solid #eee",
                "& .MuiTablePaginationUnstyled-root": {
                  border: "0px",
                },
                "& .MuiIconButton-root": {
                  padding: "3px",
                  fontSize: "1rem",
                },
              },
              "& .MuiSvgIcon-root": {
                fontSize: "1rem",
              },
            },
            "& tr.active": {
              backgroundColor: "#e5f6fd",
            },
          },
          //End Table UI

          "& .MuiAccordionSummary-root": {
            "& .MuiAccordionSummary-content": {
              margin: "10px 0",
            },
          },
          "& .validations": {
            "& th, & td": {
              borderLeft: 0,
              padding: "3px 10px",
            },
          },
          "& .MuiAccordion-root": {
            "& .MuiInputBase-input": {
              padding: "3px 10px",
              fontSize: "10px",
            },
            "& .MuiInputLabel-root": {
              top: "-6px",
              fontSize: "10px",
            },
            "& .MuiFormLabel-filled , .MuiInputLabel-shrink": {
              top: "2px",
            },
            "& .MuiButton-contained": {
              padding: "3px 16px",
              lineHeight: "13px",
              fontSize: "10px",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "1rem",
            },
          },
          "& .dialogCus": {
            "& .MuiDialogActions-spacing": {
              padding: "0px 0px 15px",
              justifyContent: "center",
            },
          },
          "& .MuiAccordion-root": {
            "& .expRow": {
              "& .MuiInputBase-input": {
                padding: "3px 10px",
                fontSize: "10px",
              },
              "& .MuiInputLabel-root": {
                top: "-6px",
                fontSize: "10px",
              },
              "& .MuiFormLabel-filled , .MuiInputLabel-shrink": {
                top: "2px",
              },
            },

            "& .MuiButton-contained.expBtn": {
              padding: "3px 16px",
              lineHeight: "13px",
              fontSize: "10px",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "1rem",
            },
          },

          //Ag Grid 

          "& .ag-root-wrapper": {
            position: "static",
          },

          "& .ag-checkbox-input-wrapper": {
            fontSize: "12px",
            width: "12px",
            height: "12px",
            lineHeight: "12px",
          },


          //Ag Grid End

          "& .PassFail": {
            "& .MuiBox-root , a": {
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            },
            "& .MuiTypography-root": {
              fontSize: 10,
            },
            "& .passed": {
              "& .MuiSvgIcon-root , .MuiTypography-root": {
                color: "#00b104",

              },
            },
            "& .failed": {
              "& .MuiSvgIcon-root , .MuiTypography-root": {
                color: "#ff0b0e",

              },
            },
            "& .MuiSvgIcon-root": {
              fontSize: "0.7rem",
              marginRight: "2px",
            },
          },
          "& .MuiStepConnector-line": {
            borderColor: "#0077fe",
            borderTopStyle: "dashed",
            borderTopWidth: "1.5px",
          },
          //PDF
          "& .PDF":{
            "& .MuiCard-root":{
              boxShadow:"none",
              borderRadius:0,
            }
          },

          //PDF End

          "& .passfailBtn": {
            color: "#333",
            fontSize: "12px!important",
            display:"flex",
            alignItems:"center",
            cursor:"pointer",
            "& span": {
              "&:nth-of-type(1)": {
                color: "green",
                marginRight: 4,
              },
              "&:nth-of-type(2)": {
                color: "#d32f2f",
                marginLeft: 4,
              },
            },
          },
          "& .expRow":{
            backgroundColor:"#fff",
          },
//Single file
'& .fileTextbox':{
  border: ' 1px solid #ccc', 
  position: 'relative', 
  padding: '5.4px', 
  cursor: "pointer",
  whiteSpace: "nowrap",
  overflow:"hidden",
  display:"block",
  textOverflow: "ellipsis",
  paddingRight:"25px",
  '& p':{
    position: 'absolute', 
    right: '5px', 
    top: '5px', 
    alignItems: 'center', 
    display: 'flex',
  },
  '& svg.sucIcon':{
    position: 'absolute', 
    right: '5px', 
    top: '4px', 
    color: 'green',
    fontSize:"20px",
  },
  '& svg.errIcon':{
    fontSize: '13px', 
    ml: 0.4,
  }
},
'& .drawerFile':{
  '& .fileUpGrid1': {
      flexBasis: '100%',
      maxWidth: '100%',
  },
  '& .gridCusmd': {
      flexBasis: '50%',
      maxWidth: '50%',
  },
  '& .MuiGrid-container': {
      '& .MuiGrid-grid-xs-8': {
          flexBasis: '50%',
          maxWidth: '50%',
      },
      '& .MuiGrid-grid-xs-2': {
          flexBasis: '25%',
          maxWidth: '25%',
      }
  }
},
//Single file End

// Checkbox 
'& .MuiCheckbox-root':{
'& .MuiSvgIcon-root':{
  fontSize:'20px',
}
},
// Checkbox End

// Stepper
'& .MuiStepper-horizontal':{
'& .MuiStepLabel-iconContainer':{
  '& svg':{
    fontSize:'20px',
  }
}
},

// Stepper End

// Expanded Row
'& td.expandableRow':{
  padding:'8px 8px !important',
  background:"#fff",
  '& .MuiTabs-root':{
    minHeight:'auto',
    marginBottom:8,
    '& .MuiButtonBase-root':{
      padding:'5px 16px',
      minHeight:'auto',
    },
    '& .MuiTabs-indicator':{
      display:'none',
    },
    '& .MuiButtonBase-root.Mui-selected':{
      backgroundColor:'#1976d2',
      color:'#fff',
    }
  }
},
"& .passfailStatus":{
    border: "0.5px solid #3a7d33",
    padding: "5px",
    color: "#3a7d33",
    textAlign:"center",
}
// Expanded Row End
         
        }

        //Body End
      }
    }
  }
});


export const useStyles = makeStyles({
 
  createconnection: {
    "& .MuiBackdrop-root": {
      backgroundColor: "transparent",
    },


  },
  TooltipTop: {
    "& .MuiTooltip-tooltip": {
      backgroundColor: "red",
    },
  },
  title: {
    color: blueGrey[800],
    marginBottom: "16px",
  },
  PaperCus: {
    boxShadow: '0 0px 12px rgb(0 0 0 / 8%)!important',
    position: "relative",
    borderRadius: "4px!important",
    "& .linkCus": {
      color: "#009df6",
      fontSize: "12px",
    },

  },

  headSec: {
    padding: 8,
    paddingBottom: 30,
    background: "linear-gradient(30deg, #92bbc3, #e3efe0, #84b4bd)",
    // background: blueGrey[100],
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    "& .MuiTypography-h6": {
      color: blueGrey[800],
    },
  },
  DBsec: {
    boxShadow: "0 0px 12px rgb(0 0 0 / 8%)",
    position: "relative",
    background: "#fff",
    borderRadius: 4,
    marginBottom: "20px",
    padding: 10,

    "& .MuiSvgIcon-root": {
      fontSize: "2rem",
      marginRight: "5px",
      color: "#006dba",
    },

    "& .MuiTypography-root": {
      color: "#333",
    },
    "& .MuiTypography-h6": {
      fontSize: 16,
    },
    "& a": {
      textDecoration: "none",

    },
    "& .linkCus": {
      color: "#009df6",
    },
  },

  fileSec: {
    position: "relative",
    background: "#f1faff",
    borderRadius: 10,
    marginBottom: "20px",
    padding: 10,
    paddingBottom: 35,
    "& .MuiSvgIcon-root": {
      fontSize: "2rem",
    },

    "& .MuiTypography-h6": {
      color: "#009df6",
      fontSize: 16,
    },
    "& a": {
      background: "#009df6",
      textDecoration: "none",
    },
    "& .linkCus": {
      background: "none",
    },
  },
  TimeCir: {
    display: "flex",
    alignItems: "center",
  },

  upcomingTests: {
    "& .dx-visibility-change-handler": {
      "& .dxc.dxc-chart": {
        width: "100%",
      },
    },
    "& .wBox": {
      background: "#fff",
      marginTop: '8px',
      marginBottom: '8px',
      "& a": {
        background: "#f3f4f6",
        display: "block",
        padding: "4px 8px",
        marginBottom: '1px',
        borderRadius: '4px',
        "& h6": {
          lineHeight: "16px",
        },

      },

      "& p": {

        "&:last-child": {
          border: 0,
        },
      },
    },


    "& .rBox": {
      backgroundColor: "#fff",
      borderRadius: "4px",
      maxHeight: "117px",
      minHeight: "117px",
      overflow: "auto",
      "& p": {
        padding: "4px 8px",
        borderBottom: "1px solid #eee",
        "& a": {
          fontSize: "12px",
        },
      },
    },
    "& .graphHead": {
      display: "flex",
      "& .MuiPaper-root": {
        textAlign: "center",
        padding: "8px",
        marginRight: "8px",
      },
      "& .MuiPaper-root": {
        "& p": {
          marginRight: '8px',
          "& b": {
            padding: '4px 8px',
            background: '#f3f4f6',
            borderRadius: '4px',
          }
        }

      }
    },

    "& .colorInfo": {
      display: "flex",
      alignItems: "center",
      marginTop: "4px",
      "& .MuiBox-root": {
        display: "flex",
        margin: "auto",
      },
      "& p": {
        display: "flex",
        alignItems: "center",
        marginRight: "16px",
        fontWeight: "500",
        color: "#ffc107",
        "& svg": {
          fontSize: "14px",
          marginRight: "4px",
        },
        "&:first-child": {
          color: "#0074ef",
        },
        "&:last-child": {
          color: "#ff0c00",
        },
      },
    },
    "& .DQhead": {
      padding: '5px 16px',
      borderBottom: '1px solid #eee',
    },
    "& .overallDQ": {
      border: "1px solid #efeff7",
      borderRadius: "4px",

      "& .MuiGrid-item": {
        "& .DQ": {
          padding: "16px",
          minHeight: "79px",
          borderRight: "1px solid #eee",
        },
        "&:last-child": {
          "& .DQ": {
            border: 0,
          },

        }
      }



    },
    "& .graphSec": {
      marginBottom: 16,
      padding: "16px",
      "& .MuiDivider-root": {
        marginBottom: 16,
      },
      "& .card": {
        "& .dx-c-bs4-container": {
          paddingRight: 0,
          paddingLeft: 0,
        },
      },
      "& #bottom-container": {
        position: "absolute",
        top: "-30px",
        right: "0px",
        "& .list-group": {
          listStyle: "none",
          display: "flex",
          padding: "0",
          "& li": {
            paddingLeft: '8px',
          },
        },
      },
      "& .passed , .failed": {
        float: 'right',
      },
    },
    "& .compSec": {
      padding: "0 16px",
      "& .compLeft , .compRight": {
        paddingTop: "16px",
      },
      "& .compRight": {
        borderLeft: "1px solid #eee",
        paddingLeft: "16px",
      },
    },
    "& .DS": {
      "& .MuiGrid-item": {
        "&:first-child": {
          borderRight: "1px solid #eee",
        }
      }
    }
  },
  progress: {
    display: "flex",
    border: "2px solid #efeff7",
    borderRadius: "10px",
    position: "relative",
    "& .MuiBox-root": {
      textAlign: "center",
      color: "#ccc",
      cursor: 'pointer',
      margin: 'auto',
      "&:first-child": {
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
      },
      "&:last-child": {
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
      },
    },
    "& .noData": {
      width: "100%",
      background: "#fff",
      borderRadius: "10px",
    }
  },
  STresult: {
    "& .MuiSvgIcon-root": {
      fontSize: "2rem",
    },
    "& p.MuiTypography-root": {
      color: "#333",
    },
    '& p': {
      '& a': {
        fontWeight: '500',
      },

    },
    "&  a": {
      color: "#71787e",
      textDecoration: "none",
      "& h5": {
        color: "#006dba",
        fontSize: "12px",
        "& b": {
          fontSize: "14px",
          marginLeft: "5px",
        }

      },
    },
    "& .Rsec": {
      textAlign: 'center',
      display: 'inline-block',
      marginBottom: '16px',
      "& h5": {
        display: 'flex',
        alignItems: 'center',
      },
    },
    "& .bBox": {
      width: "100%",
      "& p": {
        display: "inline-block",
        width: "20%",
        border: "1px solid #eee",
        textAlign: 'center',
        minHeight: '51px',
        float: 'left',
        padding: '5px 0',
        "&:last-child": {
          lineHeight: '38px',
          '& a': {
            fontWeight: 'normal',
          },
        },
        "& a": {
          display: "block",
        }
      }
    },


  },
});

export const tableStyles = makeStyles({
  tableCus: {



    "& .popoverTable": {
      "& td": {
        verticalAlign: "top",
      },
    },
    "& .accCus": {
      marginBottom: 16,
      "& .MuiAccordionSummary-root": {
        minHeight: "auto",
      }
    },
    "& .delSec": {
      "& .MuiTypography-root": {
        backgroundColor: 'rgba(25, 118, 210, 0.12)',
        display: "inline-block",
        paddingLeft: 8,
      }

    },

    "& .commonHead": {
      padding: "0.5px 16px",
      backgroundColor: "#e5f6fd",
    }
  },
  dialogCus: {
    "& .MuiDialogActions-spacing": {
      padding: "0px 0px 15px",
      justifyContent: "center",
    },
  },
});

export const sideUseStyles = makeStyles({
  sidemenuUI: {
    "& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
    {
      minWidth: "148px",
      backgroundColor: "#207398",
      "& .MuiMenu-list>li>a": {
        textDecoration: "none",
        color: "#fff",
      },
    },
  },
});
