---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRPARM ENPO UPDATE PR ORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRPARM ENPO UPDATE PR ORD{:/}
 tag | {::nomarkdown}ENPO{:/}
 routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to enter/edit the default Print Order of documents released by each facility specified in the DSIR FACILITY PARAMETERS File (#19620.701).  This data is stored in the DSIR ROI PRINT ORDER File (#19620.702).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to the DSIR FACILITY PARAMETERS File (#19620.701) same as INSTITUTION File (#4).{:/} | 
| {::nomarkdown}PRTORD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Print Order IEN or Name if adding a new entry in the DSIR ROI PRINT ORDER File (#19620.702).{:/} | 
| {::nomarkdown}PRSEQ{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Print Order Sequence as specified by the ROI Plus GUI application.{:/} | 
| {::nomarkdown}PRTIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Print Order IEN (Optional - if null a new entry will be created, for edit it is Required)This is the IEN for the entry in file 19620.702{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}