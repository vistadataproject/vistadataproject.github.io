---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV QUALIFIER TABLE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV QUALIFIER TABLE{:/}
 tag | {::nomarkdown}EN1{:/}
 routine | [GMVCAQU](http://code.osehra.org/dox/Routine_GMVCAQU_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Prints a list of categories and qualifiers associated with individualvital types (e.g., blood pressure). Data comes from the GMRV VitalQualifier (#120.52) file and the GMRV Vital Category (#120.53) file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVDATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}150{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A multi-piece variable that identifies the values needed to run the report.   Piece  1: n/a         2: n/a         3: n/a         4: n/a         5: Device name (File 3.5, Field .01)         6: Device internal entry number         7: date/time to print the report (FileMan format)         8: n/a         9: n/a        10: n/a{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}