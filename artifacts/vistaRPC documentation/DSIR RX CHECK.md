---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR RX CHECK 

 property | value 
--- | --- 
 label | DSIR RX CHECK
 tag | RXEN
 routine | [DSIROI9](http://code.osehra.org/dox/Routine_DSIROI9_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will take the data returned from ORQQPS LIST and check the FILL DATE of the PRESCRIPTION to validate the value falls between the date range specified.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | STDT | LITERAL | 7 | true | Start Date - Required (FileMan Date Format) | 
| vs:Input_Parameter-8994_02 | ENDT | LITERAL | 7 | true | End Date - Optional (FileMan Date Format - Default to current day) | 
| vs:Input_Parameter-8994_02 | DATA | LIST | 254 | true | Array as returned from RPC: ORQQPS LIST - Optional | 