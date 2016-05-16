
module.exports = {
  url: 'https://lms-stag-sg.lzd.co/inbound/lmd/runsheet/checkin',
  commands: [],
  elements: {
    header: {
      selector: '.page-header'
    },
    runsheetSelect: {
      selector: '.checkin-runsheets-list'
    },
    runsheetOptions: {
      selector: '.checkin-runsheets-list option'
    },
    runsheetDetails: {
       selector: '.checkin-runsheet-details'
    }
  },
  sections: {
    details: {
      selector: '.checkin-runsheet-details',
      elements: {
       scanSection: {selector: '.checkin-package-scan'},
         checkedTableSection: {selector: '.checkin-table.checkin-packages-checked'},
         uncheckedTableSection: {selector: '.checkin-table.checkin-packages-unchecked'},
         lostTableSection: {selector: '.checkin-table.checkin-packages-lost'}   
      }
    }
  }
};