---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV EXCEL EXTRACT 

 property | value 
--- | --- 
 label | DENTV EXCEL EXTRACT
 tag | EXCEL
 routine | [DENTVRP9](http://code.osehra.org/dox/Routine_DENTVRP9_source.html)
 return value type | GLOBAL ARRAY
 description | This rpc will extract data from the history file (228.1) and format itso that the data can be imported into a spreadsheet.  The data will be indelimited format, with the '^' as the delimiter.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SDT | LITERAL | 14 | true | This is the start date/time for the extract.  The date/time must be inFileman internal format. | 
| EDT | LITERAL | 14 | true | This is the end date for the extract.  It must be in internal Filemanformat. | 
| PROV | LITERAL | 20 | true | Optional - if you want to extract only those records for a particularprovider, then pass that provider's ien from file 200. | 
| DFN | LITERAL | 20 | true | Optional - if you wish to extract records for a particular patient, thenpass the ien of that patient. | 
| FLG | LITERAL | 4 | true | Contains the string CFPO or any combination of that. C=complete txns (defaulted for old extract option) P=planned txns F=Findings O=Observed | 
| STN | LITERAL | 10 | true | Contains the external facility ID (500, 500BZ, etc) for which the user wants extracted data.  If this field is null (not sent), then all facilities will be returned. | 