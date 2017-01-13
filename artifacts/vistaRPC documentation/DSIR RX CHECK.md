---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR RX CHECK 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIR RX CHECK{:/}
 tag | {::nomarkdown}RXEN{:/}
 routine | [DSIROI9](http://code.osehra.org/dox/Routine_DSIROI9_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will take the data returned from ORQQPS LIST and check the FILL DATE of the PRESCRIPTION to validate the value falls between the date range specified.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Start Date - Required (FileMan Date Format){:/} | 
| {::nomarkdown}ENDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}End Date - Optional (FileMan Date Format - Default to current day){:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}254{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array as returned from RPC: ORQQPS LIST - Optional{:/} | 




 Generated on January 13th 2017, 5:52:13 am