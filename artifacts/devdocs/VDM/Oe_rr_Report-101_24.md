---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Oe_rr_Report-101_24<br/>
<a name="top"></a>
# Oe/rr Report (101.24)
This file contains definitions and parameters used in various reports within CPRS.   Entry numbers >1000 are reserved for national use.  Any local entries should be added to a number <1000.  If this convention is not followed, you run the risk of having your local entries overwritten by a patch or future release of CPRS.

**Global:** ^ORD(101.24,

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 | This is the Number field for the file. | IEN |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the Name of the report. | STRING | INDEXED<br/>REQUIRED | 
**Id**{::nomarkdown}<pre><code>  id-_02</code></pre>{:/} | .02 | This is the code that identifies the report.  Each tab in CPRS that<br/>uses reports looks for this ID in order to process the report.<br/>Each tab also uses a unique set of ID's.  An ID of 5 on the Reports<br/>Tab may not identify the same report on a different tab. | STRING | INDEXED<br/>REQUIRED | 
**Remote**{::nomarkdown}<pre><code>  remote</code></pre>{:/} | .03 | This field is used to identify which reports allow remote access through<br/>Remote Data Views. | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>REMOTE ONLY: <em><strong>2</strong></em>{:/}
**Qualifier**{::nomarkdown}<pre><code>  qualifier</code></pre>{:/} | .04 | This field identifies which qualifier to use when processing the report.<br/>Examples of qualifiers are HSType, DateTime, Imaging and NutrAssess. | ENUMERATION |  | {::nomarkdown}NutrAssess: <em><strong>4</strong></em><br/>HSType: <em><strong>1</strong></em><br/>Surgery: <em><strong>28</strong></em><br/>DateTime: <em><strong>2</strong></em><br/>Imaging: <em><strong>3</strong></em><br/>MedicineProcedure: <em><strong>19</strong></em><br/>HSWPComponent: <em><strong>6</strong></em><br/>ListView: <em><strong>39</strong></em><br/>HSComponent: <em><strong>5</strong></em>{:/}
**Routine**{::nomarkdown}<pre><code>  routine</code></pre>{:/} | .05 | This is the routine that is invoked to produce the report. | STRING |  | 
**Entry Point**{::nomarkdown}<pre><code>  entry_point</code></pre>{:/} | .06 | This is the entry point for the ROUTINE that is invoked to produce the<br/>report. | STRING |  | 
**Category**{::nomarkdown}<pre><code>  category</code></pre>{:/} | .07 | This field puts reports into a category that is evaluated by the GUI<br/>when the report is processed. | ENUMERATION |  | {::nomarkdown}GRAPHIC: <em><strong>5</strong></em><br/>LISTVIEW: <em><strong>6</strong></em><br/>FIXED W/HEADER: <em><strong>2</strong></em><br/>FIXED W/DATE&HEADER: <em><strong>3</strong></em><br/>FIXED W/DATE: <em><strong>1</strong></em><br/>FIXED: <em><strong>0</strong></em><br/>SPECIALIZED: <em><strong>4</strong></em>{:/}
**Tab**{::nomarkdown}<pre><code>  tab</code></pre>{:/} | .08 | This fields identifies the appropriate tab for a report in CPRS. | ENUMERATION |  | {::nomarkdown}LABS TAB: <em><strong>L</strong></em><br/>REPORTS TAB: <em><strong>R</strong></em><br/>COVER SHEET DETAILS: <em><strong>CD</strong></em><br/>COVER SHEET: <em><strong>C</strong></em>{:/}
**Mixedcase**{::nomarkdown}<pre><code>  mixedcase</code></pre>{:/} | .09 | This is used in the cover sheet and is used to display the returned<br/>list in mixed case. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Invert**{::nomarkdown}<pre><code>  invert</code></pre>{:/} | .1 | This field is used to invert a list of data returned in the Cover sheet | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Text Color**{::nomarkdown}<pre><code>  text_color</code></pre>{:/} | .11 | This field determines the text color for the returned data. | ENUMERATION |  | {::nomarkdown}BLUE: <em><strong>Blue</strong></em><br/>PURPLE: <em><strong>Purple</strong></em><br/>AQUA: <em><strong>Aqua</strong></em><br/>FUCHSIA: <em><strong>Fuchsia</strong></em><br/>MAROON: <em><strong>Maroon</strong></em><br/>GREEN: <em><strong>Green</strong></em><br/>YELLOW: <em><strong>Yellow</strong></em><br/>TEAL: <em><strong>Teal</strong></em><br/>OLIVE: <em><strong>Olive</strong></em><br/>BLACK: <em><strong>Black</strong></em><br/>RED: <em><strong>Red</strong></em><br/>LIME: <em><strong>Lime</strong></em>{:/}
**Type**{::nomarkdown}<pre><code>  type-_12</code></pre>{:/} | .12 | This field identifies the type for an entry. | ENUMERATION |  | {::nomarkdown}LISTMAN ONLY: <em><strong>L</strong></em><br/>MENU: <em><strong>M</strong></em><br/>SELECTION LIST: <em><strong>S</strong></em><br/>HTML: <em><strong>H</strong></em><br/>GRAPH: <em><strong>G</strong></em><br/>REPORT: <em><strong>R</strong></em><br/>LISTVIEW: <em><strong>V</strong></em>{:/}
**Rpc**{::nomarkdown}<pre><code>  rpc</code></pre>{:/} | .13 | This is the RPC that is called inside the GUI to produce the report. | POINTER |  | [Remote_Procedure-8994](Remote_Procedure-8994)
**Date Format**{::nomarkdown}<pre><code>  date_format</code></pre>{:/} | .14 | This field determines what kind of format to display date/time fields. | ENUMERATION |  | {::nomarkdown}DATE WITH TIME: <em><strong>T</strong></em><br/>DATE ONLY: <em><strong>D</strong></em>{:/}
**Date Piece**{::nomarkdown}<pre><code>  date_piece</code></pre>{:/} | .15 | This is used on the Cover Sheet to determine which piece the date field<br/>occupies. | NUMERIC |  | 
**Tab Positions**{::nomarkdown}<pre><code>  tab_positions</code></pre>{:/} | .16 | This is the value that will be used for the Tab property for the listbox<br/>associated with this report on the Cover Sheet. | STRING |  | 
**Pieces**{::nomarkdown}<pre><code>  pieces</code></pre>{:/} | .17 | This field is used by the Cover Sheet to determine what pieces of data<br/>to display in the listbox. | STRING |  | 
**Detail Report**{::nomarkdown}<pre><code>  detail_report</code></pre>{:/} | .18 | This field is used to get the details of an item on the cover sheet. | POINTER |  | [Oe_rr_Report-101_24](Oe_rr_Report-101_24)
**Report Tag**{::nomarkdown}<pre><code>  report_tag</code></pre>{:/} | .19 | This is the entry point tag for a report extract. | STRING |  | 
**Report Routine**{::nomarkdown}<pre><code>  report_routine</code></pre>{:/} | .191 | This is the routine associated with the REPORT TAG for report extracts. | STRING |  | 
**Report Component**{::nomarkdown}<pre><code>  report_component</code></pre>{:/} | .192 | This is the report component associated with this report. | POINTER |  | [Health_Summary_Component-142_1](Health_Summary_Component-142_1)
**Param 1**{::nomarkdown}<pre><code>  param_1</code></pre>{:/} | .21 | This is the 1st parameter passed to the RPC, if needed. | STRING |  | 
**Param 2**{::nomarkdown}<pre><code>  param_2</code></pre>{:/} | .22 | This is the 2nd parameter passed to the RPC, if needed. | STRING |  | 
**Heading**{::nomarkdown}<pre><code>  heading</code></pre>{:/} | .23 | This is the heading used on the Cover sheet for the list of items. | STRING |  | 
**Descriptive Text**{::nomarkdown}<pre><code>  descriptive_text</code></pre>{:/} | .24 | This is a more descriptive name than what might be included in the <br/>NAME field. | STRING | REQUIRED | 
**Node**{::nomarkdown}<pre><code>  node</code></pre>{:/} | .25 | This is used by the Cover Sheet routines to define the node in the ^XTMP<br/>global to store the data. | STRING |  | 
**Print Tag**{::nomarkdown}<pre><code>  print_tag</code></pre>{:/} | .26 | This is the entry point tag used when printing reports that do their own<br/>Write statements. | STRING |  | 
**Print Routine**{::nomarkdown}<pre><code>  print_routine</code></pre>{:/} | .27 | This is the entry point routine used when printing reports that do their own<br/>Write statements. | STRING |  | 
**Extract Tag**{::nomarkdown}<pre><code>  extract_tag</code></pre>{:/} | .28 | This is the entry point for the extract routine that pulls the data from<br/>package API's and/or package files. | STRING |  | 
**Extract Routine**{::nomarkdown}<pre><code>  extract_routine</code></pre>{:/} | .29 | This is the extract routine that pulls data from package API's and/or<br/>package files. | STRING |  | 
**Sort Order**{::nomarkdown}<pre><code>  sort_order</code></pre>{:/} | .41 | This field is used when sorting columns of data on at grid within CPRS.<br/>It determines the sort order to be used in a multi-column sort.  The<br/>primary sort column is always the column header clicked on by the user.<br/>If this field has values in the form #:#, then a multi-column sort is<br/>done, using the column numbers identified in this field for the second<br/>and third level sorting. | STRING |  | 
**Maximum Days Back**{::nomarkdown}<pre><code>  maximum_days_back</code></pre>{:/} | .42 | This field restricts the report date range to the maximum value specified. | NUMERIC |  | 
**Fhie Report**{::nomarkdown}<pre><code>  fhie_report</code></pre>{:/} | .43 | This field identifies reports that are available through FHIE.<br/>The item in this field is the code for the report available through<br/>the FHIE server. | STRING |  | 
**Direct**{::nomarkdown}<pre><code>  direct</code></pre>{:/} | .44 | This field allows a report to make a direct remote data call to<br/>a remote site.  Use caution in setting this field to yes.  It has<br/>the effect of disabling CPRS until the remote call is finished, but<br/>also may speed up the query by bypassing taskman latency. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Hdr Report**{::nomarkdown}<pre><code>  hdr_report</code></pre>{:/} | .45 | This field flags reports that are generated from the HDR. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Hdr Routine**{::nomarkdown}<pre><code>  hdr_routine</code></pre>{:/} | .46 | This is the HDR routine that modifies HDR data for CPRS. | STRING |  | 
**Hdr Entry Point**{::nomarkdown}<pre><code>  hdr_entry_point</code></pre>{:/} | .47 | This is the HDR entry point that modifies HDR data for CPRS. | STRING |  | 
**Fhie Data**{::nomarkdown}<pre><code>  fhie_data</code></pre>{:/} | .48 | This field is used to tell CPRS that DOD/FHIE data can be accessed<br/>for this report.  Special code has to be written by CPRS and DOD<br/>for this to happen. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Fhie/remote Data Only**{::nomarkdown}<pre><code>  fhie_remote_data_only</code></pre>{:/} | .49 | This field determines if a report can show local VA data and Remote <br/>data. Enter YES if LOCAL data should be excluded from the report.<br/>Some Department of Defense (DOD) reports don't have a VistA<br/>equivalent (Questionnaires, Histories). An entry of YES would be<br/>appropriate for those kinds of reports. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Disable**{::nomarkdown}<pre><code>  disable</code></pre>{:/} | .491 | This field will disable a report. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Column Headers**{::nomarkdown}<pre><code>  column_headers</code></pre>{:/} | 3 |  | OBJECT |  | [Column_Headers-101_243](#Column_Headers-101_243)
**Item**{::nomarkdown}<pre><code>  item</code></pre>{:/} | 10 |  | OBJECT |  | [Item-101_241](#Item-101_241)

## Sub-Files
### <a name="Column_Headers-101_243"></a>Column Headers (101.243)

<dl>
<dt>ID</dt><dd>Column_Headers-101_243</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Column Headers**{::nomarkdown}<pre><code>  column_headers</code></pre>{:/} | .01 | These are the column headings used on a report in ListView format. | STRING | INDEXED<br/>REQUIRED | 
**Visible**{::nomarkdown}<pre><code>  visible</code></pre>{:/} | .02 | This field determines the visible property of the column. | ENUMERATION |  | {::nomarkdown}YES: <em><strong>0</strong></em><br/>NO: <em><strong>1</strong></em>{:/}
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | .03 | This is the sequence for the column header. | NUMERIC | INDEXED | 
**Type**{::nomarkdown}<pre><code>  type-_04</code></pre>{:/} | .04 | This field identifies columns that contain multiple lines of text. | ENUMERATION |  | {::nomarkdown}SINGLE PIECE VALUE: <em><strong>0</strong></em><br/>WORD PROCESSING: <em><strong>1</strong></em>{:/}
**Include On Detail**{::nomarkdown}<pre><code>  include_on_detail</code></pre>{:/} | .05 | This field is used to determine what data to include in the details of<br/>a report. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Print Length**{::nomarkdown}<pre><code>  print_length</code></pre>{:/} | .06 | This is the field length used when printing this column on a report. | NUMERIC |  | 
**Include On Print**{::nomarkdown}<pre><code>  include_on_print</code></pre>{:/} | .07 | This field determines which columns are included when a printout is<br/>requested. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Print Title**{::nomarkdown}<pre><code>  print_title</code></pre>{:/} | .08 | This field is used when printing this field in lieu of the Column Header. | STRING |  | 
**Data Type**{::nomarkdown}<pre><code>  data_type</code></pre>{:/} | .09 | This is the data type of the column.  It is used when sorting columns.<br/>The default data type is 0 - FREE TEXT.  If no value is entered, it is<br/>assumed to be FREE TEXT. | ENUMERATION |  | {::nomarkdown}DATE/TIME: <em><strong>2</strong></em><br/>FREE TEXT: <em><strong>0</strong></em><br/>NUMERIC: <em><strong>1</strong></em>{:/}
**Width**{::nomarkdown}<pre><code>  width</code></pre>{:/} | .1 | This field is for the column width.  No value needs to be entered because<br/>the value is actually obtained from a User level parameter.  The field<br/>is defined here to reserve the 10 piece of this node so that future<br/>field definitions won't break the RPC used in CPRS to get column properties<br/>where the width is stored in the 10 piece. | NUMERIC |  | 
**Hdr Modifier**{::nomarkdown}<pre><code>  hdr_modifier</code></pre>{:/} | 1 | This is code executed when HDR data needs to be modified.<br/>When this field is executed, the variable ORX will have the value<br/>passed in from the HDR.  If this value needs to be manipulated, set the<br/>new value into ORX.  If the value is ignored (not to be displayed),<br/>then set the value of ORX="-1-" | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Item-101_241"></a>Item (101.241)

<dl>
<dt>ID</dt><dd>Item-101_241</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Item**{::nomarkdown}<pre><code>  item</code></pre>{:/} | .01 | This is used in building a treeview of reports for CPRS GUI. | POINTER | INDEXED<br/>REQUIRED | [Oe_rr_Report-101_24](Oe_rr_Report-101_24)
**Header Text**{::nomarkdown}<pre><code>  header_text</code></pre>{:/} | .02 | This is the header to be used. | STRING |  | 
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | .03 | This is the sequence number for this report. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}