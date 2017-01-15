---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRPARM DELETE PARM_PO_SCL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRPARM DELETE PARM_PO_SCL{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will delete entries in files 19620.701 (DSIR FACILITY PARAMETERS), 19620.702 (DSIR ROI PRINT ORDER) or 19620.703 (DSIR SENSITIVE CLINIC) based on the file specified in the second input parameter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN to file specified in FIL parameter - Required{:/} | 
| {::nomarkdown}FIL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Decimal value of the file to delete entry - Required        19620.701 = DSIR FACILITY PARAMETERS        19620.702 = DSIR ROI PRINT ORDER        19620.703 = DSIR SENSITIVE CLINIC{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}