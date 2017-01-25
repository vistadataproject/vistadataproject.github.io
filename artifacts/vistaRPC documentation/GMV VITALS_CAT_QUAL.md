---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV VITALS_CAT_QUAL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV VITALS_CAT_QUAL{:/}
 tag | {::nomarkdown}GETVITAL{:/}
 routine | [GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns all qualifier information for the vital types selected. This remote procedure call is documented in Integration Agreement 4359.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVLIST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A list of vital type abbreviations (FILE 120.51, Field 1) separated byup-arrows (e.g., \HT^WT\ for height and weight). When the value is null,all qualifier information will be returned for all vital types.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}