---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIROI1 QUEUELBL QUEUE A LABEL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIROI1 QUEUELBL QUEUE A LABEL{:/}
 tag | {::nomarkdown}QUEUELBL{:/}
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This routine adds a label to an individual clerk's queue for batch printing.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}CIEN is the clerk IEN.  This points at file 200.{:/} | 
| {::nomarkdown}RIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}RIEN is the requestor IEN.  This points to file 19620.12.{:/} | 
| {::nomarkdown}AIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}AIEN is the address IEN.  This points at file 19620.92.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:54 am</p>{:/}