---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRLTRS GETLTRS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRLTRS GETLTRS{:/}
 tag | {::nomarkdown}GETLTRS{:/}
 routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will return the letter definition from file 19610.16 (DSIR LOCAL LETTERS) or file 19620.15 (DSIR NATIONAL LETTERS) for use by the ROI Plus GUI as needed to be printed or to edit.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number to File 19620.15 (DSIR NATIONAL LETTERS) or 19620.16 (DSIR LOCAL LETTERS) (Required){:/} | 
| {::nomarkdown}LOCAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}File indicator (0 - National [Default], 1 - Local) (Optional){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}