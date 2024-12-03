# A re-usable data explorer based on the NYC Environment and Health Data Portal
This repository contains re-usable code that you can use to build your own Data Explorer - an embeddable web application that lets you add datasets so that users can browse and visualize data. 

We have stripped down the [Environment and Health Data Portal](https://a816-dohbesp.nyc.gov/IndicatorPublic) to just a single page - the [Asthma page on the Data Explorer](https://a816-dohbesp.nyc.gov/IndicatorPublic/data-explorer/asthma/). We've chosen Asthma because the asthma datasets (indicators) span a range of dataset types, making it a pretty useful one-page example of how the Data Explorer can display different options.

We built this Data Explorer to be simple, powerful, intuitive, responsive, accessible, and useful. We also want it to be an asset for other projects, so are making this code available outside the context of the rest of the site in hopes that it helps other projects use this (or aspects of it).

![image](https://github.com/user-attachments/assets/192c1c8d-0942-4be7-842c-41e7680337e6)

You can, for example, fork this repository, put it in your own Github repository, add your own data, serve the site via Github Pages, and iframe this application into your own website. 

The technologies this uses are:
- [The NYC Core Framework](https://www.nyc.gov/assets/oti/html/nyc-core-framework/index.html), a Bootstrap-based front-end framework
- [D3](https://d3js.org/), for ingesting data
- [Arquero](https://github.com/uwdata/arquero), for ingesting and manipulating data on the client side
- JavaScript, for managing interaction and client-side data management
- [DataTables.net](https://datatables.net/) for displaying the summary data tables
- [Vega-Lite](https://vega.github.io/vega-lite/), for generating interactive visualizations

## Getting started
This Readme file provides information on how to make this your own. However, you will likely need a developer with a decent understanding of static sites (this uses Hugo), JavaScript, and data.

You will need to install:
- Hugo
- npm
- This repository's dependencies via `npm install`

Once you have those installed and this repository opened in an IDE, then, you can open the terminal and preview the site by entering the command `hugo serve`. Hugo will print to the terminal a local URL where you can preview this - likely something like `http://localhost:1313/`.

To build the site, the command `hugo` will assemble the site to the `/docs` folder.

## How to make it your own
You can make this your own by replacing the data and metadata with your own files. These will need to be structured the same way that we structure data for the Environment and Health Data Portal. This Readme file contains information on how to structure data and metadata files so that they can be displayed in here. 

Big picture, you will need to:
- Have a database of files
- Export those data to json files structured as indicated here
- Replace our files (detailed below) with your own

You will need:

Metadata files in `/static/indicators/metadata`, including:
-  `metadata.json`, which includes important metadata about your indicators. These include: numeric IDs, names and descriptions, and flags for which views should be displayed in the Data Explorer. (This file also needs to exist in `/assets/indicators/metadata` since it is accessed by Hugo in the page template.)
- `comparisons.json` which includes metadata for Comparisons views - instances where the Trend display shows measures from several different indicators (as opposed to showing a geographic breakdown of one measure).
- `TimePeriods.json` - a central reference file for time periods.

It also requires:
- Data files in `static/indicators/data`. These are individual data files, which match on the IndicatorID in the `metadata.json` file, and so each are named `[IndicatorID].json`.
- Geography files in `static/geography` - topo.json files for the geographies you use. This Data Explorer's map uses a basemap of boroughs to provide a gray underlayer for when there are non-data areas (eg parks).

You can further make this your own by modifying the following files to affect what is displayed, and how:
- `index.html` - the template of this Data Explorer
- JavaScript files in `/assets/js/data-explorer/` - the JS that powers the Data Explorer

Please do due dilligence before launching your own project using this code. Test your data, and features. For example, the Citation Function (as written in here) still mentions the NYC Department of Health and Mental Hygiene; you will likely need to finalize this source code in other ways (like setting the baseURL in the config file) to properly adapt this for your own use. 

## How this works
This Data Explorer will display aggregated, neighborhood-level data with the following views:
- Table
- Map
- Trend
- Correlates (including disparities)

The markdown file in `/content/_index.md` has frontmatter in `indicators` which reference the IndicatorIDs in `metadata.json`. Hugo builds pages by combining the content in a markdown file with a template file; when Hugo builds this site, it will take the IDs in `_index.md`'s frontmatter, look for those IDs in `metadata.json`, and then print each ID's `IndicatorName` field to the page, in the list of datasets.

The page will load data for the selected indicator by getting the numeric data file, `[IndicatorID].json`, that corresponds to the chosen indicator's `IndicatorID`. The page will also look at that indicator's metadata (in `metadata.json`) for various aspects of the indicator: what measures it has, what time periods, what geographies. It will use this metadata to:
- Filter `[IndicatorID].json` prepare a data object that it delivers to the table or visualizations for rendering on the page
- Create the sidebar menus for different interaction options

The following terms are used in our data:
- An **indicator** is the organizing unit of these datasets. 
- A **measure** is a sub-unit of an indicator - For example, an indicator may have one measure that is the number of asthma emergency department visits, and another measure is the rate per 100,000 people of asthma emergency department visits.
- A **geography** is the geographic scale of the data. Most indicators have data at the Citywide and Boroughs geographies, as well as data at several different neighborhood geographies, including Community District, Neighborhood Tabulation Area, and UHF42 neighborhoods. 
- Any given **value** is a value for a measure of an indicator, at a geography, for a time period.

Data files (in `/static/indicators/data`) have the following fields:
- MeasureID: a unique numeric ID for the measure
- GeoID: a ID for the geographic unit
- GeoType: the geography to which the GeoID applies; eg, a datapoint might have the GeoID of "1", which means "The Bronx" if the GeoType is "Borough," or "NYC" if the GeoType is "Citywide" (GeoLookup.csv is a reference file for geographies, GeoTypes, GeoIDs, and names).
- TimePeriodID: a unique ID for the time period for the data point (TimePeriods.json is a reference file for TimePeriodIDs)
- Value: the data value.
- CI: the confidence interval, if it applies to this measure
- DisplayValue: the value, as a string intended for display. This field is used if, for example, a value might be suppressed and not intended for display.
- Note: A note accompanying this datapoint, if applicable.

You may notice that this data structure does not allow for, within a single measure, further by-group faceting of the data - eg, splitting the measure by age, by sex, or by other group status. To do that, you may consider having separate measures or indicators by different groups, rather than faceting one indicator or measure by group. 

## Aspects of the different dataset views
**Table**: Each indicator by default displays a table, which shows all measures for the indicator, all geographies, and the most recent time period. This is a summary of the dataset.

**Maps and charts - a general overview**: When a user clicks a view tab (eg, Map, Trend, Correlate), the JavaScript passes the data and metadata into `renderMap()` or `renderTrend()` or other similar functions. These functions take the data and metadata and deliver it to a Vega-Lite visualization specification, and print it to other key parts of the page (eg, the data source, notes, or 'how calculated' fields on the page).

Generally, these are set to display for specific measures. 

**Map**: A map will display for an indicator if, for its measures, it has information in `VisOptions.Map` in its entry in `metadata.json`. For example:

```
            "Map": [
              {
                "GeoType": "Borough",
                "TimePeriodID": [38, 39, 40],
                "RankReverse": 0
              },
              {
                "GeoType": "UHF42",
                "TimePeriodID": [38, 39, 40],
                "RankReverse": 0
              }
            ],
```

For this indicator's measures, it will offer maps at Borough and UHF42 geographies, for the three time periods indicated there (time period IDs match those in `TimePeriods.json`).

To turn off maps for a measure, just put nulls in the options:

```
            "Map": [
              {
                "GeoType": null,
                "TimePeriodID": [],
                "RankReverse": null
              }
            ],
```

A few aspects of the maps:
- Maps will default to show the finest geography and the most recent time period. To add more geographies or change the order of 'finest geographies', see "set geo file based on geo type" in `assets/js/data-explorer/maps.js`.
- Maps will show choropleth maps for population-controlled measures (rates, percents, etc), and bubble maps for counts/numbers.
- Map display options can be set in `assets/js/data-explorer/maps.js` by modifying the Vega-Lite spec. 

**Trend chart**: Our example data in this repository default to displaying trend data for Citywide and Borough geographies, as neighborhood-level health data is often too variable to be reliable. 

If an Indicator has the `Comparisons` metadata item (eg the below), then the Data Explorer will look up the corresponding numeric ID in `comparisons.json` and use the information in there (the indicator and measure IDs, geographic resolutions, etc) to create a trend chart that shows several indicators.

```
    "Comparisons": [537],
```

**Correlates**: Correlates are scatterplots, joining the measure with other measures (from other indicators) in a scatterplot view. They are determined by information in a measures's `VisOptions.Links` object. 
- Disparities: a 0/1 binary that indicates whether to show the Disparities view. The Disparities view matches the indicator with Neighborhood Poverty (on the most recent overlapping year/time period) and shows it as a binned scatterplot.
- Measures: this section is an array of other measures to scatterplot to. `SecondaryAxis` determines which indicator should be on the x axis, and which should be on the y axis. In order for this to function propertly, the two measures that are linked need to share a Geography. Eg, if one measure has neighborhood-level data at the Community District geography, but the other only has data at the Borough geography, then it will not work properly. 

## Other Metadata
An indicator's metadata includes:
- IndicatorID - a unique numeric ID corresponding to the name of the datafile
- IndicatorName - the name of the indicator, which gets displayed on the page.
- IndicatorLabel - an alternate field that can be used.
- IndicatorDescription - a short description used on the page.
- Comparisons - an ID that matches information in `comparisons.json`
- Measures - information about each indicator's measures. View-level information (eg, what will be shown on a map, trend, or correlates chart) is set at the measure level.

Measure-level metadata includes:
- MeasureID - a unique numeric ID
- MeasureName 
- MeasurementType 
- how_calculated - information about how this measure is calculated
- Sources - the measure's data sources
- DisplayType - what may be appended to the value to indicate the MeasurementType.
- AvailableGeoTypes - an array of geographies available in this dataset
- TrendNoCompare - a flag that indicates whether there should be a vertical line indicating no comparison before and after. Should be a string with a year value, or null.
- AvailableTimePeriodIDs - the IDs (matched in `TimePeriods.json`) avaailable in the data.
- VisOptions - a set of flags and information for which visualization options to activate.

VisOptions include:
- Table: GeoTypes and TimePeriodIDs
- Map: GeoTypes, TimePeriodIDs, and RankReverse (a 0/1 flag currently not used, but which can be used to show different colors - for example, if you want one color scheme for high = good datasets and a different one for high = bad datasets)
- Trend: GeoType and TimePeriodIDs to show on the Trend Chart.
- Links: Disparities, and Measures to link in the Correlates view.

## Anatomy of the page:
This section of the readme focuses on elements of the page, and where in the code they come from.
- The page is generated by combining `/content/_index.md` with `/themes/dohmh/layouts/index.md`. (Other aspects of the page template are stored in `/themes/dohmh/layouts/_default` and `/themes/dohmh/layouts/partials`). Some page-level information (like title) is stored in the frontmatter of this that markdown file.
- "Datasets" list: specified by the IndicatorIDs in `_index.md`, matched on the IndicatorID in `metadata.json`, with the `IndicatorName` displayed.
- "About asthma": the content of `_index.md`.
- The indicator description (eg, "Severe asthma attacks..." in the screenshot below): `IndicatorDescription` for the chosen `IndicatorID`, in `metadata.json`. 
- Table view: displays by default. Columns correspond to an indicator's *measures*. Time periods are matched from `AvailableTimePeriodIDs` in `metadata.json` to those in `TimePeriods.json`.
- Map view: displays if there is information in a measure's `VisOptions.Map` property of `metadata.json`, specified for specific geographies and timeperiodIDs. "Show as" corresponds to the indicator's measures. 
- Trend view: displays if there is information in a measure's `visOptions.Map` property of `metadata.json`. 
- Correlate view: displays if there is information in a measure's `visOptions.Links` property of `metadata.json`; information includes `Disparities` and `Links`. 
- Notes: Displays if there are notes for datapoints that are displayed; the notes are in the data file (`[IndicatorID].json`).
- How calculated: Displays for the *measure* being shown; is in `metadata.json`. 
- Source: Displays for the *measure* being shown; is in `metadata.json`. 

![image](https://github.com/user-attachments/assets/192c1c8d-0942-4be7-842c-41e7680337e6)

## Deployment
One way you can consider deploying this is to use [Github Actions](https://github.com/peaceiris/actions-hugo) to build your source code to another branch in your repository - [see here for examples](https://github.com/nychealth/EH-dataportal/tree/production/.github/workflows). And, you can use [Github Pages](https://pages.github.com/) to serve this branch of built code, resulting in a webpage at `your-username.githubpages.io/your-repository-name`. You can then embed this as an iframe into another website. 

## Notes
The data in this repository are copies of the data in [EHDP-data](www.github.com/nychealth/EHDP-data), *at the time of this repository's creation*. Therefor, it may be out of date by the time of publication; data in this repository, then, are not canonical; they're for demonstration purposes only.

This repository likely includes some unnecessary code. We have taken our product and simplified it a lot, stripping out unused code, but there is further simplication that may happen as you implement it. 

**We do not plan to maintain this in perpetuity**, and may not update this to keep it aligned with changes that happen to the Environment and Health Data Portal, but are publishing this version for re-use. We can answer questions about functionality and implementation, so feel free to open issues. However, since we do not plan on ongoing maintenance of this version, we don't plan to review or accept pull requests to modify or enhance this. 

