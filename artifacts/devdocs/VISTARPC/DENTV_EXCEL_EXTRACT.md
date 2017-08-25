---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV EXCEL EXTRACT<br/>
# DENTV EXCEL EXTRACT

This rpc will extract data from the history file (228.1) and format itso that the data can be imported into a spreadsheet.  The data will be indelimited format, with the '^' as the delimiter.

## Properties

Property | Value
--- | ---
Label | EXCEL
MUMPS Implementation | [DENTVRP9](http://code.osehra.org/dox/Routine_DENTVRP9_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SDT | LITERAL | 14 | true | This is the start date/time for the extract.  The date/time must be inFileman internal format.
EDT | LITERAL | 14 | true | This is the end date for the extract.  It must be in internal Filemanformat.
PROV | LITERAL | 20 | true | Optional - if you want to extract only those records for a particularprovider, then pass that provider&#x27;s ien from file 200.
DFN | LITERAL | 20 | true | Optional - if you wish to extract records for a particular patient, thenpass the ien of that patient.
FLG | LITERAL | 4 | true | Contains the string CFPO or any combination of that. C&#x3D;complete txns (defaulted for old extract option) P&#x3D;planned txns F&#x3D;Findings O&#x3D;Observed
STN | LITERAL | 10 | true | Contains the external facility ID (500, 500BZ, etc) for which the user wants extracted data.  If this field is null (not sent), then all facilities will be returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}