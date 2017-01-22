---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Oe_rr_Report-101_24 

 property | value 
--- | --- 
 id | Oe_rr_Report-101_24
 fmId | 101.24
 label | Oe/rr Report
 location | ^ORD(101.24,
 description | {::nomarkdown}This file contains definitions and parameters used in various reports<br/>within CPRS.<br/> <br/>Entry numbers >1000 are reserved for national use.  Any local entries<br/>should be added to a number <1000.  If this convention is not followed,<br/>you run the risk of having your local entries overwritten by a patch<br/>or future release of CPRS.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .001 | Number | {::nomarkdown}This is the Number field for the file.{:/} | IEN |  |  |  | 
| name | .01 | Name | {::nomarkdown}This is the Name of the report.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| id-_02 | .02 | Id | {::nomarkdown}This is the code that identifies the report.  Each tab in CPRS that<br/>uses reports looks for this ID in order to process the report.<br/>Each tab also uses a unique set of ID's.  An ID of 5 on the Reports<br/>Tab may not identify the same report on a different tab.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| remote | .03 | Remote | {::nomarkdown}This field is used to identify which reports allow remote access through<br/>Remote Data Views.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>2</dt><dd>REMOTE ONLY</dd></dl>{:/} | 
| qualifier | .04 | Qualifier | {::nomarkdown}This field identifies which qualifier to use when processing the report.<br/>Examples of qualifiers are HSType, DateTime, Imaging and NutrAssess.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>4</dt><dd>NutrAssess</dd><dt>1</dt><dd>HSType</dd><dt>28</dt><dd>Surgery</dd><dt>2</dt><dd>DateTime</dd><dt>3</dt><dd>Imaging</dd><dt>19</dt><dd>MedicineProcedure</dd><dt>6</dt><dd>HSWPComponent</dd><dt>39</dt><dd>ListView</dd><dt>5</dt><dd>HSComponent</dd></dl>{:/} | 
| routine | .05 | Routine | {::nomarkdown}This is the routine that is invoked to produce the report.{:/} | STRING |  |  |  | 
| entry_point | .06 | Entry Point | {::nomarkdown}This is the entry point for the ROUTINE that is invoked to produce the<br/>report.{:/} | STRING |  |  |  | 
| category | .07 | Category | {::nomarkdown}This field puts reports into a category that is evaluated by the GUI<br/>when the report is processed.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>5</dt><dd>GRAPHIC</dd><dt>6</dt><dd>LISTVIEW</dd><dt>2</dt><dd>FIXED W/HEADER</dd><dt>3</dt><dd>FIXED W/DATE&HEADER</dd><dt>1</dt><dd>FIXED W/DATE</dd><dt>0</dt><dd>FIXED</dd><dt>4</dt><dd>SPECIALIZED</dd></dl>{:/} | 
| tab | .08 | Tab | {::nomarkdown}This fields identifies the appropriate tab for a report in CPRS.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>L</dt><dd>LABS TAB</dd><dt>R</dt><dd>REPORTS TAB</dd><dt>CD</dt><dd>COVER SHEET DETAILS</dd><dt>C</dt><dd>COVER SHEET</dd></dl>{:/} | 
| mixedcase | .09 | Mixedcase | {::nomarkdown}This is used in the cover sheet and is used to display the returned<br/>list in mixed case.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| invert | .1 | Invert | {::nomarkdown}This field is used to invert a list of data returned in the Cover sheet{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| text_color | .11 | Text Color | {::nomarkdown}This field determines the text color for the returned data.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>Blue</dt><dd>BLUE</dd><dt>Purple</dt><dd>PURPLE</dd><dt>Aqua</dt><dd>AQUA</dd><dt>Fuchsia</dt><dd>FUCHSIA</dd><dt>Maroon</dt><dd>MAROON</dd><dt>Green</dt><dd>GREEN</dd><dt>Yellow</dt><dd>YELLOW</dd><dt>Teal</dt><dd>TEAL</dd><dt>Olive</dt><dd>OLIVE</dd><dt>Black</dt><dd>BLACK</dd><dt>Red</dt><dd>RED</dd><dt>Lime</dt><dd>LIME</dd></dl>{:/} | 
| type-_12 | .12 | Type | {::nomarkdown}This field identifies the type for an entry.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>L</dt><dd>LISTMAN ONLY</dd><dt>M</dt><dd>MENU</dd><dt>S</dt><dd>SELECTION LIST</dd><dt>H</dt><dd>HTML</dd><dt>G</dt><dd>GRAPH</dd><dt>R</dt><dd>REPORT</dd><dt>V</dt><dd>LISTVIEW</dd></dl>{:/} | 
| rpc | .13 | Rpc | {::nomarkdown}This is the RPC that is called inside the GUI to produce the report.{:/} | POINTER |  |  | Remote_Procedure-8994 | 
| date_format | .14 | Date Format | {::nomarkdown}This field determines what kind of format to display date/time fields.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>T</dt><dd>DATE WITH TIME</dd><dt>D</dt><dd>DATE ONLY</dd></dl>{:/} | 
| date_piece | .15 | Date Piece | {::nomarkdown}This is used on the Cover Sheet to determine which piece the date field<br/>occupies.{:/} | NUMERIC |  |  |  | 
| tab_positions | .16 | Tab Positions | {::nomarkdown}This is the value that will be used for the Tab property for the listbox<br/>associated with this report on the Cover Sheet.{:/} | STRING |  |  |  | 
| pieces | .17 | Pieces | {::nomarkdown}This field is used by the Cover Sheet to determine what pieces of data<br/>to display in the listbox.{:/} | STRING |  |  |  | 
| detail_report | .18 | Detail Report | {::nomarkdown}This field is used to get the details of an item on the cover sheet.{:/} | POINTER |  |  | Oe_rr_Report-101_24 | 
| report_tag | .19 | Report Tag | {::nomarkdown}This is the entry point tag for a report extract.{:/} | STRING |  |  |  | 
| report_routine | .191 | Report Routine | {::nomarkdown}This is the routine associated with the REPORT TAG for report extracts.{:/} | STRING |  |  |  | 
| report_component | .192 | Report Component | {::nomarkdown}This is the report component associated with this report.{:/} | POINTER |  |  | Health_Summary_Component-142_1 | 
| param_1 | .21 | Param 1 | {::nomarkdown}This is the 1st parameter passed to the RPC, if needed.{:/} | STRING |  |  |  | 
| param_2 | .22 | Param 2 | {::nomarkdown}This is the 2nd parameter passed to the RPC, if needed.{:/} | STRING |  |  |  | 
| heading | .23 | Heading | {::nomarkdown}This is the heading used on the Cover sheet for the list of items.{:/} | STRING |  |  |  | 
| descriptive_text | .24 | Descriptive Text | {::nomarkdown}This is a more descriptive name than what might be included in the <br/>NAME field.{:/} | STRING |  | REQUIRED |  | 
| node | .25 | Node | {::nomarkdown}This is used by the Cover Sheet routines to define the node in the ^XTMP<br/>global to store the data.{:/} | STRING |  |  |  | 
| print_tag | .26 | Print Tag | {::nomarkdown}This is the entry point tag used when printing reports that do their own<br/>Write statements.{:/} | STRING |  |  |  | 
| print_routine | .27 | Print Routine | {::nomarkdown}This is the entry point routine used when printing reports that do their own<br/>Write statements.{:/} | STRING |  |  |  | 
| extract_tag | .28 | Extract Tag | {::nomarkdown}This is the entry point for the extract routine that pulls the data from<br/>package API's and/or package files.{:/} | STRING |  |  |  | 
| extract_routine | .29 | Extract Routine | {::nomarkdown}This is the extract routine that pulls data from package API's and/or<br/>package files.{:/} | STRING |  |  |  | 
| sort_order | .41 | Sort Order | {::nomarkdown}This field is used when sorting columns of data on at grid within CPRS.<br/>It determines the sort order to be used in a multi-column sort.  The<br/>primary sort column is always the column header clicked on by the user.<br/>If this field has values in the form #:#, then a multi-column sort is<br/>done, using the column numbers identified in this field for the second<br/>and third level sorting.{:/} | STRING |  |  |  | 
| maximum_days_back | .42 | Maximum Days Back | {::nomarkdown}This field restricts the report date range to the maximum value specified.{:/} | NUMERIC |  |  |  | 
| fhie_report | .43 | Fhie Report | {::nomarkdown}This field identifies reports that are available through FHIE.<br/>The item in this field is the code for the report available through<br/>the FHIE server.{:/} | STRING |  |  |  | 
| direct | .44 | Direct | {::nomarkdown}This field allows a report to make a direct remote data call to<br/>a remote site.  Use caution in setting this field to yes.  It has<br/>the effect of disabling CPRS until the remote call is finished, but<br/>also may speed up the query by bypassing taskman latency.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| hdr_report | .45 | Hdr Report | {::nomarkdown}This field flags reports that are generated from the HDR.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| hdr_routine | .46 | Hdr Routine | {::nomarkdown}This is the HDR routine that modifies HDR data for CPRS.{:/} | STRING |  |  |  | 
| hdr_entry_point | .47 | Hdr Entry Point | {::nomarkdown}This is the HDR entry point that modifies HDR data for CPRS.{:/} | STRING |  |  |  | 
| fhie_data | .48 | Fhie Data | {::nomarkdown}This field is used to tell CPRS that DOD/FHIE data can be accessed<br/>for this report.  Special code has to be written by CPRS and DOD<br/>for this to happen.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| fhie_remote_data_only | .49 | Fhie/remote Data Only | {::nomarkdown}This field determines if a report can show local VA data and Remote <br/>data. Enter YES if LOCAL data should be excluded from the report.<br/>Some Department of Defense (DOD) reports don't have a VistA<br/>equivalent (Questionnaires, Histories). An entry of YES would be<br/>appropriate for those kinds of reports.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| disable | .491 | Disable | {::nomarkdown}This field will disable a report.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| column_headers | 3 | Column Headers |  | [OBJECT] |  |  | [Column_Headers-101_243](#Column_Headers-101_243)  | 
| item | 10 | Item |  | [OBJECT] |  |  | [Item-101_241](#Item-101_241)  | 

## <a name="Column_Headers-101_243"></a>Column_Headers-101_243 

 property | value 
--- | --- 
 id | Column_Headers-101_243
 label | Column Headers

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| column_headers | .01 | Column Headers | {::nomarkdown}These are the column headings used on a report in ListView format.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| visible | .02 | Visible | {::nomarkdown}This field determines the visible property of the column.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>YES</dd><dt>1</dt><dd>NO</dd></dl>{:/} | 
| sequence | .03 | Sequence | {::nomarkdown}This is the sequence for the column header.{:/} | NUMERIC |  | INDEXED |  | 
| type-_04 | .04 | Type | {::nomarkdown}This field identifies columns that contain multiple lines of text.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>SINGLE PIECE VALUE</dd><dt>1</dt><dd>WORD PROCESSING</dd></dl>{:/} | 
| include_on_detail | .05 | Include On Detail | {::nomarkdown}This field is used to determine what data to include in the details of<br/>a report.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| print_length | .06 | Print Length | {::nomarkdown}This is the field length used when printing this column on a report.{:/} | NUMERIC |  |  |  | 
| include_on_print | .07 | Include On Print | {::nomarkdown}This field determines which columns are included when a printout is<br/>requested.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| print_title | .08 | Print Title | {::nomarkdown}This field is used when printing this field in lieu of the Column Header.{:/} | STRING |  |  |  | 
| data_type | .09 | Data Type | {::nomarkdown}This is the data type of the column.  It is used when sorting columns.<br/>The default data type is 0 - FREE TEXT.  If no value is entered, it is<br/>assumed to be FREE TEXT.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>2</dt><dd>DATE/TIME</dd><dt>0</dt><dd>FREE TEXT</dd><dt>1</dt><dd>NUMERIC</dd></dl>{:/} | 
| width | .1 | Width | {::nomarkdown}This field is for the column width.  No value needs to be entered because<br/>the value is actually obtained from a User level parameter.  The field<br/>is defined here to reserve the 10 piece of this node so that future<br/>field definitions won't break the RPC used in CPRS to get column properties<br/>where the width is stored in the 10 piece.{:/} | NUMERIC |  |  |  | 
| hdr_modifier | 1 | Hdr Modifier | {::nomarkdown}This is code executed when HDR data needs to be modified.<br/>When this field is executed, the variable ORX will have the value<br/>passed in from the HDR.  If this value needs to be manipulated, set the<br/>new value into ORX.  If the value is ignored (not to be displayed),<br/>then set the value of ORX=\-1-\{:/} | STRING |  |  |  | 

## <a name="Item-101_241"></a>Item-101_241 

 property | value 
--- | --- 
 id | Item-101_241
 label | Item

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| item | .01 | Item | {::nomarkdown}This is used in building a treeview of reports for CPRS GUI.{:/} | POINTER |  | REQUIRED, INDEXED | Oe_rr_Report-101_24 | 
| header_text | .02 | Header Text | {::nomarkdown}This is the header to be used.{:/} | STRING |  |  |  | 
| sequence | .03 | Sequence | {::nomarkdown}This is the sequence number for this report.{:/} | NUMERIC |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:36 am</p>{:/}