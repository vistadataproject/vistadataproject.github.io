---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIROI1 DEL1LBL DELETE 1 LABEL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIROI1 DEL1LBL DELETE 1 LABEL{:/}
 tag | {::nomarkdown}DEL1LBL{:/}
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This routine deletes one label from the label file (19620.14.){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Clerk ID is the IEN from file 200 for the requesting clerk.{:/} | 
| {::nomarkdown}RIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}RIEN is the Requestor IEN.  This points to file 19620.12{:/} | 
| {::nomarkdown}AIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}AIEN is the IEN of the address record.  This points at file 19620.92.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}