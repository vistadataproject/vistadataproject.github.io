---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV EXCEL EXTRACT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV EXCEL EXTRACT{:/}
 tag | {::nomarkdown}EXCEL{:/}
 routine | [DENTVRP9](http://code.osehra.org/dox/Routine_DENTVRP9_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This rpc will extract data from the history file (228.1) and format itso that the data can be imported into a spreadsheet.  The data will be indelimited format, with the '^' as the delimiter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the start date/time for the extract.  The date/time must be inFileman internal format.{:/} | 
| {::nomarkdown}EDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the end date for the extract.  It must be in internal Filemanformat.{:/} | 
| {::nomarkdown}PROV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional - if you want to extract only those records for a particularprovider, then pass that provider's ien from file 200.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional - if you wish to extract records for a particular patient, thenpass the ien of that patient.{:/} | 
| {::nomarkdown}FLG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the string CFPO or any combination of that. C=complete txns (defaulted for old extract option) P=planned txns F=Findings O=Observed{:/} | 
| {::nomarkdown}STN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the external facility ID (500, 500BZ, etc) for which the user wants extracted data.  If this field is null (not sent), then all facilities will be returned.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}