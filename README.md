# Absence Manager

## Overview
This ReactJS based application will fetch a set of data related to absence from an API and display it in a table form. A set of 10 records (if available) will be displayed after the page loads successfully. Thereafter, pagination can be used to go through the data. A set of filters are available which will help to view the selected data. It would also allow to sort the data by the selected column.

## Details
*  After fetching data from the API, redux store has been implemented to pass the values between the components. 
*  Initial page rendering will depend upon the successful fetch from the API. It will show a loading screen until a response is received, an error screen if the response is received with an error.
*  At the top, there is a text which displays the total number of records that are selected. Below this, there is a line showing the number of records which are hidden due to filters applied.
*  Filters are provided to filter by absence type. Start & End date can also be used to filter out the contents in the table. Initial values for the fields are blank.
    * Absence Type - Text field to enter the type of absence to be filtered.
    * Start Date   - Start date filter is tied to 'Start Date' in data.
    * End Date     - End date filter is tied to 'End Date' in data.
      Date filters can be either open ended or close ended.
*  Sorting is provided on 3 fields: Created at, Start & end dates. Page will be loaded with default sorting on 'Created at' date.
*  Columns are displaying following contents:
    * Member name
    * Absence Type
    * Created On date
    * Start date
    * End date
    * Status
    * Admitter's note
*  Above columns are displayed in a table format with an initial default setup for 10 records.
*  This setting can be changed at lower left bottom of the page to set the number of records to be displayed in the table.
*  On the right bottom side, there is a page number selector available to paginate through subsequent records.
*  Unit test cases are developed using Jest & Enzyme.

## Dependency
This project relies directly on the data supplied by the API.
More details on the API can be found in below GIT repository.

```bash
https://github.com/Nitin3021/json-data-api
```

## Installation

Recommended to use npm for installation of modules.

```bash
npm install
```

## Execution

This project can be cloned and run on your local machine without any additional configuration. But if you need to change the JSON data that is available via an API, then kindly setup the URL accordingly in '/src/actions/absences.js'.

## Usage

To run this program in development environment.

```python
npm run dev-server       
```

To test this project.

```python
npm test
```

## Deployment

This project has been deployed using Heroku. Give it a try and have fun!

```python
https://manage-absence-digitally.herokuapp.com
```

## License
[MIT © NP](https://github.com/Nitin3021)