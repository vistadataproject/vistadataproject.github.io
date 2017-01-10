---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR DELIVERY TYPE SUMMARY RPT 

 property | value 
--- | --- 
 label | DSIR DELIVERY TYPE SUMMARY RPT
 tag | DELIVRY
 routine | [DSIROIR2](http://code.osehra.org/dox/Routine_DSIROIR2_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns an array for the Delivery Type Summary Report. The optional date parameters work off of the date closed only.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SDATE | LITERAL | 7 | true | SDATE - Optional - Report start date in Fileman format. | 
| vs:Input_Parameter-8994_02 | EDATE | LITERAL | 7 | true | EDATE - Optional - Report end date in Fileman format. | 
| vs:Input_Parameter-8994_02 | DIVL | LITERAL | 150 | true | DIVL  - Optional - List of selected divisions - NULL means all divisions. | 